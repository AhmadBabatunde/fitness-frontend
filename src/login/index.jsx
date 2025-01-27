import React, { useState } from "react";
import "./index.css"; // Import a CSS file for styling

const TherapyForm = (props) => {
  const [formData, setFormData] = useState({
    fullname:"",
    height: "",
    weight: "",
    age: "",
    allergies: "",
    medicalConditions: "",
    activityLevel: "",
    diet: "",
    fitnessGoal: "",
    foodPrefrence: "",
    smokes: "",
    recommendations: "",

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
      i am {${formData.age}} years old,
      my height is {${formData.height}},
      my weight is {${formData.weight}},
      i the following allergies {${formData.allergies}},
      i have this medical condition or dietary restrictions {${formData.medicalConditions}}
      my daily activity level is {${formData.activityLevel}}
      i have a specific diet which is {${formData.diet}}
      my primary fitness or health goal is {${formData.fitnessGoal}}
      i have this food dislikes {${formData.foodPrefrence}},
      {${formData.smokes}} i do/don't smoke or drink alchol,
      this are other relevant information about me to make a personalized recommendation {${formData.recommendations}}
      `;

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
          <label>How old are you?</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="form-group">
          <label>What is your gender?</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label>What is your height (cm)?</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height"
            required
          />
        </div>

        <div className="form-group">
          <label>What is your weight (kg)?</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight"
            required
          />
        </div>

        <div className="form-group">
          <label>Do you have any allergies?</label>
          <select
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="None">None</option>
            <option value="Nuts">Nuts</option>
            <option value="Dairy">Dairy</option>
            <option value="Gluten">Gluten</option>
            <option value="Seafood">Seafood</option>
            <option value="Soy">Soy</option>
            <option value="Eggs">Eggs</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Do you have any medical conditions or dietary restrictions?</label>
          <select
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="None">None</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Hypertension">Hypertension</option>
            <option value="High cholesterol">High cholesterol</option>
            <option value="Heart disease">Heart disease</option>
            <option value="Kidney disease">Kidney disease</option>
            <option value="PCOS">PCOS</option>
            <option value="Pregnancy">Pregnancy</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>What is your daily activity level?</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Sedentary (Little to no exercise)">Sedentary (Little to no exercise)</option>
            <option value="Lightly active (1-2 days of light exercise per week)">Lightly active (1-2 days of light exercise per week)</option>
            <option value="Moderately active (3-4 days of moderate exercise per week)">Moderately active (3-4 days of moderate exercise per week)</option>
            <option value="Very active (5+ days of intense exercise per week)">Very active (5+ days of intense exercise per week)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Do you follow any specific diet?</label>
          <select
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="No specific diet">No specific diet</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Keto">Keto</option>
            <option value="Paleo">Paleo</option>
            <option value="Low-carb">Low-carb</option>
            <option value="High-protein">High-protein</option>
            <option value="No specific diet">No specific diet</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>What are your primary fitness or health goals?</label>
          <select
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Muscle gain">Muscle gain</option>
            <option value="Improved stamina">Improved stamina</option>
            <option value="General fitness">General fitness</option>
            <option value="Medical/health reasons">Medical/health reasons</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Do you have any specific food dislikes or preferences?</label>
          <input
            type="text"
            name="foodPrefrence"
            value={formData.therapyReason}
            onChange={handleChange}
            placeholder="Enter food dislikes"
            required
          />
        </div>

        <div className="form-group">
          <label>Do you consume alcohol or smoke?</label>
          <select
            name="smokes"
            value={formData.beenToTherapy}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Is there anything else you'd like to share to help personalize your recommendations?</label>
          <input
            type="text"
            name="recommendations"
            value={formData.therapyReason}
            onChange={handleChange}
            placeholder="Enter any information"
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
