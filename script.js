
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => sec.style.opacity = 1, 400);
  });
});
