//Modals
document.addEventListener('DOMContentLoaded', () => {

  const honors = [
    "Fall 2021 – Dean's List",
    "Spring 2022 – Dean's List",
    "Fall 2022 – Dean's List",
    "Spring 2023 – Dean's List",
    "Fall 2023 – Dean's List",
    "Spring 2024 – Dean's List",
    "Fall 2024 – Dean's List",
    "Spring 2025 – Dean's List",
    "Summa Cum Laude"
  ];

  function openModal(options){
    const modal = document.createElement("div");
    modal.classList.add("modal");
    if(options.fullscreen) modal.classList.add("fullscreen");

    modal.innerHTML = `
      <div class="modal-content">
        <button class="close">X</button>
        ${options.html || (options.file ? `<iframe src="images/Z_images/${options.file}"></iframe>` : '')}
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = "flex";

    // Close modal
    modal.querySelector(".close").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", e => { if(e.target === modal) modal.remove(); });
  }

  document.body.addEventListener("click", e => {
    if(e.target && e.target.id === "honorsClick"){
      let content = "<h2>Academic Honors</h2><ul>";
      honors.forEach(h => content += `<li>${h}</li>`);
      content += "</ul>";
      openModal({ html: content });
    }

    if(e.target && e.target.classList.contains('clickable') && e.target.dataset.file){
      const file = e.target.dataset.file;
      if(file === "transcript") openModal({ file: "Transcript.pdf", fullscreen: true });
      else if(file === "diploma") openModal({ file: "Diploma.pdf" });
      else if(file === "rewards") openModal({ html: "<p>No rewards document available.</p>" });
    }
  });

});



//Project Back Buttons

window.addEventListener("load", () => {
  if (location.hash === "#projects-anchor") {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const projects = document.getElementById("projects");
    if (projects) projects.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash; // #projects?cat=cyber

  if (!hash.startsWith("#projects")) return;

  // Activate projects view
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const projectsView = document.getElementById("projects");
  if (projectsView) projectsView.classList.add("active");

  // Read category from URL
  const query = hash.split("?")[1];
  if (!query) return;

  const params = new URLSearchParams(query);
  const cat = params.get("cat"); // cyber / network / software

  if (!cat) return;

  // Open correct category
  const btn = document.querySelector(`.cat-toggle[data-target="${cat}"]`);
  if (btn) {
    btn.classList.add("open");
    btn.click(); // triggers your existing logic
  }
});



//Arrow1
let lastClickedFolder = null;

document.querySelectorAll('.folder').forEach(folder => {
  folder.addEventListener('click', () => {
    lastClickedFolder = folder.dataset.target;
    console.log("Clicked:", lastClickedFolder); 
    
  });
});


document.getElementById('backArrow1').addEventListener('click', () => {
  if (lastClickedFolder) {
    const folder = document.querySelector(`.folder[data-target="${lastClickedFolder}"]`);
    if (folder) {
      folder.click(); 
    }
  }
});


//Powwer Button
document.getElementById('closeBtn').addEventListener('click', () => {
  
  document.body.style.transition = 'opacity 0.5s';
  document.body.style.opacity = 0;

  setTimeout(() => {
    window.location.href = 'about:blank';
  }, 500);
});


