function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  }

//   function showSection(sectionId) {
//     document.querySelectorAll('.spa-section').forEach(section => {
//       section.classList.remove('active');
//     });
//     const active = document.getElementById(sectionId);
//     if (active) active.classList.add('active');
//   }

function showSection(sectionId) {
    const current = document.querySelector('.spa-section.active');
    const next = document.getElementById(sectionId);
  
    if (current && current !== next) {
      current.classList.remove('active');
      setTimeout(() => {
        if (next) next.classList.add('active');
      }, 400);
    } else if (!current && next) {
      next.classList.add('active');
    }
  }
  

  function handleHashChange() {
    const section = window.location.hash.substring(1) || 'about';
    showSection(section);
  }

  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('load', handleHashChange);

  const projects = {
    ensign: {
      title: "TeamDynamix Ticket Template (Ensign College)",
      content: `
        <p>This project involved creating a ticket template system for IT service requests at Ensign College using TeamDynamix. 
        The goal was to streamline issue intake and improve resolution speed.</p>
        <ul>
          <li>Custom form creation</li>
          <li>Automation with workflow rules</li>
          <li>End-user interface design</li>
        </ul>
      `
    },
    portfolio: {
      title: "This Portfolio",
      content: `
        <p>This is a single-page application built with HTML, CSS, and vanilla JavaScript. 
        It’s hosted on GitHub Pages and showcases my web and cybersecurity projects.</p>
        <ul>
          <li>Fully responsive layout</li>
          <li>SPA routing using hash navigation</li>
          <li>Custom-built transitions and UI</li>
        </ul>
      `
    }
  };
  
  function loadProject(key) {
    const project = projects[key];
    if (!project) return;
  
    const container = document.getElementById("project-content");
    container.innerHTML = `
      <h2>${project.title}</h2>
      ${project.content}
    `;
    window.location.hash = "project-details";
  }
  
  function clearProject() {
    const container = document.getElementById("project-content");
    container.innerHTML = "";
  }  