async function testLogin() {
    try {
        const res = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'admin', senha: '123' })
        });
        const data = await res.json();
        console.log("Status:", res.status);
        console.log("Resposta:", JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Erro no fetch:", e.message);
    }
}

testLogin();
