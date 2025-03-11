document.querySelector('.email-output').textContent = sessionStorage.getItem('email');

const button = document.querySelector('button');

button.addEventListener('click', function(){
    window.location.replace('index.html');
})