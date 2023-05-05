import React from 'react';
import githubIcon from '../assets/images/github-icon.png'
import linkedinIcon from '../assets/images/linkedin-icon.png'
import facebookIcon from '../assets/images/facebook-icon.png'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <a href="https://github.com/Anna-dxj">
        <img 
          src={githubIcon}
          alt="Link to Github profile"
        />
      </a>
      <a href="https://www.linkedin.com/in/anna-langford-a9a222275">
        <img 
          src={linkedinIcon}
          alt="Link to Linkedin profile"
        />
      </a>
      <a href="https://www.facebook.com/anna.langford.37/">
        <img 
          src={facebookIcon}
          alt="Link to Facebook profile"
        />
      </a>
    </div>
  );
}

export default NavTabs;
