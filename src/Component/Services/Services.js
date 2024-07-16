import React from 'react';
import './Services.css';
import { useContext } from "react";
import UiUx from "../../assets/services/uiux.png"
import webDesign from "../../assets/services/webdesign.png"
import App from "../../assets/services/appdesign.png"
import graphic from "../../assets/services/graphic.png"
import { Theme } from '../Context/Context';

const services = [
    {
        title: "UI/UX",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        icon: UiUx,
    },
    {
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        icon: webDesign,
    },
    {
        title: "App Design",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        icon: App,
    },
    {
        title: "Graphic Design",
        description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        icon: graphic,
    },
];

const Services = () => {
    const { theme, setTheme } = useContext(Theme);


    return (
        <div id='services' className={`parent-container-service-${theme}`}>
            <div className="services-container">
                <h1 className={`services-title ${theme}`}>Services</h1>
                <p className={`services-description ${theme}`}>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
                </p>
                <div className="services-list">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.icon} alt={service.title} className="imgObj service-icon" />
                            <h2 className="service-title">{service.title}</h2>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Services;
