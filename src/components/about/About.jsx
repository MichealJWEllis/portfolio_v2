import React from "react";
import "./about.css";
import ME from "../../assets/myImages/IMG_1244.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me pic" />
                    </div>
                </div>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quo ex odit veritatis. Eveniet blanditiis tempora
                        similique, culpa ipsam officiis nam iure labore
                        molestias praesentium incidunt cupiditate eaque
                        dignissimos deserunt beatae. Suscipit minima ! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Quo
                        ex odit veritatis. Eveniet blanditiis tempora similique,
                        culpa ipsam officiis nam iure labore molestias
                        praesentium incidunt cupiditate eaque dignissimos
                        deserunt beatae. Suscipit minima ! Lorem, ipsum dolor
                        sit amet consectetur adipisicing elit. Quo ex odit
                        veritatis. Eveniet blanditiis tempora similique, culpa
                        ipsam officiis nam iure labore molestias praesentium
                        incidunt cupiditate eaque dignissimos deserunt beatae.
                        Suscipit minima !
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
