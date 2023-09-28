<template>
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <input type="submit" value="Send Message" class="submit-btn">
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactComponent'
  }
  </script>
  
  <style scoped>
  /* Styles specific to ContactComponent */
  
  #contact {
    padding: 40px 5%;
    background-color: #f9f9f9; /* Light gray background for visual separation */
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    margin: 20px 0; /* Spacing above and below the section */
  }
  
  #contact h2 {
    font-family: 'Arial', sans-serif;
    font-size: 30px;
    border-bottom: 3px solid #333; /* Line below the heading for emphasis */
    padding-bottom: 10px;
    margin-bottom: 30px; /* Space between heading and form */
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px; /* Space between each form field */
  }
  
  .form-group label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }
  
  .form-group input, .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .submit-btn {
    display: inline-block;
    background-color: #4CAF50; /* Green background color */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #45a049; /* Darker shade of green on hover */
  }
  
  </style>