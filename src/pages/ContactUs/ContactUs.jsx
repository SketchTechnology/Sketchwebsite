import React, { useState } from 'react';
import HeadSec from '../../components/HeadSec/HeadSec';
import img1 from '../../assets/img/service/ser1.jpg';
import img2 from '../../assets/img/service/ser2.jpg';
import img3 from '../../assets/img/service/ser3.jpg';
import './ContactUs.css';

const ContactUs = () => {
  const BtnsContent = [
    {
      content: 'Home',
      nav: '/',
      active: false,
    },
    {
      content: 'Contact Us',
      nav: '',
      active: true,
    },
  ];
  const Title = 'Contact Us';
  const Services = [
    {
      Title: 'Email Address',
      para: '@info@sketch-tech.com',
      bgImg: img1,
      icon: 'fa-regular fa-envelope',
    },
    {
      Title: 'Phone Number',
      para: '+971 56 409 3626',
      bgImg: img2,
      icon: 'fa-solid fa-phone',
    },
    {
      Title: 'Location / Address',
      para: 'Dubai - UAE',
      bgImg: img3,
      icon: 'fa-solid fa-location-dot',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      formErrors.name = 'First Name is required';
    }

    if (!formData.email) {
      isValid = false;
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.phone) {
      isValid = false;
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      isValid = false;
      formErrors.phone = 'Phone number is invalid';
    }

    if (!formData.subject) {
      isValid = false;
      formErrors.subject = 'Subject is required';
    }

    if (!formData.message) {
      isValid = false;
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handlform = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Handle form submission logic, e.g., send data to an API
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div>
      <HeadSec BtnsContent={BtnsContent} Title={Title} />
      <div className="bi-service-feed-content">
        <div className="row justify-content-center mx-auto container p-0 bg-light overflow-hidden rounded-2 my-5">
          {Services.map((item, ind) => (
            <div key={ind} className="col-lg-4 p-0 flex-fill col-md-4">
              <div className="bi-service-feed-item position-relative bg-light rounded-0">
                <div className="d-flex justify-content-start my-2">
                  <span className="CardIcon">
                    <i className={`${item.icon} iconText`}></i>
                  </span>
                </div>
                <span className="hover_img position-absolute" style={{ backgroundImage: `url(${item.bgImg})` }}></span>
                <div className="service-icon position-relative">
                  <i className="flaticon-brand"></i>
                </div>
                <div className="service-text headline pera-content">
                  <h3>
                    <a href="#" className="text-dark serviceTitle fs-4">
                      {item.Title}
                    </a>
                  </h3>
                  <p className="servicePara fs-5">{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-100 bg-white py-3">
        <section id="bi-contact-form" className="bi-contact-form-section container mx-auto">
          <div className="bi-contact-map">
            <div className="bi-contact-map-content d-flex gap-4 flex-wrap">
              <div className="google-map flex-fill">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: '0' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055679.938791722!2d-118.69192057451524!3d34.02073045604696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe9cf4e3f61be365!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1625541262480!5m2!1sen!2sin"
                ></iframe>
              </div>
              <div className="bi-team-details-contact-info headline pera-content p-3">
                <div className="bi-team-details-contact-title">
                  <div className="bi-section-title-1 headline pera-content">
                    <h2 className="headline-title">Keep In Touch</h2>
                  </div>
                  <p>In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget mauris in nisl tempus lobortis.</p>
                  <div className="bi-team-details-contact-form h-100">
                    <form method="post" onSubmit={(event) => handlform(event)}>
                      <div className="row p-0 gap-2">
                        <div className="col-md-5 p-0">
                          <input
                            type="text"
                            name="name"
                            placeholder="First Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="col-md-5 p-0">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="col-md-5 p-0">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone No."
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className="col-md-5 p-0">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                          />
                          {errors.subject && <span className="error">{errors.subject}</span>}
                        </div>
                        <div className="col-md-12 p-0">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                          {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <div className="col-md-12 p-0">
                          <div className="bi-submit-btn">
                            <button className="text-dark px-5 border-0 rounded "  type="submit">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
