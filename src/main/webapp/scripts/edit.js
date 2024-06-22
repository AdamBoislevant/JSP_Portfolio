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

// projects declared before the function to be usable by the other functions (useful for viewProject())
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

// Generate the options for the select tag with all the existing projects
function populateProjectSelect() {
  const projectSelectContainer = document.getElementById("project-select");

  // create an option tag for each project
  projects.forEach((project) => {
    const projectTitle = document.createElement("option");
    projectTitle.value = project.title;
    projectTitle.textContent = project.title;

    // add it in the select tag
    projectSelectContainer.appendChild(projectTitle);
  });
}

// generate the selected project from the select tag
function viewProject() {
  // get the value returned by the form
  const selectedProjectTitle = document.getElementById("project-select").value;
  // find the project with a title corresponding to the form's value
  const selectedProject = projects.find(project => project.title === selectedProjectTitle);

  // get the project's data and add it in the corresponding tags
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

// Allows the pictures' URL to be editable in real time
function setupEditableFields() {
  //change the value of the picture's source every time an input is done in the corresponding pic-url input tag
  document.getElementById("company-pic-url").addEventListener("input", function () {
    document.getElementById("company-pic").src = this.value;
  });

  document.getElementById("description-pic-url").addEventListener("input", function () {
    document.getElementById("description-pic").src = this.value;
  });
}

// save function not implemented yet
function saveChanges() {
  alert("Work in progress: Not implemented yet")
}
