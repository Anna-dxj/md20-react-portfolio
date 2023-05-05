import React from 'react';
import githubIcon from '../assets/images/github-icon.png'
import linkedinIcon from '../assets/images/linkedin-icon.png'
import facebookIcon from '../assets/images/facebook-icon.png'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="p-3 d-flex justify-content-center">
      <a href="https://github.com/Anna-dxj" className="p-1 m-2">
        <img 
          src={githubIcon}
          alt="Link to Github profile"
          width="75"
          height="75"
        />
      </a>
      <a href="https://www.linkedin.com/in/anna-langford-a9a222275" className="p-1 m-2">
        <img 
          src={linkedinIcon}
          alt="Link to Linkedin profile"
          width="75"
          height="75"
        />
      </a>
      <a href="https://www.facebook.com/anna.langford.37/" className="p-1 m-2">
        <img 
          src={facebookIcon}
          alt="Link to Facebook profile"
          width="75"
          height="75"
        />
      </a>
    </div>
  );
}

export default NavTabs;
