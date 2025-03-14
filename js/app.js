let fecha = new Date();

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;


let estilo_app = 1;
let buttons = document.querySelectorAll('.button_ini');
let secundary_color = document.querySelectorAll('.secundary_color');
let nav = document.querySelectorAll('.nav');
let my_photo = document.querySelector('#my_photo');
let border_botton_body = document.querySelectorAll('.border_botton_body');
let bg_ini_color = document.querySelector('.section_1');
let bg_contacto_color = document.querySelector('.section_3');
let bg_footer_color = document.querySelector('.recomendacion');
let social_ico = document.querySelectorAll('.social_ico');

if (mes === 2 && dia === 14) {
    const love_img = document.getElementById('love_img');
    const secundary_color_body = '#c5b0b0';
    const button_bg_color = '#7e0000';
    const button_bg_hover_color = '#a02626';
    const link_color_body = '#f40303';
    const color_gradiente = '#300a10';
    love_img.style.display = 'flex';
    love_img.style.animationName = 'Anim_Love'
    love_img.style.animationDuration = '16s'
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
    social_ico.forEach(element => element.style.background = `radial-gradient(${color_gradiente},var(--fondo_color))`);

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
}
