document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const fuzzy = document.querySelector(".fuzzy-text");
fuzzy.setAttribute("data-text", fuzzy.textContent);


// Scroll Button
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

// Header
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.style.top = '-100px'; 
  } else {
    header.style.top = '0'; 
  }
  lastScrollY = window.scrollY;
});

if (!localStorage.getItem('visited')) {
  alert('Welcome to The Academic! Explore your research journey.');
  localStorage.setItem('visited', 'true');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const lines = document.querySelectorAll(".about-line, .contact-line");
lines.forEach((el, i) => {
  el.style.animationDelay = `${0.4 + i * 0.3}s`;
});
