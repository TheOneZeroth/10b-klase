//let diena = parseInt(prompt("Lūdzu ievadi nedēļas dienu 1-7"));

document.write('<input type="number" id="dienaInput" min="1" max="7" placeholder="Ievadi dienu 1-7">');
document.write('<button onclick="checkDay()">Pārbaudīt</button>');

function checkDay() {
    let diena = parseInt(document.getElementById('dienaInput').value);
    switch(diena) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("darbdiena");
            break;
        case 6:
        case 7:
            console.log("brīvdiena");
            break;
        default:
            console.log("Nederīga diena");
    }
}