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

export default function EditProfile(props) {
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
          <Button className="btn_outline_grey">
          <i class="fas fa-arrow-left mr-2"></i>Back to profile  
          </Button>
          </div>
          <div className="col-12 col-md-8 float-md-right flex_end_center">
          <h5 class="bread_crumb mb-0 text-md-right mt-0">
          <span>
          <Link to="/home" className="breadcrumb_link"><span>Profile</span></Link>
          </span>
          <span><i class="fa fa-angle-right mx-3"></i></span>
          <span>Edit Profile</span>         
          </h5>
            </div>
        </div>
        </div>
        <hr className="hr_grey"></hr>
        <div className="container my-5">
          <div className="row edit_prof_mar_top">
            <div className="col-12 col-md-10 col-xl-9 mx-auto">
            <h2 className="title_text_white mb-2">Edit Profile</h2>
            <p className="font_14 lates_tetx">You can set preferred display name, create <span className="text-white">your profile URL</span> and manage other personal settings.</p>
            <div className="row mt-5 pt-3">
              <div className="col-12 col-lg-6">
              <div className="media">  
              <div className="img_edit_prof mr-4-cus">          
                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid" />
                  </div>   
                  <div className="media-body">
                  
                    <p className="mt-0 banner_title_ep line_hei_sm">Profile photo</p>
                    <p className="mt-0 mb-3 banner_desc_ep">We recommend an image of at least 400x400.Gifs work too <span><i class="fas fa-sign-language ml-1"></i></span></p>
                    <div className="btn_outline_grey create_btn_lit btn_flex_choose btn_flex_choose d-inline-flex">Upload
                    <input className="inp_file" type="file" name="file" />
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-5 mt-lg-0 col_lg_edit_prof">
             
              <form>
              <p className="mt-0 banner_title_ep line_hei_sm mb-4">Account Info</p>
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="name">Display Name</label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Enter your display name"/>
                  </div>             

               
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="name">Custom URL</label>
                    <input type="text" className="form-control primary_inp" id="name" defaultValue="ui8.net/Your custom URL"/>
                  </div>
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="bio">Bio</label>
                    <textarea class="form-control primary_inp" id="bio" rows="3" placeholder="About yourselt in a few words"></textarea>
                  </div>
               

             
                

                  <p className="mt-5 banner_title_ep line_hei_sm mb-4">Social</p>
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="desccription">portfolio or website</label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Enter URL"/>
                   
                  </div>
               
               
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="name">twitter</label>
                    <div class="newsletter_grp edit_grop mt-0">
                      <input type="text" class="newsletter_inp" placeholder="@twitter username" />
                      <div class="newsletter_grp_append">
                        <button class="btn" type="button" id="twitter_verify">
                          Verify Account
                          </button>
                          </div>
                          </div>
                  </div>
  
                
                  <div className="form-group mt-4 mb-msg-ep">
                  <Button className="btn_outline_grey">
                    <span className="text_out_grey">
                  <i class="fas fa-plus-circle mr-2"></i>Add more social account
                  </span>
                </Button>
                  </div>

                  <p className="font_14 lates_tetx mb-msg-ep">To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</p>
                  
                <hr className="hr_grey" />
               
                <div className="mt-msg-ep">
                  <div className="d-flex align-items-center">
                  <Button className="primary_btn">Update Profile</Button>
                  <p className="lates_tetx font_14 cur_pointer hover_blue ml-3 mb-0"><i class="fas fa-times-circle mr-2"></i>Clear all</p>
                  </div>
                 
                </div>
              </form>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
