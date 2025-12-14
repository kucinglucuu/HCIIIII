const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});


const videoEl = document.querySelector('.video-container video');
if (videoEl) {
videoEl.addEventListener('click', () => {
if (videoEl.paused) {
videoEl.play();
} else {
videoEl.pause();
}
});
}

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const support = document.getElementById('support').value;
  const message = document.getElementById('message').value.trim();
  const terms = document.getElementById('terms').checked;

  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  }

  if (!email.includes('@')) {
    document.getElementById('emailError').textContent = 'Email must contain @';
    valid = false;
  }

  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < '0' || phone[i] > '9') {
      document.getElementById('phoneError').textContent = 'Phone must contain numbers only';
      valid = false;
      break;
    }
  }

  if (support === '') {
    document.getElementById('supportError').textContent = 'Please select support type';
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
    valid = false;
  }

  if (!terms) {
    document.getElementById('termsError').textContent = 'You must agree to the Terms';
    valid = false;
  }

  if (valid) {
    alert('Message sent successfully!');
    form.reset();
  }
});
