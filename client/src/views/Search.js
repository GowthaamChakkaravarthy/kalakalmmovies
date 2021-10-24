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

export default function Search(props) {
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
       
        <div className="container pad_top_notfound pad_bot_notfound ">
        
       
        <div className="row">
       
            <div className="col-12 col-sm-12 col-md-12">
            <div>
            <Scrollbars style={{ height: 75 }}>
<nav className="masonry_tab_nav mt-3 mt-md-3 float-lg-right">
  <div className="nav nav-tabs masonry_tab home_masonary_tab px-0" id="nav-tab" role="tablist">
    <a className="nav-link active" id="items-tab" data-toggle="tab" href="#items" role="tab" aria-controls="items" aria-selected="true">Items</a>
    {/* <a className="nav-link" id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="art" aria-selected="false">Art</a> */}
    <a className="nav-link" id="users-tab" data-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Users</a>
    <a className="nav-link" id="collections-tab" data-toggle="tab" href="#collections" role="tab" aria-controls="collections" aria-selected="false">Collections</a>
  
  </div>
</nav>
</Scrollbars>
<div className="tab-content explore_tab_content mt-4" id="nav-tabContent">
<div className="tab-pane fade show active" id="items" role="tabpanel" aria-labelledby="items-tab">
<div className="text-center py-3 d-none">
                  <p className="not_found_text">No items found</p>
                  <p className="not_found_text_sub">Come back soon! Or try to browse something for you on our marketplace</p>
                  <div className="mt-3">
                  <Button className="create_btn">Browse Marketplace</Button>
                </div>             
                </div>
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
  
   
  <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
  <div className="text-center py-3  d-none">
                  <p className="not_found_text">No items found</p>
                  <p className="not_found_text_sub">Come back soon! Or try to browse something for you on our marketplace</p>
                  <div className="mt-3">
                  <Button className="create_btn">Browse Marketplace</Button>
                </div>             
                </div>
  <div className="row">
     
      <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-0">
     
     <div className="img_searc_banner">
      <div className="img_col_search">
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
      
      </div>
      <div className="img_sesrc_pro">
           
                  <img src={require("../assets/images/collection_03.png")} alt="User" className="img-fluid" />
                
      </div>
      </div>
      <div className="mt-5 mb-4 px-2 text-center">

      <div className="text-center">
      <div>
      <p className="mt-0 banner_desc_user font_16">Qixad</p>
      <p className="mt-0 lates_tetx font_14">33 followers</p>
     
      </div>
      <div>

      </div>
      </div>
      </div>
     
      </div>    
      </div>
      </div>
 
      <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-0">
     
     <div className="img_searc_banner">
      <div className="img_col_search">
      <img src={require("../assets/images/collection_03.png")} class="img-fluid img_radius_12" alt="Shape"/>
      
      </div>
      <div className="img_sesrc_pro">
           
                  <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid" />
                
      </div>
      </div>
      <div className="mt-5 mb-4 px-2 text-center">

      <div className="text-center">
      <div>
      <p className="mt-0 banner_desc_user font_16">Qixad</p>
      <p className="mt-0 lates_tetx font_14">33 followers</p>
     
      </div>
      <div>

      </div>
      </div>
      </div>
     
      </div>    
      </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-0">
     
     <div className="img_searc_banner">
      <div className="img_col_search">
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
      
      </div>
      <div className="img_sesrc_pro">
           
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                
      </div>
      </div>
      <div className="mt-5 mb-4 px-2 text-center">

      <div className="text-center">
      <div>
      <p className="mt-0 banner_desc_user font_16">Qixad</p>
      <p className="mt-0 lates_tetx font_14">33 followers</p>
     
      </div>
      <div>

      </div>
      </div>
      </div>
     
      </div>    
      </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-0">
     
     <div className="img_searc_banner">
      <div className="img_col_search">
      <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
      
      </div>
      <div className="img_sesrc_pro">
           
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                
      </div>
      </div>
      <div className="mt-5 mb-4 px-2 text-center">

      <div className="text-center">
      <div>
      <p className="mt-0 banner_desc_user font_16">Qixad</p>
      <p className="mt-0 lates_tetx font_14">33 followers</p>
     
      </div>
      <div>

      </div>
      </div>
      </div>
     
      </div>    
      </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-0">
     
     <div className="img_searc_banner">
      <div className="img_col_search">
      <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
      
      </div>
      <div className="img_sesrc_pro">
           
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                
      </div>
      </div>
      <div className="mt-5 mb-4 px-2 text-center">

      <div className="text-center">
      <div>
      <p className="mt-0 banner_desc_user font_16">Qixad</p>
      <p className="mt-0 lates_tetx font_14">33 followers</p>
     
      </div>
      <div>

      </div>
      </div>
      </div>
     
      </div>    
      </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
      <div className="card card_bl_grey rad_2 border-0 m-0">
      <div className="card-body p-0">
     
     <div className="img_searc_banner">
      <div className="img_col_search">
      <img src={require("../assets/images/collection_03.png")} class="img-fluid img_radius_12" alt="Shape"/>
      
      </div>
      <div className="img_sesrc_pro">
           
                  <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
                
      </div>
      </div>
      <div className="mt-5 mb-4 px-2 text-center">

      <div className="text-center">
      <div>
      <p className="mt-0 banner_desc_user font_16">Qixad</p>
      <p className="mt-0 lates_tetx font_14">33 followers</p>
     
      </div>
      <div>

      </div>
      </div>
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
  

  <div className="tab-pane fade" id="collections" role="tabpanel" aria-labelledby="collections-tab">
  <div className="text-center py-3  d-none">
                  <p className="not_found_text">No items found</p>
                  <p className="not_found_text_sub">Come back soon! Or try to browse something for you on our marketplace</p>
                  <div className="mt-3">
                  <Button className="create_btn">Browse Marketplace</Button>
                </div>             
                </div>
  <div className="row">
     
     <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
     <div className="card card_bl_grey rad_2 border-0 m-0">
     <div className="card-body p-0">
    
    <div className="img_searc_banner">
     <div className="img_col_search">
     <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
     
     </div>
     <div className="img_sesrc_pro">
          
                 <img src={require("../assets/images/collection_03.png")} alt="User" className="img-fluid" />
               
     </div>
     </div>
     <div className="mt-5 mb-4 px-2 text-center">

     <div className="text-center">
     <div>
     <p className="mt-0 banner_desc_user font_16">Qixad</p>
     <p className="mt-0 lates_tetx font_14">33 followers</p>
    
     </div>
     <div>

     </div>
     </div>
     </div>
    
     </div>    
     </div>
     </div>

     <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
     <div className="card card_bl_grey rad_2 border-0 m-0">
     <div className="card-body p-0">
    
    <div className="img_searc_banner">
     <div className="img_col_search">
     <img src={require("../assets/images/collection_03.png")} class="img-fluid img_radius_12" alt="Shape"/>
     
     </div>
     <div className="img_sesrc_pro">
          
                 <img src={require("../assets/images/collection_01.png")} alt="User" className="img-fluid" />
               
     </div>
     </div>
     <div className="mt-5 mb-4 px-2 text-center">

     <div className="text-center">
     <div>
     <p className="mt-0 banner_desc_user font_16">Qixad</p>
     <p className="mt-0 lates_tetx font_14">33 followers</p>
    
     </div>
     <div>

     </div>
     </div>
     </div>
    
     </div>    
     </div>
     </div>
     <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
     <div className="card card_bl_grey rad_2 border-0 m-0">
     <div className="card-body p-0">
    
    <div className="img_searc_banner">
     <div className="img_col_search">
     <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
     
     </div>
     <div className="img_sesrc_pro">
          
                 <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
               
     </div>
     </div>
     <div className="mt-5 mb-4 px-2 text-center">

     <div className="text-center">
     <div>
     <p className="mt-0 banner_desc_user font_16">Qixad</p>
     <p className="mt-0 lates_tetx font_14">33 followers</p>
    
     </div>
     <div>

     </div>
     </div>
     </div>
    
     </div>    
     </div>
     </div>
     <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
     <div className="card card_bl_grey rad_2 border-0 m-0">
     <div className="card-body p-0">
    
    <div className="img_searc_banner">
     <div className="img_col_search">
     <img src={require("../assets/images/collection_02.png")} class="img-fluid img_radius_12" alt="Shape"/>
     
     </div>
     <div className="img_sesrc_pro">
          
                 <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
               
     </div>
     </div>
     <div className="mt-5 mb-4 px-2 text-center">

     <div className="text-center">
     <div>
     <p className="mt-0 banner_desc_user font_16">Qixad</p>
     <p className="mt-0 lates_tetx font_14">33 followers</p>
    
     </div>
     <div>

     </div>
     </div>
     </div>
    
     </div>    
     </div>
     </div>
     <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
     <div className="card card_bl_grey rad_2 border-0 m-0">
     <div className="card-body p-0">
    
    <div className="img_searc_banner">
     <div className="img_col_search">
     <img src={require("../assets/images/collection_01.png")} class="img-fluid img_radius_12" alt="Shape"/>
     
     </div>
     <div className="img_sesrc_pro">
          
                 <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
               
     </div>
     </div>
     <div className="mt-5 mb-4 px-2 text-center">

     <div className="text-center">
     <div>
     <p className="mt-0 banner_desc_user font_16">Qixad</p>
     <p className="mt-0 lates_tetx font_14">33 followers</p>
    
     </div>
     <div>

     </div>
     </div>
     </div>
    
     </div>    
     </div>
     </div>
     <div className="col-12 col-md-6 col-lg-4 col-xl-3  mb-4">
     <div className="card card_bl_grey rad_2 border-0 m-0">
     <div className="card-body p-0">
    
    <div className="img_searc_banner">
     <div className="img_col_search">
     <img src={require("../assets/images/collection_03.png")} class="img-fluid img_radius_12" alt="Shape"/>
     
     </div>
     <div className="img_sesrc_pro">
          
                 <img src={require("../assets/images/follower_3.png")} alt="User" className="img-fluid" />
               
     </div>
     </div>
     <div className="mt-5 mb-4 px-2 text-center">

     <div className="text-center">
     <div>
     <p className="mt-0 banner_desc_user font_16">Qixad</p>
     <p className="mt-0 lates_tetx font_14">33 followers</p>
    
     </div>
     <div>

     </div>
     </div>
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
