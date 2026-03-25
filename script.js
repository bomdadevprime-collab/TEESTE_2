// Menu responsivo
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Botão Hero
function mostrarAlerta() {
    Swal.fire({
        title: 'Parabéns!',
        text: 'Você clicou no botão! 🚀',
        icon: 'success',
        confirmButtonText: 'Fechar'
    });
}

// Formulário de contato
const form = document.getElementById('contact-form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        Swal.fire({
            title:'Mensagem enviada!',
            text:'Obrigado por entrar em contato, retornaremos em breve.',
            icon:'success',
            confirmButtonText:'Fechar'
        });
        form.reset();
    });
}