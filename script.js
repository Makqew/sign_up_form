const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeatPassword');
const inputsList = document.getElementsByTagName('input');

password.addEventListener("input", (event) => {
    if (password.validity.patternMismatch) {
      password.setCustomValidity("Minimum eight characters, at least one letter and one number");
      password.reportValidity();
      console.log('brother');
      password.style.border = " 2px solid red"
    } else {
      password.setCustomValidity("");
      password.style.border = " 2px solid #d8dae1 "
    }
  });

repeatPassword.addEventListener("input", (event) => {
if (repeatPassword.validity.patternMismatch === true) {
    repeatPassword.setCustomValidity("Minimum eight characters, at least one letter and one number");
    repeatPassword.reportValidity();
    repeatPassword.style.border = " 2px solid red"
} else if(repeatPassword.value !== password.value) {
    repeatPassword.setCustomValidity("Passwords are not the same");
    repeatPassword.reportValidity();
    repeatPassword.style.border = " 2px solid red"
} else {
    repeatPassword.setCustomValidity("");
    repeatPassword.style.border = " 2px solid #d8dae1 "
}
});



for (let i = 0; i < inputsList.length; i++){
    inputsList[i].addEventListener("input", (event) => {
        if (!inputsList[i].validity.valid) {
            inputsList[i].style.border = " 2px solid red";
        } else {
            inputsList[i].style.border = " 2px solid #d8dae1";
        }
    })
}


function verify() {
    let j = 0;
    do{
        if(!inputsList[j].validity.valid){
            inputsList[j].style.border = "2px solid red";
            j = inputsList.length;
            console.log('bruh!')
        }
        else {
            inputsList[j].style.border = "2px solid #d8dae1";
            j++;
            console.log('bruw!')
        }
    } while( j < inputsList.length); 
}