// Função de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio imediato do formulário

    // Obtendo os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validação simples para campos vazios
    if (name === '' || email === '' || phone === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de email básico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação de telefone básico (exemplo para números brasileiros)
    const phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(phone)) {
        alert('Por favor, insira um telefone válido com 10 ou 11 dígitos.');
        return;
    }

    // Simulando o envio (você pode implementar o envio real aqui)
    alert('Consulta agendada com sucesso! Entraremos em contato em breve.');

    // Limpar o formulário
    document.getElementById('contact-form').reset();
});
