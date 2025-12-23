document.addEventListener('DOMContentLoaded', () => {
// Elements

  const dirButtons = document.querySelectorAll('.dir-btn, .folder');
  const views = document.querySelectorAll('.view');
  const projectItems = document.querySelectorAll('.cat-list li');
  const previewPane = document.getElementById('previewPane');
  const previewEmpty = document.getElementById('previewEmpty');
  const previewTitle = document.getElementById('previewTitle');
  const previewDesc = document.getElementById('previewDesc');
  const previewTech = document.getElementById('previewTech');
  const previewLink = document.getElementById('previewLink');
  const homePreview = document.getElementById('homePreview');
  const catOutput = document.getElementById('catOutput');
    


 

  
  // Home explorer data
  const EXPLORER_DATA = {
    skills:[
      "mmargosian@kali:~$ cat Technical.txt",
      "<a href='' target='' class='clickable'></a>Web: HTML · CSS\nDB: MySQL, MariaDB, SQLite\nOS: Linux, Windows\nOffice: 365 Apps/Admin, Entra\nRisk: NIST SP 800-30, Octave Allegro\nVirtualization/Cloud: Azure, DigitalOcean, Proxmox, VirtualBox",
      "\nmmargosian@kali:~$ cat Programming.txt",
      "<a href='' target='' class='clickable'></a>Languages: JavaScript, Java, C++, Python, PHP, Bash\nStack: Node.js, Laravel\nIDE: VSCode, Visual Studio, Android Studio",
      "\nmmargosian@kali:~$ cat Network_Tools.txt",
      "<a href='' target='' class='clickable'></a>Nessus · OpenVAS · OWASP ZAP · Wireshark · Nmap · Dmitry · The Harvester · Maltego · Barracuda"
    ],

    education:[
      "mmargosian@kali:~$ cat Gannon_University.txt",
      "<a href='' target='' class='clickable'></a>Gannon University (Erie, Pa) - Cybersecurity (B.S.)\nMinor: Business Administration\nGPA:3.9",
      "\n<a href='' target='' class='clickable'></a>Certifications:\nNinjaOne Technician · CJIS",
      "\n<a href='' target='' class='clickable'></a>Websites:\narmcybersuite.com",
      "\nmmargosian@kali:~$ ls",
      "<a href='' target='' class='clickable'></a>Gannon_University.txt   <span class='clickable' id='honorsClick'>Rewards</span> <span class='clickable' data-file='transcript'>Transcript.pdf</span>"
    ],

    experience:["Resume.pdf"],

    about: [
      "mmargosian@kali:~$ whois mattmargosian.com",
{
  html: `
    <div style="display:flex; gap:.5rem; align-items:flex-start;">
      <div style="flex:2;">
        <p style="margin:-30px 0 0.3rem 0;">I am a cybersecurity professional passionate about digital privacy and security. Skilled in penetration testing, network and web security, cryptography, incident response, and threat assessment, I apply these skills in both professional and academic settings.</p>
        <p style="margin:0 0 0.3rem 0;">Beyond tech, I’m committed to community outreach, education, and mentorship. I value authentic collaboration, whether leading youth teams, hosting cyber awareness events, or volunteering through school and church initiatives. My personal interests—camping, fishing, working out, and live music—reflect the same curiosity and discipline I bring to my work.</p>
        <p style="margin:0;">My goal is to leverage technology to help others adapt, connect, and foster sustainable, meaningful solutions.</p>
      </div>
      <div style="flex:1; display:flex; justify-content:center; align-items:flex-start;">
       <img src="images/Z_images/img.png" alt="Profile Image" style="max-width:100%; width:250px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.3);">

      </div>
    </div>
  `
}

    ],

    blog:["mmargosian@kali:~$ cat blogs.txt",
      "\n<a href='https://armcybersuite.com' target='_blank' class='clickable'>armCyberSuite.com</a> : Provides detailed websites security overviews: checks for phishing reports, analyzes domain registration, vulnerabilities, open ports, protocols, certificates, and 6ciphers. Includes additional security tools.",
      "\n<a href='https://pennpeptides.org' target='_blank' class='clickable'>PennPeptides.org</a> : Independent peptide research site focused on studying peptide interactions, tissue recovery, and anti-aging effects. Science-focused, non-commercial resource for enthusiasts and researchers.",
      "\n<a href='https://endexploits.com' target='_blank' class='clickable'>EndExploits.com</a> : Website raising awareness of online human trafficking and digital exploitation, covering victim demographics, recruitment tactics, and strategies for protection and policy reform.",
      ],

    contact:["Email: matt.margosian@gmail.com\nPhone: 814-402-0301"],
    
    projects:["Select 'projects/' to explore all project entries."]
  };




  // Terminal cat data
  
const CAT_DATA = {
  cyber: [
    'mmargosian@kali:~$ cat --description <span class="dir">Cybersecurity</span>',
        "\n",
    { text: "Network Penetration Test.pdf", desc: "Authorized network audit using Nmap, OpenVAS, and reports.", link: "projects/pentest.html" },
    { text: "Red vs Blue Assessment.pdf", desc: "Simulated adversary/defender engagements and reporting.", link: "projects/redteam.html" },
    { text: "Capture the Flag (BSidesROC).pdf", desc: "Participated in the BSidesROC CTF, solving cybersecurity challenges.", link: "projects/ctf.html" },
    { text: "Cyber Awareness Event.pdf", desc: "Hosted campus event teaching cyber hygiene.", link: "projects/hce.html" },
    { text: "ARP Cache Poisoning (Lab).pdf", desc: "MITM lab demonstrating ARP poisoning and mitigation.", link: "projects/arp.html" },
    { text: "Buffer Overflow Lab.pdf", desc: "Developed exploit payloads in a controlled VM lab.", link: "projects/buffer.html" },
    { text: "OWASP ZAP Automation.pdf", desc: "Automated scans and reporting via ZAP scripting.", link: "projects/owasp.html" },
    { text: "Nessus Host Audit.pdf", desc: "Validated vulnerabilities and remediation steps.", link: "projects/nessus.html" },
    { text: "Enumeration & OSINT.pdf", desc: "Facebook OSINT and VM network enumeration.", link: "projects/enumeration.html" },
    
  ],
  network: [
    'mmargosian@kali:~$ cat --description <span class="dir">Networking</span>',
    "\n",
    { text: "Failover Cluster (Windows).pdf", desc: "Two-node Windows failover cluster with iSCSI storage.", link: "projects/foc.html" },
    { text: "VLAN & Network Segmentation.pdf", desc: "Segmentation using VLANs and secure switch configurations.", link: "projects/vlan.html" },
    
  ],
  software: [
    'mmargosian@kali:~$ cat --description <span class="dir">Software</span>',
        "   \n ",
    { text: "Full Stack Web App.pdf", desc: "CyberSuite web app: hashing system, scanner, and reporting.", link: "projects/arm.html" },
    { text: "Mobile App (Auth).pdf", desc: "Mobile app with authentication and verification flows.", link: "projects/mobile.html" },
    { text: "DES Encryption Algorithm (C++).pdf", desc: "Implemented DES with key schedule and test vectors.", link: "projects/des.html" },
    { text: "IoT Environment Monitor.pdf", desc: "MQTT-based sensor dashboard for environment monitoring.", link: "projects/iot.html" },
    { text: "Insurance Automation Scraper.pdf", desc: "Web scraper that exports structured CSVs for insurance data.", link: "projects/iwsp.html" },
    { text: "Database.pdf", desc: "Personal finance database tracking accounts, transactions, expenses, and bills for multiple users", link: "projects/db.html" }
  ],
   progress: [
    'mmargosian@kali:~$ cat --description <span class="dir">In Progress</span>',
        "   \n ",
    { text: "Cloud Deployment.pdf", desc: "Deployments to Azure and DigitalOcean with CI/CD pipelines.", link: "" },
    { text: "InfoSec Training/Risk Assessment.pdf", desc: "Simulated Compliance Assessment", link: "" },
    { text: "Web App Compliance.pdf", desc: "Reviewed web applications for compliance with security standards.", link: "" },
    { text: "Full Stack App.pdf", desc: "Flutter, Firebase", link: "" }

  ]
};








  
  // Typing Animation
  function showView(target){
    views.forEach(v=>v.classList.remove('active'));
    const view = document.getElementById(target);
    if(view) view.classList.add('active');
  }


  

let typingTimeouts = []; 

function clearTyping() {
  typingTimeouts.forEach(t => clearTimeout(t)); // cancel all previous timeouts
  typingTimeouts = [];
}

function typeTerminal(container, lines, speed = 20) {
  if (!container) return;

  clearTyping(); // stop any previous typing
  container.innerHTML = ""; // clear the container

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;
    let line = lines[lineIndex];

    // Check if line is an object with HTML
    if (typeof line === "object" && line.html) {
      const div = document.createElement("div");
      div.innerHTML = line.html;
      container.appendChild(div);
      container.appendChild(document.createElement("br"));
      lineIndex++;
      typingTimeouts.push(setTimeout(typeLine, speed));

    // If line contains 'clickable', treat as HTML
    } else if (line.includes("clickable")) {
      const div = document.createElement("div");
      div.innerHTML = line;
      container.appendChild(div);
      container.appendChild(document.createElement("br"));
      lineIndex++;
      typingTimeouts.push(setTimeout(typeLine, speed));

    // Otherwise, type character by character
    } else {
      let charIndex = 0;
      const span = document.createElement("span");
      container.appendChild(span);

      function typeChar() {
        if (charIndex < line.length) {
          span.textContent += line[charIndex];
          charIndex++;
          typingTimeouts.push(setTimeout(typeChar, speed));
        } else {
          container.appendChild(document.createElement("br"));
          lineIndex++;
          typingTimeouts.push(setTimeout(typeLine, speed));
        }
        container.scrollTop = container.scrollHeight;
      }
      typeChar();
    }
  }

  typeLine();
}


  function displayTerminal(target){
    if(EXPLORER_DATA[target]) typeTerminal(homePreview,EXPLORER_DATA[target]);
     if(CAT_DATA[target]) typeTerminal(homePreview,CAT_DATA[target]);
    
  }

  //Doesnt do anything
document.querySelectorAll(".cat-toggle, .dir-row .dir").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    if (target && CAT_DATA[target]) typeProjectTerminal(target);
  });
});



  

 
  // Folder clicks
  dirButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const target=btn.dataset.target;
      if(target==='projects'){ showView('projects'); } 
      else { showView('home'); displayTerminal(target); }
      document.querySelectorAll('.home-explorer .folder').forEach(f=>f.classList.remove('active'));
      if(btn.classList.contains('folder')) btn.classList.add('active');
    });
  });

 

