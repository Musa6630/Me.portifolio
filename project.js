const projects = [
    {
      title: "My Personal Portfolio",
      summary:
        "The complete portfolio website hosted using github pages (gh-pages). Visit the website here",
      status: "completed",
      technology: ["html5", "css3", "js", "sass"],
      github: "https://github.com/Brajesh825/MyPersonalPortfolio",
      live: "https://brajesh825.github.io/MyPersonalPortfolio/index.html",
    },
    {
      title: "Mern Ecommerce",
      summary:
        "Ecommerce website made using Mern stack . Backend is completed ,Frontend in development",
      status: "ongoing",
      technology: ["html5", "css3", "js", "node", "react"],
      github: "https://github.com/Brajesh825/MERN-Ecommerce",
      live: "https://github.com/Brajesh825/MERN-Ecommerce",
    },
    {
      title: "Node Projects",
      summary:
        "Cluster of projects made using node js like ecommerce api,task manager,store api and jobs api",
      status: "completed",
      technology: ["html5", "css3", "js", "node"],
      github: "https://github.com/Brajesh825/NodeProjects",
      live: "https://github.com/Brajesh825/NodeProjects",
    },
    {
      title: "Frontend Projects",
      summary: "A repository containing various of my front end works",
      status: "ongoing",
      technology: ["html5", "css3", "js", "sass"],
      github: "https://github.com/Brajesh825/FrontendProjects",
      live: "https://github.com/Brajesh825/FrontendProjects",
    },
    {
      title: "Komaki Landing Page",
      summary: "A Landing Page for electric scooters",
      status: "completed",
      technology: ["html5", "css3", "js", "sass"],
      github: "https://github.com/Brajesh825/FrontendProjects",
      live: "https://brajesh825.github.io/Komaki-Landing-Page/",
    },
  ];
  
  const projectContainer = document.querySelector(".project__container");
  
  function render() {
    projects.forEach((project) => {
      let technology = "";
      project.technology.forEach((tech) => {
        technology += `<i class="fab fa-${tech}" title="${tech}"></i>`;
      });
      projectContainer.innerHTML += `
          <div class="project__item" style="background-color:  ${
            randomColor() + "33"
          } ">
          <a href="${
            project.github
          }" target="_blank"><div class="project__details">
            <h3>${project.title}</h2>
            <h4>
             ${project.summary}
            </h4>
          </div>
          </a> 
          <a href="${project.live}">See Live</a> 
          <div class="project__footer">
            <h5>${project.status}</h5>
            <div class="tech__used">
                  ${technology}
            </div>
          </div>
        </div>
        `;
    });
  }
  
  render();
  
  function randomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber(hex)];
    }
    return hexColor;
  }
  
  function getRandomNumber(hex) {
    return Math.floor(Math.random() * hex.length);
  }
  