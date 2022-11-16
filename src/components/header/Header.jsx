import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/myImages/20220428_181031_03.jpg";
//import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <div style={{}}>
            <header id="home">
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="introductionBanner">
                            <h2 className="text-h2">Hello I'm </h2>
                            <h1 className="nameDeco">Micheal Jw Ellis Sr. </h1>
                            <h4 className="text-light ">Fullstack Developer</h4>
                        </div>
                    </div>

                    <CTA />
                    {/* <HeaderSocials /> */}
                    <div className="me">
                        <img src={ME} alt="" />
                    </div>

                    {/* <a href="#contact" className="scroll__down">
                    Scroll Down
                </a> */}
                </div>
            </header>
        </div>
    );
};

export default Header;
