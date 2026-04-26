// Animate numbers counting up when stats section is visible
const nums = document.querySelectorAll('.num');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = el.textContent;
      const isPercent = target.includes('%');
      const end = parseInt(target);
      let current = 0;
      const step = Math.ceil(end / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, end);
        el.textContent = current + (isPercent ? '%' : '');
        if (current >= end) clearInterval(timer);
      }, 30);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

nums.forEach(n => observer.observe(n));
