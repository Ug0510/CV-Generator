import React, { useState, useEffect } from 'react';

const CVForm = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const storedPersonalInfo = JSON.parse(localStorage.getItem('personalInfo')) || {};
    const storedEducation = JSON.parse(localStorage.getItem('education')) || [];
    const storedWorkExperience = JSON.parse(localStorage.getItem('workExperience')) || [];
    const storedSkills = JSON.parse(localStorage.getItem('skills')) || [];

    setPersonalInfo(storedPersonalInfo);
    setEducation(storedEducation);
    setWorkExperience(storedWorkExperience);
    setSkills(storedSkills);
  }, []);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...education];
    updatedEducation[index][e.target.name] = e.target.value;
    setEducation(updatedEducation);
  };

  const handleWorkExperienceChange = (index, e) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][e.target.name] = e.target.value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleSkillsChange = (index, e) => {
    const updatedSkills = [...skills];
    updatedSkills[index][e.target.name] = e.target.value;
    setSkills(updatedSkills);
  };

  const handleSubmit = () => {
    // Convert all values to JSON
    const data = {
      personalInfo,
      education,
      workExperience,
      skills,
    };

    // Save data to local storage
    localStorage.setItem('cvData', JSON.stringify(data));
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>Personal Information</h3>
        <label>
          Name:
          <input type="text" name="name" value={personalInfo.name || ''} onChange={handlePersonalInfoChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={personalInfo.email || ''} onChange={handlePersonalInfoChange} />
        </label>
        {/* Add more fields for personal info as needed */}

        {/* Education */}
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <input type="text" name="institution" value={edu.institution || ''} onChange={(e) => handleEducationChange(index, e)} />
            <input type="text" name="degree" value={edu.degree || ''} onChange={(e) => handleEducationChange(index, e)} />
            {/* Add more fields for education as needed */}
          </div>
        ))}
        {/* Button to add more education entries */}

        {/* Work Experience */}
        <h3>Work Experience</h3>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <input type="text" name="company" value={exp.company || ''} onChange={(e) => handleWorkExperienceChange(index, e)} />
            <input type="text" name="position" value={exp.position || ''} onChange={(e) => handleWorkExperienceChange(index, e)} />
            {/* Add more fields for work experience as needed */}
          </div>
        ))}
        {/* Button to add more work experience entries */}

        {/* Skills */}
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={index}>
            <input type="text" name="name" value={skill.name || ''} onChange={(e) => handleSkillsChange(index, e)} />
            <input type="text" name="level" value={skill.level || ''} onChange={(e) => handleSkillsChange(index, e)} />
            {/* Add more fields for skills as needed */}
          </div>
        ))}
        {/* Button to add more skills entries */}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CVForm;
