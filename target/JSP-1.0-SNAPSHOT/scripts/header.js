document.addEventListener("DOMContentLoaded", function () {
    fetch("resources/projects.json") // get informations from the JSON
        .then((res) => res.json())
        .then((data) => {
            const projects = data.map(
                // Create a new Project
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
            // Navigation bar is present on all pages so this function is called everytime
            displayNavbar(projects);
        })
        .catch((error) => {
        console.error("Error fetching projects:", error);
    });
});

function displayNavbar(projects) {
    const navbarContainer = document.getElementById("navbar");
    projects.forEach((project) => {
        //create a link element for each project containing the title and linked to the corresponding project's URL
        const projectTitle = document.createElement("a");
        projectTitle.href = project.URL;
        projectTitle.textContent = project.title;

        navbarContainer.appendChild(projectTitle); // Add every link to the navigation bar
    });
}