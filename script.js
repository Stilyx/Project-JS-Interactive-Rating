const result = document.querySelector('.rate-result');
const buttons = document.querySelectorAll('.rate-button');
const submit = document.querySelector('.submit-button');
const content = document.querySelector('.rate-content');
const placeholder = document.querySelector('.rate-star-result');
const p = document.createElement('p');
p.classList.add('message-error');
content.appendChild(p);

const submitEvent = () => {
  buttons.forEach(submitError);
};

const getValuesEvent = button => {
  button.addEventListener('click', e => {
    const text = e.target.innerText;
    button.classList.toggle('active');
    const isActive = button.classList.contains('active');

    if (isActive) {
      const removeClass = button => button.classList.remove('active');
      buttons.forEach(removeClass);
    }

    button.classList.add('active');
    p.style.display = 'none';
    placeholder.innerText = `You selected ${text} out of 5`;
  });
};

const submitError = button => {
  if (button.classList.contains('active')) {
    submit.parentNode.style.display = 'none';
    result.style.display = 'block';
  } else {
    submit.classList.add('error');
    setTimeout(() => {
      submit.classList.remove('error');
    }, 500);
    p.innerText = 'Please leave your review';
  }
};

submit.addEventListener('click', submitEvent);
buttons.forEach(getValuesEvent);
