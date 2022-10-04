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
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <nav>
            <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <BiUserCircle />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <MdDeveloperMode />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <BsBriefcase />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contactMe")}
                className={activeNav === "#contactMe" ? "active" : ""}
            >
                <MdOutlineContactPhone />
            </a>
        </nav>
    );
};

export default Nav;
