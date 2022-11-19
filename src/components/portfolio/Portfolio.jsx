import React from "react";
import "./portfolio.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import ME from "../../assets/myImages/ME.jpg";
import BudgetSite from "../../assets/projectsImages/budget.png";
import TaskSite from "../../assets/projectsImages/task.png";
import TodoSite from "../../assets/projectsImages/todo1.png";
import QuizSite from "../../assets/projectsImages/quiz.png";
import WorkDaySite from "../../assets/projectsImages/workday.png";
import WeatherSite from "../../assets/projectsImages/WeatherDash1.png";

const Portfolio = () => {
    const content = [
        {
            title: "GIT it done!",
            description:
                "This application uses Git API to gather information on any user on the GIT hub platform and display that information in categories dependent on what code base selected.  Fully designed with HTML and CSS and JavaScript used for the back end API communication. Code Used: JS, HTML, CSS, API integration",
            button: "Visit Site",
            image: `${BudgetSite}`,
            user: "Micheal Jw Ellis Sr",
            userProfile: `${ME}`,
            link: "https://michealjwellis.github.io/mod6_redo/",
        },
        {
            title: "Tortor Dapibus Commodo Aenean Quam",
            description:
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
            button: "Visit Site",
            image: `${TaskSite}`,
            user: "Micheal Jw Ellis Sr",
            userProfile: `${ME}`,
            link: "https://www.google.com",
        },
        {
            title: "ToDo App",
            description:
                "This application will allow a user to organize their simple todo's for a typical day.  The site will remember the actions of the user via the DOM and will allow for consistant use of the application. Code Used: JS, HTML, CSS",
            button: "Visit Site",
            image: `${TodoSite}`,
            user: "Micheal Jw Ellis Sr",
            userProfile: `${ME}`,
            link: "https://michealjwellis.github.io/mod4_redo/",
        },
        {
            title: "JavaScript Quiz",
            description:
                "Build a timed coding quiz with multiple-choice questions. This app will run in the browser. The app will feature dynamically updated HTML and CSS powered by JavaScript. Code Used: HTML, CSS, JavaScript",
            button: "Visit Site",
            image: `${QuizSite}`,
            user: "Micheal Jw Ellis Sr",
            userProfile: `${ME}`,
            link: "https://michealjwellis.github.io/JavaScript_Quiz/",
        },
        {
            title: "Work Day Scheduler",
            description:
                "Develop an app that will allow a user to schedule their typical work day from 9-5 Code Used: HTML, CSS, JavaScript, Moment.JS, JQuery.JS, BOOTSTRAP",
            button: "Visit Site",
            image: `${WorkDaySite}`,
            user: "Micheal Jw Ellis Sr",
            userProfile: `${ME}`,
            link: "https://michealjwellis.github.io/Work_Day_Scheduler/",
        },
        {
            title: "Weather Dashboard",
            description:
                "Create an application that user can check their local weather. Use the OpenWeather API to retrieve weather data for cities. nclude dynamically updated HTML and CSS powered by JavaScript. Code Used: HTML, CSS, JavaScript, API Integration",
            button: "Visit Site",
            image: `${WeatherSite}`,
            user: "Micheal Jw Ellis Sr",
            userProfile: `${ME}`,
            link: "https://michealjwellis.github.io/mod6prodRedo/",
        },
    ];

    return (
        <section id="portfolio" style={{ padding: "20px" }}>
            <Slider className="slider-wrapper" autoplay="3000">
                {content.map((item, index) => (
                    <div
                        key={index}
                        
                        className="slider-content"
                        style={{
                            background: `url('${item.image}') no-repeat center center`,
                        }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>{item.button}</button>
                            </a>
                        </div>
                        <section>
                            <img
                                src={item.userProfile}
                                alt={item.user}
                                style={{
                                    height: "5rem",
                                    width: "5rem",
                                    margin: "1rem",
                                }}
                            />
                            <span>
                                Contributed By <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Portfolio;
