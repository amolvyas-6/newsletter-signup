const errorMsg = document.querySelector('.error-msg');

const form = document.querySelector('.container-form');
const emailInput = form.email;

const submitBtn = document.querySelector('.form-submit-button');

const emailOutput = document.querySelector('.email-output');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    const email = emailInput.value;
    console.log(email);

    if(email.indexOf('@') == -1 || email.indexOf('.com') == -1 || email.indexOf('.com') - email.indexOf('@') < 5){
        errorMsg.classList.toggle('hidden');
        emailInput.classList.toggle('error-input');
    }
    else{
        sessionStorage.setItem('email', email);
        window.location.replace('/success.html');
    }
})

emailInput.addEventListener('input', function(){
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('error-input');
})
