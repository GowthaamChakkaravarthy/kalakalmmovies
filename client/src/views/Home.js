import React, { useEffect, useState  } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {  Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Button } from "@material-ui/core";
import CountUp from 'react-countup';

import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

// import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import RangeSlider from 'react-bootstrap-range-slider';


const dashboardRoutes = [];

const useStyles = makeStyles(styles);
// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Home(props) {  

  const classes = useStyles();
  const { ...rest } = props;
  const [ value, setValue ] = useState(0); 
  const [expanded1, setExpanded1] = React.useState('panel8');
  const [expanded3, setExpanded3] = React.useState('panel8');
  const [expanded2, setExpanded2] = React.useState('panel8');
  const [expanded4, setExpanded4] = React.useState('panel8');
  const [expanded5, setExpanded5] = React.useState('panel8');

  const [expanded6, setExpanded6] = React.useState('panel8');
  const [expanded7, setExpanded7] = React.useState('panel8');
  const handleChangeFaq = (panel1) => (event, isExpanded1) => {
    setExpanded1(isExpanded1 ? panel1 : false);
  };
  const handleChangeFaq2 = (panel2) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? panel2 : false);
  };
  const handleChangeFaq3 = (panel3) => (event, isExpanded3) => {
    setExpanded3(isExpanded3 ? panel3 : false);
  };
  const handleChangeFaq4 = (panel4) => (event, isExpanded4) => {
    setExpanded4(isExpanded4 ? panel4 : false);
  };
  const handleChangeFaq5 = (panel5) => (event, isExpanded5) => {
    setExpanded5(isExpanded5 ? panel5 : false);
  };
  const handleChangeFaq6 = (panel6) => (event, isExpanded6) => {
    setExpanded6(isExpanded6 ? panel6 : false);
  };
  const handleChangeFaq7 = (panel7) => (event, isExpanded7) => {
    setExpanded7(isExpanded7 ? panel7 : false);
  };
  const [responsive,setresponsive] = React.useState({
    0: {
           items: 1,
       },
       450: {
           items: 2,
       },
       600: {
           items: 3,
       },
       1000: {
           items: 5,
  } 
       });
       const [responsiveone] = React.useState({
        0: {
               items: 1,
           },
           450: {
               items: 2,
           },
           600: {
               items: 3,
           },
           1000: {
               items: 4,
      } 
           })
  
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
      <div className="page-header header-filter banner_hme">
      
        <div className="banner container">
          <p className="banner_desc text-center">Create, Explore & Collect Digital Art NFTS</p>
          <h1 className="text-center">The new creative economy.</h1>
          <div className="text-center">
          <Button className="btn_outline_grey my-4">
          <Link to="/home">Start Your Search</Link>
        </Button>
        </div>
        </div>
      
      </div>

      <div className="main">
        
        {/* Top Section */}
        <section className="banner_carousel pb-5">
          <div className="container">
          <OwlCarousel items={1}  
            className="owl-theme"  
            loop  
            nav={true} 
            margin={20} autoplay ={false} items={1}  dots={false}>  
            <div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-7">
              <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius img_hover" alt="Shape"/>
              </div>
              <div className="col-12 col-md-6 col-lg-4 offset-lg-1">
                <h2>Marco Carillo</h2>
                <div className="row mt-3">
                  <div className="col-12 col-sm-6">
                  <div className="media">
                    <div className="img_user_carousel mr-3">
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_user mb-0">Creator</p>
                    <p className="mt-0 banner_desc_user">Enrico Cole</p>
                  </div>
                </div>
                  </div>
                  <div className="col-12 col-sm-6">

                  <div className="media">
                  <div className="img_user_carousel mr-3">

                  <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_user mb-0">Instant price</p>
                    <p className="mt-0 banner_desc_user">3.5 ETH</p>
                  </div>
                </div>
                 
                    </div>
                </div>
                <div className="card card_bl_grey">
                  <div className="card-body py-4">
                  <p className="curr_bid_tct mb-1">Current Bid</p>
                  <p className="bid_prce mb-1">1.00 ETH</p>
                  <p className="curr_bid_tct_1 mb-1">$3,618.36</p>
                  <p className="curr_bid_tct mb-1">Auction ending in</p>
                  <p className="flex_dur">
                    <span><span className="dur_white">19</span><br />Hrs</span>
                    <span><span className="dur_white">24</span><br />mins</span>
                    <span><span className="dur_white">19</span><br />secs</span>

                  </p>
                
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Button className="create_btn mb-3 btn-block btn_blk_sixe">Place a bid</Button> 

                  </div>
                  <div className="text-center">
                  <Button className="btn_outline_grey mb-3 btn-block btn_blk_sixe">View item</Button>
                  </div>
                </div>
            </div>
            </div>   

             <div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-7">
              <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius img_hover" alt="Shape"/>
              </div>
              <div className="col-12 col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-1">
                <h2>Marco Carillo</h2>
                <div className="row mt-3">
                  <div className="col-12 col-sm-6">
                  <div className="media">
                  <div className="img_user_carousel mr-3">

                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_user mb-0">Creator</p>
                    <p className="mt-0 banner_desc_user">Enrico Cole</p>
                  </div>
                </div>
                  </div>
                  <div className="col-12 col-sm-6">

                  <div className="media">
                  <div className="img_user_carousel mr-3">

                  <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid" />
                </div>
                  <div className="media-body">
                    <p className="mt-0 banner_user mb-0">Instant price</p>
                    <p className="mt-0 banner_desc_user">3.5 ETH</p>
                  </div>
                </div>
                 
                    </div>
                </div>
                <div className="card card_bl_grey">
                  <div className="card-body py-4">
                  <p className="curr_bid_tct mb-1">Current Bid</p>
                  <p className="bid_prce mb-1">1.00 ETH</p>
                  <p className="curr_bid_tct_1 mb-1">$3,618.36</p>
                  <p className="curr_bid_tct mb-1">Auction ending in</p>
                  <p className="flex_dur">
                    <span><span className="dur_white">19</span><br />Hrs</span>
                    <span><span className="dur_white">24</span><br />mins</span>
                    <span><span className="dur_white">19</span><br />secs</span>

                  </p>
                  
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Button className="create_btn mb-3 btn-block btn_blk_sixe">Place a bid</Button> 

                  </div>
                  <div className="text-center">
                  <Button className="btn_outline_grey mb-3 btn-block btn_blk_sixe">View item</Button>
                  </div>
                </div>
            </div>
            </div>                  
            
                        </OwlCarousel>
          </div>
        </section>

        {/* Recent Collections Section */}
        <section className="section recent_collections">         
          <div className="container">
          
           <div className="row">
             <div className="col-12 col-md-12 col-lg-5">
               <div className="img_col_big_div">
             <img src={require("../assets/images/nature_2.jpg")} class="img_hover img-fluid img_radius img_col_big" alt="Shape"/>
             </div>
             <div className="media mt-3">
             <div className="img_user_media mr-3">
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid align-self-center" />
                 </div>
                  <div className="media-body flex_body">
                    <div>
                    <p className="mt-0 banner_user_title mb-0">The future of ETH</p>
                    <p className="mt-0 banner_desc_user">18 in stock</p>
                    </div>
                    <div>
                      <p className="bid_text_muted mb-0">Highest bid</p>
                      <p class="badge badge-green-outline mb-0">1.125 ETH</p>
                    </div>
                  </div>
                </div>
             </div>
             <div className="col-12 col-md-7 col-lg-4 mt-3 mt-lg-0">
             <div className="media align-items-center mb-4">
               <div className="mr-3 img_coctn">
                  <img src={require("../assets/images/follower_1.png")} alt="User" className="img_hover img-fluid img_radius align-self-center" />
                  </div>
                  <div className="media-body flex_body">
                    <div>
                    <p className="mt-0 sub_collection_title mb-0">ETH never die</p>
                    <p>
                    <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid mr-1 img_user_sm align-self-center" />
                    <span class="badge badge-green-outline mb-0 mr-2">0.27 ETH</span>
                    <span className="font_12 d-blk-mob">1 of 12</span>
                      </p>
                      <Button className="btn_outline_grey btn_mob_pad">Place a bid</Button>
                    </div>
                    
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                <div className="mr-3 img_coctn">
                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img_hover img-fluid img_radius align-self-center" />
                  </div>
                  <div className="media-body flex_body">
                    <div>
                    <p className="mt-0 sub_collection_title mb-0">Future Coming Soon</p>
                    <p>
                    <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid mr-1 img_user_sm align-self-center" />
                    <span class="badge badge-green-outline mb-0 mr-2">0.27 ETH</span>
                    <span className="font_12 d-blk-mob">1 of 20</span>
                      </p>
                      <Button className="btn_outline_grey btn_mob_pad">Place a bid</Button>
                    </div>
                    
                  </div>
                </div>
                <div className="media align-items-center mb-4">
                <div className="mr-3 img_coctn">

                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img_hover img-fluid img_radius align-self-center" />
                 </div>
                  <div className="media-body flex_body">
                    <div>
                    <p className="mt-0 sub_collection_title mb-0">Elon Musk Silver coin 3d paint</p>
                    <p>
                    <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid mr-1 img_user_sm align-self-center" />
                    <span class="badge badge-green-outline mb-0 mr-2">0.27 ETH</span>
                    <span className="font_12 d-blk-mob">1 of 12</span>
                      </p>
                      <Button className="btn_outline_grey btn_mob_pad">Place a bid</Button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-3 user_sec border_left_user_sec mt-3 mt-lg-0 pl-4">
              <p className="font_12 lates_tetx">Latest upload from creators
              <span className="pl-2"><i class="fas fa-tint"></i></span>
              </p>
              <div className="media py-2">
                <div className="mr-3 img_user_media">
                <span className="user_count">6</span>

                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_desc_user mb-1">Harris Payton</p>
                    <p className="mt-0 banner_desc_user">2.458<span className="banner_user"> ETH </span></p>
                  </div>
                </div>
                <hr className="hr_grey"/>
                <div className="media py-2">
                <div className="mr-3 img_user_media">
                <span className="user_count">6</span>
                  <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_desc_user mb-1">Bins Anita</p>
                    <p className="mt-0 banner_desc_user">2.458<span className="banner_user"> ETH </span></p>
                  </div>
                </div>
                <hr className="hr_grey"/>
                <div className="media py-2">
                <div className="mr-3 img_user_media">
                <span className="user_count">6</span>
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_desc_user mb-1">Wuckert Jana</p>
                    <p className="mt-0 banner_desc_user">2.458<span className="banner_user"> ETH </span></p>
                  </div>
                </div>
                <hr className="hr_grey"/>
                <div className="media py-2">
                  <div className="img_user_media mr-3">
                <span className="user_count">6</span>
                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid" />
                  </div>
                  <div className="media-body">
                    <p className="mt-0 banner_desc_user mb-1">Ledner Lorena</p>
                    <p className="mt-0 banner_desc_user">2.458<span className="banner_user"> ETH </span></p>
                  </div>
                </div>
                <hr className="hr_grey"/>
          </div>
           </div>
          </div>
        </section>

        <section className="seller_section py-5">         
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="dropdd_title">Popular</p>
                <Accordion expanded={expanded7 === 'panel7'} onChange={handleChangeFaq7('panel7')} className="panel_trans">
                  <AccordionSummary aria-controls="panel7bh-content" id="panel7bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn_1">
                    <div className="select_flex">
                        <span>Sellers</span>
                        <span class="fa fa-chevron-down ml-3"></span>
                        <span>

                        </span>
                    </div>
                    </button>
                 </AccordionSummary>
                 <AccordionDetails className="px-0">
                    <div className="accordian_para col-12 px-0 pb-0">
                    <div class="card card_bl_grey my-0 rad_2">
                        <div class="card-body px-2 pt-2 pb-0">
                            <ul className="colors_ul">
                                <li>
                                <span>Sellers</span>
                                </li>
                                <li>
                                <span>Buyers</span>
                                </li>                               
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
                
                
                {/* <select class="form-control menu_list_app" id="Popular">
                <option>Sellers</option>
                <option>Buyers</option>                
              </select> */}
              </div>
              <div className="col-12 col-md-6 flex_end_ot">
              <p className="dropdd_title_sm mb-0">TIMEFRAME</p>
              <Accordion expanded={expanded6 === 'panel6'} onChange={handleChangeFaq6('panel6')} className="panel_trans">
                  <AccordionSummary aria-controls="panel6bh-content" id="panel6bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn">
                    <div className="select_flex">
                        <span>Today</span>
                        <span>
                    <img src={require("../assets/images/arrow_circle.png")} alt="User" className="img-fluid ml-3" />

                        </span>
                    </div>
                    </button>
                 </AccordionSummary>
                 <AccordionDetails className="px-0">
                    <div className="accordian_para col-12 px-0 pb-0">
                    <div class="card card_bl_grey my-0 rad_2">
                        <div class="card-body px-2 pt-2 pb-0">
                            <ul className="colors_ul">
                                <li>
                                <span>Today</span>
                                </li>
                                <li>
                                <span>Yesterday</span>
                                </li>                               
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
                
                {/* <select class="form-control menu_list_app_sm" id="timeframe">
                <option>Today</option>
                <option>Yesterday</option>                
              </select> */}
                </div>
            </div>
            <OwlCarousel items={1}  
            className="owl-theme"  
            loop  
            nav={true} 
            margin={20} autoplay ={false} responsive={responsive} dots={false}>  
            <div>
              <div className="card user_card">
                <div className="card-body">
                  <div className="flex_btwn">
                   
                    <span> 
                      <p class="badge badge-purple mb-0">
                        <span className="fa fa-trophy mr-1"></span>
                        <span>#1</span>
                      </p>
                      </span>
                      <span>
                      <span className="fa fa-plus-square mr-2"></span>
                      <span className="fas fa-arrow-right arr_rotate"></span>
                      </span>
                  </div>
                  <hr className="hr_grey"/>
                  <div className="text-center">
                    <div className="img_user_pos mb-3">
                      <div className="img_user_media mx-auto">
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid mx-auto align-self-center" />
                  <img src={require("../assets/images/icon_hex.png")} alt="User" className="icon_hex" />
                  </div>
                  </div>
                  <p class="mt-0 banner_desc_user mb-1">Harris Payton</p>
                  <p class="mt-0 banner_desc_user">2.458<span class="banner_user"> ETH </span></p>
                  </div>
                </div>
              </div>
              </div>

              <div>
              <div className="card user_card">
                <div className="card-body">
                  <div className="flex_btwn">
                   
                    <span> 
                      <p class="badge badge-pink mb-0">
                        <span className="fa fa-trophy mr-1"></span>
                        <span>#1</span>
                      </p>
                      </span>
                      <span>
                      <span className="fa fa-plus-square mr-2"></span>
                      <span className="fas fa-arrow-right arr_rotate"></span>
                      </span>
                  </div>
                  <hr className="hr_grey"/>
                  <div className="text-center">
                  <div className="img_user_pos mb-3">
                      <div className="img_user_media mx-auto">
                  <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid mx-auto align-self-center" />
                  <img src={require("../assets/images/icon_hex.png")} alt="User" className="icon_hex" />
                  </div>
                  </div>
                  <p class="mt-0 banner_desc_user mb-1">Harris Payton</p>
                  <p class="mt-0 banner_desc_user">2.458<span class="banner_user"> ETH </span></p>
                  </div>
                </div>
              </div>
              </div>

              <div>
              <div className="card user_card">
                <div className="card-body">
                  <div className="flex_btwn">
                   
                    <span> 
                      <p class="badge badge-green mb-0">
                        <span className="fa fa-trophy mr-1"></span>
                        <span>#1</span>
                      </p>
                      </span>
                      <span>
                      <span className="fa fa-plus-square mr-2"></span>
                      <span className="fas fa-arrow-right arr_rotate"></span>
                      </span>
                  </div>
                  <hr className="hr_grey"/>
                  <div className="text-center">
                  <div className="img_user_pos mb-3">
                      <div className="img_user_media mx-auto">
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid mx-auto align-self-center" />
                  <img src={require("../assets/images/icon_hex.png")} alt="User" className="icon_hex" />
                  </div>
                  </div>
                  <p class="mt-0 banner_desc_user mb-1">Harris Payton</p>
                  <p class="mt-0 banner_desc_user">2.458<span class="banner_user"> ETH </span></p>
                  </div>
                </div>
              </div>
              </div>
              <div>
              <div className="card user_card">
                <div className="card-body">
                  <div className="flex_btwn">
                   
                    <span> 
                      <p class="badge badge-grey mb-0">
                        <span className="fa fa-trophy mr-1"></span>
                        <span>#1</span>
                      </p>
                      </span>
                      <span>
                      <span className="fa fa-plus-square mr-2"></span>
                      <span className="fas fa-arrow-right arr_rotate"></span>
                      </span>
                  </div>
                  <hr className="hr_grey"/>
                  <div className="text-center">
                  <div className="img_user_pos mb-3">
                      <div className="img_user_media mx-auto">
                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid mx-auto align-self-center" />
                  <img src={require("../assets/images/icon_hex.png")} alt="User" className="icon_hex" />
                  </div>
                  </div>
                  <p class="mt-0 banner_desc_user mb-1">Harris Payton</p>
                  <p class="mt-0 banner_desc_user">2.458<span class="banner_user"> ETH </span></p>
                  </div>
                </div>
              </div>
              </div>
              <div>
              <div className="card user_card">
                <div className="card-body">
                  <div className="flex_btwn">
                   
                    <span> 
                      <p class="badge badge-grey mb-0">
                        <span className="fa fa-trophy mr-1"></span>
                        <span>#1</span>
                      </p>
                      </span>
                      <span>
                      <span className="fa fa-plus-square mr-2"></span>
                      <span className="fas fa-arrow-right arr_rotate"></span>
                      </span>
                  </div>
                  <hr className="hr_grey"/>
                  <div className="text-center">
                  <div className="img_user_pos mb-3">
                      <div className="img_user_media mx-auto">
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid mx-auto align-self-center" />
                  <img src={require("../assets/images/icon_hex.png")} alt="User" className="icon_hex" />
                  </div>
                  </div>
                  <p class="mt-0 banner_desc_user mb-1">Harris Payton</p>
                  <p class="mt-0 banner_desc_user">2.458<span class="banner_user"> ETH </span></p>
                  </div>
                </div>
              </div>
              </div>
              </OwlCarousel>
          </div>
          </section>

        {/* Explore Section */}
        <section className="bid_section section bid_section_section_1">
          <div className="container">
            <h2 className="mb-5 title_text_white">Hot bid</h2>
            <OwlCarousel items={1}  
            className="owl-theme"  
            loop  
            nav={true} 
            margin={20} autoplay ={false} responsive={responsiveone} dots={false}>  
            <div>
            <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">
            <img src={require("../assets/images/nature_3.jpg")} class="img_hover img-fluid img_radius" alt="Shape"/>
            </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
    <div>
    <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/collection_02.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
          </div>
           </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
    <div>
    <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/nature_3.jpg")} class="img_hover img-fluid img_radius" alt="Shape"/>
         </div>
           </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
    <div>
    <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/collection_01.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
           </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
    <div>
    <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">
            <img src={require("../assets/images/collection_02.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
           </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
    </OwlCarousel>                                                                            
           
          </div>
        </section>
        <section className="coletn_section section py-5">
        <div className="container">
          <h2 className="mb-5 title_text_white">Hot Collections</h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <div>
              <div className="img_col_sm">
            <img src={require("../assets/images/nature_3.jpg")} class="img_hover img-fluid img_radius" alt="Shape"/>
            </div>
            <div className="row mt-2 mx-0">
              <div className="col-4 px-1">
                <div className="img_col_xsm">
              <img src={require("../assets/images/follower_1.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
              <div className="col-4 px-1">
              <div className="img_col_xsm">
              <img src={require("../assets/images/collection_03.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
              <div className="col-4 px-1">
              <div className="img_col_xsm">
              <img src={require("../assets/images/masonary_01.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
            </div>
            <p className="mb-0 banner_user_title mt-2">Awesome Collection</p>
            <div className="media mt-1">
    
     <div className="media-body flex_body">
       <div>
       <div class="d-flex">
       <div className="img_user_carousel mr-2">
       <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid  align-self-center" />
       </div>
       <span>By kernith Cison</span>
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-white-outline mb-2">28 ITEMS</p>
       </div>
     </div>
   </div>

    
    </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <div>
            <div className="img_col_sm">
            <img src={require("../assets/images/collection_02.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
            </div>
            <div className="row mt-2 mx-0">
              <div className="col-4 px-1">
                <div className="img_col_xsm">
              <img src={require("../assets/images/collection_02.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
              <div className="col-4 px-1">
              <div className="img_col_xsm">
              <img src={require("../assets/images/collection_03.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
              <div className="col-4 px-1">
              <div className="img_col_xsm">
              <img src={require("../assets/images/masonary_01.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
            </div>
            <p className="mb-0 banner_user_title mt-2">Awesome Collection</p>
            <div className="media mt-1">
    
     <div className="media-body flex_body">
       <div>
       <div class="d-flex">
       <div className="img_user_carousel mr-2">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
        </div>
       <span>By kernith Cison</span>
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-white-outline mb-2">28 ITEMS</p>
       </div>
     </div>
   </div>

    
    </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <div>
            <div className="img_col_sm">
            <img src={require("../assets/images/nature_3.jpg")} class="img_hover img-fluid img_radius" alt="Shape"/>
            </div>
            <div className="row mt-2 mx-0">
              <div className="col-4 px-1">
            <div className="img_col_xsm">

              <img src={require("../assets/images/collection_02.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
                </div>
              </div>
              <div className="col-4 px-1">
            <div className="img_col_xsm">

              <img src={require("../assets/images/collection_03.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
              <div className="col-4 px-1">
            <div className="img_col_xsm">

              <img src={require("../assets/images/masonary_01.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
              </div>
              </div>
            </div>
            <p className="mb-0 banner_user_title mt-2">Awesome Collection</p>
            <div className="media mt-1">
    
     <div className="media-body flex_body">
       <div>
       <div class="d-flex">
         <div className="img_user_carousel mr-2">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid   align-self-center " />
       </div>
      <span>By kernith Cison</span>
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-white-outline mb-2">28 ITEMS</p>
       </div>
     </div>
   </div>

    
    </div>
            </div>
          </div>
        </div>
        </section>
        <section className="discover_section section">
        <div className="container">
        <h2 className="mb-4 mb-4-discover title_text_white">Discover</h2>
        <div className="row row_rel">
          <div className="col-12 col-md-2">
          <Accordion expanded={expanded3 === 'panel3'} onChange={handleChangeFaq3('panel3')} className="panel_trans">
                  <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn">
                    <div className="select_flex">
                        <span>Colors</span>
                        <span>
                    <img src={require("../assets/images/arrow_circle.png")} alt="User" className="img-fluid ml-3" />

                        </span>
                    </div>
                    </button>
                 </AccordionSummary>
                 <AccordionDetails className="px-0">
                    <div className="accordian_para col-12 px-0 pb-0">
                    <div class="card card_bl_grey my-0 rad_2">
                        <div class="card-body px-2 pt-2 pb-0">
                            <ul className="colors_ul">
                                <li>
                                <span className="purple_circle_color_out"></span>
                                <span>All Colors</span>
                                </li>
                                <li>
                                <span className="black_circle_color"></span>
                                <span>Black</span>
                                </li>
                                <li>
                                <span className="green_circle_color"></span>
                                <span>Green</span>
                                </li>
                                <li>
                                <span className="pink_circle_color"></span>
                                <span>Pink</span>
                                </li>
                                <li>
                                <span className="purple_circle_color"></span>
                                <span>Purple</span>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
          {/* <select class="form-control menu_list_app_sm" id="colors">
            <option>Colors</option>
            <option>Red</option>
            <option>Blue</option>
            </select> */}
          </div>
          <div className="col-12 col-md-8">
          <Scrollbars style={{ height: 75 }}>
            <nav className="masonry_tab_nav mt-3 mt-md-3">
              <div className="nav nav-tabs masonry_tab home_masonary_tab pl-0" id="nav-tab" role="tablist">
                <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All Items</a>
                <a className="nav-link" id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="art" aria-selected="false">Art</a>
                <a className="nav-link" id="games-tab" data-toggle="tab" href="#games" role="tab" aria-controls="games" aria-selected="false">Games</a>
                <a className="nav-link" id="photography-tab" data-toggle="tab" href="#photography" role="tab" aria-controls="photography" aria-selected="false">Photography</a>
                <a className="nav-link" id="music-tab" data-toggle="tab" href="#music" role="tab" aria-controls="music" aria-selected="false">Music</a>
                <a className="nav-link" id="video-tab" data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="false">Video</a>
              </div>
            </nav>
            </Scrollbars>
            </div>
            <div className="col-12 col-md-12 panel_home px-0">
            <Accordion expanded={expanded1 === 'panel1'} onChange={handleChangeFaq('panel1')} className="panel_trans">
                  <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                  <Button className="create_btn btn_pos">
               Filter <span id="close_icon"></span>
            </Button>
                 </AccordionSummary>
                 <AccordionDetails className="">
                    <div className="accordian_para col-12 px-0 pb-2">
                   <div className="row">
                     <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0">
                     <p class="dropdd_title_sm text-white">PRICE</p>
                     <Accordion expanded={expanded5 === 'panel5'} onChange={handleChangeFaq5('panel5')} className="panel_trans">
                  <AccordionSummary aria-controls="panel5bh-content" id="panel5bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn">
                    <div className="select_flex">
                        <span>Highest price</span>
                        <span>
                    <img src={require("../assets/images/arrow_circle.png")} alt="User" className="img-fluid ml-3" />

                        </span>
                    </div>
                    </button>
                 </AccordionSummary>
                 <AccordionDetails className="px-0">
                    <div className="accordian_para col-12 px-0 pb-0">
                    <div class="card card_bl_grey my-0 rad_2">
                        <div class="card-body px-2 pt-2 pb-0">
                            <ul className="colors_ul">
                                <li>
                                <span>Highest price</span>
                                </li>
                                <li>
                                <span>Lowest price</span>
                                </li>                               
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
                     {/* <select class="form-control menu_list_app_sm w-100" id="price">
                       <option>Highest Price</option>
                       <option>Lowest Highest</option></select> */}
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0">
                     <p class="dropdd_title_sm text-white">LIKES</p>
                     <Accordion expanded={expanded2 === 'panel2'} onChange={handleChangeFaq2('panel2')} className="panel_trans">
                  <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn">
                    <div className="select_flex">
                        <span>Most Liked</span>
                        <span>
                    <img src={require("../assets/images/arrow_circle.png")} alt="User" className="img-fluid ml-3" />

                        </span>
                    </div>
                    </button>
                 </AccordionSummary>
                 <AccordionDetails className="px-0">
                    <div className="accordian_para col-12 px-0 pb-0">
                    <div class="card card_bl_grey my-0 rad_2">
                        <div class="card-body px-2 pt-2 pb-0">
                            <ul className="colors_ul">
                                <li>
                                <span>Most Liked</span>
                                </li>
                                <li>
                                <span>Least Liked</span>
                                </li>                               
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
                     {/* <select class="form-control menu_list_app_sm w-100" id="likes">
                       <option>Most like</option>
                       <option>Least like</option></select> */}
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0">
                     <p class="dropdd_title_sm text-white">CREATOR</p>
                     <Accordion expanded={expanded4 === 'panel4'} onChange={handleChangeFaq4('panel4')} className="panel_trans">
                  <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn">
                    <div className="select_flex">
                        <span>Verified only</span>
                        <span>
                    <img src={require("../assets/images/arrow_circle.png")} alt="User" className="img-fluid ml-3" />

                        </span>
                    </div>
                    </button>
                 </AccordionSummary>
                 <AccordionDetails className="px-0">
                    <div className="accordian_para col-12 px-0 pb-0">
                    <div class="card card_bl_grey my-0 rad_2">
                        <div class="card-body px-2 pt-2 pb-0">
                            <ul className="colors_ul">
                                <li>
                                <span>Verified only</span>
                                </li>
                                <li>
                                <span>Non-Verified only</span>
                                </li>                               
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
                     {/* <select class="form-control menu_list_app_sm w-100" id="price">
                       <option>Verified only</option>
                       <option>Non-verified only</option></select> */}
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0">
                     <p class="dropdd_title_sm text-white">PRICE RANGE</p>
                     <RangeSlider
                      value={value}
                      onChange={changeEvent => setValue(changeEvent.target.value)}
                      variant='secondary'
                    />
                    
                     </div>
                   </div>
                    </div>
                  </AccordionDetails>
            </Accordion>
            
            </div>
           

           
                 
               
        </div>
        <div className="tab-content explore_tab_content mt-0" id="nav-tabContent">
              <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                    <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">
            <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius" alt="Shape"/>
            </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                  <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">
            <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius" alt="Shape"/>
           </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                  <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">
            <img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
            </div>
          </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                  <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/nature_4.jpg")} class="img-fluid  img_radius" alt="Shape"/>
           </div>
           </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>


                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                    <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius" alt="Shape"/>
            </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                  <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius" alt="Shape"/>
                       </div>
            </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                  <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
         </div>
          </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div>
                  <div className="img_overlay">
                      <div className="d-flex justify-content-between pos_top">
                      <span className="badge badge-green-purchase ml-3">purchasing</span>
                      <span className="badge badge_black_round mr-3">
                      <i class="fas fa-heart"></i>
                      </span>
                      </div>
                      <div className="text-center pos_bot">
                      <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
                      </div>
                      <div className="img_col_md">

            <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius" alt="Shape"/>
          </div>
          </div>
            <div className="media mt-3">
    
     <div className="media-body flex_body">
       <div>
       <p className="mt-0 banner_desc_user">Amazing digital art</p>
       <div class="d-flex creators_details">
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
       <img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
      
       </div>
       </div>
       <div>
        
         <p class="badge badge-green-outline mb-2">1.125 ETH</p>
         <p className="mt-0 banner_desc_user">18 in stock</p>
       </div>
     </div>
   </div>
   <hr className="hr_grey" />
   <div className="media-body flex_body">
     <p className="hot_bid_sm_text lates_tetx font_12">
     <span class="pr-1"><i class="fas fa-tint"></i></span>
     <span className="pr-1">Highest bid</span>
     <span className="bid_txt_1">0.001 ETH</span>
     </p>
     <p className="hot_bid_sm_text lates_tetx font_12">
    
     <span className="pr-1">New bid</span>
     <span><i class="fas fa-tint"></i></span>
     </p>
    </div>    
    </div>
                  </div>
              
             
                  <div className="col-12 text-center">
                  <Button className="btn_outline_grey mb-3 mt-3">
                    Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>


                </div>
                
                  




<div className="tab-pane fade" id="art" role="tabpanel" aria-labelledby="art-tab">
<div className="row">
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
  <div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">

<img src={require("../assets/images/masonary_01.png")} class="img-fluid  img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>






<div className="col-12 text-center">
<Button className="btn_outline_grey mb-3 mt-3">
  Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
  </Button>
</div>
</div>
</div>

<div className="tab-pane fade" id="games" role="tabpanel" aria-labelledby="games-tab">
<div className="row">
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
  <div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">

<img src={require("../assets/images/masonary_01.png")} class="img-fluid  img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>






<div className="col-12 text-center">
<Button className="btn_outline_grey mb-3 mt-3">
  Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
  </Button>
</div>
</div>
</div>
<div className="tab-pane fade" id="photography" role="tabpanel" aria-labelledby="photography-tab">
<div className="row">
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
  <div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">

<img src={require("../assets/images/masonary_01.png")} class="img-fluid  img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>






<div className="col-12 text-center">
<Button className="btn_outline_grey mb-3 mt-3">
  Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
  </Button>
</div>
</div>
</div>
<div className="tab-pane fade" id="music" role="tabpanel" aria-labelledby="music-tab">
<div className="row">
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
  <div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">

<img src={require("../assets/images/masonary_01.png")} class="img-fluid  img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>






<div className="col-12 text-center">
<Button className="btn_outline_grey mb-3 mt-3">
  Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
  </Button>
</div>
</div>
</div>

<div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
<div className="row">
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
  <div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">
<img src={require("../assets/images/masonary_02.png")} class="img-fluid img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>
<div className="col-12 col-md-6 col-lg-3 mb-4">
<div>
<div className="img_overlay">
    <div className="d-flex justify-content-between pos_top">
    <span className="badge badge-green-purchase ml-3">purchasing</span>
    <span className="badge badge_black_round mr-3">
    <i class="fas fa-heart"></i>
    </span>
    </div>
    <div className="text-center pos_bot">
    <Button className="create_btn"><span className="font_12">Place a bid</span><i class="fas fa-signal ml-2"></i></Button>
    </div>
    <div className="img_col_md">

<img src={require("../assets/images/masonary_01.png")} class="img-fluid  img_radius" alt="Shape"/>
</div>
</div>
<div className="media mt-3">

<div className="media-body flex_body">
<div>
<p className="mt-0 banner_desc_user">Amazing digital art</p>
<div class="d-flex creators_details">
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_02.png")} alt="User" className="img-fluid align-self-center" />
<img src={require("../assets/images/user_01.png")} alt="User" className="img-fluid align-self-center" />

</div>
</div>
<div>

<p class="badge badge-green-outline mb-2">1.125 ETH</p>
<p className="mt-0 banner_desc_user">18 in stock</p>
</div>
</div>
</div>
<hr className="hr_grey" />
<div className="media-body flex_body">
<p className="hot_bid_sm_text lates_tetx font_12">
<span class="pr-1"><i class="fas fa-tint"></i></span>
<span className="pr-1">Highest bid</span>
<span className="bid_txt_1">0.001 ETH</span>
</p>
<p className="hot_bid_sm_text lates_tetx font_12">

<span className="pr-1">New bid</span>
<span><i class="fas fa-tint"></i></span>
</p>
</div>    
</div>
</div>






<div className="col-12 text-center">
<Button className="btn_outline_grey mb-3 mt-3">
  Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
  </Button>
</div>
</div>
</div>
        </div>
      </div>
      </section>
      <section className="earn_crypto_section section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 footer_left_txt">
            <div class="banner_last mb-3">
              <p class="banner_desc_last text-uppercase mb-0">Save your time with stacks</p>
              <h2>Earn free crypto with</h2>
              <p class="banner_desc_last_1 mb-4">A creative agency that lead and inspire</p>

              <div>
              <Button className="create_btn mb-3 mr-3">Earn now</Button> 
              <Button className="btn_outline_grey mb-3">Discover more</Button>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
            <img src={require("../assets/images/footer_right.png")} class="img-fluid img_radius" alt="Shape"/>
              </div>
          </div>
          </div>
          </section>

      </div>
      <Footer />
            {/* buy Modal */}
            <div class="modal fade primary_modal" id="buy_modal" tabindex="-1" role="dialog" aria-labelledby="buy_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="buy_modalLabel">Checkout</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-0">
               <div className="row mx-0 bor_bot_modal">
                 <div className="col-12 col-md-6 px-4">
                  <p className="buy_title_sm">Seller</p>
                  <p className="buy_title_md">Uniaqua</p>
                 </div>
                 <div className="col-12 col-md-6 px-4">
                 <p className="buy_title_sm text-md-right">Buyer</p>
                  <p className="buy_title_md text-md-right">NFTbuyer</p>
                   </div>
               </div> 
               <div className="bor_bot_modal mb-3">
               <p className="buy_title_md px-4 py-3 text-center mb-0">1.01 WOOP</p>
               </div> 
               <div className="row mx-0 pb-3">
                 <div className="col-12 col-sm-6 px-4">
                 <p className="buy_desc_sm">Your balance</p>
                 </div>
                 <div className="col-12 col-sm-6 px-4 text-sm-right">
                 <p className="buy_desc_sm_bold">10.25 WOOP</p>
                 </div>
                </div>                
                <div className="row mx-0 pb-3">
                 <div className="col-12 col-sm-6 px-4">
                 <p className="buy_desc_sm">Service fee</p>
                 </div>
                 <div className="col-12 col-sm-6 px-4 text-sm-right">
                 <p className="buy_desc_sm_bold">0.012 WOOP</p>
                 </div>
                </div> 
                <div className="row mx-0 pb-3">
                 <div className="col-12 col-sm-6 px-4">
                 <p className="buy_desc_sm">You will pay</p>
                 </div>
                 <div className="col-12 col-sm-6 px-4 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div>           
              <form className="px-4">               
                <div className="text-center">
                  <Button className="btn_white primary_btn btn-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#proceed_modal">Proceed to payment</Button>
                  <Button className="btn_outline_blue_info  btn-block" data-dismiss="modal" aria-label="Close">Cancel</Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end buy modal */}

       {/* proceed Modal */}
       <div class="modal fade primary_modal" id="proceed_modal" tabindex="-1" role="dialog" aria-labelledby="proceed_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="proceed_modalLabel">Follow Steps</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">                         
              <form> 
              <p className="mt-0 purchase_text text-center">Purchase</p>
              <p className="mt-0 purchase_desc text-center">Send transaction with your wallet</p>

              <div className="text-center my-3">
              <Button className="primary_btn btn_white btn-block">Inprogress</Button>                
              </div>
            
             
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end proceed modal */}

      {/* place_bid Modal */}
      <div class="modal fade primary_modal" id="place_bid_modal" tabindex="-1" role="dialog" aria-labelledby="place_bid_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="place_bid_modalLabel">Place a bid</h5>
              <p className="text-center place_bit_desc">You are about to place a bid for</p>
              <p className="place_bit_desc_2"><span className="text_red mr-2">Uniaqua</span>by<span className="text_red ml-2">NFTbuyer</span></p>
             
              
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-0 pt-0">
              <form className="px-4 bid_form">
            <label for="bid">Your bid</label>
            <div class="input-group mb-3 input_grp_style_1">
          <input type="text" id="bid" class="form-control primary_inp" placeholder="Enter your display name" aria-label="bid" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">WOOP</span>
          </div>
        </div>

        {/* <label for="qty">Enter quantity <span className="label_muted pl-2">(30 available)</span></label>
            <div class="mb-3 input_grp_style_1">
          <input type="text" id="qty" class="form-control" placeholder="1"  />
         
        </div> */}
               <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Your balance</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">10.25 WOOP</p>
                 </div>
                </div>   
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Your bidding balance</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">0.012 WOOP</p>
                 </div>
                </div>             
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Service fee</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div> 
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">You will pay</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div>           
                            
                <div className="text-center">
                  <Button className="primary_btn btn_white btn-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#proceed_bid_modal">Place a bid</Button>

                </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end place_bid modal */}


      {/* place_bid multiple */}
      <div class="modal fade primary_modal" id="place_bid_multiple_modal" tabindex="-1" role="dialog" aria-labelledby="place_bid_multiple_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="place_bid_multiple_modalLabel">Place a bid</h5>
              <p className="text-center place_bit_desc">You are about to place a bid for</p>
              <p className="place_bit_desc_2"><span className="text_red mr-2">Uniaqua</span>by<span className="text_red ml-2">NFTbuyer</span></p>
             
              
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-0 pt-0">
              <form className="px-4 bid_form">
            <label for="bid">Your bid</label>
            <div class="input-group mb-3 input_grp_style_1">
          <input type="text" id="bid" class="form-control" placeholder="Enter your display name" aria-label="bid" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">WOOP</span>
          </div>
        </div>

        <label for="qty">Enter quantity <span className="label_muted pl-2">(30 available)</span></label>
            <div class="mb-3 input_grp_style_1">
          <input type="text" id="qty" class="form-control" placeholder="1"  />
         
        </div>
               <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Your balance</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">10.25 WOOP</p>
                 </div>
                </div>   
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Your bidding balance</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">0.012 WOOP</p>
                 </div>
                </div>             
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Service fee</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div> 
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">You will pay</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div>           
                            
                <div className="text-center">
                  <Button className="primary_btn btn_white btn-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#proceed_bid_modal">Place a bid</Button>

                </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end place_bid modal multiple */}

       {/* proceed_bid Modal */}
 <div class="modal fade primary_modal" id="proceed_bid_modal" tabindex="-1" role="dialog" aria-labelledby="proceed_bid_modalCenteredLabel" aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
   <div class="modal-content">
     <div class="modal-header text-center">
       <h5 class="modal-title" id="proceed_bid_modalLabel">Follow Steps</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">                         
       <form> 
       <div className="media approve_media">
       <i className="fas fa-check mr-3 pro_complete" aria-hidden="true"></i>
       {/* <i class="fa fa-spinner mr-3 spinner_icon" aria-hidden="true"></i> */}
       <div className="media-body">
         <p className="mt-0 approve_text">Approve</p> 
         <p className="mt-0 approve_desc">Checking balance and approving</p>
       </div>
     </div>
       <div className="text-center my-3">
       <Button className="btn_outline_red btn-block">Done</Button>                
       </div>
       <div className="media approve_media">
       <i className="fas fa-check mr-3" aria-hidden="true"></i>
       <div className="media-body">
         <p className="mt-0 approve_text">Signature</p> 
         <p className="mt-0 approve_desc">Create a signatute to place a bid</p>
       </div>
     </div>
       <div className="text-center mt-3">
       <Button className="btn_white primary_btn btn-block" disabled>Start</Button>                
       </div>
       </form>
     </div>
   </div>
 </div>
</div>
{/* end proceed_bid modal */}

 {/* accept bid Modal */}
 <div class="modal fade primary_modal" id="accept_modal" tabindex="-1" role="dialog" aria-labelledby="accept_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="accept_modalLabel">Accept bid</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-0">
              <div className="img_accept text-center">
              <img src={require("../assets/images/img_info.png")} alt="Collections" className="img-fluid" />
              </div>
              <p className="text-center accept_desc">
                <span className="buy_desc_sm">You are about to accept bid for</span>
                <span className="buy_desc_sm_bold pl-2">Uniaqua</span>
                <span className="buy_desc_sm pl-2">from</span>
                <span className="buy_desc_sm_bold pl-2">0xb6631a76645...b7de</span>              
                </p>
                <p className="info_title text-center">0 WOOP for 1 edition(s)</p>
               
                            
                <div className="row mx-0 pb-3">
                 <div className="col-12 col-sm-6 px-4">
                 <p className="buy_desc_sm">Service fee</p>
                 </div>
                 <div className="col-12 col-sm-6 px-4 text-sm-right">
                 <p className="buy_desc_sm_bold">0.012 WOOP</p>
                 </div>
                </div> 
                <div className="row mx-0 pb-3">
                 <div className="col-12 col-sm-6 px-4">
                 <p className="buy_desc_sm">You will get</p>
                 </div>
                 <div className="col-12 col-sm-6 px-4 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div>           
              <form className="px-4">               
                <div className="text-center">
                  <Button className="primary_btn btn_white btn-block" data-dismiss="modal" aria-label="Close">Accept bid</Button>
                  <Button className="btn_outline_red btn-block" data-dismiss="modal" aria-label="Close">Cancel</Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end accept bid modal */}
       {/* SHARE Modal */}
       <div class="modal fade primary_modal" id="share_modal" tabindex="-1" role="dialog" aria-labelledby="share_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="share_modalLabel">Share this NFT</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-0">
              <div className="row justify-content-center mx-0">
                <div className="col-12 col-sm-6 col-lg-3 px-1">
                  <div className="text-center icon_div">
                  <i class="fab fa-telegram-plane"></i>
                  <p>Telegram</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 px-1">
                  <div className="text-center icon_div">
                  <i class="fab fa-twitter"></i>
                  <p>Twitter</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 px-1">
                  <div className="text-center icon_div">
                  <i class="fab fa-facebook-f"></i>
                  <p>Facebook</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 px-1">
                  <div className="text-center icon_div">
                  <i class="fab fa-whatsapp"></i>
                  <p>Whatsapp</p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      {/* end SHARE modal */}

        {/* change_price Modal */}
        <div class="modal fade primary_modal" id="change_price_modal" tabindex="-1" role="dialog" aria-labelledby="change_price_modalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="change_price_modalLabel">Change Price</h5>
              <p className="text-center place_bit_desc">Your Price Must Be Lower than current price</p>
             
              
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-0 pt-0">
              <form className="px-4 bid_form">
            <label for="bid">Current Price - 10 WOOP</label>
            <div class="input-group mb-3 input_grp_style_1">
          <input type="text" id="bid" class="form-control" placeholder="Enter current price" aria-label="bid" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">WOOP</span>
          </div>
        </div>

        {/* <label for="qty">Enter quantity <span className="label_muted pl-2">(30 available)</span></label>
            <div class="mb-3 input_grp_style_1">
          <input type="text" id="qty" class="form-control" placeholder="1"  />
         
        </div> */}
                 
                             
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">Service fee</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div> 
                <div className="row pb-3">
                 <div className="col-12 col-sm-6">
                 <p className="buy_desc_sm">You will get</p>
                 </div>
                 <div className="col-12 col-sm-6 text-sm-right">
                 <p className="buy_desc_sm_bold">1.112 WOOP</p>
                 </div>
                </div>           
                            
                <div className="text-center">
                  <Button className="primary_btn btn_white btn-block" data-dismiss="modal" aria-label="Close">Change Price</Button>

                </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end change_price modal */}
    </div>
  );
}
