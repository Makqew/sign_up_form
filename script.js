const password = document.getElementById('password1');
const password2 = document.getElementById('password2');
const inputs = document.getElementsByTagName("input");

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



for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", (event) => {
        if (!inputs[i].validity.valid) {
            inputs[i].style.border = " 2px solid red";
        } else {
            inputs[i].style.border = " 2px solid #d8dae1";
        }
    })
}


function verify() {
    let j = 0;
    do{
        if(!inputs[j].validity.valid){
            inputs[j].style.border = "2px solid red";
            j = inputs.length;
            console.log('bruh!')
        }
        else {
            inputs[j].style.border = "2px solid #d8dae1";
            j++;
            console.log('bruw!')
        }
    } while( j < inputs.length); 
}