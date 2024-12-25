import React, { useEffect, useState } from 'react'
import Navbar from '.././components/navbar/Navbar.jsx'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b41330fc-1f1c-4baf-a03a-fdd3068d3c10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      Swal.fire({
        title: "Thank you!",
        text: "Your message has been sent.",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);

      Swal.fire({
        title: "Error!",
        text: "Something went wrong when sending the message. Try again!",
        icon: "error"
      });
    }
  };
  
  const currentTheme = localStorage.getItem("currentTheme");

  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    document.title = "SCR | Contact";
  }, [])

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme])
  
  return (
    <div className = {`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact us!</h2>
          <div className="input-box">
            <label>Name</label>
            <input type="text" className="field" placeholder='Enter your name' name='name' required />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input type="text" className="field" placeholder='Enter your email' name='email' required />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea type="text" className="field message" placeholder='Enter your message' name='message' required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact