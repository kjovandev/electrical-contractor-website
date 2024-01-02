import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const Footer = () => {
 return (
    <footer style={{backgroundColor:"black", padding:"1rem", margin:"0"}}>
      <Container>
        <Row>
          <Col className="footer-col">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col className="footer-col">
            <h5>Contact Us</h5>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: contact@example.com</p>
          </Col>
          <Col className="footer-col">
            <h5>Social Media</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
 );
};

export default Footer;