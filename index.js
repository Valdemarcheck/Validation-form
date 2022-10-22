// Add an event listener for each input
// If button's input is invalid, put an explanation of why it is wrong
// Make confirmation input invalid if it doesn't match password

const first_name = document.querySelector("#first_name")
const last_name = document.querySelector("#last_name")
const email = document.querySelector("#email")
const tel = document.querySelector("#phone_number")
const password = document.querySelector("#password")
const password_confirm = document.querySelector("#password_confirm")
const form = document.querySelector('form');
const inputs = [first_name, last_name, email, tel, password]

password_confirm.addEventListener('input', () => {
    if (password_confirm.value != password.value) {
        password_confirm.setCustomValidity('Your passwords don\'t match');
        password_confirm.reportValidity();
    }
});

form.addEventListener('submit', (event) => {
    const form_target = event.target;

    if (form_target.checkValidity()) {
        event.preventDefault();
    }
});