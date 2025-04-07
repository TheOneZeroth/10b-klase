
function myFunction() {
    let vards = "toms";
    let vecums = 18;
    console.log(vards, vecums);
    let irPilsonis = true;  
    if (vecums >= 18, irPilsonis == false) {
        console.log("persona ir pilngadīga, bet nav pilsonis");
    }
    else if (vecums < 18, irPilsonis == true) {
        console.log("persona ir nepilngadīga, bet ir pilsonis");
    }
    else if (vecums < 18, irPilsonis == false) {
        console.log("persona ir nepilngadīga un nav pilsonis");
    }
    else (console.log("Persona var balsot)"));
}

function getResult() {
    let score = document.getElementById("score").value;
    if (score <= 49) {
        console.log("Slikti")
    }
    else if (score <= 69) {
        console.log("Vidēji")
    }
    else if (score <= 89) {
        console.log("Labi")
    }
    else if (score <= 100) {
        console.log("Izcili")
    }
    else {
        console.log("Ievadiet skaitli no 0 līdz 100")
    }
}

arr = []
for (let i = 0; i <= 5; i++) {
    console.log(arr);
    arr.push(i);
}

for (let i = 4; i > 0-1 ; i--) {
    console.log(arr[i]);
}