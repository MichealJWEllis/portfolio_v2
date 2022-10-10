import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/myImages/20220428_181031_03.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h2>Hello I'm </h2>
                <h1 style={{ color: "rgba(0, 255, 26, 1)" }}>
                    Micheal Jw Ellis Sr.{" "}
                </h1>
                <h4 className="text-light">Fullstack Developer</h4>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
