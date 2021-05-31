const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const button = document.getElementById('button');
const emailInput = document.getElementById('email-input');
const emailForm = document.getElementById('email-form');
const errorMessage = document.getElementById('error-message');



document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (emailInput.value === '' || !filter.test(emailInput.value)) {

            errorMessage.classList.remove('hide');

            setTimeout(function () {
                errorMessage.classList.add('hide');
            }, 4000);

            return;
        }
    })
})