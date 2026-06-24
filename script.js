// script.js

// Seguimiento de clics en WhatsApp
const whatsappButtons = document.querySelectorAll(
'a[href*="wa.me"]'
);

whatsappButtons.forEach(button => {

button.addEventListener('click', () => {

if(typeof gtag !== 'undefined'){

gtag('event','click_whatsapp',{
event_category:'Contacto',
event_label:'WhatsApp'
});

}

});

});

// Año automático en footer (opcional)
const yearElement = document.querySelector('.year');

if(yearElement){
yearElement.textContent = new Date().getFullYear();
}
