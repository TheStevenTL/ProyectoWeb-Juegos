// Comunidad.js 2025

// Foros sobre juegos 2025
const foros2025 = [
    {
        id: 1,
        nombre: "GTA VI 2025",
        descripcion: "Todo sobre el próximo GTA. Fecha, tráilers, rumores.",
        temas: 1245,
        mensajes: 89234,
        icono: "gamepad"
    },
    {
        id: 2,
        nombre: "RPGs 2025",
        descripcion: "The Elder Scrolls VI, Dragon Age, Avowed y más.",
        temas: 856,
        mensajes: 4523,
        icono: "dragon"
    },
    {
        id: 3,
        nombre: "Lanzamientos 2025",
        descripcion: "Calendario de salidas. ¿Qué juega cada mes?",
        temas: 542,
        mensajes: 3214,
        icono: "calendar"
    },
    {
        id: 4,
        nombre: "Especificaciones 2025",
        descripcion: "¿Qué PC/consola necesito para los juegos 2025?",
        temas: 1523,
        mensajes: 7892,
        icono: "microchip"
    }
];

// Usuarios jugando ahora (juegos 2025)
const usuariosJugando = [
    { nombre: "crisvk4", avatar: "CP", juego: "GTA VI Beta" },
    { nombre: "Marcoyoxico", avatar: "MY", juego: "Elder Scrolls VI Test" },
    { nombre: "Naranja Camil", avatar: "NC", juego: "COD Black Ops 7" },
    { nombre: "Pedro2014", avatar: "SG", juego: "FIFA 25" },
    { nombre: "Gael11", avatar: "G1", juego: "Star Wars Eclipse" },
    { nombre: "Marvelistasupremo", avatar: "MS", juego: "Marvel's Wolverine" }
];

// Eventos gaming 2025
const eventos2025 = [
    {
        nombre: "E3 2025 - Lanzamientos",
        fecha: "Junio 2025",
        descripcion: "Presentación oficial de todos los juegos 2025",
        participantes: 500
    },
    {
        nombre: "Torneo GTA VI Online",
        fecha: "Diciembre 2025",
        descripcion: "Primer torneo del modo online de GTA VI",
        participantes: 250
    },
    {
        nombre: "Beta TES VI",
        fecha: "Octubre 2025",
        descripcion: "Acceso anticipado para miembros de la comunidad",
        participantes: 100
    }
];

// Cargar foros 2025
function cargarForos() {
    const contenedor = document.getElementById('listaForos');
    if (!contenedor) return;
    
    contenedor.innerHTML = foros2025.map(foro => `
        <div class="foro-card">
            <div class="icono-foro">
                <i class="fas fa-${foro.icono}"></i>
            </div>
            <h3>${foro.nombre}</h3>
            <p>${foro.descripcion}</p>
            <div class="foro-estadisticas">
                <span>${foro.temas} temas</span>
                <span>${foro.mensajes} mensajes</span>
            </div>
        </div>
    `).join('');
}

// Cargar usuarios jugando ahora
function cargarUsuariosOnline() {
    const contenedor = document.getElementById('usuariosOnline');
    if (!contenedor) return;
    
    contenedor.innerHTML = usuariosJugando.map(usuario => `
        <div class="usuario-card">
            <div class="avatar">${usuario.avatar}</div>
            <div>
                <div>${usuario.nombre}</div>
                <div style="font-size: 0.8rem; color: #ff4655;">▶ ${usuario.juego}</div>
            </div>
        </div>
    `).join('');
}

// Cargar eventos 2025
function cargarEventos() {
    const contenedor = document.getElementById('listaEventos');
    if (!contenedor) return;
    
    contenedor.innerHTML = eventos2025.map(evento => `
        <div class="evento-card">
            <div class="fecha-evento">${evento.fecha}</div>
            <h3>${evento.nombre}</h3>
            <p>${evento.descripcion}</p>
            <div style="color: #aaa; font-size: 0.9rem;">
                <i class="fas fa-users"></i> ${evento.participantes} participantes
            </div>
        </div>
    `).join('');
}

// Publicar hilo 
function configurarPublicarHilo() {
    const btnPublicar = document.getElementById('publicarHilo');
    
    if (btnPublicar) {
        btnPublicar.addEventListener('click', () => {
            const titulo = document.getElementById('tituloHilo').value;
            const contenido = document.getElementById('contenidoHilo').value;
            
            if (!titulo || !contenido) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            alert(`¡Tema publicado en foro 2025!\n\n"${titulo}"\n\nTu opinión se ha compartido con la comunidad.`);
            
            // Limpiar campos
            document.getElementById('tituloHilo').value = '';
            document.getElementById('contenidoHilo').value = '';
        });
    }
}

// Sistema de login
function configurarLogin() {
    const btnLogin = document.getElementById('btnLogin');
    const modalLogin = document.getElementById('modalLogin');
    const modalRegistro = document.getElementById('modalRegistro');
    const cerrarModal = document.getElementById('cerrarModal');
    const cerrarRegistro = document.getElementById('cerrarRegistro');
    const registroLink = document.getElementById('registro');
    const iniciarSesionLink = document.getElementById('iniciarSesion');
    
    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            modalLogin.style.display = 'flex';
        });
    }
    
    if (cerrarModal) {
        cerrarModal.addEventListener('click', () => {
            modalLogin.style.display = 'none';
        });
    }
    
    if (cerrarRegistro) {
        cerrarRegistro.addEventListener('click', () => {
            modalRegistro.style.display = 'none';
        });
    }
    
    if (registroLink) {
        registroLink.addEventListener('click', (e) => {
            e.preventDefault();
            modalLogin.style.display = 'none';
            modalRegistro.style.display = 'flex';
        });
    }
    
    if (iniciarSesionLink) {
        iniciarSesionLink.addEventListener('click', (e) => {
            e.preventDefault();
            modalRegistro.style.display = 'none';
            modalLogin.style.display = 'flex';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modalLogin) modalLogin.style.display = 'none';
        if (e.target === modalRegistro) modalRegistro.style.display = 'none';
    });
    
    const formLogin = document.getElementById('formLogin');
    const formRegistro = document.getElementById('formRegistro');
    
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Bienvenido a la comunidad 2025!');
            modalLogin.style.display = 'none';
            if (btnLogin) btnLogin.innerHTML = '<i class="fas fa-user-check"></i> Mi Cuenta';
        });
    }
    
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Cuenta creada para la comunidad 2025!');
            modalRegistro.style.display = 'none';
            if (btnLogin) btnLogin.innerHTML = '<i class="fas fa-user-check"></i> Mi Cuenta';
        });
    }
}

// Menú hamburguesa
function configurarMenu() {
    const btnMenu = document.getElementById('btnMenu');
    const menu = document.querySelector('.menu');
    
    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('mostrar');
        });
        
        document.querySelectorAll('.menu a').forEach(enlace => {
            enlace.addEventListener('click', () => {
                menu.classList.remove('mostrar');
            });
        });
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarForos();
    cargarUsuariosOnline();
    cargarEventos();
    configurarPublicarHilo();
    configurarLogin();
    configurarMenu();
    
    console.log('Comunidad 2025 cargada correctamente!');
});