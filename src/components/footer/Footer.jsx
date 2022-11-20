import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                    <ul>
                        <li>
                            <p>Created By: Micheal Jw Ellis Sr</p>
                        </li>
                        <li>
                            <p>Thanks for your Visit</p>
                        </li>
                        <li>
                            <a href="#home" className="homeBtn">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
