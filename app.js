
// Navegación
function irInicio() { window.location.href = "ProyectoWeb.html"; }
function irJuegos() { window.location.href = "Juegos.html"; }
function irPerfil() { window.location.href = "Perfil.html"; }
function irIniciarSesion() { window.location.href = "IniciarSesion.html"; }
function irRegistro() { window.location.href = "Registro.html"; }
function irCerrarSesion() {
  alert("Sesión cerrada");
  window.location.href = "ProyectoWeb.html";
}

// Mostrar detalle del juego
function abrirDetalle(nombre) {
  const panel = document.getElementById('panelDetalle');
  document.getElementById('tituloDetalle').innerText = nombre;
  document.getElementById('generoDetalle').innerText = 'Género  1 jugador';
  document.getElementById('descripcionDetalle').innerText = 'Descripción breve de ' + nombre + '. Controles / requisitos.';
  document.getElementById('miniaturaDetalle').innerText = nombre.charAt(0);
  panel.classList.add('activo');
}

// Cerrar detalle
function cerrarDetalle() {
  document.getElementById('panelDetalle').classList.remove('activo');
}

// Filtrar lista
function filtrarLista() {
  const textoBusqueda = document.getElementById('entradaBusqueda').value.toLowerCase();
  const elementos = document.querySelectorAll('#listaJuegosContenedor .elemento-lista');
  elementos.forEach(el => {
    const titulo = (el.querySelector('strong') || { innerText: '' }).innerText.toLowerCase();
    el.style.display = titulo.includes(textoBusqueda) ? '' : 'none';
  });
}

