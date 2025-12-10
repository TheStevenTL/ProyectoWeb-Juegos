const juegos2025 = [
    {
        id: 1,
        nombre: "GTA VI",
        imagen: "gta6.jpg",
        descripcion: "La nueva entrega de Rockstar. Regreso a Vice City con gráficos de nueva generación.",
        rating: 4.9,
        fecha: "Q4 2025",
        categoria: "accion"
    },
    {
        id: 2,
        nombre: "The Elder Scrolls VI",
        imagen: "elder-scrolls.jpg",
        descripcion: "Nuevo RPG de mundo abierto de Bethesda. Continúa la legendaria saga.",
        rating: 4.8,
        fecha: "2025-2026",
        categoria: "rpg"
    },
    {
        id: 3,
        nombre: "Star Wars: Eclipse",
        imagen: "star-wars-eclipse.jpg",
        descripcion: "Aventura narrativa en la Alta República. Desarrollado por Quantic Dream.",
        rating: 4.7,
        fecha: "2025",
        categoria: "aventura"
    },
        {
        id: 4,
        nombre: "Resident Evil Requiem",
        imagen: "RE.jpg",
        descripcion: "Novena entrega de Franquicia más conocida de capcom vuelve con más terror que antes",
        rating: 4.8,
        categoria: "aventura",
        fecha: "2025"
    },
    {
        id: 5,
        nombre: "Marvel's Wolverine",
        imagen: "marvelswolverine.jpg",
        descripcion: "Juego en solitario del mutante. Brutal y visceral por Insomniac.",
        rating: 4.8,
        fecha: "2025",
        categoria: "accion"
    },
    {
        id: 6,
        nombre: "Expedition 33",
        imagen: "expedition33.jpg",
        descripcion: "RPG basado en turnos de vanguardia con mecánica única en tiempo real",
        rating: 4.7,
        fecha: "2025",
        categoria: "rpg"
    },
                        {
        id: 7,
        nombre: "Lego Batman",
        imagen: "legobatman.jpg",
        descripcion: "Aventura lego basada en la triologia original Arkham ",
        rating: 4.9,
        categoria: "aventura",
        fecha: "2025"
    },

    {
        id: 8,
        nombre: "FIFA 25",
        imagen: "Fifa2025.jpg",
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
            <img src="${juego.imagen}" alt="${juego.nombre}" class="juego-img" onerror="this.src='https://via.placeholder.com/300x150/25253e/ffffff?text=Juego+2025'">
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

// Sistema de login MODIFICADO
function configurarLogin() {
    const btnLogin = document.getElementById('btnLogin');
    const modalLogin = document.getElementById('modalLogin');
    const modalRegistro = document.getElementById('modalRegistro');
    const cerrarModal = document.getElementById('cerrarModal');
    const cerrarRegistro = document.getElementById('cerrarRegistro');
    const registroLink = document.getElementById('registro');
    const iniciarSesionLink = document.getElementById('iniciarSesion');
    
    // Si ya hay usuario logueado, no mostrar modales
    if (StorageManager.estaRegistrado()) {
        return;
    }
    
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
    
    // FORMULARIO DE REGISTRO
    document.getElementById('formRegistro').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.querySelector('#formRegistro input[type="text"]').value;
        const email = document.querySelector('#formRegistro input[type="email"]').value;
        
        if (!nombre || !email) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        // Guardar usuario en localStorage
        StorageManager.guardarUsuario(nombre, email);
        
        alert(`¡Bienvenido ${nombre}! Tu cuenta ha sido creada.`);
        modalRegistro.style.display = 'none';
        
        // Actualizar botón con nombre de usuario
        actualizarBotonUsuario();
    });
    
    // FORMULARIO DE LOGIN (VALIDAR QUE EXISTA REGISTRO)
    document.getElementById('formLogin').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usuario = StorageManager.obtenerUsuario();
        
        if (!usuario) {
            alert('⚠️ Debes registrarte primero antes de iniciar sesión.');
            modalLogin.style.display = 'none';
            modalRegistro.style.display = 'flex';
            return;
        }
        
        const emailInput = document.querySelector('#formLogin input[type="email"]').value;
        const passwordInput = document.querySelector('#formLogin input[type="password"]').value;
        
        // Validar credenciales (simplificado)
        if (emailInput === usuario.email && passwordInput) {
            alert(`¡Bienvenido de nuevo ${usuario.nombre}!`);
            modalLogin.style.display = 'none';
            
            // Actualizar botón con nombre
            actualizarBotonUsuario();
        } else {
            alert('Email o contraseña incorrectos');
        }
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
    
});
