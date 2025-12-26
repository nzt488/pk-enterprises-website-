const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.onclick = () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.right = '20px';
  nav.style.background = '#0f172a';
  nav.style.padding = '16px';
  nav.style.borderRadius = '8px';
};
