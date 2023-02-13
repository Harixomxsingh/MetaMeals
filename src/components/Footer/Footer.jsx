import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={classes.footer}>
      <section className={classes.section1}>
        <div>
          Made with <span className={classes.heart}>&#10084;</span> By
          Harixomxsingh
        </div>
        <div>&#169; 2023 - {year}</div>
      </section>
      <section className={classes.section2}>
        <div>
          <p>
            In this project I use React js library with context api and css
            module this project i just made to learn react with making building
            project
          </p>
          <div className={classes.buttonSection}>
            <span className={classes.twitter}>Twitter</span>
            <span className={classes.github}>Github</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
