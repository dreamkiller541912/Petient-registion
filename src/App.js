import React, { useState } from "react";
import data from "./data/PeientData.json";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    bloodGroup: ""
  });
 const [members, setMembers] = useState(data.members); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data:", formData);
    alert("Patient Registered Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Patient Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required /><br />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required /><br />

        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select><br />
        <input type="date" name="dob" onChange={handleChange} required /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
        <textarea name="address" placeholder="Address" onChange={handleChange}></textarea><br />

        <select name="bloodGroup" onChange={handleChange}>
          <option value="">Blood Group</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
          <option>AB+</option>
        </select><br />

        <button type="submit">Register</button>
      </form>
      
    </div>
  );
}

export default App; 
