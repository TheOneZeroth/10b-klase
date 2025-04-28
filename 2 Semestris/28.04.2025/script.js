function myFunction() {
    const nameObj = document.getElementById("user_name");
    const surnameObj = document.getElementById("user_surname");
    const URLObj = document.getElementById("user_url");

    console.log(nameObj.value);
    console.log(surnameObj.value);
    console.log(URLObj.value);

    localStorage.setItem("name", nameObj.value);
    localStorage.setItem("surname", surnameObj.value);
    localStorage.setItem("url", URLObj.value);
}