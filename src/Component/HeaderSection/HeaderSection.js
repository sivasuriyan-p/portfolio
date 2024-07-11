import React from 'react'
import { Theme } from "../Context/Context";
import { useContext } from "react";
import ManOne from "../../assets/section/man_one.png"
import './HeaderSection.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = [
    {
        id: 1,
        icon: <FaFacebook />,
        link: "https://www.facebook.com/"
    },
    {
        id: 2,
        icon: <FaSquareXTwitter />,
        link: "https://twitter.com/"
    },
    {
        id: 3,
        icon: <FaInstagram />,
        link: "https://www.instagram.com/"
    },
    {
        id: 4,
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/"
    },
]



export default function HeaderSection() {

    const { theme, setTheme } = useContext(Theme);


    return (
        <div >
            <div className={`parent-container-header-section-${theme}`}>
                <div className='header-section'>
                    <div className="card">
                        <h2 className={`intro ${theme}`}>Hi I am</h2>
                        <h1 className="name">Fawzi Sayed</h1>
                        <div className='role-parent'>
                            <p className={`role ${theme}`}>UI & UX
                            </p>
                            <p className={`role designer ${theme}`}> Designer</p>
                        </div>
                        <p className={`description ${theme}`}>
                            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                        </p>
                        <button className="btnClr">Hire Me</button>
                    </div>
                    <div className='person-section'>
                        <img src={ManOne} width={350} className='imgObj imgIntro' />
                        <div className='social-media-parent'>
                            {SocialMedia.map((media) => (
                                <div className="social-media">
                                    <a href={media.link} target="_blank" rel="noreferrer" className={theme}>
                                        {media.icon}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
