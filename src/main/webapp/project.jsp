<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project</title>
    <link rel="stylesheet" href="styles/style.css" />
    <link rel="stylesheet" href="styles/project.css" />
    <script src="scripts/main.js"></script>
</head>
<body>
<jsp:include page="header.jsp"/>

<section class="part">
    <!-- each project will be generated on this page depending of the title entered in URL (findable in the JSON file) -->
    <h2 id="project-title"></h2>
    <p id="company-name"></p>
    <p id="keywords"></p>
    <div class="container">
        <p id="project-summary"></p>
        <img id="company-pic" alt="Company Image" class="contextImg" />
    </div>
    <div class="container">
        <div id="project-description"></div>
    </div>
    <img id="description-pic" alt="Description Image" />
</section>

<jsp:include page="footer.jsp"/>
</body>
</html>
