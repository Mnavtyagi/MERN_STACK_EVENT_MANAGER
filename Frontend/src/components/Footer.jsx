import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>CZAR'S</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
        <div className="copyright">
        <p>&copy; 2023 Manav Tyagi. All rights reserved.</p>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
