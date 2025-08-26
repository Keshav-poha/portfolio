(function() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const initial = saved || (prefersDark ? 'dark' : 'light');
  setTheme(initial);

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    updateToggle(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  }

  function updateToggle(theme) {
    document.querySelectorAll('.theme-toggle .icon').forEach(function(el) {
      el.textContent = theme === 'light' ? '🌙' : '☀️';
    });
  }

  document.addEventListener('click', function(e) {
    if (e.target.closest('.theme-toggle')) {
      toggleTheme();
    }
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();


