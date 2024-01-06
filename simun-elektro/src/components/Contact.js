import React from 'react';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';
import ResponsiveNavbar from './Navbar';
import Footer from './Footer';
import "./contact.css"


const ContactUs = () => {
  return (

        <div className='mainDivContact'>
          <div className='navbarDivContact'>          <ResponsiveNavbar/>
      </div>

          <div className='mainContentContact'>

    <Container className="contact-main-div mt-5">
      <h2>Contact Us</h2>

      <p>
        We'd love to hear from you! If you have any questions, feedback, or inquiries,
        please don't hesitate to reach out to us. You can use the form below or contact
        us through the provided contact information.
      </p>

      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Your Message:</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <div className="contact-info">
            <h3>Contact Information</h3>

            <p>
              <strong>Email:</strong> info@example.com
            </p>

            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>

            <p>
              <strong>Address:</strong> 123 Street, City, Country
            </p>
          </div>
        </Col>
      </Row>
    </Container>
          </div>
        <Footer/>
        </div>
  );
};

export default ContactUs;
