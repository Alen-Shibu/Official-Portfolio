document.querySelectorAll('[data-scroll]').forEach(el => {
  el.style.cursor = 'pointer';
  el.addEventListener('click', () => {
    const target = document.getElementById(el.dataset.scroll);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Close mobile nav if open
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  });
});
 
/* ─── Tab functionality (About section) ─── */
const tabLinks    = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');
 
function openTab(event, tabName) {
  tabLinks.forEach(link => link.classList.remove('active-link'));
  tabContents.forEach(content => content.classList.remove('active-tab'));
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}
 
/* ─── Services Modal ─── */
document.querySelectorAll('.open').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('show');
  });
});
 
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.closest('.modal-container').classList.remove('show');
  });
});
 
document.querySelectorAll('.modal-container').forEach(container => {
  container.addEventListener('click', e => {
    if (e.target === container) container.classList.remove('show');
  });
});
 
/* ─── Mobile Menu Toggle ─── */
const menuIcon = document.getElementById('menu-icon');
const navbar   = document.getElementById('nav');
 
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('fa-xmark');
});
 
document.addEventListener('click', e => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  }
});
 
/* ─── Hide Header on Scroll Down ─── */
const header = document.querySelector('header');
let lastScroll = 0;
 
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current <= 0) {
    header.classList.remove('hide');
  } else if (current > lastScroll) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScroll = current;
});
 

