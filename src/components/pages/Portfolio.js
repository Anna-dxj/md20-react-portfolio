import React from 'react';
import answerHubScreenshot from '../../assets/screenshots/answerhub-screenshot.png'
import techBlogScreenshot from '../../assets/screenshots/tech-blog-screenshot.png'
import simpligameScreenshot from '../../assets/screenshots/simpligame-screenshot.png'
import passwordGenScreenshot from '../../assets/screenshots/password-generator-screenshot.png'
import regexTutScreenshot from '../../assets/screenshots/regex-gist-screenshot.png'
import quizGameScreenshot from '../../assets/screenshots/quiz-game-screenshot.png'

// ORGANIZE BY: FULL-STACK, FRONT-END, BACK-END WITH ALL PROJECTS AT THE FRONT 
// SPECIFY IF REST API OR NO 
export default function Portfolio() {
  return (
    <div>
      <h1>Protfolio</h1>    
      <div className="card">
        <a href="https://whispering-retreat-56820.herokuapp.com/login">
          <img 
            src={answerHubScreenshot} 
            alt="Screenshot of AnswerHub's login page"
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <h2 clsasName="card-title">AnswerHub</h2>
          <p className="card-text">AnswerHub is a fullstack social media platform for developers. Through creating an account, a developer would be able to consult an AI for coding or math-related questions and connect with other developers to collaborate on projects or network. AnswerHub features common social media features, such as posting and commenting.</p>
          <p className="card-text">AnswerHub uses a MySQL database, and so uses Sequalize. AnswerHub uses bcrypt to encrypt password and sensitive user-information. AnswerHub uses Handlebars to render the front-end, Bootstrap to aid in formatting, and Express and node.js to handle the back-end server. Aditionally, AnswerHub allows users to upload a profile photo in addition to updating other aspects of their profile; to accomplish this task, AnswerHub uses Datauri, Cloudinary, and Multer. Aditionally, AnswerHub uses OpenAI to provide users with the AI Chatbot.</p>
          <p className="card-text">AnswerHub is also the product of asmall group project, where I worked on the making the design responsive and improving the UI/UX as well as working on the models.</p>
          <a href="https://github.com/Michaelx626/AnswerHub" className="btn">Repo</a>
        </div>
      </div>  
      <div className="card">
        <a href="https://mynamebrogrammer.github.io/SimpliGame/">
          <img 
            src={simpligameScreenshot} 
            alt="Screenshot of SimpliGame's home page"
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <h2 clsasName="card-title">SimpliGame</h2>
          <p className="card-text">SimpliGame is a basic front-end web application that strives to provide users with a streamlined video game research experience. By reducing irrelevant information, users are able to mak their decision and more quickly and with confidence. Simpligame is aimed at everyone from someone with a passing interest in gaming to hardcore gamers.</p>
          <p className="card-text">SimpliGame relies on both the Giantbomb API and Weather API, and it uses Materialize CSS as its framework. Due to a complex CORS issue, this application also uses jQuery to make an AJAX request to the GiantBomb API</p>
          <p className="card-text">SimpliGame is the product of a small group project, where I worked on the HTML and CSS design and layout as well as some of the JavaScript logic.</p>
          <a href="https://github.com/mynamebrogrammer/SimpliGame" className="btn">Repo</a>
        </div>
      </div>
      <div className="card">
        <a href="https://secret-island-23664.herokuapp.com/">
          <img 
            src={techBlogScreenshot} 
            alt="Screenshot of Techblog's home page"
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <h2 clsasName="card-title">Tech Blog</h2>
          <p className="card-text">The Tech Blog is the first full-stack application I created. It is a blog for users interested or involved in the Tech industry to post about new discoveries or commentary on technology. After signing up, a user is able to post, comment on others' posts, and update or delete their own posts.</p>
          <p className="card-text">The Tech Blog uses a MySQL database, as well as the standard technologies for a back-end server: Sequelize, node.js, and express. This application uses Bootstrap to aid in formatting and Handlebars to render the front-end user interface. This application also uses bcrypt to handle sensitive user information.</p>
          <p className="card-text">The Tech Blog is an application produced fully by me during the UCLA full-stack coding bootcamp.</p>
          <a href="https://github.com/Anna-dxj/md14-tech-blog" className="btn">Repo</a>
        </div>
      </div>
      <div className="card">
        <a href="https://gist.github.com/Anna-dxj/c6f168dd24635e1fd09ffff81526a4a3">
          <img 
            src={regexTutScreenshot} 
            alt="Screenshot of first few lines of tutorial"
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <h2 clsasName="card-title">RegEx Gist</h2>
          <p className="card-text">the RegEx Gist analyzes Regular Expressions and what each part of one means, using a hexidecimal RegEx as its main example.</p>
          <p className="card-text">The RegEx Gist is a tutorial produced and resarched by me during the UCLA full-stack coding bootcamp.</p>
          <a href="https://gist.github.com/Anna-dxj/c6f168dd24635e1fd09ffff81526a4a3" className="btn">Gist</a>
        </div>
      </div>
      <div className="card">
        <a href="https://anna-dxj.github.io/md3-friendly-parakeet/">
          <img 
            src={passwordGenScreenshot} 
            alt="Screenshot of password generator"
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <h2 clsasName="card-title">Password Generator</h2>
          <p className="card-text">The Password Generator is one of my early front-end applications. It uses JavaScript to generate a random password based on the user's input. </p>
          <p className="card-text">The Password Generator is a very simple front-end application, and therefore does not use any fancier technology than HTML, CSS, and JavaScript</p>
          <p className="card-text">The Password Generator's JavaScripted logic was produced by me during the UCLA full-stack coding bootcamp.</p>
          <a href="https://github.com/Anna-dxj/md3-friendly-parakeet" className="btn">Repo</a>
        </div>
      </div>
      <div className="card">
        <a href="https://anna-dxj.github.io/md4-quiz-game/">
          <img 
            src={quizGameScreenshot} 
            alt="Screenshot of the quiz challenge"
            className="card-img-top"
          />
        </a>
        <div className="card-body">
          <h2 clsasName="card-title">JavaScript Coding Quiz Challenge</h2>
          <p className="card-text">The JavaScript Coding Quiz Challenge is another one of my early, simple front-end application that quizes a user on the basics of JavaScript. It is a timed quiz and penalizes a user for incorrect answer by deducting a certain amount of time from their remaining time. Upon completion, a user is able to save their score and see how their score compares to others.</p>
          <p className="card-text">This application uses local storage to store a user's alias and score.</p>
          <p className="card-text">The JavaScript Coding Quiz Challenge is a simple front-end application fully produced by me during the UCLA full-stack coding bootcamp.</p>
          <a href="https://github.com/Anna-dxj/md4-quiz-game" className="btn">Repo</a>
        </div>
      </div>
    </div>
  );
}
