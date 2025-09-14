// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form handler
function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    alert('Please fill name and email');
    return;
  }
  alert(`Thanks ${name}, your message is prepared!`);
  document.querySelector('form').reset();
}