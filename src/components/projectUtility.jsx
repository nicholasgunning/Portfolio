import React from 'react';
import { Link } from 'react-router-dom';
import homePage from '../stylesheets/homepage.module.css';

function Project({ name, link }) {
  return (
    <div className={homePage.section}>
      <Link to={link} className={homePage.link}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
}

export default Project;
