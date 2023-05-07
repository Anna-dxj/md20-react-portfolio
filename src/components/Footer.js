import React from 'react';
import '../styles/Footer.css'
import {Github, Facebook, Linkedin} from 'react-bootstrap-icons'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="p-3 d-flex justify-content-center custom-foot">
      <a href="https://github.com/Anna-dxj" className="p-1 m-2 custom-link">
        <Github width="60" height="60"/>
      </a>
      <a href="https://www.linkedin.com/in/anna-langford-a9a222275" className="p-1 m-2 custom-link">
        <Linkedin width="60" height="60" />
      </a>
      <a href="https://www.facebook.com/anna.langford.37/" className="p-1 m-2 custom-link">
        <Facebook width="60" height="60"/>
      </a>
    </div>
  );
}

export default NavTabs;
