import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-warning pt-3">
      <section className="row mb-3">
        <div className="col-lg-4 col-sm-12 row">
          <Link to="/">Services</Link>
          <Link to="/">Packages</Link>
          <Link to="/">Contact</Link>
          <Link to="/login">Join us</Link>
        </div>
        <div className="col-lg-4 col-sm-12">
          <p>1240 F/B</p>
          <p>Gopalgonj College Road</p>
          <p>Gopalgonj Sadar.</p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <p><i className="fas fa-phone-alt pe-1"></i> 014 035 940 99</p>
          <p><i className="far fa-envelope pe-1"></i> fithealth@hotmail.com</p>
        </div>
      </section>
      <section className="my-4">
      <i className="fab fa-facebook pe-2"></i>
      <i className="fab fa-linkedin pe-2"></i>
      <i className="fab fa-youtube pe-2"></i>
      <i className="fab fa-instagram"></i>
      </section>
      <section className="pb-3">
      Copyright ©2021 FitHealth. All Rights Reserved.
      </section>
    </div>
  );
};

export default Footer;