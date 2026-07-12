/* ===========================================================
   مذاق — script.js
   Every feature block below is wrapped in its own try/catch.
   This means a failure in one feature (e.g. the hero slider)
   can never stop the rest of the page's scripts from running —
   each section fails independently instead of the whole file
   halting on the first thrown error.
   =========================================================== */

/* ============ Preloader ============ */
try {
  const pre = document.getElementById('preloader');
  if (pre) {
    let hidden = false;
    const hidePreloader = () => {
      if (hidden) return;
      hidden = true;
      pre.classList.add('is-done');
    };
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(hidePreloader, 400);
    } else {
      document.addEventListener('DOMContentLoaded', () => setTimeout(hidePreloader, 400));
    }
    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 2500); // absolute fallback, in case load never fires
  }
} catch (err) { console.warn('Preloader init skipped:', err); }

/* ============ Sticky header + back-to-top ============ */
try {
  const header = document.getElementById('siteHeader');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 60);
    if (backTop) backTop.classList.toggle('is-visible', window.scrollY > 500);
  });
} catch (err) { console.warn('Header scroll behavior skipped:', err); }

/* ============ Mobile nav ============ */
/* The toggle is a <label for="navCheckbox">, so clicking it already
   works with zero JS (native checkbox behavior drives the CSS).
   This only adds auto-close when a nav link is tapped. */
try {
  const navCheckbox = document.getElementById('navCheckbox');
  const mainNav = document.getElementById('mainNav');
  if (navCheckbox && mainNav) {
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { navCheckbox.checked = false; });
    });
  }
} catch (err) { console.warn('Mobile nav auto-close skipped:', err); }

/* ============ Active nav link on scroll ============ */
try {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = 'hero';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });
  }
} catch (err) { console.warn('Active nav highlight skipped:', err); }

/* ============ Scroll reveal (fail-safe) ============ */
/* Elements are visible by default in CSS. We only add the hidden
   starting state (.pre-reveal) right before wiring the observer,
   so a failure here can never leave content permanently invisible. */
try {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(el => el.classList.add('pre-reveal'));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => revealObserver.observe(el));
  }
} catch (err) { console.warn('Reveal animation skipped:', err); }

/* ============ Hero slider autoplay ============ */
/* The slider already works via pure CSS radio inputs (click a dot →
   radio checked → CSS shows that slide) with zero JS needed. This
   block only adds automatic cycling on top, when JS is available. */
try {
  const heroRadios = document.querySelectorAll('input[name="heroSlide"]');
  if (heroRadios.length) {
    let heroIndex = 0;
    let heroTimer = setInterval(() => {
      heroIndex = (heroIndex + 1) % heroRadios.length;
      heroRadios[heroIndex].checked = true;
    }, 5500);
    // If the person manually clicks a dot, sync our counter and restart the timer
    heroRadios.forEach((radio, i) => {
      radio.addEventListener('change', () => {
        if (radio.checked) heroIndex = i;
        clearInterval(heroTimer);
        heroTimer = setInterval(() => {
          heroIndex = (heroIndex + 1) % heroRadios.length;
          heroRadios[heroIndex].checked = true;
        }, 5500);
      });
    });
  }
} catch (err) { console.warn('Hero slider autoplay skipped:', err); }

/* ============ Stats count-up ============ */
/* The real numbers are already in the HTML by default (never "0").
   This only replaces them with an animated count-up IF the observer
   successfully initializes — so a JS failure never leaves a 0 showing. */
try {
  const statEls = document.querySelectorAll('.stat');
  if ('IntersectionObserver' in window && statEls.length) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const numEl = el.querySelector('.stat-num');
        if (!numEl || Number.isNaN(target)) return;
        const duration = 1600;
        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          numEl.textContent = Math.floor(eased * target).toLocaleString('ar-EG');
          if (progress < 1) requestAnimationFrame(tick);
          else numEl.textContent = target.toLocaleString('ar-EG');
        };
        numEl.textContent = (0).toLocaleString('ar-EG');
        requestAnimationFrame(tick);
        statObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    statEls.forEach(el => statObserver.observe(el));
  }
} catch (err) { console.warn('Stats count-up skipped:', err); }

/* ============ Menu filter ============ */
/* Already works with zero JS via CSS radio inputs + :checked
   selectors. This just keeps script.js's other behaviors in sync
   (no extra work needed — the labels natively toggle the radios). */

/* ============ Testimonial slider ============ */
/* Works with zero JS via CSS radio inputs + :checked selectors
   (clicking a dot). This just adds automatic cycling on top. */
try {
  const tRadios = document.querySelectorAll('input[name="tSlide"]');
  if (tRadios.length) {
    let tIndex = 0;
    const goTo = (i) => {
      tIndex = (i + tRadios.length) % tRadios.length;
      tRadios[tIndex].checked = true;
    };
    tRadios.forEach((radio, i) => {
      radio.addEventListener('change', () => { if (radio.checked) tIndex = i; });
    });
    setInterval(() => goTo(tIndex + 1), 6000);
  }
} catch (err) { console.warn('Testimonial slider skipped:', err); }

/* ============ Contact form (demo) ============ */
try {
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (contactForm && formNote) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.textContent = 'تم استلام طلبك، سنتواصل معك قريبًا لتأكيد الحجز 🌿';
      contactForm.reset();
    });
  }
} catch (err) { console.warn('Contact form skipped:', err); }