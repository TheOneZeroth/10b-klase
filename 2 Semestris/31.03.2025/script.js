
function myFunction() {
    let h10bj = document.getElementById("myh1");

    let user_name = document.getElementById("input_name");
    let surname = document.getElementById("input_surname");
    let user_age = document.getElementById("input_age")
    console.log(h10bj.innerHTML = "Hello" + " " + user_name.value);
    console.log(surname.value);
    console.log(user_age.value);

    if (user_age.value < 0 ||!user_age.value.match(/[0-9]/)) {
        alert("Error: age is not correct");
        return;
    }

    if (user_name.value == "" || !user_name.value.match(/[A-z]/)) {
        alert("Error: name is not correct");
        return;
    }

    if (surname.value == "" || !surname.value.match(/[A-z]/)) {
        alert("Error: surname is not correct");
        return;
    }

    let table = document.getElementById("mytable");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    cell1.innerHTML = user_name.value;
    cell2.innerHTML = surname.value;
    cell3.innerHTML = user_age.value;
}

