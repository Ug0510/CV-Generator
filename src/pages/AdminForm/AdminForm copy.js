import React, { useState, useEffect } from 'react';

const AdminForm = () => {
    // Define the initial form data state
    const [formData, setFormData] = useState({
        profile: '',
        education: [],
        experience: [],
        achievements: [],
        skills: []
    });

    // Fetch data from localStorage when the component mounts
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    // Handle form input changes
    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [name]: value
            }
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(formData));
        alert('Information updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Profile */}
            <label htmlFor="profile">Profile:</label>
            <textarea 
                id="profile" 
                name="profile" 
                value={formData.profile} 
                onChange={(e) => handleInputChange(e, 'profile')}
            ></textarea>

            {/* Education */}
            <label htmlFor="education">Education:</label>
            <textarea 
                id="education" 
                name="education" 
                value={formData.education} 
                onChange={(e) => handleInputChange(e, 'education')}
            ></textarea>

            {/* Experience */}
            <label htmlFor="experience">Experience:</label>
            <textarea 
                id="experience" 
                name="experience" 
                value={formData.experience} 
                onChange={(e) => handleInputChange(e, 'experience')}
            ></textarea>

            {/* Achievements */}
            <label htmlFor="achievements">Achievements:</label>
            <textarea 
                id="achievements" 
                name="achievements" 
                value={formData.achievements} 
                onChange={(e) => handleInputChange(e, 'achievements')}
            ></textarea>

            {/* Skills */}
            <label htmlFor="skills">Skills:</label>
            <textarea 
                id="skills" 
                name="skills" 
                value={formData.skills} 
                onChange={(e) => handleInputChange(e, 'skills')}
            ></textarea>

            {/* Submit button */}
            <button type="submit">Save</button>
        </form>
    );
};

export default AdminForm;
