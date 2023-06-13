import React from 'react';
import '../styles/Portfolio.css'
import ProjectCard from '../components/ProjectCard'

import answerHubScreenshot from '../assets/screenshots/answerhub-screenshot.png'
import techBlogScreenshot from '../assets/screenshots/tech-blog-screenshot.png'
import simpligameScreenshot from '../assets/screenshots/simpligame-screenshot.png'
import passwordGenScreenshot from '../assets/screenshots/password-generator-screenshot.png'
import regexTutScreenshot from '../assets/screenshots/regex-gist-screenshot.png'
import quizGameScreenshot from '../assets/screenshots/quiz-game-screenshot.png'
import lingoAiScreenshot from '../assets/screenshots/lingoai-screenshot.png'
import weatherDashScreenshot from '../assets/screenshots/weather-dash-screenshot.png'
import ecommerceScreenshot from '../assets/screenshots/ecommerce-backend-screenshot.png'
import employeeTrackScreenshot from '../assets/screenshots/employee-track-screenshot.png'
import noteTakerScreenshot from '../assets/screenshots/note-taker-screenshot.png'
import readmeGenScreenshot from '../assets/screenshots/readme-generator-screenshot.png'
import teamProfileScreenshot from '../assets/screenshots/team-profile-screenshot.png'
import jateScreenshot from '../assets/screenshots/jate-screenshot.png'
import bookSearchScreenshot from '../assets/screenshots/book-search-screenshot.png'