// Cat output clicks for projects & category toggles
document.body.addEventListener('click', e => {
  const toggle = e.target.closest('.cat-toggle');
  const dir = e.target.closest('.dir'); // Added dir support
  if (!toggle && !dir) return;

  const key = (toggle ? toggle.dataset.target : dir.dataset.target);
  if (!key || !CAT_DATA[key] || !catOutput) return;

 
  catOutput.innerHTML = "";

 
  CAT_DATA[key].forEach(item => {
    const div = document.createElement('div');
    div.style.fontFamily = "monospace";

    if (typeof item === "string") {
      
      div.innerHTML = item;
    } else if (typeof item === "object" && item.text) {
      
      const titleSpan = document.createElement('span');
      titleSpan.textContent = item.text;
      titleSpan.style.textDecoration = "underline";
      titleSpan.style.color = "#0f0";  
      titleSpan.style.cursor = item.link ? "pointer" : "default";

      if (item.link) {
        titleSpan.addEventListener('click', () => window.open(item.link, "_self"));
      }

      div.appendChild(titleSpan);

      if (item.desc) {
        const descSpan = document.createElement('span');
        descSpan.textContent = " — " + item.desc;
        div.appendChild(descSpan);
      }
    }

    catOutput.appendChild(div);
    
  });

  catOutput.scrollTop = catOutput.scrollHeight;
});




  // Project preview
  projectItems.forEach(li=>{
    li.addEventListener('click', ()=>{
      const data=PROJECTS[li.dataset.id];
      if(data){
        if(previewEmpty) previewEmpty.hidden=true;
        if(previewPane) previewPane.hidden=false;
        if(previewTitle) previewTitle.textContent=data.title;
        if(previewDesc) previewDesc.textContent=data.desc;
        if(previewTech) previewTech.textContent=data.tech;
        if(previewLink) previewLink.href=data.link;
        projectItems.forEach(p=>p.classList.remove('active'));
        li.classList.add('active');
      }
    });
  });
  // pdfs
  document.querySelectorAll('.clickable').forEach(span=>{
    span.addEventListener('mouseover',()=>span.style.color="#0ff");
    span.addEventListener('mouseout',()=>span.style.color="#0f0");
    span.addEventListener('click',()=>openModal(span.dataset.file));
  });

});


