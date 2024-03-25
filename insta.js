const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Seguindo perfil');
  // Adicione aqui a lógica para seguir o perfil
});
const buttonCurtir = document.getElementById('curtir-button');
const coracaoIcon = document.getElementById('coracao-icon');
let curtido = false;

buttonCurtir.addEventListener('click', () => {
  if (!curtido) {
    coracaoIcon.style.display = 'inline';
    curtido = true;
  } else {
    coracaoIcon.style.display = 'none';
    curtido = false;
  }
});
