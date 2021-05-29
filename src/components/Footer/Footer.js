import React from "react";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from "@material-ui/core/Chip";

// IMPORTING REACT ICONS
import { SiLinkedin, SiGithub } from "react-icons/si";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <Fade delay={100} duration={1000} bottom>
        <div id="Contact" className="container-fluid FooterContainer">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="BrandName">
                  <h1>Ikechukwu Ekedede</h1>
                  <Chip
                    className="UnderNameNChip"
                    style={{
                      fontSize: "1.2rem",
                      height: "2rem",
                      marginTop: "-0.4rem",
                      letterSpacing: "0.4rem",
                    }}
                    label="Software Engineer"
                  />
                </div>
                <div className="mt-4">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/ikechukwu-ekedede-20b12b209/"
                  >
                    <SiLinkedin className="contactIcons mr-3 " />
                  </a>
                  <a target="blank" href="https://github.com/java80">
                    <SiGithub className="contactIcons ml-3" />
                  </a>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-6 my-4 text-white">
                    <h2>Email:</h2>
                    <h2>
                      <a
                        className="FooterGmailLink"
                        href="mailto:ikeekedede@gmail.com"
                      >
                        ikeekedede@gmail.com
                      </a>
                    </h2>
                  </div>
                  <div className="col-md-6 my-4 text-right text-white">
                    <h2>Whatsapp No:</h2>
                    <a href="tel:123456789">
                      <h1>123456789</h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h4 text-center text-white pt-4 mt-5">
            ©2021 . All rights Reserved
          </div>
        </div>
        <div id="bottomFooter" className="position-fixed bottom-0"></div>
      </Fade>
    </>
  );
};

export default Footer;
