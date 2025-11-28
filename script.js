// script.js - minimal interactions for the hero
document.addEventListener('DOMContentLoaded', () => {
  // set year in footer if present
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // subtle parallax on mouse move for radial glow and blobs
  const hero = document.getElementById('hero');
  const glow = document.querySelector('.radial-glow');
  const blobL = document.querySelector('.blob-left');
  const blobR = document.querySelector('.blob-right');

  if (hero && glow) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // move glow and blobs slightly for depth
      glow.style.transform = `translate3d(${x * 40}px, ${y * 12}px, 0)`;
      if (blobL) blobL.style.transform = `translate3d(${x * -22}px, ${y * -18}px, 0)`;
      if (blobR) blobR.style.transform = `translate3d(${x * 32}px, ${y * 12}px, 0)`;
    });

    hero.addEventListener('mouseleave', () => {
      glow.style.transform = '';
      if (blobL) blobL.style.transform = '';
      if (blobR) blobR.style.transform = '';
    });
  }

  // Hero CTA focus accessibility: keyboard highlight
  const ctas = document.querySelectorAll('.hero-ctas .btn');
  ctas.forEach(btn => {
    btn.addEventListener('focus', () => btn.classList.add('focused'));
    btn.addEventListener('blur', () => btn.classList.remove('focused'));
  });

  // basic click demo for Get Started (remove in production)
  const getStarted = document.querySelector('.btn-primary');
  if (getStarted) {
    getStarted.addEventListener('click', (e) => {
      e.preventDefault();
      // subtle micro-interaction: pulse then proceed
      getStarted.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.98)' }, { transform: 'scale(1)' }],
        { duration: 260, easing: 'ease-out' }
      );
      // placeholder action:
      // window.location.href = '/signup';
    });
  }
});

// script.js - for About page interactions & basic accessibility
document.addEventListener('DOMContentLoaded', () => {
  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // simple parallax for about hero radial glow & blobs
  const hero = document.getElementById('aboutHero');
  const glow = document.querySelector('.radial-glow.small');
  const blobL = document.querySelector('.blob-left');
  const blobR = document.querySelector('.blob-right');

  if (hero && glow) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      glow.style.transform = `translate3d(${x * 24}px, ${y * 10}px, 0)`;
      if (blobL) blobL.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
      if (blobR) blobR.style.transform = `translate3d(${x * 18}px, ${y * 8}px, 0)`;
    });

    hero.addEventListener('mouseleave', () => {
      glow.style.transform = '';
      if (blobL) blobL.style.transform = '';
      if (blobR) blobR.style.transform = '';
    });
  }

  // easy accessibility: keyboard focus for CTAs
  const ctas = document.querySelectorAll('.btn');
  ctas.forEach(btn => {
    btn.addEventListener('focus', () => btn.classList.add('focused'));
    btn.addEventListener('blur', () => btn.classList.remove('focused'));
  });

  // simple search enter key handler
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        // placeholder action — replace with real search integration as needed
        alert('Search for: ' + this.value);
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const searchInput = document.getElementById('searchInput');
  if(searchInput){
    searchInput.addEventListener('keydown', function(e){
      if(e.key==='Enter'){ e.preventDefault(); alert('Search for: '+this.value);}
    });
  }

  const form = document.getElementById('signinForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Sign-In submitted: '+form.email.value);
    });
  }
});

/* =========================
   GLOBAL VARIABLES & RESET
========================= */
:root{
  --bg-1:#000000;
  --bg-2:#0C0C0C;
  --wine-1:#7A0000;
  --wine-2:#8B0000;
  --accent-1:#FF4E4E;
  --accent-2:#FF6A6A;
  --text:#FFFFFF;
  --radius-md:15px;
  --radius-lg:25px;
  --trans:0.3s ease;
  --glass:rgba(255,255,255,0.05);
  --muted:rgba(255,255,255,0.6);
}

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family:'Poppins',sans-serif;
}

body{
  background: linear-gradient(180deg,var(--bg-1),var(--bg-2));
  color: var(--text);
  line-height:1.5;
}

.container{
  max-width:1200px;
  margin:0 auto;
  padding:0 1rem;
}

/* =========================
   HEADER
========================= */
.site-header{
  position:sticky;
  top:0;
  width:100%;
  z-index:999;
  backdrop-filter:blur(10px);
  background: rgba(0,0,0,0.5);
  padding:1rem 0;
}

