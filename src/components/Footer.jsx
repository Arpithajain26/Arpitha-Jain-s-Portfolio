import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Arpitha<span>.</span></h2>
            <p>Computer Science student passionate about AI, Full-Stack Development, and building impactful solutions.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#hackathons">Hackathons</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-socials">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/Arpithajain26" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/arpitha-jain-c-b-475438290" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@Arpithabuilds" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/arpitha._.buildz" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://leetcode.com/u/ARPITHAJAINCB/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Arpitha Jain C B. All rights reserved.</p>
          <p className="built-with">Built with <FaHeart className="heart-icon" /> and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
