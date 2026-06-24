// ======================
// SCROLL SUAVE
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});

// ======================
// HEADER SCROLL EFFECT
// ======================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            '0 10px 30px rgba(0,0,0,.08)';

    } else {

        header.style.boxShadow =
            '0 1px 10px rgba(0,0,0,.05)';

    }

});

// ======================
// ANIMACIONES AL SCROLL
// ======================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';

            entry.target.style.transform =
                'translateY(0)';

        }

    });

},

{
    threshold: 0.15
}

);

document
.querySelectorAll('.card, .stat, .mission-grid div')
.forEach(el => {

    el.style.opacity = '0';

    el.style.transform =
        'translateY(30px)';

    el.style.transition =
        'all .8s ease';

    observer.observe(el);

});

// ======================
// AÑO AUTOMÁTICO FOOTER
// ======================

const footerParagraph =
document.querySelector('footer p');

if (footerParagraph) {

    footerParagraph.innerHTML =
    `© ${new Date().getFullYear()} NAPA Soluciones Integrales`;

}

// ======================
// GOOGLE ANALYTICS
// ======================

function trackEvent(action, label) {

    if (typeof gtag !== 'undefined') {

        gtag('event', action, {

            event_category: 'engagement',
            event_label: label

        });

    }

}

// ======================
// WHATSAPP
// ======================

document
.querySelectorAll('a[href*="wa.me"]')
.forEach(button => {

    button.addEventListener('click', () => {

        trackEvent(
            'click_whatsapp',
            'WhatsApp Contacto'
        );

    });

});

// ======================
// EMAIL
// ======================

document
.querySelectorAll('a[href^="mailto"]')
.forEach(button => {

    button.addEventListener('click', () => {

        trackEvent(
            'click_email',
            'Correo Contacto'
        );

    });

});

// ======================
// FACEBOOK
// ======================

document
.querySelectorAll('a[href*="facebook"]')
.forEach(button => {

    button.addEventListener('click', () => {

        trackEvent(
            'click_facebook',
            'Facebook'
        );

    });

});

// ======================
// INSTAGRAM
// ======================

document
.querySelectorAll('a[href*="instagram"]')
.forEach(button => {

    button.addEventListener('click', () => {

        trackEvent(
            'click_instagram',
            'Instagram'
        );

    });

});

// ======================
// MENSAJE CONSOLA
// ======================

console.log(
'%cNAPA Soluciones Integrales',
'color:#2DA5E1;font-size:18px;font-weight:bold'
);

console.log(
'Analytics y seguimiento cargados correctamente.'
);
