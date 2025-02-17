<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--<!DOCTYPE html>--%>
<%--<html>--%>
<%--<head>--%>
<%--  <title>JSP - Hello World</title>--%>
<%--</head>--%>
<%--<body>--%>
<%--<h1><%= "Hello World!" %></h1>--%>
<%--<br/>--%>
<%--<a href="hello-servlet">Hello Servlet</a>--%>
<%--</body>--%>
<%--</html>--%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
  <!-- Includes the stylesheet for the common parts(header) and another one for the specific parts of each pages -->
  <link rel="stylesheet" href="styles/style.css" />
  <link rel="stylesheet" href="styles/index.css" />
  <script src="scripts/main.js"></script>
</head>

<body>
<jsp:include page="header.jsp"/>

<!-- Homepage -->
<section class="part">
  <h2>Introduction</h2>
  <div class="container" id="intro">
    <p id="introduction">
      My name is Adam BOISLEVANT-FLEURY, I'm a 21 years old french student
      in fourth year of engineering school at CY Tech located in Cergy(north
      of Paris). Actually in university exchange programme in Northeastern
      university in Shenyang. My major is Software engineering and I would
      like specify my last year in visual computing.
    </p>
    <img src="./styles/img/face.jpg" alt="me" class="contextImg" />
  </div>
</section>

<section class="part">
  <h2>Interests</h2>
  <div class="container">
    <img
            src="./styles/img/Adam-Ondra-Canada.jpg"
            alt="World best climber Adam Ondra"
            class="contextImg"
    />
    <p id="Interests">
      I’m passionate about technology, especially AI and 3D simulation, and
      I love exploring new advancements in these fields. I enjoy doing
      sports like calisthenics or workout. Outdoor activities like hiking
      and climbing keep me active. Traveling to experience different
      cultures and broaden my perspective is something I cherish.
    </p>
  </div>
</section>

<section class="part">
  <h2>Experiences</h2>
  <div class="container">
    <p id="Experiences">
      I have already realized 3 websites as part of my studies. all of them
      were e-shops or marketplaces. Also I created a webApp when I was doing
      my internship in Generali VIE, this webApp was meant to prompt the SSO
      token of the user depending of his/her environment (production,
      pre-production,...).
    </p>
    <img
            src="./styles/img/generali.jpg"
            alt="generali"
            class="contextImg"
    />
  </div>
</section>

<section class="part">
  <h2>Skills</h2>
  <div class="container">
    <img src="./styles/img/css.jpg" alt="me" class="contextImg" />
    <p id="skills">
      I have skills in multiple coding languages such as Python, C, Java,
      prolog and shell scripts. Concerning web development, I already have
      worked with HTML, CSS, PHP, JavaScript especially next.JS and AJAX,
      JEE and its frameworks Spring/Springboot and Angular. I also have
      manipulated SQL databases
    </p>
  </div>
</section>

<section class="part">
  <h2>Career goals</h2>
  <div class="container">
    <p id="career goals">
      My goal for now is to get a job in the visual computing sector. I
      would be glad to work on simulations using unreal engines for example.
      I don't have a lot of expectations as long as my work is stimulating
      and interesting.
    </p>
    <img src="./styles/img/unrealEngine.png" alt="me" class="contextImg" />
  </div>
</section>

<!-- Projects part -->
<section class="part">
  <h2>Projects</h2>
  <div id="project-list" class="projects-container">
    <!-- Project items will be dynamically added here by JavaScript -->
  </div>
</section>

<!-- footer -->
<jsp:include page="footer.jsp"/>
</body>
</html>
