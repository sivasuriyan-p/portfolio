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

const footerMenu = [
    {
        id: 1,
        name: 'Home',
        href: '#home'
    }, {
        id: 2,
        name: 'About Me',
        href: '#about_me'
    }, {
        id: 3,
        name: 'Services',
        href: '#services',
    }, {
        id: 4,
        name: 'Projects',
        href: '#projects',
    }, {
        id: 5,
        name: 'Testimonials',
        href: '#testimonials',
    }, {
        id: 6,
        name: 'Contact',
        href: '#contact',
    }

]

const Footer = () => {

    const { theme, setTheme } = useContext(Theme);



    return (
        <footer className={`footer footer-bg-${theme}`}>
            <div className="footer-logo">
                <img src={theme === 'Light' ? LightLogo : DarkLogo} alt="Logo" width={150} className='imgObj' />
            </div>
            <div className={`footer-nav ${theme}`} >
                {footerMenu.map((menu) => (
                    <a key={menu.id} className={theme} href={menu.href}>{menu.name}</a>
                ))}
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
