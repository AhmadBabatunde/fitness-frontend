import React, { useState } from "react";
import "./index.css"; // Import a CSS file for styling

const TherapyForm = (props) => {
  const [formData, setFormData] = useState({
    fullname:"",
    therapyReason: "",
    beenToTherapy: "",
    age: "",
    stressLevel: 1,
    occupation: "",
    therapyGoals: "",
    significantEvents: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const formattedString = `
      My name is {${formData.fullname}},
      What types of exercise do you currently do, and how often? {${formData.therapyReason}},
      Can you walk me through what you typically eat in a day? {${formData.beenToTherapy}},
      How would you describe your energy levels throughout the day? {${formData.age}},
      On a scale of 1 to 10, how would you rate your current stress level? {${formData.stressLevel}},
      What is your current occupation? {${formData.occupation}},
      What types of exercise or diets have worked (or not worked) for you in the past? {${formData.therapyGoals}},
      What are your goals now? {${formData.significantEvents}}`;

    props.actionProvider.handleAskQuestion(formattedString);
    // Submit form data to the backend or handle it as needed
    console.log(formattedString)
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="therapy-form">
        <h2>Fitness And Diet Intake Form</h2>


        <div className="form-group">
          <label>What is your name?</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>What types of exercise do you currently do, and how often?</label>
          <input
            type="text"
            name="therapyReason"
            value={formData.therapyReason}
            onChange={handleChange}
            placeholder="Enter Excersice Type"
            required
          />
        </div>

        <div className="form-group">
          <label>Can you walk me through what you typically eat in a day?</label>
          <input
            type="text"
            name="beenToTherapy"
            value={formData.beenToTherapy}
            onChange={handleChange}
            placeholder="Enter Daily Meals"
            required
          />
          
        </div>

        <div className="form-group">
          <label>How would you describe your energy levels throughout the day?</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Energy Level"
            required
          />
        </div>

        <div className="form-group">
          <label>
            On a scale of 1 to 10, how would you rate your current stress level?
          </label>
          <input
            type="range"
            name="stressLevel"
            min="1"
            max="10"
            value={formData.stressLevel}
            onChange={handleChange}
          />
          <span>{formData.stressLevel}</span>
        </div>

        <div className="form-group">
          <label>What is your current occupation?</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Enter your occupation"
            required
          />
        </div>

        <div className="form-group">
          <label>What types of exercise or diets have worked (or not worked) for you in the past?</label>
          <input
            type="text"
            name="therapyGoals"
            value={formData.therapyGoals}
            onChange={handleChange}
            placeholder="Enter Exercise Info"
            required
          />
        </div>

        <div className="form-group">
          <label>
            What are your goals now?
          </label>
          <input
            type="text"
            name="significantEvents"
            value={formData.significantEvents}
            onChange={handleChange}
            placeholder="Describe what you want to acheive"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="skip-btn">
            Skip
          </button>
          <button type="submit" onClick={(e)=>handleSubmit(e)} className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TherapyForm;
