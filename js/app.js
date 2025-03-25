/* Variables de fecha */

const fecha = new Date();

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const dia_semana = fecha.getDay();

/* Variables extraidas usando el DOM */

const buttons = document.querySelectorAll('.button_ini');
const secundary_color = document.querySelectorAll('.secundary_color');
const nav = document.querySelectorAll('.nav');
const my_photo = document.querySelector('#my_photo');
const border_botton_body = document.querySelectorAll('.border_botton_body');
const bg_ini_color = document.querySelector('.section_1');
const bg_contacto_color = document.querySelector('.section_3');
const bg_footer_color = document.querySelector('.recomendacion');
const social_ico = document.querySelectorAll('.social_ico');
const love_img = document.getElementById('day_img');
const evento_img = document.getElementById('icono_evento');
const lista_eventos = document.querySelector('.lista_eventos');
const num_event = document.querySelector('#num_event');
const footer = document.querySelector('footer');
const footer_day = document.querySelector('.footer_day');
const footer_day_p = document.querySelector('.footer_day_p');
const copo = document.querySelectorAll('.copo');
const loading_section = document.querySelector('.loading_section')
const button_event = document.querySelectorAll('.button_event')

/* Declarando variables para dias atipicos */

let secundary_color_body;
let button_bg_color;
let button_bg_hover_color;
let link_color_body;
let color_gradiente;
let text_footer_day;

/* Animando y colocando nieve de fin de año */

let delay = 0.2
let contador = 1
copo.forEach((element) => {
    const randomIndex = Math.floor(Math.random() * copo.length);
    element.style.left = `${contador}%`;
    element.style.animationDelay = `${randomIndex - delay}s`
    contador += 3;
    delay += 0.3;
});

/* Seccion Evento */

/* Evento loader */
window.addEventListener('load', () => {
    loading_section.style.display = 'none';
    my_photo.style.animationName = 'Photo_Anim';
});

/* Evento Confety */

evento_img.addEventListener('mousedown', mostrar_evento);
lista_eventos.style.display = 'none';
if (button_event.length === 0) {
    num_event.textContent = '-0';
} else {
    alert(button_event.length)
    num_event.textContent = `+${button_event.length}`;
}

function mostrar_evento() {
    if (lista_eventos.style.display === 'none') {
        lista_eventos.style.display = 'inline';
        evento_img.style.animationIterationCount = '0';
        num_event.style.transition = 'all'
        num_event.style.transitionDuration = '0.5s'
        num_event.style.transform = 'scale(0.0)'
    }
    else {
        lista_eventos.style.display = 'none';
        evento_img.style.transition = 'all'
        evento_img.style.transitionDuration = '0.5s'
        evento_img.style.transform = 'scale(0.0)'
    }
}

function func_color() {
    this.style.backgroundColor = button_bg_hover_color;
}

function func_color_leave() {
    this.style.backgroundColor = button_bg_color;
}

function func_link_hover() {
    this.style.color = secundary_color_body;
    this.style.borderBottomColor = link_color_body;
}

function func_link_leave() {
    this.style.color = '#eee';
}

/* Constructor para dias atipicos */

function func_constructor_change() {
    bg_ini_color.style.background = `linear-gradient(90deg,var(--fondo_color),${color_gradiente}, var(--fondo_color))`;
    bg_contacto_color.style.background = `radial-gradient(${color_gradiente},var(--fondo_color))`;
    bg_footer_color.style.background = `${color_gradiente}`;
    buttons.forEach(element => element.style.color = secundary_color_body);
    buttons.forEach(element => element.style.backgroundColor = button_bg_color);
    buttons.forEach(element => element.addEventListener('mouseover', func_color));
    buttons.forEach(element => element.addEventListener('mouseleave', func_color_leave));
    secundary_color.forEach(element => element.style.color = secundary_color_body);
    secundary_color[0].addEventListener('mouseover', func_link_hover);
    nav.forEach(element => element.addEventListener('mouseover', func_link_hover));
    nav.forEach(element => element.addEventListener('mouseleave', func_link_leave));
    my_photo.style.boxShadow = `2px 2px 10px ${button_bg_hover_color}`;
    border_botton_body.forEach(element => element.style.borderBottomColor = link_color_body);
    footer.style.paddingBottom = '50px';
    footer_day.style.background = `${color_gradiente}`;
    footer_day.style.display = 'flex';
    footer_day_p.textContent = `${text_footer_day}`;
}

/* Constructor para dias 24, 30, 31 y 1ro */

function fin_año_const(texto) {
    copo.forEach(element => element.style.display = 'inline')
    copo.forEach(element => element.style.position = 'fixed')
    secundary_color_body = '#b0c4c5';
    button_bg_color = '#094e57';
    button_bg_hover_color = '#26a09a';
    link_color_body = '#03f4e0';
    color_gradiente = '#0a2830';
    text_footer_day = texto;
    love_img.src = 'resources/fiesta.webp';
    love_img.style.display = 'flex';
    love_img.style.animationName = 'Anim_Trabajador';
    love_img.style.animationDuration = '16s';
    func_constructor_change();
}

//console.log(fecha.valueOf());
//console.log(secundary_color[0].style);

/* Dias atipicos */

/* dia 1ro de enero */

if (mes === 1 && dia === 1) {
    fin_año_const('Felíz inicio de año para todos')
}

/* 6 de enero dia de los reyes magos */

else if (mes === 1 && dia === 6) {
    secundary_color_body = '#b0c5c5';
    button_bg_color = '#095757';
    button_bg_hover_color = '#269ca0';
    link_color_body = '#03f4e8';
    color_gradiente = '#0a302b';
    text_footer_day = `Día de los reyes magos!`;
    love_img.src = 'resources/reyes.webp';
    love_img.style.display = 'flex';
    love_img.style.animationName = 'Anim_Love';
    love_img.style.animationDuration = '16s';
    func_constructor_change();
}

/* 1 de mayo dia del trabajador */

else if (mes === 5 && dia === 1) {
    secundary_color_body = '#b0b0c5';
    button_bg_color = '#093157';
    button_bg_hover_color = '#2826a0';
    link_color_body = '#1b03f4';
    color_gradiente = '#0a1630';
    text_footer_day = `Felíz día internacional del trabajador!`;
    love_img.src = 'resources/trabajador.webp';
    love_img.style.display = 'flex';
    love_img.style.animationName = 'Anim_Trabajador';
    love_img.style.animationDuration = '16s';
    func_constructor_change();
}

/* 2do domingo de mayo dia de las madres */

else if (mes === 5 && dia_semana === 0 && dia / 7 > 1.0 && dia / 7 <= 2.0) {
    secundary_color_body = '#c5b0c4';
    button_bg_color = '#380957';
    button_bg_hover_color = '#5b26a0';
    link_color_body = '#9c03f4';
    color_gradiente = '#300a26';
    text_footer_day = `Felíz día de las madres!. Muchas felicidades`;
    love_img.src = 'resources/mama.webp';
    love_img.style.display = 'flex';
    love_img.style.animationName = 'Anim_Trabajador';
    love_img.style.animationDuration = '16s';
    func_constructor_change();
}
