import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from 'react-icons/fa';

import './Contact.css';

const Contact = () => {

  const form = useRef();

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {

    e.preventDefault();

    setStatus('Sending...');

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {

        setStatus(
          'Message sent successfully. Thank you!'
        );

        form.current.reset();

      })
      .catch(() => {

        console.error('EmailJS FULL ERROR:', error);

        setStatus(
          error?.text || 'Something went wrong. Please try again.'
        );

      });
  };

  return (
    <section className="contact-section" id="Contact">

      <div className="section-container">

        <div className="section-heading centered">
          <span>05. CONTACT</span>
          <h2>Let's build something together.</h2>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <p className="contact-intro">
              Have a project in mind, need a website or want to
              discuss a software idea? I'd be happy to hear from you.
            </p>

            <div className="contact-detail">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:geffmutua001@gmail.com">
                  geffmutua001@gmail.com
                </a>
              </div>

            </div>

            <div className="contact-detail">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <p>Kenya</p>
              </div>

            </div>

          </div>

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="from_email"
                placeholder="your@email.com"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
              />

            </div>

            <button
              type="submit"
              className="send-button"
            >
              <FaPaperPlane />
              Send Message
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;