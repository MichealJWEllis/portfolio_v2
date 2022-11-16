import React from "react";
import "./experience.css";
import { Box } from "@mui/material";

const Experience = () => {
    const kwest = `Kwest Group ___ May 22, 2022 - Present
    (Web Developer / Full Stack Developer)
    8305 Fremont Pike
    Perrysburg, OH 43551
    PH: (419) 874-4284
    Supervisor: Aaron Maupin
    aaronmoupin@kwestgroup.com`;

    const erie = `Erie Construction ___ August 17,2020 to May 20, 2022
    (Software Engineer / Full Stack Developer)
    3516 Granite Circle				
    Toledo, OH 43617				
    PH: (419) 472-4200
    Supervisor: Tim Sink
    tim@erieconstruction.com
    `;
    const alro = `Alro Steel Inc.___ June 5, 2017 to August 14, 2020
    (I.T / Help-desk Analyst)
    1605 Executive Dr.			                   
    Jackson, MI 49204			                   
    PH: (517) 788-3131
    Supervisor: Chuck Houghton
    choughton@alro.com
    `;
    const alro2 = `Alro Steel Inc.__ March 18, 2013 to June 2, 2017
    (CAD Operator / 3rd Shift Supervisor)
    1800 W. Willow St.			                   
    Lansing, MI 48915			                   
    PH: (517) 371-9616
    Supervisor: Jamie Gaskill
    jgaskill@alro.com
    `;
    return (
        <section id="experience">
            <Box>
                <h3 style={{ textAlign: "center" }}>Work Experience</h3>

                <Box>
                    <div className="boxContainer">
                        <ul>
                            <li>
                                <div className="info">
                                    {kwest.split("\n\n").map((paragraph) => (
                                        <p>
                                            {paragraph
                                                .split("\n")
                                                .reduce((total, line) => [
                                                    total,
                                                    <br />,
                                                    line,
                                                ])}
                                        </p>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    {erie.split("\n\n").map((paragraph) => (
                                        <p>
                                            {paragraph
                                                .split("\n")
                                                .reduce((total, line) => [
                                                    total,
                                                    <br />,
                                                    line,
                                                ])}
                                        </p>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    {alro.split("\n\n").map((paragraph) => (
                                        <p>
                                            {paragraph
                                                .split("\n")
                                                .reduce((total, line) => [
                                                    total,
                                                    <br />,
                                                    line,
                                                ])}
                                        </p>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    {alro2.split("\n\n").map((paragraph) => (
                                        <p>
                                            {paragraph
                                                .split("\n")
                                                .reduce((total, line) => [
                                                    total,
                                                    <br />,
                                                    line,
                                                ])}
                                        </p>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </Box>
            </Box>
        </section>
    );
};

export default Experience;
