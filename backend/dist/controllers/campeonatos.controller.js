import { prisma } from '../prisma.js';
export const getCampeonatos = async (req, res) => {
    const prefeituraId = req.query.prefeituraId ? parseInt(String(req.query.prefeituraId)) : undefined;
    try {
        const camps = await prisma.campeonato.findMany({
            where: prefeituraId ? { prefeituraId } : {},
            include: { rodadas: { include: { jogos: true } } }
        });
        const campsDynamic = camps.map(c => {
            let statusDin = 'Inscrições Abertas';
            const todosJogos = c.rodadas.flatMap(r => r.jogos);
            if (todosJogos.length > 0) {
                statusDin = 'Em Andamento';
                const rodadaFinal = c.rodadas.find(r => r.nome?.toLowerCase().includes('final') && r.tipo === 'MATA_MATA' && !r.nome?.toLowerCase().includes('semi') && !r.nome?.toLowerCase().includes('quarta'));
                if (rodadaFinal && rodadaFinal.jogos.length > 0 && rodadaFinal.jogos.every(j => j.status === 'Finalizado')) {
                    statusDin = 'Finalizado';
                }
                else if (c.formato === 'Pontos Corridos' && todosJogos.every(j => j.status === 'Finalizado')) {
                    statusDin = 'Finalizado';
                }
            }
            return {
                ...c,
                status: statusDin,
                rodadas: undefined
            };
        });
        res.json(campsDynamic);
    }
    catch (e) {
        console.error("[DEBUG] Erro GET campeonatos:", e);
        res.status(500).json({ error: "Erro ao buscar campeonatos" });
    }
};
export const createCampeonato = async (req, res) => {
    const { nome, ano, formato, prefeituraId, descricao, dataInicio, dataFim, classificadosPorChave } = req.body;
    try {
        const novo = await prisma.campeonato.create({
            data: {
                nome,
                ano: parseInt(String(ano)) || new Date().getFullYear(),
                formato,
                descricao,
                dataInicio: dataInicio || "2024-01-01",
                dataFim: dataFim || "2024-12-31",
                prefeituraId: parseInt(String(prefeituraId)) || 1,
                classificadosPorChave: classificadosPorChave ? parseInt(String(classificadosPorChave)) : 4
            }
        });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao criar campeonato" });
    }
};
export const updateCampeonato = async (req, res) => {
    const id = parseInt(String(req.params.id));
    const { nome, ano, formato, descricao, dataInicio, dataFim, status, classificadosPorChave } = req.body;
    try {
        const atualizado = await prisma.campeonato.update({
            where: { id },
            data: {
                nome,
                ano: parseInt(String(ano)),
                formato,
                descricao,
                dataInicio,
                dataFim,
                status,
                classificadosPorChave: classificadosPorChave ? parseInt(String(classificadosPorChave)) : undefined
            }
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(404).json({ error: "Não encontrado" });
    }
};
export const deleteCampeonato = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        await prisma.participacao.deleteMany({ where: { campeonatoId: id } });
        await prisma.rodada.deleteMany({ where: { campeonatoId: id } });
        await prisma.campeonato.delete({ where: { id } });
        res.status(204).send();
    }
    catch {
        res.status(404).send();
    }
};
export const getClassificacao = async (req, res) => {
    const campeonatoId = parseInt(String(req.params.id));
    const { chave } = req.query;
    try {
        const participacoes = await prisma.participacao.findMany({
            where: {
                campeonatoId,
                ...(chave ? { chave: String(chave) } : {})
            },
            include: { equipe: true }
        });
        const jogos = await prisma.jogo.findMany({
            where: {
                rodada: {
                    campeonatoId,
                    tipo: 'GRUPO'
                },
                status: 'Finalizado'
            }
        });
        const tabela = {};
        participacoes.forEach(p => {
            if (p.equipe) {
                tabela[p.equipe.id] = { id: p.equipe.id, nome: p.equipe.nome, p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 };
            }
        });
        jogos.forEach(j => {
            const mId = j.mandanteId;
            const vId = j.visitanteId;
            const gM = j.golsMandante || 0;
            const gV = j.golsVisitante || 0;
            if (mId && tabela[mId]) {
                const item = tabela[mId];
                item.j++;
                item.gp += gM;
                item.gc += gV;
                if (gM > gV) {
                    item.p += 3;
                    item.v++;
                }
                else if (gM < gV) {
                    item.d++;
                }
                else {
                    item.p += 1;
                    item.e++;
                }
            }
            if (vId && tabela[vId]) {
                const item = tabela[vId];
                item.j++;
                item.gp += gV;
                item.gc += gM;
                if (gV > gM) {
                    item.p += 3;
                    item.v++;
                }
                else if (gV < gM) {
                    item.d++;
                }
                else {
                    item.p += 1;
                    item.e++;
                }
            }
        });
        const resultado = Object.values(tabela).map((item) => {
            item.sg = item.gp - item.gc;
            return item;
        });
        resultado.sort((a, b) => {
            if (b.p !== a.p)
                return b.p - a.p;
            if (b.v !== a.v)
                return b.v - a.v;
            if (a.gc !== b.gc)
                return a.gc - b.gc;
            return b.gp - a.gp;
        });
        res.json(resultado);
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao gerar classificação" });
    }
};
export const gerarChaveamento = async (req, res) => {
    const campeonatoId = parseInt(String(req.params.id));
    try {
        const participacoes = await prisma.participacao.findMany({
            where: { campeonatoId },
            include: { equipe: true }
        });
        const jogosGrupo = await prisma.jogo.findMany({
            where: { rodada: { campeonatoId, tipo: 'GRUPO' }, status: 'Finalizado' }
        });
        const chavesUnicas = [...new Set(participacoes.map(p => p.chave))];
        const rankingPorChave = {};
        for (const chave of chavesUnicas) {
            const equipesChave = participacoes.filter(p => p.chave === chave);
            const tabela = {};
            equipesChave.forEach(p => {
                if (p.equipe) {
                    tabela[p.equipe.id] = { id: p.equipe.id, nome: p.equipe.nome, p: 0, v: 0, sg: 0, gp: 0, gc: 0 };
                }
            });
            jogosGrupo.forEach(j => {
                const mId = j.mandanteId;
                const vId = j.visitanteId;
                const gM = j.golsMandante || 0;
                const gV = j.golsVisitante || 0;
                if (mId && tabela[mId]) {
                    tabela[mId].gp += gM;
                    tabela[mId].gc += gV;
                    if (gM > gV) {
                        tabela[mId].p += 3;
                        tabela[mId].v++;
                    }
                    else if (gM < gV) { }
                    else {
                        tabela[mId].p += 1;
                    }
                }
                if (vId && tabela[vId]) {
                    tabela[vId].gp += gV;
                    tabela[vId].gc += gM;
                    if (gV > gM) {
                        tabela[vId].p += 3;
                        tabela[vId].v++;
                    }
                    else if (gV < gM) { }
                    else {
                        tabela[vId].p += 1;
                    }
                }
            });
            const resultado = Object.values(tabela).map((item) => { item.sg = item.gp - item.gc; return item; });
            resultado.sort((a, b) => (b.p - a.p) || (b.v - a.v) || (a.gc - b.gc) || (b.gp - a.gp));
            if (chave !== null) {
                rankingPorChave[chave] = resultado;
            }
            else {
                rankingPorChave['GERAL'] = resultado;
            }
        }
        const jogosMataMata = await prisma.jogo.findMany({
            where: { rodada: { campeonatoId, tipo: 'MATA_MATA' } }
        });
        let atualizados = 0;
        const chavesOrdenadas = Object.keys(rankingPorChave).sort((a, b) => b.length - a.length);
        const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        for (const jogo of jogosMataMata) {
            let updateData = {};
            const processPlaceholder = (placeholder) => {
                if (!placeholder)
                    return null;
                const matchVencedor = placeholder.match(/Vencedor.*?Jogo\s*(\d+)/i);
                if (matchVencedor) {
                    const jogoRefNumero = parseInt(matchVencedor[1]);
                    const jogoRef = jogosMataMata.find(j => j.numero === jogoRefNumero);
                    if (jogoRef && jogoRef.status === 'Finalizado') {
                        const gM = jogoRef.golsMandante || 0;
                        const gV = jogoRef.golsVisitante || 0;
                        if (gM > gV)
                            return { id: jogoRef.mandanteId, nome: jogoRef.mandanteNome };
                        if (gV > gM)
                            return { id: jogoRef.visitanteId, nome: jogoRef.visitanteNome };
                    }
                    return null;
                }
                const matchPerdedor = placeholder.match(/Perdedor.*?Jogo\s*(\d+)/i);
                if (matchPerdedor) {
                    const jogoRefNumero = parseInt(matchPerdedor[1]);
                    const jogoRef = jogosMataMata.find(j => j.numero === jogoRefNumero);
                    if (jogoRef && jogoRef.status === 'Finalizado') {
                        const gM = jogoRef.golsMandante || 0;
                        const gV = jogoRef.golsVisitante || 0;
                        if (gM < gV)
                            return { id: jogoRef.mandanteId, nome: jogoRef.mandanteNome };
                        if (gV < gM)
                            return { id: jogoRef.visitanteId, nome: jogoRef.visitanteNome };
                    }
                    return null;
                }
                const matchPos = placeholder.match(/(\d+)º/);
                if (!matchPos)
                    return null;
                const posicao = parseInt(matchPos[1]) - 1;
                for (const ch of chavesOrdenadas) {
                    if (ch === 'GERAL')
                        continue;
                    const regex = new RegExp('(^|\\s|º|[^a-zA-Z0-9])' + escapeRegex(ch) + '($|\\s|[^a-zA-Z0-9])', 'i');
                    if (regex.test(placeholder) || placeholder.toUpperCase().includes(`CHAVE ${ch.toUpperCase()}`) || placeholder.toUpperCase().includes(`GRUPO ${ch.toUpperCase()}`)) {
                        if (rankingPorChave[ch] && rankingPorChave[ch][posicao]) {
                            return rankingPorChave[ch][posicao];
                        }
                    }
                }
                if (rankingPorChave['GERAL'] && rankingPorChave['GERAL'][posicao]) {
                    return rankingPorChave['GERAL'][posicao];
                }
                return null;
            };
            if (jogo.mandantePlaceholder && !jogo.mandanteId) {
                const classificado = processPlaceholder(jogo.mandantePlaceholder);
                if (classificado) {
                    updateData.mandanteId = classificado.id;
                    updateData.mandanteNome = classificado.nome;
                }
            }
            if (jogo.visitantePlaceholder && !jogo.visitanteId) {
                const classificado = processPlaceholder(jogo.visitantePlaceholder);
                if (classificado) {
                    updateData.visitanteId = classificado.id;
                    updateData.visitanteNome = classificado.nome;
                }
            }
            if (Object.keys(updateData).length > 0) {
                await prisma.jogo.update({
                    where: { id: jogo.id },
                    data: updateData
                });
                atualizados++;
            }
        }
        res.json({ message: "Chaveamento gerado com sucesso", jogosAtualizados: atualizados });
    }
    catch (e) {
        console.error("[DEBUG] Erro gerar chaveamento:", e);
        res.status(500).json({ error: "Erro ao gerar chaveamento" });
    }
};
export const getEstatisticas = async (req, res) => {
    const id = parseInt(String(req.params.id));
    try {
        const eventos = await prisma.evento.findMany({
            where: { jogo: { rodada: { campeonatoId: id } } },
            include: {
                atleta: { include: { vinculos: { include: { equipe: true } } } }
            }
        });
        console.log(`[DEBUG] Query Eventos retornou: ${eventos.length} registros`);
        const artilhariaMap = {};
        const disciplinaMap = {};
        eventos.forEach(e => {
            const atletaId = e.atletaId;
            const nomeAtleta = e.atleta.nome;
            const vinculo = e.atleta.vinculos[0];
            const nomeEquipe = vinculo?.equipe?.nome || "Time";
            if (e.gols > 0) {
                if (!artilhariaMap[atletaId])
                    artilhariaMap[atletaId] = { nome: nomeAtleta, equipeNome: nomeEquipe, gols: 0 };
                artilhariaMap[atletaId].gols += e.gols;
            }
            if (e.am > 0 || e.vm > 0) {
                if (!disciplinaMap[nomeEquipe])
                    disciplinaMap[nomeEquipe] = { nome: nomeEquipe, amarelos: 0, vermelhos: 0, peso: 0 };
                disciplinaMap[nomeEquipe].amarelos += e.am;
                disciplinaMap[nomeEquipe].vermelhos += e.vm;
                disciplinaMap[nomeEquipe].peso += (e.am * 1) + (e.vm * 3);
            }
        });
        const defesaMap = {};
        const jogosConcluidos = await prisma.jogo.findMany({
            where: { rodada: { campeonatoId: id }, status: 'Finalizado' }
        });
        jogosConcluidos.forEach(j => {
            if (j.mandanteId !== null) {
                const mId = j.mandanteId;
                if (!defesaMap[mId])
                    defesaMap[mId] = { nome: j.mandanteNome, golsSofridos: 0, jogos: 0 };
                defesaMap[mId].golsSofridos += j.golsVisitante;
                defesaMap[mId].jogos++;
                if (!disciplinaMap[j.mandanteNome])
                    disciplinaMap[j.mandanteNome] = { nome: j.mandanteNome, amarelos: 0, vermelhos: 0, peso: 0 };
            }
            if (j.visitanteId !== null) {
                const vId = j.visitanteId;
                if (!defesaMap[vId])
                    defesaMap[vId] = { nome: j.visitanteNome, golsSofridos: 0, jogos: 0 };
                defesaMap[vId].golsSofridos += j.golsMandante;
                defesaMap[vId].jogos++;
                if (!disciplinaMap[j.visitanteNome])
                    disciplinaMap[j.visitanteNome] = { nome: j.visitanteNome, amarelos: 0, vermelhos: 0, peso: 0 };
            }
        });
        const artilharia = Object.values(artilhariaMap).sort((a, b) => b.gols - a.gols);
        const disciplina = Object.values(disciplinaMap).sort((a, b) => a.peso - b.peso);
        const defesa = Object.values(defesaMap).map((d) => ({
            ...d,
            media: d.jogos > 0 ? (d.golsSofridos / d.jogos).toFixed(2) : "0.00"
        })).sort((a, b) => Number(a.media) - Number(b.media) || a.golsSofridos - b.golsSofridos);
        console.log(`[API STATS] Enviando ${artilharia.length} registros de artilharia para o camp ${id}`);
        res.json({ artilharia, disciplina, defesa });
    }
    catch (e) {
        res.status(500).json({ error: "Erro ao gerar estatísticas" });
    }
};
