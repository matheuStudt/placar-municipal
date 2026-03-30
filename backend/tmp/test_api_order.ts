import fetch from 'node-fetch';

async function test() {
    const res = await fetch('http://localhost:3001/api/campeonatos/7/classificacao?chave=A');
    const data = await res.json();
    
    console.log('--- API RESPONSE ORDER ---');
    data.slice(0, 5).forEach((item, index) => {
        console.log(`${index+1}º: ${item.nome.padEnd(20)} | P: ${item.p} | V: ${item.v} | GS: ${item.gc} | GP: ${item.gp}`);
    });
}

test();
