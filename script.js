const inputs = document.querySelectorAll('.input-field');
const button = document.querySelector('.login-submit-button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('active-span');
};

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('active-span');
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  // Valida se o nome de usuário foi preenchido e a senha tem pelo menos 8 caracteres
  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));