// ============================================
// THEME TOGGLE
// ============================================

const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;

const savedTheme = localStorage.getItem('finora-theme');

if (savedTheme === 'dark') {
    html.classList.add('dark');
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeBtn.addEventListener('click', () => {

    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');

    themeBtn.innerHTML = isDark
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';

    localStorage.setItem(
        'finora-theme',
        isDark ? 'dark' : 'light'
    );
});


// ============================================
// MOBILE NAVIGATION
// ============================================

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');

function toggleNav() {

    mobileNav.classList.toggle('open');
    navOverlay.classList.toggle('show');

    document.body.style.overflow =
        mobileNav.classList.contains('open')
            ? 'hidden'
            : '';
}

hamburger.addEventListener('click', toggleNav);

navOverlay.addEventListener('click', toggleNav);

mobileNav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        mobileNav.classList.remove('open');
        navOverlay.classList.remove('show');

        document.body.style.overflow = '';
    });
});


// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });

}, {
    threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));


// ============================================
// FAQ ACCORDION
// ============================================

document.querySelectorAll('.faq-q').forEach(question => {

    question.addEventListener('click', () => {

        const item = question.parentElement;
        const answer = question.nextElementSibling;

        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(faq => {

            faq.classList.remove('open');

            faq.querySelector('.faq-a').style.maxHeight = '0';
        });

        if (!isOpen) {

            item.classList.add('open');

            answer.style.maxHeight =
                answer.scrollHeight + 'px';
        }
    });
});


// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        backToTop.classList.add('show');

    } else {

        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', () => {

        console.log('FORM YUBORILDI');

    });
}


// ============================================
// HEADER SHADOW ON SCROLL
// ============================================

const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            '0 4px 20px rgba(0,0,0,0.08)';

    } else {

        header.style.boxShadow = 'none';
    }
});


// ============================================
// ACTIVE NAV LINK
// ============================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {

        const link = document.querySelector(
            `nav a[href="#${section.id}"]`
        );

        if (!link) return;

        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {

            document.querySelectorAll('nav a').forEach(navLink => {

                navLink.style.color = '';
            });

            link.style.color = 'var(--blue)';
        }
    });
});