const links = document.querySelectorAll('.navegacao a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('selecionado')); // remove de todos
    this.classList.add('selecionado'); // adiciona no clicado
  });
});
