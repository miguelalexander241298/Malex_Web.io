/*const myArray = [10, 20, 30, 40]; const myArray2 = [60, 70, 80, 90];
const myNumber = 10;
const myNumber2 = Number('10');

const suma = myNumber2 + myNumber
//console.log(myArray);
//console.log(typeof(myNumber))
//console.log(myArray2)
console.log(suma)
*/
/*const color = ['orange', 'blue', 'red'];
const randomIndex = Math.floor(Math.random() * color.length);
console.log('El color random es: ' + color[randomIndex])*/
/*const lista = ['affd','sfsfsdfsdd', 20, 10, 0]
for (let i=0; i< lista.length;i++){
    if (typeof lista[i] === 'number'){
        console.log(lista[i]);
    }
}*/
/*function myFunction(val){
    console.log('Esta es una funcion ' + val);
}
myFunction('Miguel');*/
/*const myArry = [2, 4, 6, 8, 10];
function multiply (val) {
    return val * 5;
}
const newArry = myArry.map(multiply);
console.log(newArry)*/
/*const myArray = ['Hello','my','name','is','Miguel']
imprimir(myArray.map((val) => val.split('')))*/
/*let array = ''
const list1 = [{name:'Miguel'}, {name:'Mirelys'}, {name:'Yasmin'}];
function namesList (list) {
    list.forEach((listItem, indexItem) => {
        if (indexItem !== list.length-1) {
            array += listItem.name + ', ';
        } else {
            array = array.substring(0,array.length-2) + ' y ' + listItem.name;
        }
        console.log(array)
    })
}
namesList(list1)*/
/*const btn_1 = document.getElementById('btn_1');
function imprimir() {
    const li_new = document.createElement('li');
    li_new.textContent = 'Others';
    const ul = document.querySelector('ul');
    ul.appendChild(li_new);
    }
btn_1.addEventListener('click',imprimir);
const li_new = document.createElement('li');
li_new.textContent = 'Others';
const ul = document.querySelector('ul');
ul.appendChild(li_new);*/
/*let val2 = ['miguel', 'one', 'two', 3, 'four'];
cons = (list) => console.log(...list);
cons(val2)*/
/*let val2 = ['miguel', 'one', 'two', 3, 'four'];
let element = () => val2.includes('miguel') ? console.log('Esta') : console.log('No esta');
element()*/
/*let person = {
    nombre: 'Miguel',
    edad: 26,
    ciudad: 'Trinidad'
}
for (let var1 in person) {
    console.log(var1, person[var1]);
}*/
/*var1 = ['Miguel', 26]
for (let char of var1) {
    console.log(char);
}*/
/*let var1 = [20, 10, 40, 50];
let sum = 1;
var1.forEach(element => sum *= element);

let var2 = var1.filter(element => element >= 30);
//console.log(sum);
console.log(var2);*/

/*let nombreApp = document.createElement('p');
let nombreConteiner = document.querySelector('.perfil_info').children[3];
nombreApp.innerHTML = '<h1 class="paragraph">Esto es un texto</h1>'
nombreApp.style.color = 'red'

//nombreConteiner.appendChild(nombreApp)
document.querySelector('.perfil_info').insertBefore(nombreApp, nombreConteiner)*/

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

//console.log(social_ico);
//console.log(secundary_color[0].style);

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