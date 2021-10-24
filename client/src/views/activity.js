import React, { useEffect, useState } from "react";

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

import RangeSlider from 'react-bootstrap-range-slider';

import {  Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

import { Scrollbars } from 'react-custom-scrollbars';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Discover(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [ value, setValue ] = useState(0); 
  const [expanded, setExpanded] = React.useState('panel5');

  const handleChangeFaq = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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

         <div className="container pb-5">
        <div className="row">
      
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            
            <div className="mt-5">
            <h2 className="mb-4 title_text_white flex_center_between d-block d-sm-flex">Activity
            <Button className="btn_outline_grey float-right">
            Mark all as read
          </Button>
            </h2>
            <Scrollbars style={{ height: 75 }}>
            <nav className="masonry_tab_nav mt-3 mt-md-3">
              <div className="nav nav-tabs masonry_tab home_masonary_tab px-0" id="nav-tab" role="tablist">
                <a className="nav-link active" id="my-activity-tab" data-toggle="tab" href="#my-activity" role="tab" aria-controls="my-activity" aria-selected="true">My activity</a>
                <a className="nav-link" id="following-tab" data-toggle="tab" href="#following" role="tab" aria-controls="following" aria-selected="false">Following</a>
                <a className="nav-link" id="all-activity-tab" data-toggle="tab" href="#all-activity" role="tab" aria-controls="all-activity" aria-selected="false">All activity</a>
                
              </div>
            </nav>
            </Scrollbars>
      <div className="tab-content explore_tab_content mt-3" id="nav-tabContent">
      <div className="tab-pane fade show active" id="my-activity" role="tabpanel" aria-labelledby="my-activity-tab">
      <ul className="activity_ul_dd">
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="far fa-flag"></i></span>
              <div className="img_user_activity mr-4">
                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid align-self-center" />
                </div>
                 </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">Something went wrong</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Can't display activity card. Try again later</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-video"></i></span>
              <div className="img_user_activity mr-4">
                  <img src={require("../assets/images/collection_02.png")} alt="User" className="img-fluid align-self-center" />
              </div>
                </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">U18</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Started following you</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-download"></i></span>
              <div className="img_user_activity mr-4">
                  <img src={require("../assets/images/collection_03.png")} alt="User" className="img-fluid align-self-center" />
                </div>
                  </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">ETH received</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">0.08 ETH received</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
           
              <div className="user_act_pa">
              <span class="user_count"><i class="far fa-flag"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid align-self-center" />
                  </div>
                  </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">Something went wrong</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Can't display activity card. Try again later</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-video"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_02.png")} alt="User" className="img-fluid align-self-center" />
                </div>
                 </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">U18</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Started following you</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-download"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_03.png")} alt="User" className="img-fluid align-self-center" />
                </div>
                 </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">ETH received</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">0.08 ETH received</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              </ul>
              <div className="text-center py-3">
              <i class="fa fa-spinner ml-2 spinner_icon spin_lg" aria-hidden="true"></i>
              </div>
      </div>
      <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
      <ul className="activity_ul_dd">
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="far fa-flag"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid  align-self-center" />
               </div>
                  </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">Something went wrong</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Can't display activity card. Try again later</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-video"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_02.png")} alt="User" className="img-fluid align-self-center" />
               </div>
                </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">U18</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Started following you</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-download"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_03.png")} alt="User" className="img-fluid align-self-center" />
               </div>
                </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">ETH received</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">0.08 ETH received</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
         
              </ul>
              <div className="text-center py-3">
              <i class="fa fa-spinner ml-2 spinner_icon spin_lg" aria-hidden="true"></i>
              </div>
      </div>
      <div className="tab-pane fade" id="all-activity" role="tabpanel" aria-labelledby="all-activity-tab">
      <ul className="activity_ul_dd">
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="far fa-flag"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid align-self-center" />
                 </div>
                  </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">Something went wrong</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Can't display activity card. Try again later</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-video"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/collection_02.png")} alt="User" className="img-fluid align-self-center" />
              </div>
                 </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">U18</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">Started following you</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
              <li className="px-3">
              <div className="media">
              <div className="user_act_pa">
              <span class="user_count"><i class="fas fa-download"></i></span>
              <div className="img_user_activity mr-4">

                  <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
               </div>
                 </div>
                  <div className="media-body flex_body">
                    <div>
                      <p className="activity_head">ETH received</p>
                    <p className="mt-0 banner_desc_user baner_sec_1 mb-0 font_12">0.08 ETH received</p>
                    <p className="mt-0 banner_user font_12 mb-0">2 days ago</p>
                    </div>
                    <div>
                      <span className="purple_circle_dot"></span>
                      <span className="go_arrow"> <Link to="/home"><i class="fas fa-chevron-right"></i></Link></span>
                    </div>
                  </div>
                </div>
               
              </li>
         
              </ul>
              <div className="text-center py-3">
              <i class="fa fa-spinner ml-2 spinner_icon spin_lg" aria-hidden="true"></i>
              </div>
      </div>
      </div>
               
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-right-activity">
                <div className="mt-5">
                <div class="card card_bl_grey my-0 rad_2">
                  <div class="card-body py-4 act_menu">
                    <p className="filter_act_text mb-4 mt-3">Filters</p>
                    <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Sales</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                <label class="custom-control-label" for="customCheck2">Listings</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                <label class="custom-control-label" for="customCheck3">Bids</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck4" />
                <label class="custom-control-label" for="customCheck4">Burns</label>
                </div>

                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck5" />
                <label class="custom-control-label" for="customCheck5">Followings</label>
                </div>

                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck6" />
                <label class="custom-control-label" for="customCheck6">Likes</label>
                </div>

                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck7" />
                <label class="custom-control-label" for="customCheck7">Purchase</label>
                </div>

                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck8" />
                <label class="custom-control-label" for="customCheck8">Transfers</label>
                </div>
                <hr className="hr_grey" />
                <div className="text-center select_box_btn mt-4">
                <Button className="btn_outline_grey mr-2 mb-3">
                  Select all
                </Button>
                <Button className="btn_outline_grey mb-3">
                  Unselect all
                </Button>
                </div>
                  </div>
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
