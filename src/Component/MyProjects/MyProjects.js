import React, { useState } from 'react';
import './MyProjects.css';
import ProOne from "../../assets/myProject/pro1.png"
import ProTwo from "../../assets/myProject/pro2.png"
import ProThree from "../../assets/myProject/pro3.png"
import { Theme } from '../Context/Context';
import { useContext } from "react";


const projects = [
    {
        id: 1,
        title: 'AirCalling Landing Page Design',
        category: 'Web Design',
        image: ProOne,
    },
    {
        id: 2,
        title: 'Business Landing Page Design',
        category: 'Web Design',
        image: ProTwo
    },
    {
        id: 3,
        title: 'Ecom Web Page Design',
        category: 'Web Design',
        image: ProThree
    },
];

const filterOptions = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { theme, setTheme } = useContext(Theme);


    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects;

    return (
        <div className={`parent-my-projects-${theme}`}>
            <div className={`my-projects-container`}>
                <h1 className={theme}>My Projects</h1>
                <p className={`description ${theme}`}>
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.
                    Phasellus consequat urna tellus.
                </p>
                <div className="filter-buttons">
                    {filterOptions.map(option => (
                        <button
                            key={option}
                            className={`${selectedCategory === option ? 'active' : 'menuOption'}`}
                            // className={selectedCategory === option ? 'active' : ''}
                            onClick={() => setSelectedCategory(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="projects">
                    {filteredProjects.map(project => (
                        <div key={project.id} className={`project-card project-card${theme}`}>
                            <img src={project.image} alt={project.title} className="project-image imgObj" />
                            <div className="project-info">
                                <p className={`project-category ${theme}`} >{project.category}</p>
                                <p className={`project-title ${theme}`}>{project.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
