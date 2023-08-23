const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

// const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {

  e.preventDefault();

  validateInputs();

});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = userEmail => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(userEmail).toLowerCase());
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const numberValue = number.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(firstNameValue === '') {
    setError(firstName, 'First Name is required');
  } else {
    setSuccess(firstName);
  }

if(lastNameValue === '') {
  setError(lastName, 'Last Name is required');
} else {
  setSuccess(lastName);
}

if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}

if(passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

if(password2Value === '') {
    setError(password2, 'Please confirm your password');
} else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
} else {
    setSuccess(password2);
}

};




// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (firstName.value === '' || firstName.value == null) {
//     messages.push('First Name is required');
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
  
// })



// function checkPassword() {
//   let password = document.querySelector("#password").value;
//   let confirmPassword = document.querySelector("#confirmPassword").value;
//   let message = document.querySelector("#message");
  
//   if(password.length != 0) {
//     if(password == confirmPassword) {
//       message.textContent = "Passwords Match";
//     } else {
//       message.textContent = "Password doesn't match";
//     }

