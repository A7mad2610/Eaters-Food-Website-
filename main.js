let a =document.getElementById('pizzabtn');
let b =document.getElementById('burgerbtn');
let c =document.getElementById('meatbtn');
let d =document.getElementById('saladsbtn');
let e =document.getElementById('drinksbtn');
let f =document.getElementById('desertbtn');
let pizza =document.getElementById('pizza');
let burger =document.getElementById('burger');
let meat =document.getElementById('meat');
let salad =document.getElementById('salad');
let drinks =document.getElementById('drinks');
let desert =document.getElementById('desert');


function pizzacont(){
    pizza.style.left ="0%";
    burger.style.left ="100%";
    meat.style.left ="100%";
    salad.style.left ="100%";
    drinks.style.left ="100%";
    desert.style.left ="100%";
}
function burgercont(){
    pizza.style.left ="100%";
    burger.style.left ="0%";
    meat.style.left ="100%";
    salad.style.left ="100%";
    drinks.style.left ="100%";
    desert.style.left ="100%";
}
function meatcont(){
    pizza.style.left ="100%";
    burger.style.left ="100%";
    meat.style.left ="0%";
    salad.style.left ="100%";
    drinks.style.left ="100%";
    desert.style.left ="100%";
}
function saladcont(){
    pizza.style.left ="100%";
    burger.style.left ="100%";
    meat.style.left ="100%";
    salad.style.left ="0%";
    drinks.style.left ="100%";
    desert.style.left ="100%";
}
function drinkscont(){
    pizza.style.left ="100%";
    burger.style.left ="100%";
    meat.style.left ="100%";
    salad.style.left ="100%";
    drinks.style.left ="0%";
    desert.style.left ="100%";
    console.log('hello')
}
function desertcont(){
    pizza.style.left ="100%";
    burger.style.left ="100%";
    meat.style.left ="100%";
    salad.style.left ="100%";
    drinks.style.left ="100%";
    desert.style.left ="0%";
}