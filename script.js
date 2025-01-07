particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded');
  });
  
  document.body.classList.add('dark');

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.textContent = '☀️';
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
  