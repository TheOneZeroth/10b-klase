/*
let Turpināt = true;
while (Turpināt = true) {
    let user = prompt("Turpināt ? Y/N");
    if (user.toLowerCase() == "n") {
        Turpināt = false;
    }
}
console.log("end while")
*/

let turpinat = true;
let masivs = [];

while (turpinat = true) {
    let user = parseFloat(prompt("Enter a positive number"));
    if (user == null) {
        turpinat = false;
    }
    else {
        masivs.push(user);
    }
}
console.log(masivs);
let sum = 0;
for (i = 0; i < masivs.length; i++) {
    sum += masivs[i];
    videjais = sum / masivs.length
}
console.log(videjais);

