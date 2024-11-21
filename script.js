document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  setInterval(() => {
    hero.style.background = hero.style.background === 'linear-gradient(to bottom, #a18cd1, #fbc2eb)'
      ? 'linear-gradient(to bottom, #fbc2eb, #a18cd1)'
      : 'linear-gradient(to bottom, #a18cd1, #fbc2eb)';
  }, 5000);
});
