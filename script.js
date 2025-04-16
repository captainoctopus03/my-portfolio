function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  }

  function showSection(sectionId) {
    document.querySelectorAll('.spa-section').forEach(section => {
      section.classList.remove('active');
    });
    const active = document.getElementById(sectionId);
    if (active) active.classList.add('active');
  }

  function handleHashChange() {
    const section = window.location.hash.substring(1) || 'about';
    showSection(section);
  }

  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('load', handleHashChange);