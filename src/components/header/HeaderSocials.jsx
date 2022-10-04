/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/michealjwellissr/"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a
                href="https://github.com/MichealJWEllis"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
            <a
                href="mailto:mike.ellis88@gmail.com ? {subject} = {subject}"
                target="_blank"
                rel="noreferrer"
            >
                <HiMail />
            </a>
        </div>
    );
};

export default HeaderSocials;
