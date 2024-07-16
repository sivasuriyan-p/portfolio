import React from 'react'
import { Theme } from "../Context/Context";
import { useContext } from "react";
import about_man from "../../assets/section/about_man.png"
import './AboutMe.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




const SkilsSet = [
    {
        id: 1,
        skill: "UX",
        percentage: "80%"
    },
    {
        id: 2,
        skill: "Website Design",
        percentage: "70%"
    },
    {
        id: 3,
        skill: "App Design",
        percentage: "75%"
    },
    {
        id: 4,
        skill: "Graphic Design",
        percentage: "80%"
    },
]



export default function HeaderSection() {

    const { theme, setTheme } = useContext(Theme);


    return (
        <div id='about_me' className={`parent-about-me-${theme}`}>
            <div className="about-me-container">
                <div className="image-container">
                    <img src={about_man} alt="Profile" className="imgObj imgAboutMe" width={430} />
                </div>
                <div className="content-container">
                    <h1 className={theme}>About Me</h1>
                    <p className={theme}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                    </p>
                    <div className="skills">
                        {SkilsSet.map((item) => (
                            <div className="skill">
                                <span className={theme}>{item.skill}</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: item.percentage }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
