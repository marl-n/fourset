// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Dropdown menu toggle for mobile
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
    dropdown.addEventListener('click', function(e) {
        // Only toggle on mobile
        if (window.innerWidth <= 900) {
            e.stopPropagation();
            this.classList.toggle('open');
            const submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        }
    });
}

// Optional: Close nav when clicking a link (for mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form submission


// Set active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinksEls = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 90) {
            current = section.getAttribute('id');
        }
    });
    navLinksEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Three Step Process Section
const stepsData = [
  {
    title: '<span>STEP #1</span> Get A Fast Quote',
    desc: 'To get a quote, you can click below or give us a call. A trained civil construction expert will reach out to you. We usually respond in minutes!',
    btn: 'GET A FAST QUOTE',
    img: 'img/Get-A-Quote-Illsutration-1.png'
  },
  {
    title: '<span>STEP #2</span> Consultation & Planning',
    desc: 'We will discuss your project needs, provide expert advice, and plan the best solution for your site. Our team ensures every detail is covered.',
    btn: 'SCHEDULE CONSULTATION',
    img: 'img/step2.webp'
  },
  {
    title: '<span>STEP #3</span> Project Execution',
    desc: 'After we have all your information and scheduled into our calendar, you will get a text message and email confirmation. Our technician will send a text message when he is on the way to your home.',
    btn: 'START YOUR PROJECT',
    img: 'img/step3.webp'
  }
];

function updateStep(stepIdx) {
  const info = document.querySelector('.step-info');
  info.querySelector('.step-title').innerHTML = stepsData[stepIdx].title;
  info.querySelector('.step-desc').textContent = stepsData[stepIdx].desc;
  info.querySelector('.step-btn').textContent = stepsData[stepIdx].btn;
  document.querySelector('.step-img').src = stepsData[stepIdx].img;
  document.querySelector('.step-img').alt = stepsData[stepIdx].btn;
}

document.querySelectorAll('.step-tab').forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.step-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    updateStep(idx);
  });
});

// Initialize with step 1
updateStep(0);

// Slider images script
const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
let currentIndex = 0;
const totalSlides = sliderItems.length;

function showSlides(index) {
  // Center single image on small screens
  const screenWidth = window.innerWidth;
  let offset = 0;
  if (screenWidth <= 600) {
    offset = sliderItems[0].offsetWidth * index - (sliderTrack.offsetWidth - sliderItems[0].offsetWidth) / 2;
    sliderTrack.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  } else {
    sliderTrack.scrollTo({
      left: sliderItems[0].offsetWidth * index,
      behavior: 'smooth'
    });
  }
}
showSlides(currentIndex);

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlides(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlides(currentIndex);
});

// Automatic sliding
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlides(currentIndex);
}, 2000);

// Responsive adjustment
window.addEventListener('resize', () => {
  showSlides(currentIndex);
});

// FAQ accordion functionality


// Optional: Add animation on page load
        document.addEventListener('DOMContentLoaded', function() {
            const whatsappButton = document.querySelector('.whatsapp-float');
            whatsappButton.style.transform = 'scale(0)';
            
            setTimeout(() => {
                whatsappButton.style.transition = 'transform 0.5s ease';
                whatsappButton.style.transform = 'scale(1)';
            },2500);
        });

        // FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach((faqTitle) => {
  faqTitle.addEventListener('click', () => {
    const parent = faqTitle.parentElement;

    // Close other FAQs when one opens
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== parent) {
        item.classList.remove('active');
      }
    });

    // Toggle current FAQ
    parent.classList.toggle('active');
  });
});
