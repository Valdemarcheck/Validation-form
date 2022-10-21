// Import all input elements
// Add an event listener for each input
// If button's input is invalid, put an explanation of why it is wrong
// Make confirmation input invalid if it doesn't match password
// Add event listener for submit button
// Submit only if all buttons are valid
// Otherwise don't allow submition

const submit = document.getElementById("button[type='submit']")
const first_name = document.getElementById("#first_name")
const last_name = document.getElementById("#last_name")
const email = document.getElementById("#email")
const tel = document.getElementById("#phone_num")
const password = document.getElementById("#password")
const password_confirm = document.getElementById("#password_confirm")

const inputs = [first_name, last_name, email, tel, password, password_confirm]