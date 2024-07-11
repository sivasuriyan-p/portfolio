import React from 'react';
import './Contact.css';
import { Theme } from '../Context/Context';
import { useContext } from "react";

const Contact = () => {

    const { theme, setTheme } = useContext(Theme);


    return (
        <div className={`parent-contact-${theme}`}>
            <div className="contact-section">
                <h1 className={theme}>Lets Design Together</h1>
                <p className={theme}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
                    netus in. Aliquet donec morbi convallis pretium
                </p>
                <form className="contact-form">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit">Contact Me</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
