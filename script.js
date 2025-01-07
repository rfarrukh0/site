particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded');
  });
  
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
  
  document.body.classList.add('light');
  