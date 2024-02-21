import { useEffect, useState } from 'react';
import './CV.css';

function CV() {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
        // Fetch data from localStorage
        setTimeout(() => {
            const storedCvData = localStorage.getItem('CVData');
        if (storedCvData) {
            setCvData(JSON.parse(storedCvData));
        } 
        },5)
    }, [cvData]);

    return (
        <div className="A4 CV-body">
            <div className="sheet">
                {cvData? (<div className="two-column resume">
                    <section className="resume__section resume__header">
                        <div className="resume__content">
                            <h1>{cvData?.personalInfo?.name}</h1>
                            <div className="info-item">
                                <span className="info-label"><i className="fa fa-envelope"></i></span>
                                <span className="info-text">{cvData?.personalInfo?.email}</span>
                                <span className="info-label"><i className="fa fa-phone"></i></span>
                                <span className="info-text">{cvData?.personalInfo?.phone}</span>
                                <span className="info-label"><i className="fa-brands fa-linkedin-in"></i></span>
                                <span className="info-text">{cvData?.personalInfo?.linkedin}</span>
                                <span className="info-label"><i className="fa-brands fa-github"></i></span>
                                <span className="info-text">{cvData?.personalInfo?.github}</span>
                            </div>
                        </div>
                    </section>

                    <div className="resume__columns">
                        <div className="resume__main">
                            <section className="resume__section resume__summary">
                                <div className="resume__content">
                                    <div className="resume__section-title"><i className="fa fa-pencil"></i><h2>Profile</h2></div>
                                    <div className="other other-info">
                                        <p>{cvData?.profile}</p>
                                    </div>
                                </div>
                            </section>

                            <section className="resume__section resume__education">
                                <div className="resume__content">
                                    <div className="resume__section-title"><i className="fa fa-graduation-cap"></i><h2>Education</h2></div>
                                    {cvData?.education && cvData.education.map((edu, index) => (
                                        <div className="xp-item" key={index}>
                                            <div className="xp-job">{edu.institution}</div>
                                            <div className="xp-date">{edu.date}</div>
                                            <div className="xp-detail">
                                                <ul>
                                                    <li>{edu.degree}</li>
                                                    {edu.details && edu.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="resume__section resume__experience">
                                <div className="resume__content">
                                    <div className="resume__section-title"><i className="fa fa-briefcase"></i><h2>Experience</h2></div>
                                    {cvData?.experience && cvData.experience.map((exp, index) => (
                                        <div className="xp-item" key={index}>
                                            <div className="xp-job">{exp.position}, {exp.company}</div>
                                            <div className="xp-date">{exp.date}</div>
                                            <div className="xp-detail">
                                                <ul>
                                                    {exp.details && exp.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="resume__side" style={{ marginRight: '100px' }}>
                            <section className="resume__section resume__achievements">
                                <div className="resume__content">
                                    <div className="resume__section-title"><h2>Achievements</h2></div>
                                    <ul className="achievements-list">
                                        {cvData?.achievements && cvData.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="resume__side">
                            <section className="resume__section resume__skills">
                                <div className="resume__content">
                                    <div className="resume__section-title"><h2>Skills</h2></div>
                                    <ul className="skills-list">
                                        {cvData?.skills && cvData.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>): (<p className='mt-3'>Loading CV Data...</p>)}
            </div>
        </div>
    );
}

export default CV;
