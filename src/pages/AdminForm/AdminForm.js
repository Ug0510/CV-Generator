import React, { useState, useEffect } from 'react';
import './AdminForm.css';

const AdminForm = () => {
    const [cvData, setCvData] = useState(null);
    const [choosedSection, setChoosedSection] = useState('personalInfo');

    useEffect(() => {
        const data = localStorage.getItem('CVData');
        const parsedData = JSON.parse(data);
        setCvData(parsedData);
    }, []);

    const handleChooseSection = (item) => {
        setChoosedSection(item);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('CVData', JSON.stringify(cvData));
        alert('Data saved successfully!');
        console.log(cvData);
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...cvData };
        updatedFormData[name] = value;
        setCvData(updatedFormData);
    }

    const handleAddEducation = () => {
        const updatedCvData = { ...cvData };
        updatedCvData.education.push({
            institution: '',
            degree: '',
            date: ''
        });
        setCvData(updatedCvData);
    }
    
    const handleDeleteEducation = (index) => {
        const updatedCvData = { ...cvData };
        updatedCvData.education.splice(index, 1);
        setCvData(updatedCvData);
    }

    const handleEducationChange = (index, fieldName, value) => {
        const updatedCvData = { ...cvData };
        updatedCvData.education[index][fieldName] = value;
        setCvData(updatedCvData);
    }
    
    



    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...cvData };
        updatedFormData[choosedSection][name] = value;
        setCvData(updatedFormData);
    }


    // Experience section handlers

    const handleAddExperience = () => {
        const updatedCvData = { ...cvData };
        updatedCvData.experience.push({
            position: '',
            company: '',
            date: ''
        });
        setCvData(updatedCvData);
    }
    
    const handleDeleteExperience = (index) => {
        const updatedCvData = { ...cvData };
        updatedCvData.experience.splice(index, 1);
        setCvData(updatedCvData);
    }
    
    const handleExperienceChange = (index, fieldName, value) => {
        const updatedCvData = { ...cvData };
        updatedCvData.experience[index][fieldName] = value;
        setCvData(updatedCvData);
    }


    //Achievements handlers

    const handleAddAchievement = () => {
        const updatedCvData = { ...cvData };
        updatedCvData.achievements.push('');
        setCvData(updatedCvData);
    }
    
    const handleDeleteAchievement = (index) => {
        const updatedCvData = { ...cvData };
        updatedCvData.achievements.splice(index, 1);
        setCvData(updatedCvData);
    }
    
    const handleAchievementChange = (index, value) => {
        const updatedCvData = { ...cvData };
        updatedCvData.achievements[index] = value;
        setCvData(updatedCvData);
    }

    // Skill section handlers
    
    const handleAddSkill = () => {
        const updatedCvData = { ...cvData };
        updatedCvData.skills.push('');
        setCvData(updatedCvData);
    }
    
    const handleDeleteSkill = (index) => {
        const updatedCvData = { ...cvData };
        updatedCvData.skills.splice(index, 1);
        setCvData(updatedCvData);
    }
    
    const handleSkillChange = (index, value) => {
        const updatedCvData = { ...cvData };
        updatedCvData.skills[index] = value;
        setCvData(updatedCvData);
    }
    
    

    return (
        <div className='container my-2 my-lg-5'>
            <div className='row'>
                <div className='col-lg-2 side-line '>
                    <div className='d-flex py-3 py-lg-5'>
                        <ul className='m-list'>
                            <span className='heading d-block mb-3'>Choose section</span>
                            {cvData && Object.keys(cvData).map((item) => (
                                <li key={item} className={choosedSection === item ? 'active' : ''} onClick={() => { handleChooseSection(item) }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-10'>
                    {/* personalInfo form */}
                    {choosedSection === 'personalInfo' && (
                        <div className='m-formbox my-2 my-lg-5 text-center pt-5'>
                            <h2>Edit Personal Information</h2>
                            <form onSubmit={handleSubmit} className='m-form mt-5 px-5'>
                                {cvData && Object.keys(cvData.personalInfo).map((key) => (
                                    <div key={key}>
                                        <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                                        <input
                                            type="text"
                                            name={key}
                                            value={cvData.personalInfo[key]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ))}
                                <div className='button-container mt-4'>
                                    <button type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* profile form */}
                    {choosedSection === 'profile' && (
                        <div className='m-formbox my-2 my-lg-5 text-center pt-5'>
                            <h2>Edit Profile</h2>
                            <form onSubmit={handleSubmit} className='m-form reverse mt-5 px-5'>
                                {/* Profile form fields */}
                                <div>
                                    <label>Profile:</label>
                                    <textarea 
                                        name="profile"
                                        value={cvData.profile}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className='button-container mt-4'>
                                    <button type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    )}


                    
{choosedSection === 'education' && (
    <div className='m-formbox my-2 my-lg-5 text-center pt-5'>
        <h2>Edit Education</h2>
        <form onSubmit={handleSubmit} className='m-form reverse mt-5 px-5'>
            {/* Education form fields */}
            {cvData && cvData.education.map((educationItem, index) => (
                <div key={index} className="education-item">
                    <label>Institution:</label>
                    <input
                        type="text"
                        value={educationItem.institution}
                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                    />
                    <label>Degree:</label>
                    <input
                        type="text"
                        value={educationItem.degree}
                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    />
                    <label>Date:</label>
                    <input
                        type="text"
                        value={educationItem.date}
                        onChange={(e) => handleEducationChange(index, 'date', e.target.value)}
                    />
                    <button type="button" onClick={() => handleDeleteEducation(index)}>Delete</button>
                </div>
            ))}
            <div className='button-container mt-4'>
                <button type="button" className='me-2' onClick={handleAddEducation}>Add Institution</button>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
)}



                   {/* experience form */}
{choosedSection === 'experience' && (
    <div className='m-formbox my-2 my-lg-5 text-center pt-5'>
        <h2>Edit Experience</h2>
        <form onSubmit={handleSubmit} className='m-form mt-5 px-5'>
            {/* Experience form fields */}
            {cvData && cvData.experience.map((experienceItem, index) => (
                <div key={index} className="experience-item">
                    <label>Position:</label>
                    <input
                        type="text"
                        value={experienceItem.position}
                        onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    />
                    <label>Company:</label>
                    <input
                        type="text"
                        value={experienceItem.company}
                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    />
                    <label>Date:</label>
                    <input
                        type="text"
                        value={experienceItem.date}
                        onChange={(e) => handleExperienceChange(index, 'date', e.target.value)}
                    />
                    {/* Additional details can be added here */}
                    <button type="button" onClick={() => handleDeleteExperience(index)}>Delete</button>
                </div>
            ))}
            <div className='button-container mt-4'>
                <button type="button" className='me-2' onClick={handleAddExperience}>Add Experience</button>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
)}

                   {/* achievements form */}
{choosedSection === 'achievements' && (
    <div className='m-formbox my-2 my-lg-5 text-center pt-5'>
        <h2>Edit Achievements</h2>
        <form onSubmit={handleSubmit} className='m-form mt-5 px-5'>
            {/* Achievements form fields */}
            {cvData && cvData.achievements.map((achievementItem, index) => (
                <div key={index} className="achievement-item">
                    <input
                        type="text"
                        value={achievementItem}
                        onChange={(e) => handleAchievementChange(index, e.target.value)}
                    />
                    <button type="button" onClick={() => handleDeleteAchievement(index)}><i className="fa-solid fa-trash-can"></i></button>
                </div>
            ))}
            <div className='button-container mt-4'>
                <button type="button" className='me-2' onClick={handleAddAchievement}>Add Achievement</button>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
)}

{/* skills form */}
{choosedSection === 'skills' && (
    <div className='m-formbox my-2 my-lg-5 text-center pt-5'>
        <h2>Edit Skills</h2>
        <form onSubmit={handleSubmit} className='m-form mt-5 px-5'>
            {/* Skills form fields */}
            {cvData && cvData.skills.map((skillItem, index) => (
                <div key={index} className="skill-item">
                    <input
                        type="text"
                        value={skillItem}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                    />
                    <button type="button" onClick={() => handleDeleteSkill(index)}><i className="fa-solid fa-trash-can"></i></button>
                </div>
            ))}
            <div className='button-container mt-4'>
                <button type="button" className='me-2' onClick={handleAddSkill}>Add Skill</button>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
)}

                </div>
            </div>
        </div>
    );
}

export default AdminForm;
