// -------------------- ParticlesJS --------------------
/*// Inicializa o ParticlesJS no elemento com id "particles-js"
particlesJS("particles-js", {
  "particles": {
    // Quantidade de partículas e densidade
    "number": {
      "value": 125, 
      "density": {
        "enable": true,
        "value_area": 800 
      }
    },
    // Cor das partículas
    "color": {
      "value": "#e0e0e0"
    },
    // Formato das partículas
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    // Opacidade das partículas
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1
      }
    },
    // Tamanho das partículas
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.1
      }
    },
    // Linhas que conectam as partículas
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff0000",
      "opacity": 0.4,
      "width": 1
    },
    // Movimento das partículas
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    // Interatividade detectada na janela
    "detect_on": "window",
    "events": {
      // Efeito ao passar o mouse (repulsão)
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      // Efeito ao clicar (adiciona partículas)
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  // Detecta telas retina
  "retina_detect": true
});
*/


// -------------------- Menu Responsivo --------------------
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector(".nav-items");
const navLink = document.querySelectorAll(".nav-items a");

// Abrir o menu
menuIcon.addEventListener("click", () => {
    navItems.classList.add("open");
});

// Fechar o menu
closeIcon.addEventListener("click", () => {
    navItems.classList.remove("open");
});

// Fechar o menu ao clicar em um link
navLink.forEach(link => {
  link.addEventListener("click", () => {
    navItems.classList.remove("open");
  });
});


  
//devtitle//
var typed = new Typed('.skillis', {
  strings: ['Programmer', '3D Generalist', 'UX/UI Designer', 'Motion Designer'],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1500,
  loop: true
});

// button contact//

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-right form");
  const button = document.querySelector(".formBtn .btn1");

  form.addEventListener("submit", function (e) {
    // Evita o envio real para testes (remova essa linha em produção)
    // e.preventDefault();

    // Adiciona classe 'sent'
    button.classList.add("sent");

    // Altera o texto do botão
    button.innerHTML = `<i class='bx bx-check-circle'></i> Enviado!`;

    // Desativa o botão temporariamente (opcional)
    button.disabled = true;

    // (Opcional) Reativa o botão e restaura texto após alguns segundos
    setTimeout(() => {
      button.classList.remove("sent");
      button.disabled = false;
      button.innerHTML = `<i class='bx bx-mail-send'></i> Send Message`;
    }, 5000); // 5 segundos
  });
});

// Smooth scrolling for anchor links

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// skills bar animation 

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const line = entry.target;
        const percent = line.getAttribute('data-percent');
        line.style.setProperty('--fill-width', percent + '%');
        observer.unobserve(line);
      }
    });
  }, { threshold: 0.5 });

document.querySelectorAll('.bar .line').forEach(line => {
  observer.observe(line);
});

// Modal dinâmico
const modal = document.getElementById('global-portfolio-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.getElementById('bx-exit');

// Abrir o modal ao clicar em um card
document.querySelectorAll('.img-card').forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const desc = card.dataset.desc;
    const img = card.dataset.img;
    const link = card.dataset.link;

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalImg.src = img;
    modalLink.href = link;

    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});

// Fechar o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

// Fechar o modal ao clicar fora do conteúdo (fundo escuro)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});

// Evitar que o clique no link feche o modal
modalLink.addEventListener('click', (event) => {
  event.stopPropagation(); // Permite o redirecionamento sem fechar o modal
});




// ===== Scroll to Top Button =====
const scrollToTopBtn = document.querySelector('.scrolltoTop-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('active');
  } else {
    scrollToTopBtn.classList.remove('active');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Navigation Menu Active on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-items a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});


// Abre modal com certificado
function openCertModal(src, alt = '') {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certImg");
  const captionText = document.getElementById("certCaption");

  modal.style.display = "block";
  modalImg.src = src;
  modalImg.alt = alt;
  captionText.innerHTML = alt;

  // Reset zoom
  modalImg.style.transform = 'scale(1)';
  modalImg.dataset.scale = 1;
}

// Fecha modal
function closeCertModal() {
  const modal = document.getElementById("certModal");
  modal.style.display = "none";
}

// Zoom via clique
const certImg = document.getElementById("certImg");
certImg.addEventListener('click', () => {
  let scale = Number(certImg.dataset.scale) || 1;
  scale = scale === 1 ? 1.5 : 1; // alterna entre 1x e 2x
  certImg.style.transform = `scale(${scale})`;
  certImg.dataset.scale = scale;
});

// Clique no <li> abre modal
document.querySelectorAll('.certification-list li').forEach(li => {
  li.addEventListener('click', () => {
    const img = li.querySelector('img');
    if (img) openCertModal(img.src, img.alt);
  });
});