.header-inner{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.brand{
  display:flex;
  align-items:center;
  gap:0.5rem;
}

.brand-title{
  font-size:1.5rem;
  font-weight:700;
  color: var(--text);
  text-decoration:none;
}

.nav .nav-list{
  display:flex;
  list-style:none;
  gap:1.25rem;
}

.nav-link{
  color: var(--text);
  text-decoration:none;
  font-weight:500;
  transition: var(--trans);
}

.nav-link:hover, .nav-link.active{
  color: var(--accent-2);
}

.nav-link.cta{
  padding:0.5rem 1rem;
  background: linear-gradient(90deg,var(--wine-1),var(--wine-2));
  border-radius: var(--radius-md);
  transition: var(--trans);
}

.nav-link.cta:hover{
  box-shadow:0 4px 12px rgba(255,78,78,0.6);
}

.header-actions{
  display:flex;
  align-items:center;
  gap:1rem;
}

.lang-select{
  background: var(--glass);
  border:none;
  border-radius: var(--radius-md);
  color: var(--text);
  padding:0.25rem 0.5rem;
}

.search-wrap{
  display:flex;
  align-items:center;
  gap:0.25rem;
  position:relative;
}

.search-input{
  padding:0.35rem 0.75rem;
  border-radius: var(--radius-md);
  border:1px solid rgba(255,255,255,0.2);
  background: var(--glass);
  color: var(--text);
  outline:none;
}

.search-input:focus{
  border-color: var(--accent-1);
  box-shadow:0 0 10px var(--accent-2);
}

.search-btn{
  background:none;
  border:none;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  color: var(--text);
}

/* =========================
   SIGN-UP FORM
========================= */
.signup-section{
  display:flex;
  justify-content:center;
  align-items:flex-start;
  min-height:90vh;
  padding:4rem 1rem;
}

.signup-card{
  background: linear-gradient(145deg,var(--wine-1),var(--wine-2));
  padding:2.5rem 2rem;
  border-radius: var(--radius-lg);
  box-shadow:0 20px 40px rgba(0,0,0,0.6);
  width:100%;
  max-width:600px;
  color:#fff;
  display:flex;
  flex-direction:column;
  gap:1rem;
  transition: var(--trans);
}

.signup-card:hover{
  box-shadow:0 25px 50px rgba(255,78,78,0.3);
}

.signup-card h2{
  text-align:center;
  margin-bottom:1rem;
}

.signup-card fieldset{
  border:none;
  margin-bottom:1rem;
}

.signup-card legend{
  font-weight:600;
  font-size:1.1rem;
  margin-bottom:0.5rem;
}

.signup-card label{
  display:block;
  margin-bottom:0.25rem;
  font-weight:500;
}

.signup-card input[type="text"],
.signup-card input[type="email"],
.signup-card input[type="password"],
.signup-card input[type="tel"],
.signup-card select,
.signup-card input[type="range"]{
  width:100%;
  padding:0.5rem 0.75rem;
  border-radius: var(--radius-md);
  border:1px solid rgba(255,255,255,0.2);
  background: var(--glass);
  color:#fff;
  margin-bottom:0.75rem;
  outline:none;
  transition: var(--trans);
}

.signup-card input:focus,
.signup-card select:focus{
  border-color: var(--accent-1);
  box-shadow:0 0 12px var(--accent-2);
}

.signup-card input[type="range"]{
  -webkit-appearance:none;
  height:6px;
  background: rgba(255,78,78,0.3);
  border-radius:3px;
}

.signup-card input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  width:18px;
  height:18px;
  border-radius:50%;
  background: var(--accent-2);
  cursor:pointer;
  transition: var(--trans);
}

.signup-card input[type="range"]::-webkit-slider-thumb:hover{
  box-shadow:0 0 8px var(--accent-2);
}

.signup-card button.btn-primary{
  background: linear-gradient(90deg,var(--accent-1),var(--accent-2));
  border:none;
  padding:0.75rem 1rem;
  border-radius: var(--radius-md);
  font-weight:600;
  cursor:pointer;
  transition: var(--trans);
}

.signup-card button.btn-primary:hover{
  transform: scale(1.05);
  box-shadow:0 8px 20px rgba(255,78,78,0.5);
}

.signup-footer{
  text-align:center;
  margin-top:1rem;
  font-size:0.9rem;
  color: var(--muted);
}

.signup-footer .link-accent{
  color: var(--accent-2);
  text-decoration:none;
  transition: var(--trans);
}

.signup-footer .link-accent:hover{
  text-decoration:underline;
}

/* CHECKBOXES */
.signup-card input[type="checkbox"]{
  margin-right:0.5rem;
}

/* =========================
   FOOTER
========================= */
.site-footer{
  padding:2rem 1rem;
  background: linear-gradient(180deg,var(--bg-1),var(--bg-2));
  color: var(--text);
}

.footer-inner{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  gap:2rem;
}

.footer-col h4{
  margin-bottom:0.5rem;
}

.footer-col a{
  color: var(--accent-2);
  text-decoration:none;
}

.footer-col a:hover{
  text-decoration:underline;
}

.social{
  display:flex;
  gap:0.5rem;
}

.social-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:32px;
  height:32px;
  border-radius:50%;
  background: var(--glass);
  color:#fff;
  text-decoration:none;
  transition: var(--trans);
}

.social-btn:hover{
  background: var(--accent-1);
  transform:scale(1.1);
}

/* =========================
   RESPONSIVENESS
========================= */
@media(max-width:768px){
  .header-inner{
    flex-direction:column;
    gap:0.5rem;
  }

  .nav .nav-list{
    flex-wrap:wrap;
    gap:0.5rem;
  }

  .signup-section{
    padding:2rem 1rem;
  }

  .signup-card{
    padding:2rem 1rem;
  }
}
