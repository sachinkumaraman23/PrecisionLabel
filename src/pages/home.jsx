import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';

function Home() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="hero-title">Empower Your AI with Precision Data Annotation</h1>
              <p className="hero-description">
                We provide top-tier data annotation services to enhance the performance of your AI and machine learning models.
              </p>
              <Button className="hero-button" onClick={scrollToServices}>Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-section" ref={servicesRef}>
        <Container>
          <h2 className="section-title">Our Services</h2>
          <Row>
            <Col md={3} className="service">
              <div className="service-box">
                <div className="service-icon">🖼️</div>
                <h3>Image Annotation</h3>
                <p>We provide accurate image annotations such as bounding boxes, polygons, and keypoints to train your computer vision models.</p>
              </div>
            </Col>
            <Col md={3} className="service">
              <div className="service-box">
                <div className="service-icon">📝</div>
                <h3>Text Annotation</h3>
                <p>We offer comprehensive text annotation services, including entity recognition, sentiment analysis, and more.</p>
              </div>
            </Col>
            <Col md={3} className="service">
              <div className="service-box">
                <div className="service-icon">🔊</div>
                <h3>Audio Annotation</h3>
                <p>Our experts carefully annotate audio data for speech recognition, speaker identification, and various other NLP applications.</p>
              </div>
            </Col>
            <Col md={3} className="service">
              <div className="service-box">
                <div className="service-icon">🎥</div>
                <h3>Video Annotation</h3>
                <p>We provide detailed video annotation services, including object tracking, activity recognition, and more.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="benefits-section">
        <Container>
          <h2 className="section-title">Why Choose Us</h2>
          <Row>
            <Col md={6} className="benefit">
              <div className="benefit-box">
                <h3>High Accuracy</h3>
                <p>We ensure your data is labeled with the highest accuracy through meticulous annotation processes, providing reliable and precise data for your projects.</p>
              </div>
            </Col>
            <Col md={6} className="benefit">
              <div className="benefit-box">
                <h3>Scalable Solutions</h3>
                <p>Our experts carefully annotate audio data for speech recognition, speaker identification, and various other NLP applications, with services scalable to meet the demands</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="benefit">
              <div className="benefit-box">
                <h3>Fast Turnaround</h3>
                <p>Our efficient workflows ensure quick delivery of annotated data without compromising on quality.</p>
              </div>
            </Col>
            <Col md={6} className="benefit">
              <div className="benefit-box">
                <h3>Expert Team</h3>
                <p>Our team consists of experienced annotators and QA specialists to deliver top-notch results.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="cta-section">
        <Container>
          <Row className="align-items-center">
            
              <h2>Ready to boost your AI?</h2>
              <p>Contact us today to discuss how we can assist with your data annotation needs.</p>
           
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
