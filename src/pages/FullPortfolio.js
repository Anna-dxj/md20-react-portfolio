import React, { useEffect } from 'react';
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

export default function FullPortfolio({handlePageChange}) {
  useEffect(() => {
    const handleHashChange = () => {
        if (window.location.hash === '#PortfolioArchive') {
            window.scrollTo(0,0)
        }
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handlePageSwitch = () => {
    handlePageChange('Portfolio')
  }

  return (
    <div className="container my-3">
      <h1 className="custom-txt">All Projects</h1>
        <a
          href="#portfolio"
          onClick={handlePageSwitch}
          className="custom-button d-flex justify-content-center"
        >
          Return to Portfolio
        </a>
        <div className="row d-flex flex-row container justify-content-around my-3 pt-2 pb-3 custom-card-background">
          <h2 className="card-title p-2 custom-txt-header">Full-Stack Applications</h2>
          <ProjectCard 
            type="archived"
            deployedLink="https://lingoai.herokuapp.com/"
            imgSrc={lingoAiScreenshot}
            imgAlt="LingoAI's homepage"
            name="LingoAI"
            repoLink="https://github.com/Anna-dxj/lingoai"
            description="Full-stack language application aimed at non-native Spanish speakers of any fluency and leverages AI technology to encourage language maintanance and vocabulary expansion. Developed front-ended conversational and game logic. Developed by a small group of 3 in 14 days."
            username="guest-user"
            email="guestuser@email.com"
            password="password123"
            technologies="GraphQL, Mongoose & MongoDB, AntDesign, React, Express & Node, OpenAI, NLP Translation API, Express & Node, JavaScript, CSS"
          />
          <ProjectCard 
            type="archived"
            deployedLink="https://whispering-retreat-56820.herokuapp.com/login"
            imgSrc={answerHubScreenshot}
            imgAlt="Answerhub's login page"
            name="AnswerHub"
            repoLink="https://github.com/Michaelx626/AnswerHub"
            description="Social media platform for software developers of all experience levels, allowing users the opportunity to connect, network, and collaborate with peers and seek AI-powered assistance. Developed and maintained a consistent, clean, UI/UX. Developed by a small group of 3 in 14 days."
            username="guest-user"
            email="guestuser@email.com"
            password="password123"
            technologies="MySQL & Sequelize, Handlebars, Bootstrap, Express & Node, Daturi, Cloudinary, Multer, OpenAI, JavaScript, CSS"
          />
          <ProjectCard 
            type="archived"
            deployedLink="https://secret-island-23664.herokuapp.com/"
            imgSrc={techBlogScreenshot}
            imgAlt="Tech Blog's home page"
            name="Tech Blog"
            repoLink="https://github.com/Anna-dxj/md14-tech-blog"
            description="Full-stack application for anyone with an interest in tech to share discoveries, insights, and commentary on tech and engage with a community of those who have similar interests."
            username="guest-user"
            email="guestuser@email.com"
            password="password123"
            technologies="MySQL & Sequelize, Handlebars, Bootstrap, Express & Node, JavaScript, CSS"
          /> 
          <ProjectCard 
            type="archived"
            deployedLink="https://morning-everglades-84416.herokuapp.com/"
            imgSrc={jateScreenshot}
            imgAlt="JATE home screen after download"
            name="JATE Text Editor"
            repoLink="https://github.com/Anna-dxj/md19-text-editor"
            description="Full-stack progressive web application text editor with JavaScript syntax highlighting with the ability to create notes or code snippets to be saved for future use or reference. Converted application into a PWA and have limited offline capability"
            technologies="PWA, Node & Express, Webpack, Service Workers, Bable, Workbox, JavaScript"
          />
          <ProjectCard
            type="archived"
            deployedLink="https://still-brushlands-58913.herokuapp.com/"
            imgSrc={bookSearchScreenshot}
            imgAlt="Book Search search results"
            name="Book Search"
            repoLink="https://github.com/Anna-dxj/md21-book-search"
            description="Full-stack search engine application for books that allows avid readers to search for and keep a list of books to read. Converted API from a RESTful API to a GraphQL API."
            username="guest-user"
            email="guestuser@email.com"
            password="password123"
            technologies="GraphQL, MongoDB & Mongoose, Apollo, Node & Express, React, CSS, JavaScript"
          />
        </div>
      <div className="row d-flex flex-row container justify-content-around my-3 pb-3 custom-card-background">
        <h2 className="card-title p-2 custom-txt-header">Backend Applications</h2>
        <ProjectCard 
          type="archived"
          youtubeLink="https://youtu.be/CgVkRK_wPb8"
          imgSrc={readmeGenScreenshot}
          imgAlt="README Generator on command line"
          name="Professional README Generator"
          repoLink="https://github.com/Anna-dxj/md9-nodejs-challenge"
          description="Command-line application designed to simplify the process of creating a high-quality README for developers’ projects."
          technologies="Node, JavaScript, Inquirer"
        />
        <ProjectCard
          type="archived"
          youtubeLink="https://youtu.be/0TY_5bN7Oo8"
          imgSrc={teamProfileScreenshot}
          imgAlt="Team Profile Generator on command line"
          name="Team Profile Generator"
          repoLink="https://github.com/Anna-dxj/md10-team-profile-generator"
          description="Command-line application that allows managers to generate a deployment-ready webpage that displays their team’s basic information (such as email, office, and/or GitHub profiles) for quick access. Developed with Test-Driven Development and Object-Oriented Programming."
          technologies="Node, JavaScript, Inquirer, Object-Oriented Programming (OOP), Test Driven Development (TTD)"
        />
        <ProjectCard 
          type="archived"
          deployedLink="https://warm-stream-07044.herokuapp.com/"
          imgSrc={noteTakerScreenshot}
          imgAlt="Note Taker Application Sample Note"
          name="Note Taker"
          repoLink="https://github.com/Anna-dxj/md11-note-taker"
          description="Full-stack application that can be used to write and save notes so that users can track todos and organize their thoughts. Connected the pre-existing front-end to an Express.js backend."
          technologies="Node & Express, RESTful API, JavaScript"
        />
        <ProjectCard 
          type="archived"
          youtubeLink="https://youtu.be/hWkNjhxzcTw"
          imgSrc={employeeTrackScreenshot}
          imgAlt="Employee Tracker Tables"
          name="Employee Tracker"
          repoLink="https://github.com/Anna-dxj/md12-employee-tracker"
          description="Command-line run content management system (CMS) that allows business owners to easily view and manage departments, roles, and employees in their company."
          technologies="Node, Inquirer, SQL, JavaScript"
        />
        <ProjectCard 
          type="archived"
          youtubeLink="https://www.youtube.com/watch?v=A4VsMdvv1IY"
          imgSrc={ecommerceScreenshot}
          imgAlt="E-Commerce Backend accesed with Insomnia"
          name="E-Commerce Backend"
          repoLink="https://github.com/Anna-dxj/md13-ecommerce-backend"
          description="Back-end system for an e-commerce website built with a robust RESTful API. Integrated Sequelize."
          technologies="Node & Express, SQL & Sequelize, RESTful API, JavaScript"
        />
      </div>
      <div className="row d-flex flex-row container justify-content-around my-3 pb-3 custom-card-background">
        <h2 className="card-title p-2 custom-txt-header">Frontend Applications</h2>
        <ProjectCard 
          deployedLink="https://mynamebrogrammer.github.io/SimpliGame/"
          imgSrc={simpligameScreenshot}
          imgAlt="SimpliGame's home page"
          name="SimpliGame"
          repoLink="https://github.com/mynamebrogrammer/SimpliGame"
          description="Streamlined front-end application designed for gamers, offering a quick and efficient video game research experience. Responsible for design and JavaScripted logic. Developed by a small group of 2 in 14 days."
          technologies="GiantBomb API & Weather API, Materialize.css, jQuery, HTML, CSS, JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md6-weather-dash/"
          imgSrc={weatherDashScreenshot}
          imgAlt="Weather Dashboard's Forecast page"
          name="Weather Dashboard"
          repoLink="https://github.com/Anna-dxj/md6-weather-dash"
          description="Front-end application that allows for users to search for a city and see the current weather and a five-day forecast."
          technologies="OpenWeather API, Bootstrap, Dayjs, HTML, CSS, JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md3-friendly-parakeet/"
          imgSrc={passwordGenScreenshot}
          imgAlt="password generator"
          name="Password Generator"
          repoLink="https://github.com/Anna-dxj/md3-friendly-parakeet"
          description="Front-end application that takes user input to create a randomly generated, secure password."
          technologies="HTML, CSS, JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md4-quiz-game/"
          imgSrc={quizGameScreenshot}
          imgAlt="the Quiz challenge"
          name="JavaScript Coding Quiz Challenge"
          repoLink="https://github.com/Anna-dxj/md4-quiz-game"
          description="Timed quiz designed for beginner JavaScript engineers to test their knowledge of the basics of JavaScript."
          technologies="HTML, CSS, JavaScript"
        />
      </div>
      <div className="row d-flex flex-row container justify-content-around my-3 pb-3 custom-card-background">
        <h2 className="card-title p-2 custom-txt-header">Gists</h2>
        <ProjectCard 
          deployedLink="https://gist.github.com/Anna-dxj/c6f168dd24635e1fd09ffff81526a4a3"
          imgSrc={regexTutScreenshot}
          imgAlt="first few lines of tutorial"
          name="RegEx Gist"
          description="Analyzes hexadecimal Regular Expressions (RegEx) and breaks down each part of the expression and describing their function."
        />
      </div>
      <a
        href="#portfolio"
        onClick={handlePageSwitch}
        className="custom-button d-flex justify-content-center"
      >
        Return to Portfolio
      </a>
    </div>
  );
}
