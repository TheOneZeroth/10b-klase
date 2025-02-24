/*
let a = 5;
let b = "5";

if (a == b){
    console.log("a == b");
}
if (a === b){
    console.log("a === b");
}
*/

let diena = parseInt(prompt("Lūdzu ievadi dienu 1-7"));

switch( diena ){
    case 1:
        console.log("Pirmdiena");
        break;
    case 2:
        console.log("Otrdiena");
        break;
    case 3:
        console.log("Trešdiena");
        break;
    case 4:
        console.log("Ceturtdiena");
        break;
    case 5:
        console.log("Piektdiena");
        break;
    case 6:
        console.log("Sestdiena");
        break;
    case 7:
        console.log("Svētdiena");
        break;
}