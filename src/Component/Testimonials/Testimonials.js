import React from 'react';
import './Testimonials.css';
import testi from "../../assets/testi.png"
import { Theme } from "../Context/Context";
import { useContext } from "react";

const Testimonials = () => {

    const { theme, setTheme } = useContext(Theme);


    return (
        <div className={`testimonials testimonials-bg-${theme}`}>
            <h2 className={theme}>Testimonials</h2>
            <p className={theme}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div className="testimonials-container">
                <div className="testimonial">
                    <img src={testi} alt="Person 1" />
                    <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                    <h3>Name</h3>
                    <h4>CEO</h4>
                </div>
                <div className="testimonial">
                    <img src={testi} alt="Person 2" />
                    <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                    <h3>Name</h3>
                    <h4>CEO</h4>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
