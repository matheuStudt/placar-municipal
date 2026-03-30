async function testLogin(email: string, senha: string) {
    const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    });
    const data = await res.json();
    console.log(`[${res.status}] ${email}:`, JSON.stringify(data));
}

await testLogin('admin@admin.com', 'admin');
await testLogin('balneario@admin.com', '123');
await testLogin('admin', '123');
