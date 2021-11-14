import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column 1*/}
          <div className="col">
            <h4>usEarth</h4>
            <ul className="list-unstyled">
              <li>02-567-1234</li>
              <li>seoul, Korea</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* column 2*/}
          <div className="col">
            <h4>Members</h4>
            <ul className="list-unstyled">
              <li>Site Editor: Kim Hyerin</li>
              <li>Site Editor: Lee Seongjae</li>
              <li>Site Editor: Lee Soyun</li>
              <li>Site Editor: Choi hyunseok</li>
            </ul>
          </div>
          {/* column 3*/}
          <div className="col">
            <h4>Connect Us</h4>
            <ul className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} by usEarth, Inc. All rights
            reserved. | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
