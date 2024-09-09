import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-img.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/mail-img.png';
import navIcon5 from '../assets/img/WhatsApp-img6.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Rao Mateen</div>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                     <a href="https://www.linkedin.com/in/rao-mateen-8a0574252/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/raomateen12"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/raomateen2851?igsh=dW12N3xNHJjaHnn"><img src={navIcon3} alt="" /></a>
                <a href="raomateen2851@gmail.com"><img src={navIcon4} alt="" /></a>
                <a href="https://wa.me/923097443097" target="_blank" rel="noopener noreferrer">
          <img 
            src={navIcon5} 
            alt="WhatsApp" 
        
          />
        </a>
            </div>
            <p>© 2024 Mateen —raomateen2851@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
