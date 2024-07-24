document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);

function handleFormSubmission(e) {
  e.preventDefault();
  
  const formElements = e.target.elements;
  const fullName = formElements.fullName.value.trim();
  const email = formElements.email.value.trim();
  const subject = formElements.subject.value.trim();
  const message = formElements.message.value.trim();

  if (validateForm(fullName, email, subject, message)) {
    alert('Form submitted successfully!');
      }
}

function validateForm(fullName, email, subject, message) {
  if (!fullName || !email || !subject || !message) {
    alert('Please fill all the fields.');
    return false;
  }
  return true;
}

window.addEventListener('error', function (event) {
  console.error('Error:', event.message, 'at', event.filename, ':', event.lineno);
});
