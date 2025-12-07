const juegos2025Completo = [
    {
        id: 1,
        nombre: "GTA VI",
        imagen: "images/gta6.jpg",
        descripcion: "Rockstar regresa con nueva entrega. Vice City renovado.",
        rating: 4.9,
        categoria: "accion",
        fecha: "Dic 2026"
    },
    {
        id: 2,
        nombre: "The Elder Scrolls VI",
        imagen: "images/elder-scrolls.jpg",
        descripcion: "Nuevo RPG de Bethesda. Nuevo continente, nuevas razas.",
        rating: 4.8,
        categoria: "rpg",
        fecha: "2025-2026"
    },
    {
        id: 3,
        nombre: "Star Wars: Eclipse",
        imagen: "images/star-wars-eclipse.jpg",
        descripcion: "Aventura en Alta República. Elecciones con consecuencias.",
        rating: 4.7,
        categoria: "aventura",
        fecha: "2025"
    },
    {
        id: 4,
        nombre: "Fable (2025)",
        imagen: "images/Fable.jpg",
        descripcion: "Reinicio con humor británico. Sistema de moralidad profundo.",
        rating: 4.6,
        categoria: "rpg",
        fecha: "2025"
    },
    {
        id: 5,
        nombre: "Marvel's Wolverine",
        imagen: "images/marvelswolverine.jpg",
        descripcion: "Juego maduro del mutante. Combates brutales.",
        rating: 4.8,
        categoria: "accion",
        fecha: "2026"
    },
    {
        id: 6,
        nombre: "Expedition 33",
        imagen: "images/expedition33.jpg",
        descripcion: "RPG basado en turnos de vanguardia con mecánica única en tiempo real.",
        rating: 4.7,
        categoria: "rpg",
        fecha: "2025"
    },
    {
        id: 7,
        nombre: "Avowed",
        imagen: "images/Avowed.jpg",
        descripcion: "RPG de Obsidian. Magia y espadas en primera persona.",
        rating: 4.5,
        categoria: "rpg",
        fecha: "2025"
    },
    {
        id: 8,
        nombre: "FIFA 25",
        imagen: "images/Fifa2025.jpg",
        descripcion: "Nuevo motor gráfico. Mejoras en IA y física.",
        rating: 4.3,
        categoria: "deportes",
        fecha: "Sep 2025"
    },
    {
        id: 9,
        nombre: "Call of Duty Black ops 7",
        imagen: "images/CallofDuty.jpg",
        descripcion: "Nueva entrega anual. Campaña y multijugador renovados.",
        rating: 4.4,
        categoria: "accion",
        fecha: "Nov 2025"
    },
    {
        id: 10,
        nombre: "Assassin's Creed Red",
        imagen: "images/Assasins.jpg",
        descripcion: "Ambientado en Japón feudal. Sistema de sigilo mejorado.",
        rating: 4.6,
        categoria: "aventura",
        fecha: "2025"
    },
    {
        id: 11,
        nombre: "Hellblade II: Senua's Saga",
        imagen: "images/Hellblade.jpg",
        descripcion: "Secuela psicológica. Gráficos de nueva generación.",
        rating: 4.7,
        categoria: "aventura",
        fecha: "2025"
    },
    {
        id: 12,
        nombre: "NBA 2K25",
        imagen: "images/NBA2025.jpg",
        descripcion: "Nueva edición del simulador de baloncesto.",
        rating: 4.2,
        categoria: "deportes",
        fecha: "Sep 2025"
    }
];

// CALENDARIO 2025
const calendario2025 = [
    {
        nombre: "GTA VI",
        fecha: "Diciembre 2026",
        plataforma: "PS5, XSX, PC"
    },
    {
        nombre: "FIFA 25",
        fecha: "Septiembre 2025",
        plataforma: "Todas"
    },
    {
        nombre: "Call of Duty 2025",
        fecha: "Noviembre 2025",
        plataforma: "Todas"
    },
    {
        nombre: "Star Wars: Eclipse",
        fecha: "Primavera 2025",
        plataforma: "Multiplataforma"
    }
];

// Cargar todos los juegos 2025
function cargarTodosJuegos() {
    const contenedor = document.getElementById('todosJuegos');
    if (!contenedor) return;
    
    contenedor.innerHTML = juegos2025Completo.map(juego => `
        <div class="juego-card" data-categoria="${juego.categoria}">
            <img src="${juego.imagen}" alt="${juego.nombre}" class="juego-img">
            <div class="juego-info">
                <h3>${juego.nombre}</h3>
                <p>${juego.descripcion}</p>
                <div class="rating">★ ${juego.rating} | ${juego.fecha}</div>
                <span class="etiqueta-categoria">${juego.categoria.toUpperCase()}</span>
            </div>
        </div>
    `).join('');
}

// Cargar top juegos 2025
function cargarTopJuegos() {
    const contenedor = document.getElementById('topJuegos');
    if (!contenedor) return;
    
    const top5 = [...juegos2025Completo]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
    
    contenedor.innerHTML = top5.map((juego, index) => `
        <div class="top-item">
            <div class="top-posicion">#${index + 1}</div>
            <img src="${juego.imagen}" alt="${juego.nombre}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
            <div class="top-info">
                <h4>${juego.nombre}</h4>
                <div class="rating">★ ${juego.rating} - ${juego.fecha}</div>
            </div>
        </div>
    `).join('');
}

// Cargar calendario 2025
function cargarCalendario() {
    const contenedor = document.getElementById('lanzamientos');
    if (!contenedor) return;
    
    contenedor.innerHTML = calendario2025.map(item => `
        <div class="lanzamiento-card">
            <div class="fecha-lanzamiento">
                ${item.fecha}
            </div>
            <div>
                <h3>${item.nombre}</h3>
                <p>${item.plataforma}</p>
            </div>
        </div>
    `).join('');
}

// Configurar filtros 2025
function configurarFiltros() {
    const filtros = document.querySelectorAll('.filtro-btn');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            filtros.forEach(f => f.classList.remove('activo'));
            filtro.classList.add('activo');
            
            const categoria = filtro.dataset.categoria;
            filtrarJuegos(categoria);
        });
    });
}

function filtrarJuegos(categoria) {
    const juegos = document.querySelectorAll('.juego-card');
    
    juegos.forEach(juego => {
        if (categoria === 'todos' || juego.dataset.categoria === categoria) {
            juego.style.display = 'block';
        } else {
            juego.style.display = 'none';
        }
    });
}

// Sistema de login (mismo que principal)
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
            alert('¡Bienvenido al catálogo 2025!');
            modalLogin.style.display = 'none';
            if (btnLogin) btnLogin.innerHTML = '<i class="fas fa-user-check"></i> Mi Cuenta';
        });
    }
    
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Cuenta creada para 2025!');
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
    cargarTodosJuegos();
    cargarTopJuegos();
    cargarCalendario();
    configurarFiltros();
    configurarLogin();
    configurarMenu();
    
    console.log('Catálogo 2025 cargado correctamente!');

});
