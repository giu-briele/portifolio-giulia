
document.addEventListener('DOMContentLoaded', function () {
    // Código para a rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Código para validação do formulário
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        this.querySelectorAll('[required]').forEach(function (input) {
            if (!input.value) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if (valid) {
            // Aqui você pode resetar o formulário
            this.reset();
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});

