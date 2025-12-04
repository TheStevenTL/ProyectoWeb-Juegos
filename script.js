function abrirDetalle(nombre) {
  const panel = document.getElementById('panelDetalle');

  document.getElementById('tituloDetalle').innerText = nombre;
  document.getElementById('generoDetalle').innerText = 'Género • 1 jugador';
  document.getElementById('descripcionDetalle').innerText = 'Descripción breve de ' + nombre + '. Controles / requisitos.';
  document.getElementById('miniaturaDetalle').innerText = nombre.charAt(0);

  panel.classList.add('activo');
}

function cerrarDetalle() {
  document.getElementById('panelDetalle').classList.remove('activo');
}

function filtrarLista() {
  const textoBusqueda = document.getElementById('buscadorEntrada').value.toLowerCase();
  const elementos = document.querySelectorAll('#listaJuegos .item-lista');

  elementos.forEach(el => {
    const titulo = (el.querySelector('strong') || { innerText: '' }).innerText.toLowerCase();
    el.style.display = titulo.includes(textoBusqueda) ? '' : 'none';
  });
}

function irCategoria(pagina) {
  window.location.href = pagina;
}
