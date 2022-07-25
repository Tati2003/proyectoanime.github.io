
// var container = document.querySelector(".container");

// // container.innerHTML=`<div></`


let i = 0; // foto actual
let j = 7; // fotos totales


const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".img-container img");
const texts = document.querySelectorAll(".img-container p");

function next(){
    document.getElementById("img" + (i + 1)).
    classList.remove("active");

    document.getElementById("txt" + (i + 1)).
    classList.remove("active");

    i=(j + i + 1) % j;//con est cálculo i se vuelve el resto de la división generando esa transición

    document.getElementById("img" + (i + 1)).
    classList.add("active");

    document.getElementById("txt" + (i + 1)).
    classList.add("active");
    indicator(i+1);

}

function prev(){

    document.getElementById("img" + (i + 1)).
    classList.remove("active");


    document.getElementById("txt" + (i + 1)).
    classList.remove("active");

    i=(j + i - 1) % j;//con est cálculo i se vuelve el resto de la división generando esa transición

    document.getElementById("img" + (i + 1)).
    classList.add("active");

    document.getElementById("txt" + (i + 1)).
    classList.add("active");
    indicator(i+1);
}

function indicator(i){
dots.forEach(dot => {
    dot.style.backgroundColor="transparent";
});
document.querySelector(".dot-container button:nth-child(" + i + ")").
style.backgroundColor="#f28"
}

function dot(a){
    images.forEach(img=>{
        img.classList.remove("active");
    });

    texts.forEach(txt=>{
        txt.classList.remove("active");
    });

    document.getElementById("img" + a).
    classList.add("active");

    document.getElementById("txt" + a).
    classList.add("active");

    i = a - 1;//sin esto, se movería un número menos por punto,mientras que las flechas se moverían más,porque estaría un num atrasado
    indicator(a)
}


function auto(){
    
    setInterval(() => {
        next();
    }, 4000);
    
    }

window.onload=auto;

// agregar html de descripción de texto de cada una