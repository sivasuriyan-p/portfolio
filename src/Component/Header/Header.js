import React from 'react'
import { useState } from 'react'
import LightLogo from '../../assets/header/logo.png'
import DarkLogo from '../../assets/header/logo_dark.png'
import './Header.css'
import { Theme } from "../Context/Context";
import { useContext } from "react";


const headerMenu = [
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

export default function Header() {

    const { theme, setTheme } = useContext(Theme);

    const handleToggleChange = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    }

    return (
        <header>
            <nav className={`parent-container-header-${theme}`}>
                <div className={`header-menu-section`}>
                    <input type="checkbox" id="nav-toggle" />

                    <div class="logo">
                        <div>
                            <img src={theme === 'Light' ? LightLogo : DarkLogo} width={200} alt='logo' className='imgObj' />
                        </div>
                    </div>
                    <ul class="links">
                        {headerMenu.map((menu) => (
                            <li key={menu.id}><a className={theme} href={menu.href}>{menu.name}</a></li>
                        ))}
                        <li>
                            <button className='downloadBtn btnClr'>Download CV</button>
                        </li>
                        <li>
                            <label class="switch">
                                <input type="checkbox" onChange={() => handleToggleChange()} />
                                <span class="slider round"></span>
                            </label>
                        </li>
                    </ul>


                    <label for="nav-toggle" class="icon-burger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </label>
                </div>
            </nav>
            <label for="nav-toggle" class="icon-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
        </header>
    )
}
