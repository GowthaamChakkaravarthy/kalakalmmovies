/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className="container">
        <div className="row pb-4">
          <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0">
          {/* <img src={require("../../assets/images/footer_logo_icon.png")} class="img-fluid footer_logo" alt="Shape"/> */}
          {/* <img src={require("../../assets/images/footer_log_text.png")} class="img-fluid footer_logo footer_text_change" alt="Shape"/> */}
          
          <p className="footer_big_text">The New Creative Economy.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mt-3 mt-lg-0">
            <p className="footer_heade">Printizen</p>
            <ul className="footer_ul">
            <li>
            <Link to="/Discover">Discover</Link>           
            </li>
            <li>
            <Link to="/connect-wallet">Connect wallet</Link>            
            </li>
            <li>
            <Link to="/create">Create item</Link>
            </li>
            </ul>
            
            </div>
            <div className="col-12 col-md-6 col-lg-2 mt-3 mt-lg-0">
            <p className="footer_heade">Info</p>
            <ul className="footer_ul">
            <li>
            <Link to="/home">Download</Link>           
            </li>
            <li>
            <Link to="/home">Demos</Link>            
            </li>
            <li>
            <Link to="/home">Support</Link>
            </li>
            </ul>
            
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0">
            <p className="footer_heade">Join Newsletter</p>
            <p className="subscribe_text mb-4">Subscribe our newsletter to get more free design course and resource</p>
            <div className="newsletter_grp">
              <input type="email" className="newsletter_inp" placeholder="Enter Your Email"/>
              <div className="newsletter_grp_append">
                <button className="btn" type="button" id="news_submit"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
            </div>
        </div>
        
        <hr className="hr_hrey" />
        <div className="row py-4">
          <div className="col-12 col-md-6">
          <p className="copyright_txt mb-md-0">Copyright © 2021 Printizen INC. All rights reserved</p>  
          </div>
          <div className="col-12 col-md-6">
          <p className="copyright_txt text-md-right mb-md-0">We use cookies for better service.
          <span className="pl-2 accept_text_foor">
            Accept
            </span>
            </p>  
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
