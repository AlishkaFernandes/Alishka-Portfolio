
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
      <h1 className="Title h2 article-title">Contact</h1>
      </header>

      <div className="coloredSeparater"></div>

      <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                        width="400" height="300" loading="lazy" title="Google Maps"
                    ></iframe>
                </figure>
            </section>
      
            <h1 className="Title h2 article-title">Contact Form</h1>
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

