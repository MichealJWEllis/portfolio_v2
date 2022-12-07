import React from "react";
import "./about.css";
import ME from "../../assets/myImages/IMG_1244.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";

const About = () => {
    return (
        <section id="about">
            <h2 style={{ color: "white" }}>About Me</h2>

            <div className="container about__container">
                {/* <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me pic" />
                    </div>
                </div> */}
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>7+ Years On-Site/Remote Experience</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Employers</h5>
                            <small>Detailed on Resume</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineFolder className="about__icon" />
                            <h5>Projects</h5>
                            <small>Please see portfolio</small>
                        </article>
                    </div>

                    <p>
                        Full Stack Developer / Software Developer / IT Analyst
                        with 10 + years of hands-on experience in designing,
                        developing, and implementing applications and solutions
                        using a range of technologies and programming languages.
                        Seeking to leverage development experience and hands-on
                        IT expertise in a challenging role as a Full-stack
                        Developer. Current career responsibilities include, but
                        not limited to, rebuilding and maintaining entire
                        front-end experience with a mobile-first responsive
                        design including back-end development for communication
                        and functionality. Expanding sales opportunities by
                        building custom platforms and management of version
                        control operations via GIT.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
