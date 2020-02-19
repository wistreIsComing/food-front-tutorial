let btn = document.getElementById("cta-btn");
let overlay = document.getElementById('overlay');
btn.addEventListener('click', () => {
  overlay.style.display = 'grid';
  overlay.classList.add('animate-overlay');
  // PENDING ASSIGNMENT: find out how to remove class after animation ending
})