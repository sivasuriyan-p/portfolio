import React from 'react';
import './Footer.css';
import LightLogo from '../../assets/header/logo.png'
import DarkLogo from '../../assets/header/logo_dark.png'
import { Theme } from "../Context/Context";
import { useContext } from "react";
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

const Footer = () => {

    const { theme, setTheme } = useContext(Theme);



    return (
        <footer className={`footer footer-bg-${theme}`}>
            <div className="footer-logo">
                <img src={theme === 'Light' ? LightLogo : DarkLogo} alt="Logo" width={150} className='imgObj' />
            </div>
            <div className={`footer-nav ${theme}`} >
                <a className={theme} href="#home">Home</a>
                <a className={theme} href="#about">About Me</a>
                <a className={theme} href="#services">Services</a>
                <a className={theme} href="#projects">Projects</a>
                <a className={theme} href="#testimonials">Testimonials</a>
                <a className={theme} href="#contact">Contact</a>
            </div>
            <div className='social-media-parent'>
                {SocialMedia.map((media) => (
                    <div className="social-media">
                        <a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer" className={theme}>
                            {media.icon}
                        </a>
                    </div>
                ))}
            </div>
            <div className={`footer-copy`}>
                © 2023 <strong>FawziUiUx</strong> All Rights Reserved, Inc.
            </div>
        </footer>
    );
};

export default Footer;
