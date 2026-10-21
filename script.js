const openLetter = document.getElementById('openLetter');
const letterContent = document.getElementById('letterContent');
const buttonText = document.getElementById('buttonText');
openLetter.addEventListener('click', () => {
  const isOpen = openLetter.getAttribute('aria-expanded') === 'true';
  openLetter.setAttribute('aria-expanded', String(!isOpen));
  letterContent.hidden = isOpen;
  buttonText.textContent = isOpen ? 'Abrir minha cartinha' : 'Fechar cartinha';
  if (!isOpen) setTimeout(() => letterContent.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
});