//WHOIS
document.body.addEventListener('click', e => {
  const toggle = e.target.closest('.cat-toggle');
  if (!toggle) return;

  // Home button: navigate using JS
  if (toggle.classList.contains('home-btn')) {
    const href = toggle.dataset.href;
    if (href) window.location.href = href;
    return;
  }

  // Other buttons: show terminal output
  const key = toggle.dataset.target;
  if (!key || !CAT_DATA[key] || !catOutput) return;

  catOutput.innerHTML = "";
  CAT_DATA[key].forEach(line => {
    const div = document.createElement('div');
    div.textContent = line;
    catOutput.appendChild(div);
  });

  catOutput.scrollTop = catOutput.scrollHeight;
});
const whoamiInput = document.getElementById('whoamiInput');
const folderMapping = {
  '1': 'about',
  '2': 'education',
  '3': 'skills',
  '4': 'projects',
  '5': 'experience',
  '6': 'blog' // optional for [+] Blogs
};

whoamiInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = whoamiInput.value.trim();
    const target = folderMapping[value];
    if (target) {
      const folder = document.querySelector(`.folder[data-target="${target}"]`);
      if (folder) folder.click(); // trigger the folder click
      whoamiInput.value = ''; // clear input
    } else {
      alert('Invalid option');
    }
  }
});







