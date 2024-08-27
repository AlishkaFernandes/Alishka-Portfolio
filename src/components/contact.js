
import React, {useState} from 'react';
const Contact = () => {

  const [FormData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e) => {
    setFormData(
      {...FormData,[e.target.name] : e.target.value}
    )
    console.log(FormData);
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const {name,email,message} = FormData;

    const mailtoLink = `mailto:${email}?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from my Contact Form`
    )}`;
    
    window.location.href= mailtoLink;
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }



  return (
    <div className="contact">
       <header>
       <h1 className="Title h2 article-title">Contact <span className='title'>Me</span></h1>
      </header>

      <div className="coloredSeparater"></div>

      <section className="mapbox" data-mapbox>
                <figure>
                
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30751.077865886968!2d73.76842699999999!3d15.544308749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1e37dbb59f5%3A0x9d0f9711b731c786!2sCalangute%2C%20Goa%20403519!5e0!3m2!1sen!2sin!4v1724784074083!5m2!1sen!2sin"
                        width="400" height="300" loading="lazy" title="Google Maps"
                    ></iframe>
                </figure>
            </section>
      
            
            <form className="form" onSubmit={handlesubmit}>
  <div className="detailinput">
    <input type="text" id="name" name="name" placeholder="FullName" className="input" value={FormData.name} onChange={handleChange}/>
    <input type="email" id="email" name="email" placeholder="Email" className="input" value={FormData.email} onChange={handleChange}/>
   
  </div>
  <textarea id="message" name="message" placeholder="Your Message" className="input textarea" required  onChange={handleChange} value={FormData.message}> </textarea>
  <button type="submit" className="form-btn">Submit</button>
</form>

    </div>
  );
}





export default Contact;

