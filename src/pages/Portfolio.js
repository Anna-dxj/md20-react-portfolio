import React, { useEffect } from 'react';
import '../styles/Portfolio.css'
import ProjectCard from '../components/ProjectCard'

import answerHubScreenshot from '../assets/screenshots/answerhub-screenshot.png'
import simpligameScreenshot from '../assets/screenshots/simpligame-screenshot.png'
import lingoAiScreenshot from '../assets/screenshots/lingoai-screenshot.png'
import noteTakerScreenshot from '../assets/screenshots/note-taker-screenshot.png'
import weatherDashScreenshot from '../assets/screenshots/weather-dash-screenshot.png'
import employeeTrackScreenshot from '../assets/screenshots/employee-track-screenshot.png'

const Portfolio = ({handlePageChange}) => {  
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#Portfolio') {
                window.scrollTo(0,0)
            }
        }
    
        window.addEventListener('hashchange', handleHashChange);
    
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
      }, []); 

    const handlePageSwitch = () => {
        handlePageChange('PortfolioArchive')
    }   

    return (
        <main className="my-3 container">
            <h1 className="custom-txt">Portfolio</h1>
            <div className="row d-flex flex-row container justify-content-around py-3 col-sm-12">
                <div className="row d-flex flex-row justify-content-center m-2 py-3 px-4 col-sm-12 col-lg-10 custom-card-background flex-wrap">
                    <ProjectCard 
                        type="featured"
                        id="proj-1"
                        deployedLink="https://lingoai.herokuapp.com/"
                        imgSrc={lingoAiScreenshot}
                        imgAlt="LingoAI's homepage"
                        name="LingoAI"
                        repoLink="https://github.com/Anna-dxj/lingoai"
                        description="Language application aimed at non-native speakers of Spanish of any level of fluency to maintain and improve Spanish. LingoAI offers users the oportunity to play the Word Chain game or to practice conversational skills with an AI."
                        development="Developed within a 13-day period by a small group, our team utilized paired programming during the initial server and model setup and subsequently adhered to agile development principles, ensuring regular meetings and effective communication of progress, successes, and blockers. While I aided in the initial backend setup and the OpenAI configuration, my main responsibility lay in figuring out how to best use our UI library and spearheading the front-end game and conversation elements and logic. This project received an exceptional score of 100%. LingoAI was the capstone project for the UCLA bootcamp, and it is a project that I intend to continue to develop. Looking ahead, our plans for future development involve expanding LingoAI to include other languages, as well as incorporating additional word games tailored to accommodate different orthographies and lexicons."
                        technologies="GraphQL, Mongoose & MongoDB, AntDesign, React, OpenAI, NLP Translation API, Express & Node, Client-Server, JavaScript, CSS"
                    />
                    <ProjectCard 
                        type="featured"
                        id="proj-2"
                        deployedLink="https://whispering-retreat-56820.herokuapp.com/login"
                        imgSrc={answerHubScreenshot}
                        imgAlt="Answerhub's login page"
                        name="AnswerHub"
                        repoLink="https://github.com/Michaelx626/AnswerHub"
                        description="Full-stack social media platform for software developers of all all experience, allowing users the opportunity to connect, network, and collaborate with peers, and seek AI-powered assistance."
                        development="Developed in a 13-day period as a small group product, we primarily adhered to agile development principles, ensuring regular meetings and effective communication of progress. I played a key role in creating the Entity-Relationship Diagram, however, my primary responsibility centered around ensuring a clean, consistent, and responsive design. One of the major challenges we encountered was related to proper GitHub workflow. which resulted in a significant merge conflict near the project’s completion, leading to the loss of two days’ work. Taking charge of the situation, I resolved all merge conflicts and other more minor GitHub workflow conflicts that my groupmates encountered. Thanks to our efforts, we were able to recover all previously approved changes and present a fully functional application."
                        technologies="MySQL & Sequelize, Handlebars, Bootstrap, Express & Node, Daturi, Cloudinary, Multer, OpenAI, MVC, JavaScript, CSS"
                    />
                    <ProjectCard 
                        type="featured"
                        id="proj-3"
                        deployedLink="https://mynamebrogrammer.github.io/SimpliGame/"
                        imgSrc={simpligameScreenshot}
                        imgAlt="SimpliGame's home page"
                        name="SimpliGame"
                        repoLink="https://github.com/mynamebrogrammer/SimpliGame"
                        description="Streamlined front-end application designed for gamers of all intensity levels, that provides a quick and efficient video game research experience."
                        development="Our team of two developed SimpliGame within a 13-day period, utilizing paired programming and agile programming principles to produce a product. The greatest challenge we overcame was utilizing a jQuery ajax request to fetch non-transparent data from the Giant Bomb API without a backend. As the developer responsible for the basic HTML and design, I collaborated closely with my teammate on the JavaScript logic. SimpliGame marked my first experience with GitHub workflow effects and allowed me to be involved in the entire development process, from conception to deployment. Looking ahead, our plans include expanding SimpliGame into a full-stack application, enabling user-generated reviews and favorite game saving."
                        technologies="GiantBomb API & Weather API, Materialize.css, jQuery, HTML, CSS, JavaScript"
                    />
                    <ProjectCard 
                        type="featured"
                        id="proj-4"
                        deployedLink="https://anna-dxj.github.io/md6-weather-dash/"
                        imgSrc={weatherDashScreenshot}
                        imgAlt="Weather Dashboard's Forecast page"
                        name="Weather Dashboard"
                        repoLink="https://github.com/Anna-dxj/md6-weather-dash"
                        description="Front-end application that allows for users to search for a city and see the current weather and a five-day forecast."
                        development="As the sole developer with a limited time frame of seven days, I was tasked with designing the application as well as creating the JavaScript logic to make the API call for the current weather and forecast and to save the previous search in local storage. The Weather Dashboard marks my first time using server-sided APIs from the front-end. This project showcases my ability to create functional and visually appealing applications while working within a strict timeline."
                        technologies="OpenWeather API, Bootstrap, Dayjs, HTML, CSS, JavaScript"
                    />
                    <ProjectCard 
                        type="featured"
                        id="proj-5"
                        deployedLink="https://warm-stream-07044.herokuapp.com/"
                        imgSrc={noteTakerScreenshot}
                        imgAlt="Note Taker Application Sample Note"
                        name="Note Taker"
                        repoLink="https://github.com/Anna-dxj/md11-note-taker"
                        description="Full-stack note-taking application that can be used to write and save notes, track todos, and organize their thoughts."
                        development="As the sole developer for this project, it was my primary responsibility to connect the pre-existing front-end to an Express.js back-end. This experience with Express.js marked an important milestone in my journey toward becoming a full-stack engineer and completely developing a full-stack application by allowing me more experience and familiarity with back-end technologies. Despite the short timeline of seven days, I successfully created the Note Taker, showcasing my ability to deliver high-quality work efficiently and effectively."
                        technologies="Node & Express, RESTful API, JavaScript"
                    />
                    <ProjectCard 
                        type="featured"
                        id="proj-6"
                        youtubeLink="https://youtu.be/hWkNjhxzcTw"
                        imgSrc={employeeTrackScreenshot}
                        imgAlt="Employee Tracker Tables"
                        name="Employee Tracker"
                        repoLink="https://github.com/Anna-dxj/md12-employee-tracker"
                        description="Command-line run content management system (CMS) that allows business owners to easily view and manage departments, roles, and employees in their company."
                        development="As the sole developer for this project, I used SQL commands to make joins of various complexity, enabling seamless data retrieval and manipulation. The Employee Tracker represents my first endeavor in creating a project with a SQL database. Despite the project’s time constraint of seven days, I successfully implemented the Employee Tracker, showcasing my ability to make complex SQL queries and deliver efficient and effective solutions for data management."
                        technologies="Node, Inquirer, SQL, JavaScript"
                    />
                    <div className="row d-flex flex-row justify-content-center align-items-center m-2 px-4 col-sm-12 col-md-10">
                        <a
                            href="#PortfolioArchive"
                            onClick={handlePageSwitch} 
                            className="custom-button d-flex justify-content-center"
                        >
                            View Full Project Archive
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Portfolio