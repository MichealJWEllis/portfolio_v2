import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <nav>
                <a
                    title="Home"
                    href="#home"
                    onClick={() => setActiveNav("#")}
                    className={activeNav === "#" ? "active" : ""}
                >
                    <AiOutlineHome />
                </a>
                <a
                    title="About"
                    href="#about"
                    onClick={() => setActiveNav("#about")}
                    className={activeNav === "#about" ? "active" : ""}
                >
                    <BiUserCircle />
                </a>
                <a
                    title="Experience"
                    href="#experience"
                    onClick={() => setActiveNav("#experience")}
                    className={activeNav === "#experience" ? "active" : ""}
                >
                    <MdDeveloperMode />
                </a>
                <a
                    title="Services"
                    href="#services"
                    onClick={() => setActiveNav("#services")}
                    className={activeNav === "#services" ? "active" : ""}
                >
                    <RiServiceLine />
                </a>
                <a
                    title="Portfolio"
                    href="#portfolio"
                    onClick={() => setActiveNav("#portfolio")}
                    className={activeNav === "#portfolio" ? "active" : ""}
                >
                    <BsBriefcase />
                </a>
                <a
                    title="Contact"
                    href="#contact"
                    onClick={() => setActiveNav("#contactMe")}
                    className={activeNav === "#contactMe" ? "active" : ""}
                >
                    <MdOutlineContactPhone />
                </a>
            </nav>
        </div>
    );
};

export default Nav;
