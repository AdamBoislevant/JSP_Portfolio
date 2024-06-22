class Project {
  constructor(
      URL,
      title,
      keywords,
      companyName,
      companyPic,
      summary,
      description,
      descriptionPic,
      presentationPic
  ) {
    this.URL = URL;
    this.title = title;
    this.keywords = keywords;
    this.companyName = companyName;
    this.companyPic = companyPic;
    this.summary = summary;
    this.description = description;
    this.descriptionPic = descriptionPic;
    this.presentationPic = presentationPic;
  }
}

let projects = [];

document.addEventListener("DOMContentLoaded", function () {
  fetch("resources/projects.json")
      .then((res) => res.json())
      .then((data) => {
        projects = data.map(
            (proj) =>
                new Project(
                    proj.URL,
                    proj.title,
                    proj.keywords,
                    proj.companyName,
                    proj.companyPic,
                    proj.summary,
                    proj.description,
                    proj.descriptionPic,
                    proj.presentationPic
                )
        );
        populateProjectSelect();
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });

  setupEditableFields();
});

function populateProjectSelect() {
  const projectSelectContainer = document.getElementById("project-select");

  projects.forEach((project) => {
    const projectTitle = document.createElement("option");
    projectTitle.value = project.title;
    projectTitle.textContent = project.title;

    projectSelectContainer.appendChild(projectTitle);
  });
}

function viewProject() {
  const selectedProjectTitle = document.getElementById("project-select").value;
  const selectedProject = projects.find(project => project.title === selectedProjectTitle);

  if (selectedProject) {
    document.getElementById("project-title").textContent = selectedProject.title;
    document.getElementById("company-name").textContent = "Company: " + selectedProject.companyName;
    document.getElementById("keywords").textContent = "Keywords: " + selectedProject.keywords;
    document.getElementById("company-pic-url").value = selectedProject.companyPic;
    document.getElementById("company-pic").src = selectedProject.companyPic;
    document.getElementById("project-summary").textContent = selectedProject.summary;
    document.getElementById("project-description").textContent = selectedProject.description;
    document.getElementById("description-pic-url").value = selectedProject.descriptionPic;
    document.getElementById("description-pic").src = selectedProject.descriptionPic;
    document.getElementById("description-pic").alt = selectedProject.title;
  } else {
    console.error("Project not found");
  }
}

function setupEditableFields() {
  document.getElementById("company-pic-url").addEventListener("input", function () {
    document.getElementById("company-pic").src = this.value;
  });

  document.getElementById("description-pic-url").addEventListener("input", function () {
    document.getElementById("description-pic").src = this.value;
  });
}

function saveChanges() {
  alert("Work in progress: Not implemented yet")
}
