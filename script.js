const juegos2025 = [
    {
        id: 1,
        nombre: "GTA VI",
        imagen: "images/gta6.jpg",
        descripcion: "La nueva entrega de Rockstar. Regreso a Vice City con gráficos de nueva generación.",
        rating: 4.9,
        fecha: "Q4 2025",
        categoria: "accion"
    },
    {
        id: 2,
        nombre: "The Elder Scrolls VI",
        imagen: "images/elder-scrolls.jpg",
        descripcion: "Nuevo RPG de mundo abierto de Bethesda. Continúa la legendaria saga.",
        rating: 4.8,
        fecha: "2025-2026",
        categoria: "rpg"
    },
    {
        id: 3,
        nombre: "Star Wars: Eclipse",
        imagen: "images/star-wars-eclipse.jpg",
        descripcion: "Aventura narrativa en la Alta República. Desarrollado por Quantic Dream.",
        rating: 4.7,
        fecha: "2025",
        categoria: "aventura"
    },
    {
        id: 4,
        nombre: "Fable (2025)",
        imagen: "images/Fable.jpg",
        descripcion: "Reinicio de la serie de fantasía. Humor británico y mundo vivo.",
        rating: 4.6,
        fecha: "2025",
        categoria: "rpg"
    },
    {
        id: 5,
        nombre: "Marvel's Wolverine",
        imagen: "images/marvelswolverine.jpg",
        descripcion: "Juego en solitario del mutante. Brutal y visceral por Insomniac.",
        rating: 4.8,
        fecha: "2025",
        categoria: "accion"
    },
    {
        id: 6,
        nombre: "Expedition 33",
        imagen: "images/expedition33.jpg",
        descripcion: "RPG basado en turnos de vanguardia con mecánica única en tiempo real",
        rating: 4.7,
        fecha: "2025",
        categoria: "rpg"
    },
    {
        id: 7,
        nombre: "Avowed",
        imagen: "images/Avowed.jpg",
        descripcion: "RPG de primera persona en el universo de Pillars of Eternity.",
        rating: 4.5,
        fecha: "2025",
        categoria: "rpg"
    },
    {
        id: 8,
        nombre: "FIFA 25",
        imagen: "images/Fifa2025.jpg",
        descripcion: "Nueva edición del simulador de fútbol con mejoras en física.",
        rating: 4.3,
        fecha: "Sept 2025",
        categoria: "deportes"
    }
];

// NOTICIAS 2025
const noticias2025 = [
    {
        titulo: "GTA VI confirma fecha exacta de lanzamiento",
        contenido: "Rockstar anuncia oficialmente que GTA VI llegará en diciembre 2025.",
        fecha: "15 Ene 2025",
        fuente: "Rockstar News"
    },
    {
        titulo: "Xbox Series X Pro anunciado para 2025",
        contenido: "Nueva consola de Microsoft con potencia aumentada para juegos 2025.",
        fecha: "12 Ene 2025",
        fuente: "Xbox Direct"
    },
    {
        titulo: "Sony revela PlayStation VR2 para 2025",
        contenido: "Nuevo dispositivo de realidad virtual con 4K por ojo.",
        fecha: "10 Ene 2025",
        fuente: "PlayStation Blog"
    }
];

// Cargar juegos destacados
function cargarJuegosDestacados() {
    const contenedor = document.getElementById('juegosDestacados');
    if (!contenedor) return;
    
    // Tomar solo 6 juegos para la página principal
    const destacados = juegos2025.slice(0, 8);
    
    contenedor.innerHTML = destacados.map(juego => `
        <div class="juego-card">
            <img src="${juego.imagen}" alt="${juego.nombre}" class="juego-img">
            <div class="juego-info">
                <h3>${juego.nombre}</h3>
                <p>${juego.descripcion}</p>
                <div class="rating">★ ${juego.rating} | ${juego.fecha}</div>
            </div>
        </div>
    `).join('');
}

// Cargar noticias
function cargarNoticias() {
    const contenedor = document.getElementById('noticias');
    if (!contenedor) return;
    
    contenedor.innerHTML = noticias2025.map(noticia => `
        <div class="noticia-card">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.contenido}</p>
            <span>${noticia.fecha} - ${noticia.fuente}</span>
        </div>
    `).join('');
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
    
    // Abrir modal login
    btnLogin.addEventListener('click', () => {
        modalLogin.style.display = 'flex';
    });
    
    // Cerrar modales
    cerrarModal.addEventListener('click', () => {
        modalLogin.style.display = 'none';
    });
    
    cerrarRegistro.addEventListener('click', () => {
        modalRegistro.style.display = 'none';
    });
    
    // Cambiar entre login y registro
    registroLink.addEventListener('click', (e) => {
        e.preventDefault();
        modalLogin.style.display = 'none';
        modalRegistro.style.display = 'flex';
    });
    
    iniciarSesionLink.addEventListener('click', (e) => {
        e.preventDefault();
        modalRegistro.style.display = 'none';
        modalLogin.style.display = 'flex';
    });
    
    // Cerrar al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modalLogin) {
            modalLogin.style.display = 'none';
        }
        if (e.target === modalRegistro) {
            modalRegistro.style.display = 'none';
        }
    });
    
    // Formularios
    document.getElementById('formLogin').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Bienvenido a WikiJuegos 2025!');
        modalLogin.style.display = 'none';
        btnLogin.innerHTML = '<i class="fas fa-user-check"></i> Mi Cuenta';
    });
    
    document.getElementById('formRegistro').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Cuenta creada! Únete a la comunidad 2025.');
        modalRegistro.style.display = 'none';
        btnLogin.innerHTML = '<i class="fas fa-user-check"></i> Mi Cuenta';
    });
}

// Menú hamburguesa
function configurarMenu() {
    const btnMenu = document.getElementById('btnMenu');
    const menu = document.querySelector('.menu');
    
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
    });
    
    document.querySelectorAll('.menu a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            menu.classList.remove('mostrar');
        });
    });
}

// Búsqueda
function configurarBusqueda() {
    const btnBuscar = document.getElementById('btnBuscar');
    const inputBuscar = document.getElementById('buscarJuego');
    
    btnBuscar.addEventListener('click', () => {
        const termino = inputBuscar.value.trim();
        if (termino) {
            const resultados = juegos2025.filter(juego => 
                juego.nombre.toLowerCase().includes(termino.toLowerCase())
            );
            
            if (resultados.length > 0) {
                alert(`Juegos 2025 encontrados:\n${resultados.map(j => `• ${j.nombre}`).join('\n')}`);
            } else {
                alert(`No hay juegos 2025 con "${termino}". Prueba con otro nombre.`);
            }
            inputBuscar.value = '';
        }
    });
    
    inputBuscar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btnBuscar.click();
        }
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarJuegosDestacados();
    cargarNoticias();
    configurarLogin();
    configurarMenu();
    configurarBusqueda();
    
    console.log('WikiJuegos 2025 cargado correctamente!');

});
