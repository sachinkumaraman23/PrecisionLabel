import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import loadScript from './loadscript';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/contact.css';

const Contact = () => {
  useEffect(() => {
    const tallyScriptSrc = "https://tally.so/widgets/embed.js";
    const onLoad = () => {
      if (typeof Tally !== 'undefined') {
        // eslint-disable-next-line no-undef
        Tally.loadEmbeds();
      }
    };
    const onError = () => {
      console.error('Failed to load the Tally script');
    };

    loadScript(tallyScriptSrc, onLoad, onError);
  }, []);

  return (
    <main>
         <div className="contact">
      <header className='headers'>
      <div className="hero">
        <h1>Contact Us</h1>
        <p>Precision Label</p>
      </div></header>
      <section id="contact" className="contact-section">
        <Container>
          <Row>
            <Col md={12} className="contact-form">
              <iframe 
                data-tally-src="https://tally.so/embed/mKol8z?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="585" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Contact Us"
              ></iframe>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82246.54323472115!2d79.0992021511813!3d21.286111226798994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c5b078211fe7%3A0xd6c9d2d1945e6e1b!2sSuvidha%20Mahila%20Mandal!5e0!3m2!1sen!2sin!4v1718379906500!5m2!1sen!2sin" 
                width="100%" 
                height="550" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </main>
   
  );
};

export default Contact;
