import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const[ formData, setFormData ] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details: \n\m${confirmationMessage}`);
    if(isConfirmed) {
      setFormData({
          name: '',
          email: '',
          feedback: '',
          rating: ''
      });
      alert('Thank you for the feedback!')
    }
  }

  const ratings = ['1', '2', '3', '4', '5'];
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
         <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
         <span>Rate Us:</span>
          {ratings.map(value => (
            <p key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
                checked={formData.rating === value}
                onChange={handleChange}
              />
              {value}
            </p>
          ))}
                </div>
        <button type="submit">Submit Feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
