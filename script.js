document.addEventListener("DOMContentLoaded", () => {
    const newProject = document.querySelector('.newProject');
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const icon = hamburger.querySelector("i");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        icon.classList.add("rotate-out");

        icon.addEventListener('animationend', () => {

            icon.classList.remove("rotate-out");

            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            icon.classList.add("rotate-in");

            icon.addEventListener('animationend', () => {
                icon.classList.remove("rotate-in");
            }, { once: true });

        }, { once: true });
    });

    projectsArray.forEach((project) => {
        newProject.innerHTML += `
    <div class="projectCard" data-aos="${project.aos.animation}" data-aos-duration="${project.aos.duration}" data-aos-easing="${project.aos.easing}">
      <video src="${project.video}" controls autoplay muted loop style="width: 100%; border-radius: 12px; margin-bottom: 1rem;"></video>
      <h3>${project.title}<span>${project.span}</span></h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech}</p>
      <div class="project-link">
        <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  `;
    });

    AOS.refresh();
});

const modeSelector = document.getElementById('modes');

const savedMode = localStorage.getItem('mode');
if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    modeSelector.value = 'light';
}

modeSelector.addEventListener('change', function () {
    if (this.value === 'light') {
        document.body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('mode', 'dark');
    }
});