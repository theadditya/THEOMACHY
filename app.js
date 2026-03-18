function handleJoin() {
    const inp = document.getElementById('email-input');
    const msg = document.getElementById('join-msg');
    const v = inp.value.trim();
    if (!v || !v.includes('@')) {
      msg.style.color = '#f87171';
      msg.textContent = 'Please enter a valid email address.';
      return;
    }
    msg.style.color = '#a855f7';
    msg.textContent = '⚡ You\'re on the list! Welcome to THEOMACHY, hero.';
    inp.value = '';
  }

  // Scroll animations
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .step, .concept-point').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
  });