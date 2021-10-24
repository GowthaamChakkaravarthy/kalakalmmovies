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
       
        <div className="container pad_top_notfound pad_bot_notfound ">
        
        <div className="seach_full">
        <div className="newsletter_grp mx-auto mt-4">
              <input type="email" className="newsletter_inp" placeholder="Type your keywords"/>
              <div className="newsletter_grp_append">
                <button className="btn" type="button" id="news_submit"><i class="fas fa-search"></i></button>
              </div>
        </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-4 col-md-3">
                <div className="mt-5">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeFaq('panel1')} className="panel_trans">
                  <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" className="px-0">
                  <button class="btn btn-secondary dropdown-toggle filter_btn select_btn">
                    <div className="select_flex">
                        <span>Recently added</span>
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
                                <span>Recently added</span>
                                </li>
                                <li>
                                <span>Recently added</span>
                                </li>                               
                            </ul>
                        </div>
                        </div>
                    </div>
                  </AccordionDetails>
            </Accordion>

               <p class="dropdd_title_sm text-white mt-3">PRICE RANGE</p>
                     <RangeSlider
                      value={value}
                      onChange={changeEvent => setValue(changeEvent.target.value)}
                      variant='secondary'
                    />
                    <hr className="hr_grey" />
              
            {/* <select class="form-control menu_list_app_sm w-100" id="recent">
            <option>Recently added</option>
            <option>1 week before</option></select> */}
 <p class="dropdd_title_sm text-white mt-3">LIKES</p>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeFaq('panel2')} className="panel_trans">
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
         
                    <p class="dropdd_title_sm text-white mt-3">OPEN</p>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChangeFaq('panel3')} className="panel_trans">
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
                    {/* <select class="form-control menu_list_app_sm w-100" id="open">
                    <option>Colors</option>
                    
                    <option>Colors</option></select> */}
 
 <p class="dropdd_title_sm text-white mt-3">CREATOR</p>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChangeFaq('panel4')} className="panel_trans">
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
            <hr className="hr_grey" />
                    {/* <p class="dropdd_title_sm text-white mt-3">CREATOR</p>
                    <select class="form-control menu_list_app_sm w-100" id="creator">
                    <option>Verified only</option>
                    <option>Non-verified only</option></select> */}
            <p className="text-white font_14 cur_pointer hover_blue"><i class="fas fa-times-circle mr-2"></i>Reset filter</p>
            </div>
            </div>
            <div className="col-12 col-sm-8 col-md-9">
            <div className="mt-5">
            <Scrollbars style={{ height: 75 }}>
<nav className="masonry_tab_nav mt-3 mt-md-3 float-lg-right">
  <div className="nav nav-tabs masonry_tab home_masonary_tab px-0" id="nav-tab" role="tablist">
    <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All Items</a>
    {/* <a className="nav-link" id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="art" aria-selected="false">Art</a> */}
    <a className="nav-link" id="games-tab" data-toggle="tab" href="#games" role="tab" aria-controls="games" aria-selected="false">Games</a>
    <a className="nav-link" id="photography-tab" data-toggle="tab" href="#photography" role="tab" aria-controls="photography" aria-selected="false">Photography</a>
    <a className="nav-link" id="music-tab" data-toggle="tab" href="#music" role="tab" aria-controls="music" aria-selected="false">Music</a>
    <a className="nav-link" id="video-tab" data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="false">Video</a>
  </div>
</nav>
</Scrollbars>
<div className="tab-content explore_tab_content mt-4" id="nav-tabContent">
<div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
  <div className="row">
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
      </div>
      </div>
      <div className="media mt-3">

      <div className="media-body flex_body">
      <div>
      <p className="mt-0 banner_desc_user">Amazing digital art</p>
      <div class="d-flex creators_details">
      <img src={require("../assets/images/nature_3.jpg")} alt="User" className="img-fluid align-self-center" />
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      


    <div className="col-12 text-center">
    <Button className="btn_outline_grey mb-3 mt-3">
      Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
      </Button>
    </div>
  </div>
 
 
  </div>
  
   {/* <div className="tab-pane fade" id="art" role="tabpanel" aria-labelledby="art-tab">
   <div className="row">
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      


    <div className="col-12 text-center">
    <Button className="btn_outline_grey mb-3 mt-3">
      Load More  <i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i>
      </Button>
    </div>
  </div>
 
 
  </div>  */}
  
  <div className="tab-pane fade" id="games" role="tabpanel" aria-labelledby="games-tab">
  <div className="row">
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_4.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/nature_3.jpg")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-2">
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
      <img src={require("../assets/images/masonary_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
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
        </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
