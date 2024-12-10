import React from "react";
import "./style.css";

import footer1 from "../../assets/footer1.png";
import footer2 from "../../assets/footer2.png";

function Footer() {
  return (
    <>
      <div className="footer_top">
      <img src={footer1} alt="" />

      <h3>A people company.</h3>
      <img src={footer2} alt="" />
    </div>

    <div className="footer_buttom">
        <p>© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</p>

        <p className="p2"><span>Privacy Policy   Terms of Service   GDPR Careers Press Kit</span></p>
    </div>
    
    </>
  
  );
}

export default Footer;
