const barraPesquisa = document.getElementById('search-bar');
let temporizador = null;

barraPesquisa.addEventListener('input', function() {
  // Remove a classe "fino" (se existir)
  barraPesquisa.classList.remove('fino');

  // Define um temporizador para adicionar a classe "fino"
  temporizador = setTimeout(function() {
    barraPesquisa.classList.add('fino');
  }, 500); // Atraso de meio segundo (ajuste conforme necessário)
});

// Cancela o temporizador quando o usuário para de digitar
barraPesquisa.addEventListener('blur', function() {
  clearTimeout(temporizador);
  barraPesquisa.classList.remove('fino');
});
