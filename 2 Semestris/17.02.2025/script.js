//alert("Hello World!");
//console.log("Hello World!");
/*
let x = 5;
let y = 10;
let summa = x + y;
alert("summa ir " + summa );
console.log("summa ir "+ (x + y) );
*/
/*
let number = prompt("Enter number: "); //pārbauda vai ievadītā vērtība ir lielāka,mazāka vai vienāda ar 0

if (number > 0){
    console.log("Positive");  
} else if (number < 0){
    console.log("Negatīvs");
} else if (number == 0){
    console.log("ir vienāds ar 0");
}
*/

let age = 19;
let citizenship = false;

if (age >= 18 && citizenship == true){
    console.log("Var balsot")
} else if(age < 18 && citizenship){
    console.log("ir pilsonis, bet nav 18 gadi")
} else if(age >= 18 && citizenship != true){
    console.log("Ir 18, bet nav pilsonis ")
}

