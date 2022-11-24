const password = document.getElementById('password1');
const password2 = document.getElementById('password2');
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

password2.addEventListener("input", (event) => {
if (password2.validity.patternMismatch === true) {
    password2.setCustomValidity("Minimum eight characters, at least one letter and one number");
    password2.reportValidity();
    password2.style.border = " 2px solid red"
} else if(password2.value !== password.value) {
    password2.setCustomValidity("Passwords are not the same");
    password2.reportValidity();
    password2.style.border = " 2px solid red"
} else {
    password2.setCustomValidity("");
    password2.style.border = " 2px solid #d8dae1 "
}
});

function verify() {
    let inputs = document.getElementsByTagName("input");
    let i = 0;
    do{
        if(!inputs[i].validity.valid){
            inputs[i].style.border = "2px solid red";
            i = inputs.length;
        }
        else {
            inputs[i].style.border = "2px solid #d8dae1 ";
            i++;
        }
    } while( i < inputs.length); 
}