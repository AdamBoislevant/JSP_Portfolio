<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edit Project</title>
    <link rel="stylesheet" href="styles/style.css" />
    <link rel="stylesheet" href="styles/project.css" />
    <script src="scripts/edit.js"></script>
</head>
<body>
<jsp:include page="header.jsp"/>

<section class="part" id="editProjectSection">
    <h2>Edit Project</h2>
    <form id="Project-choice">
        <label for="project-select">Choose the project you want to edit:</label>
        <select id="project-select" name="project-select">
            <!-- Options are generated using the JSON -->
        </select><br>
        <button type="button" onclick="viewProject()">See the project</button>
        <p id="explanation">Click on a paragraph to start edit it. Pictures' links are editable at the bottom of the page.</p>
    </form>


    <h2 id="project-title" class="editable" contenteditable="true"></h2>
    <p id="company-name" class="editable" contenteditable="true"></p>
    <p id="keywords" class="editable" contenteditable="true"></p>
    <div class="container">
        <p id="project-summary" class="editable" contenteditable="true"></p>
        <img id="company-pic" class="contextImg" />
    </div>
    <div class="container">
        <div id="project-description" class="editable" contenteditable="true"></div>

    </div>
    <img id="description-pic" />
    <br><br>
    <label for="company-pic-url">Company Picture URL:</label>
    <input type="text" id="company-pic-url" class="editable" />
    <label for="description-pic-url">Description Picture URL:</label>
    <input type="text" id="description-pic-url" class="editable" />
    <br><br>
    <button type="button" onclick="saveChanges()">Save Changes</button>
</section>

<jsp:include page="footer.jsp"/>
</body>
</html>
