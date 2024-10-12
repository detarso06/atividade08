document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;
    const comments = document.getElementById('comments').value;

    // Validação dos campos
    if (!name || !email || !password) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibe os dados do formulário
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>Dados Enviados:</h2>
        <p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Senha: ${password}</p>
        <p>Gênero: ${gender}</p>
        <p>País: ${country}</p>
        <p>Comentários: ${comments}</p>
    `;

    // Altera o conteúdo do h1
    document.querySelector('h1').innerText = "Formulário Enviado com Sucesso!";

    // Muda o estilo do formulário
    document.getElementById('myForm').classList.add('success');
});
