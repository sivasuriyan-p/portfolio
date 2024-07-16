import React from 'react';
import './Testimonials.css';
import testi from "../../assets/testi.png"
import { Theme } from "../Context/Context";
import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const SwipeData = [
    {
        id: 1,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: testi
    },
    {
        id: 2,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: testi
    }, {
        id: 3,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: testi
    }, {
        id: 4,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: testi
    }, {
        id: 5,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        img: testi
    }
]

const Testimonials = () => {

    const { theme, setTheme } = useContext(Theme);


    return (
        <div id='testimonials' className={`testimonials testimonials-bg-${theme}`}>
            <h2 className={theme}>Testimonials</h2>
            <p className={theme}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div className="testimonials-container">
                <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} className="mySwiper" autoplay={{ delay: 3000 }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 1280px
                        1280: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {SwipeData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="testimonial">
                                <img src={testi} alt="Person 1" />
                                <div>
                                    <p><span className='quote-color'>“</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='quote-color'>“</span></p>
                                    <h3>{slide.name}</h3>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
