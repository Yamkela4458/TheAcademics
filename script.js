// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle + persistence
const darkToggle = document.getElementById('toggle-dark');
const darkPref = localStorage.getItem('dark-mode');
if (darkPref === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
});

// Floating animated words
const words = ['Research', 'Thesis', 'Citation', 'Review', 'Scholar', 'Open Access', 'Peer Review', 'Academic'];
function createFloatingWord() {
  const word = document.createElement('div');
  word.className = 'floating-word';
  word.innerText = words[Math.floor(Math.random() * words.length)];
  word.style.top = Math.random() * 100 + 'vh';
  word.style.left = Math.random() * 100 + 'vw';
  word.style.animationDuration = (10 + Math.random() * 20) + 's';
  document.body.appendChild(word);
  setTimeout(() => document.body.removeChild(word), 20000);
}
setInterval(createFloatingWord, 1500);

// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆️ Top';
scrollBtn.id = 'scrollToTop';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border: none;
  background: gray;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Header hide/show on scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.style.top = '-100px'; // hide
  } else {
    header.style.top = '0'; // show
  }
  lastScrollY = window.scrollY;
});

// Greet user on first visit
if (!localStorage.getItem('visited')) {
  alert('🎓 Welcome to The Academic! Explore your research journey.');
  localStorage.setItem('visited', 'true');
}

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



