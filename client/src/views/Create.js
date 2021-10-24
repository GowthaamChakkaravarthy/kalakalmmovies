import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Create(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className="home_header">
      <Header className="container"
        color="transparent"
        routes={dashboardRoutes}
        brand={<span><img src={require("../assets/images/netflix.png")} alt="logo" className="img-fluid logo_przn" /><span className="logo_divider">|</span></span>}
        leftLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 20,
          color: "white"
        }}
        {...rest}
      />
      <ScrollToTopOnMount/>
      <div className="inner_top_padding">
        
      <div className="container">
        <div className="row pt-4 pb-2">
          <div className="col-12 col-md-4">
            <Link to="/home">
          <Button className="btn_outline_grey">
          <i class="fas fa-arrow-left mr-2"></i>Back to home  
          </Button>
          </Link>
          </div>
          <div className="col-12 col-md-8 float-md-right flex_end_center">
          <h5 class="bread_crumb mb-0 text-md-right mt-0">
          <span>
          <Link to="/home" className="breadcrumb_link"><span>Home</span></Link>
          </span>
          <span><i class="fa fa-angle-right mx-3"></i></span>
          <span>Upload Item</span>         
          </h5>
            </div>
        </div>
        </div>
        <hr className="hr_grey"></hr>
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <div className="row  my_upload_create">
            <div className="col-12 col-md-10 mx-auto">
            <div className="text-center">
                <h2 className="title_text_white mb-3 faq_tetx_big">Upload item</h2>
                <p className="banner_desc_ep_1 font_14">Choose <span className="text-white">“Single”</span> if you want your collectible to be one of a kind or <span className="text-white">“Multiple”</span> if you want to sell one collectible multiple times</p>
              </div>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-9 col-xl-8 mx-auto">
                <div className="row pt-5 pb-3">
                <div className="col-12 col-sm-6 mb-3">
                <div className="card card_bl_black my-0 rad_2">
                  <div className="card-body px-2 py-2">
                  <img src={require("../assets/images/single_img.png")} alt="logo" className="img-fluid w-100 img_radis"/>
                    <div className="text-center">
                    <Button className="btn_outline_grey mt-3 mb-2">
                      <Link to='/create-single'>Create Single</Link>
                    
                  </Button>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-12 col-sm-6">
                <div className="card card_bl_black my-0 rad_2">
                  <div className="card-body px-2 py-2">
                  <img src={require("../assets/images/multiple_img.png")} alt="logo" className="img-fluid w-100 img_radis"/>
                    <div className="text-center">
                    <Button className="create_btn mt-3 mb-2 create_btn_lit">
                      <Link to='/create-multiple'>Create Multiple</Link>
                    
                  </Button>
                    </div>
                  </div>
                </div>
                  
                  </div>
              </div>
                </div>
              </div>
              <p className="banner_desc_ep_1 font_12 text-center mb-5">We do not own your private keys and cannot access your funds without your confirmation.</p>

              
            </div>
          </div>
            
          
        </div>
        
      </div>
      </div>
      <Footer/>
    </div>
  );
}
