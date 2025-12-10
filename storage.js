
const StorageManager = {
    // Guardar usuario registrado
    guardarUsuario: function(nombre, email) {
        const usuario = {
            nombre: nombre,
            email: email,
            registrado: true,
            fechaRegistro: new Date().toISOString()
        };
        localStorage.setItem('wikigames_usuario', JSON.stringify(usuario));
        return usuario;
    },

    // Obtener usuario actual
    obtenerUsuario: function() {
        const usuarioStr = localStorage.getItem('wikigames_usuario');
        return usuarioStr ? JSON.parse(usuarioStr) : null;
    },

    // Verificar si hay usuario registrado
    estaRegistrado: function() {
        const usuario = this.obtenerUsuario();
        return usuario && usuario.registrado;
    },

    // Cerrar sesión
    cerrarSesion: function() {
        localStorage.removeItem('wikigames_usuario');
        location.reload(); // Recargar para actualizar interfaz
    }
};

// Función para actualizar el botón de usuario
function actualizarBotonUsuario() {
    const btnLogin = document.getElementById('btnLogin');
    const usuario = StorageManager.obtenerUsuario();
    
    if (btnLogin && usuario) {
        btnLogin.innerHTML = `<i class="fas fa-user-check"></i> ${usuario.nombre}`;
        btnLogin.classList.add('logueado');
        btnLogin.onclick = null; // Quitar funcionalidad de login
        btnLogin.style.cursor = 'default';
        
        // Agregar opción para cerrar sesión (opcional)
        btnLogin.addEventListener('click', () => {
            if (confirm(`¿Cerrar sesión de ${usuario.nombre}?`)) {
                StorageManager.cerrarSesion();
            }
        });
    }
}

// Verificar usuario al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarBotonUsuario();
});