export default function Portfolio() {
  return (
    <div className="container my-3">
      <h1 className="custom-txt">Portfolio</h1>
        <div className="row d-flex flex-row container justify-content-around py-3">
          <h2 className="card-title p-2 custom-txt">Full-Stack Applications</h2>
          <ProjectCard 
            deployedLink="https://damp-castle-79299.herokuapp.com"
            imgSrc={lingoAiScreenshot}
            imgAlt="LingoAI's homepage"
            name="LingoAI"
            repoLink="https://github.com/AmirTahsini/project_atlas"
            description="LingoAI is a language application aimed at non-native speakers of Spanish of any level of fluency. By creating an account, a user can engage in two core activities: playing the Word Chain game to expand and test the depth of their vocabulary, or practicing conversational skills with an AI. Developed within a 13-day period by a small group, our team utilized paired programming during the initial server and model setup and subsequently adhered to agile development principles, ensuring regular meetings and effective communication of progress, successes, and blockers."
            paragraph2="While I aided in the initial backend setup and the OpenAI configuration, my main responsibility lay in figuring out how to best use our UI library and spearheading the front-end game and conversation elements and logic. This project received an exceptional score of 100%. LingoAI was the capstone project for the UCLA bootcamp, and it is a project that I intend to continue to develop. Looking ahead, our plans for future development involve expanding LingoAI to include other languages, as well as incorporating additional word games tailored to accommodate different orthographies and lexicons."
            technologies="GraphQL, Mongoose & MongoDB, AntDesign, React, Express & Node, OpenAI, NLP Translation API, Express & Node, JavaScript, CSS"
          />
          <ProjectCard 
            deployedLink="https://whispering-retreat-56820.herokuapp.com/login"
            imgSrc={answerHubScreenshot}
            imgAlt="Answerhub's login page"
            name="AnswerHub"
            repoLink="https://github.com/Michaelx626/AnswerHub"
            description="AnswerHub is a full-stack social media platform for software developers of all experience levels. It offers users the opportunity to connect, network, and collaborate with peers, and seek AI-powered assistance for coding and math-related queries. Developed in a 13-day period as a small group product, we primarily adhered to agile development principles, ensuring regular meetings and effective communication of progress."
            paragraph2="I played a key role in creating the Entity-Relationship Diagram, however, my primary responsibility centered around ensuring a clean, consistent, and responsive design. One of the major challenges we encountered was related to proper GitHub workflow. which resulted in a significant merge conflict near the project’s completion, leading to the loss of two days’ work. Taking charge of the situation, I resolved all merge conflicts and other more minor GitHub workflow conflicts that my groupmates encountered. Thanks to our efforts, we were able to recover all previously approved changes and present a fully functional application."
            technologies="MySQL & Sequelize, Handlebars, Bootstrap, Express & Node, Daturi, Cloudinary, Multer, OpenAI, JavaScript, CSS"
          />
          <ProjectCard 
            deployedLink="https://secret-island-23664.herokuapp.com/"
            imgSrc={techBlogScreenshot}
            imgAlt="Tech Blog's home page"
            name="Tech Blog"
            repoLink="https://github.com/Anna-dxj/md14-tech-blog"
            description="The Tech Blog is a full-stack application that serves as a dynamic platform where users can share their discoveries, insights, and commentary on various aspects of technology. Designed for users with a passing interest in tech to tech enthusiasts, the blog provides a space for interaction and engagement within the community."
            paragraph2="As the sole developer, I handled both front-end and back-end responsibilities, including user interface design, underlying functionality development, and integration of a robust SQL database. Despite the time constraints of only seven days, the completion of the Tech Blog marks a significant milestone in my journey as a full-stack JavaScript engineer. The project serves as my first full-stack application and showcases my proficiency in front-end and back-end technologies. It also highlights my ability to handle the development of an application independently."
            technologies="MySQL & Sequelize, Handlebars, Bootstrap, Express & Node, JavaScript, CSS"
          /> 
          <ProjectCard 
            deployedLink="https://morning-everglades-84416.herokuapp.com/"
            imgSrc={jateScreenshot}
            imgAlt="JATE home screen after download"
            name="JATE Text Editor"
            repoLink="https://github.com/Anna-dxj/md19-text-editor"
            description="Just Another Text Editor (JATE) is a full-stack progressive web application text editor with JavaScript syntax highlighting. It provides developers with the flexibility to create notes or code snippets, whether they have an internet connection or not, and offers reliable retrieval for future use or reference."
            paragraph2="As the sole developer on this project, my prime responsibility was to convert JATE into a PWA. Despite the tight timeline of only seven days, the completion of JATE represents a significant milestone in my journey as a full-stack JavaScript engineer. The project also holds the distinction of being my first venture into PWA development. The success of JATE as a PWA is a testament to my growth as a full-stack JavaScript engineer."
            technologies="PWA, Node & Express, Webpack, Service Workers, Bable, Workbox, JavaScript"
          />
          <ProjectCard
            deployedLink="https://still-brushlands-58913.herokuapp.com/"
            imgSrc={bookSearchScreenshot}
            imgAlt="Book Search search results"
            name="Book Search"
            repoLink="https://github.com/Anna-dxj/md21-book-search"
            description="The Book Search is a full-stack search engine application that allows avid readers to search for and keep a list of books to read. As the sole developer on this project, my prime responsibility was to convert the Book Search from a RESTful API to GraphQL, enabling its complete integration with the MERN-G (MongoDB, Express.js, React.js, Node.js, and GraphQL) stack."
            paragraph2="With the limited timeframe of seven days, the completion of the Book Search stands as a significant milestone in my journey as a full-stack JavaScript engineer: it marks my first application using the complete MERN-G stack. The success of the Book Search underscores my growth as a full-stack JavaScript engineer and showcases my ability to work with both RESTful APIs and the more modern GraphQL technology across both the front-end and back-end."
            technologies="GraphQL, MongoDB & Mongoose, Apollo, Node & Express, React, CSS, JavaScript"
          />
        </div>
      <div className="row d-flex flex-row container justify-content-around">
        <h2 className="custom-txt">Backend Applications</h2>
        <ProjectCard 
          youtubeLink="https://youtu.be/CgVkRK_wPb8"
          imgSrc={readmeGenScreenshot}
          imgAlt="README Generator on command line"
          name="Professional README Generator"
          repoLink="https://github.com/Anna-dxj/md9-nodejs-challenge"
          description="The README Generator is a command-line application designed to simplify the process of creating a high-quality README for developers’ projects. It provides a scaffolded structure for a professional-looking README, enabling developers to save time and effort. Additionally, developers are able to manually edit and customize sections of the generated README as needed."
          paragraph2="This project represents my first foray into back-end technologies, specifically utilizing the Node environment instead of the browser. Despite the time constraint of seven days, the completion of the README Generator showcases my ability to work with command-line applications and highlights my growth as a full-stack engineer."
          technologies="Node, JavaScript, Inquirer"
        />
        <ProjectCard
          youtubeLink="https://youtu.be/0TY_5bN7Oo8"
          imgSrc={teamProfileScreenshot}
          imgAlt="Team Profile Generator on command line"
          name="Team Profile Generator"
          repoLink="https://github.com/Anna-dxj/md10-team-profile-generator"
          description="The Team Profile Generator is another command-line application that allows managers to generate a deployment-ready webpage that displays their team’s basic information (such as email, office, and/or GitHub profiles) for quick access."
          paragraph2="This project allowed me to gain experience with Test-Driven Development (TDD), which allowed for improved quality of code as well as a faster debugging process. Additionally, it provided an opportunity to apply Object-Oriented Programming (OOP) principles, which broadens my skills  in more diverse programming paradigms beyond Functional Programming. Despite the time constraints, completing the Team Profile Generator while also exposing me to other methodologies and paradigms, highlights my ability to write testable, maintainable, and easily scalable code."
          technologies="Node, JavaScript, Inquirer, Object-Oriented Programming (OOP), Test Driven Development (TTD)"
        />
        <ProjectCard 
          deployedLink="https://warm-stream-07044.herokuapp.com/"
          imgSrc={noteTakerScreenshot}
          imgAlt="Note Taker Application Sample Note"
          name="Note Taker"
          repoLink="https://github.com/Anna-dxj/md11-note-taker"
          description="The Note Taker is an application that can be used to write and save notes so that users can track todos and organize their thoughts. As the sole developer for this project, it was my primary responsibility to connect the pre-existing front-end to an Express.js back-end. This experience with Express.js marked an important milestone in my journey toward becoming a full-stack engineer and completely developing a full-stack application by allowing me more experience and familiarity with back-end technologies. Despite the short timeline of seven days, I successfully created the Note Taker, showcasing my ability to deliver high-quality work efficiently and effectively."
          technologies="Node & Express, RESTful API, JavaScript"
        />
        <ProjectCard 
          youtubeLink="https://youtu.be/hWkNjhxzcTw"
          imgSrc={employeeTrackScreenshot}
          imgAlt="Employee Tracker Tables"
          name="Employee Tracker"
          repoLink="https://github.com/Anna-dxj/md12-employee-tracker"
          description="The Employee Tracker is a command-line run content management system (CMS) that allows business owners to easily view and manage departments, roles, and employees in their company. As the sole developer for this project, I used SQL commands to make joins of various complexity, enabling seamless data retrieval and manipulation. The Employee Tracker represents my first endeavor in creating a project with a SQL database. Despite the project’s time constraint of seven days, I successfully implemented the Employee Tracker, showcasing my ability to make complex SQL queries and deliver efficient and effective solutions for data management."
          technologies="Node, Inquirer, SQL, JavaScript"
        />
        <ProjectCard 
          youtubeLink="https://www.youtube.com/watch?v=A4VsMdvv1IY"
          imgSrc={ecommerceScreenshot}
          imgAlt="E-Commerce Backend accesed with Insomnia"
          name="E-Commerce Backend"
          repoLink="https://github.com/Anna-dxj/md13-ecommerce-backend"
          description="The E-Commerce Back End is a back-end system for an e-commerce website built with the latest technologies. As the sole developer, I was tasked with transforming a functional Express.js API into a more robust and efficient solution by integrating the Object-Relational Mapping (ORM) library, Sequelize. Within the limited timeframe of seven days, I configured the Express.js API to use Sequelize’s powerful features, including defining models, establishing relationships between entities, and performing database operations with JavaScript. The comprehensive technology stack further showcases my expertise and versatility in leveraging modern tools and frameworks to build robust and high-performing web applications."
          technologies="Node & Express, SQL & Sequelize, RESTful API, JavaScript"
        />
      </div>
      <div className="row d-flex flex-row container justify-content-around">
        <h2 className="custom-txt">Frontend Applications</h2>
        <ProjectCard 
          deployedLink="https://mynamebrogrammer.github.io/SimpliGame/"
          imgSrc={simpligameScreenshot}
          imgAlt="SimpliGame's home page"
          name="SimpliGame"
          repoLink="https://github.com/mynamebrogrammer/SimpliGame"
          description="SimpliGame is a streamlined front-end application designed for gamers of all levels, from casual gamers to hardcore gamers. It offers a quick and efficient video game research experience, eliminating information and allowing users to make informed decisions with confidence. Our team of two developed SimpliGame within a 13-day period, utilizing paired programming and agile programming principles to produce a product. The greatest challenge we overcame was utilizing a jQuery ajax request to fetch non-transparent data from the Giant Bomb API without a backend."
          paragraph2="As the developer responsible for the basic HTML and design, I collaborated closely with my teammate on the JavaScript logic. SimpliGame marked my first experience with GitHub workflow effects and allowed me to be involved in the entire development process, from conception to deployment. Looking ahead, our plans include expanding SimpliGame into a full-stack application, enabling user-generated reviews and favorite game saving."
          technologies="GiantBomb API & Weather API, Materialize.css, jQuery, HTML, CSS, JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md6-weather-dash/"
          imgSrc={weatherDashScreenshot}
          imgAlt="Weather Dashboard's Forecast page"
          name="Weather Dashboard"
          repoLink="https://github.com/Anna-dxj/md6-weather-dash"
          description="The Weather Dashboard is a front-end application that allows for users to search for a city and see the current weather and a five-day forecast. As the sole developer with a limited time frame of seven days, I was tasked with designing the application as well as creating the JavaScript logic to make the API call for the current weather and forecast and to save the previous search in local storage. The Weather Dashboard marks my first time using server-sided APIs from the front-end. This project showcases my ability to create functional and visually appealing applications while working within a strict timeline."
          technologies="OpenWeather API, Bootstrap, Dayjs, HTML, CSS, JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md3-friendly-parakeet/"
          imgSrc={passwordGenScreenshot}
          imgAlt="password generator"
          name="Password Generator"
          repoLink="https://github.com/Anna-dxj/md3-friendly-parakeet"
          description="The Password Generator is a front-end application that takes user input to create a randomly generated, secure password. As the sole developer with a limited time frame, I was tasked with creating the JavaScript logic that would actually generate and render the random password, as well as moving the user interface from a system of alerts to a form rendered on the page. This was the first project I developed and it showcases my ability to write clean, scalable code while also producing a usable product on a strict timeline."
          technologies="HTML, CSS, JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md4-quiz-game/"
          imgSrc={quizGameScreenshot}
          imgAlt="the Quiz challenge"
          name="JavaScript Coding Quiz Challenge"
          repoLink="https://github.com/Anna-dxj/md4-quiz-game"
          description="The JavaScript Coding Quiz Challenge is a timed quiz application designed for beginner JavaSCript engineers to test their knowledge. Developed from scratch within a seven-day timeframe, this project showcases my ability to write clean, scalable code using Functional Programming principles. The quiz penalizes incorrect answers and offers users the option to save their time and compare it against others. Built with HTML, CSS, and JavaScript, this project demonstrates my proficiency in leveraging these technologies to create an engaging application on a strict timeline."
          technologies="HTML, CSS, JavaScript"
        />
      </div>
      <div className="row d-flex flex-row container justify-content-around">
        <h2 className="custom-txt">Gists</h2>
        <ProjectCard 
          deployedLink="https://gist.github.com/Anna-dxj/c6f168dd24635e1fd09ffff81526a4a3"
          imgSrc={regexTutScreenshot}
          imgAlt="first few lines of tutorial"
          name="RegEx Gist"
          description="The RegEx Gist analyzes Regular Expressions (RegEx), breaking down each part of the expression and describing their function. This RegEx Gist is a tutorial that uses the hexadecimal RegEx as its main example, but includes other examples to aid in the explanation of describing each part of a regex’s function."
        />
      </div>
    </div>
  );
}
