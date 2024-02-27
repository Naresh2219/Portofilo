const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.getElementById(this.hash.slice(1));
    smoothScrollTo(targetSection);
  });
});

const learnMoreButton = document.getElementById('learn-more-btn');
learnMoreButton.addEventListener('click', function (e) {
  e.preventDefault();
  const aboutSection = document.getElementById('about');
  smoothScrollTo(aboutSection);
});

function smoothScrollTo(targetElement) {
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value
  };

  // Log the form data to the console
  console.log('Submitted Form Data:', formData);

  // You can perform other actions here, such as sending the data to a server
});

