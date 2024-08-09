import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import avatar from '../assets/avatar-3.png';
import { IonIcon } from 'react-ion-icon';

const Aside = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Freelancer', 'Designer', 'Photographer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [showContacts, setShowContacts] = useState(false); // Initially hide contacts

  return (
    <div className="asideBlock">
      <div className="asideBlockContent">

        <div className='profiletop'>
        <figure className="profilebox">
          <img src={avatar} alt="Alishka Fernandes" className="profile" />
        </figure>

        <div className="asideBlockInfo">
          <h2 className="name">Alishka Fernandes</h2>
          <span className="multiple-text"></span>
        </div>

        {/* Button is visible only on smaller screens */}
        <button
          className="morebutton"
          onClick={() => setShowContacts(!showContacts)}
        >
          {showContacts ? 'Hide Details' : 'Show Details'}
        </button>
        </div>

        {/* Container for contact details */}
        <div className={`asideBlockContact ${showContacts ? 'visible' : 'hidden'}`}>
          <div className="separator"></div>
          <ul className="contactList">
            <li className="contactItem">
              <div className="contactItemIcon">
                <i className="bx bxs-envelope"></i>
              </div>
              <div className="contactDetail">
                <p className="contactType">EMAIL</p>
                <a href="mailto:alishkafernandes19@gmail.com">alishkafernandes19@gmail.com</a>
              </div>
            </li>

            <li className="contactItem">
              <div className="contactItemIcon">
                <i className="bx bxs-phone"></i>
              </div>
              <div className="contactDetail">
                <p className="contactType">PHONE</p>
                <a href="tel:7775049851">7775049851</a>
              </div>
            </li>

            <li className="contactItem">
              <div className="contactItemIcon">
                <i className="bx bxs-calendar"></i>
              </div>
              <div className="contactDetail">
                <p className="contactType">LOCATION</p>
                <p>Goa, India</p>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon name="logo-facebook" />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon name="logo-twitter" />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon name="logo-instagram" />
              </a>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Aside;
