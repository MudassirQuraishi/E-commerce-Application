import AboutSection from "../components/AboutSection";
import React from "react";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
    return (
        <div className={classes.about}>
            <AboutSection />
        </div>
    );
};

export default AboutPage;
