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
import styled from "../../node_modules/styled-components";
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

export default function ForBrands(props) {
  const classes = useStyles();
  const { ...rest } = props;

  function hideprevimg()
  {
    document.getElementById("prev_img").classList.remove('d-block');
    document.getElementById("prev_img").classList.add('d-none'); 
  }
  function getstarted()
  {
    document.getElementById("terms").classList.remove('d-block');
    document.getElementById("terms").classList.add('d-none'); 
    document.getElementById("getstartsec").classList.remove('d-none');
    document.getElementById("getstartsec").classList.add('d-block'); 
  }
  function getstarted1()
  {
    document.getElementById("terms1").classList.remove('d-block');
    document.getElementById("terms1").classList.add('d-none'); 
    document.getElementById("getstartsec1").classList.remove('d-none');
    document.getElementById("getstartsec1").classList.add('d-block'); 
  }
  function getstarted2()
  {
    document.getElementById("terms2").classList.remove('d-block');
    document.getElementById("terms2").classList.add('d-none'); 
    document.getElementById("getstartsec2").classList.remove('d-none');
    document.getElementById("getstartsec2").classList.add('d-block'); 
  }
  function getstarted3()
  {
    document.getElementById("terms3").classList.remove('d-block');
    document.getElementById("terms3").classList.add('d-none'); 
    document.getElementById("getstartsec3").classList.remove('d-none');
    document.getElementById("getstartsec3").classList.add('d-block'); 
  }
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
     
        <div className="container mt-con-wallet">
        <p className="title_text_white mb-5 line_h_40_p_x faq_tetx_big">
          <Link to ="/home" className="back_arrow"><i class="fas fa-arrow-left mr-3 text-white arrow_font_sm"></i></Link>Connect your wallet</p>
        <hr className="hr_grey" />
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
       
            </div>
          </div>
       
          <div className="row pt-3 pb-0">
            <div className="col-12 col-md-6 col-lg-6 con_left_sec_pad left_1">
            <nav className="masonry_tab_nav nav_vertical">
              <div className="nav nav-tabs masonry_tab home_masonary_tab connect_wallet_tab px-0" id="nav-tab" role="tablist">
                
                <a className="nav-link" id="formatic-tab" data-toggle="tab" href="#formatic" role="tab" aria-controls="formatic" aria-selected="false" onClick={hideprevimg}>
                <span>
                <button class="bg_pink_icon_wallet mr-3 ml-0" type="button"><i class="far fa-credit-card"></i></button>
                <button class="bg_purple_icon_complete mr-3 ml-0" type="button"><i class="fas fa-check"></i></button>
                Formatic
                </span>
                <span className="go_arrow_connect"> <Link to="/home"><i class="fas fa-arrow-right text-white"></i></Link></span>
                </a>
                <a className="nav-link" id="coinbasewallet-tab" data-toggle="tab" href="#coinbasewallet" role="tab" aria-controls="coinbasewallet" aria-selected="false" onClick={hideprevimg}>
                <span>
                <button class="bg_blue_icon_wallet mr-3 ml-0" type="button"><i class="far fa-credit-card"></i></button>
                <button class="bg_purple_icon_complete mr-3 ml-0" type="button"><i class="fas fa-check"></i></button>
                Coinbase Wallet
               
                
                </span>
                <span className="go_arrow_connect"> <Link to="/home"><i class="fas fa-arrow-right text-white"></i></Link></span>
                
                  </a>
                <a className="nav-link" id="myetherwallet-tab" data-toggle="tab" href="#myetherwallet" role="tab" aria-controls="myetherwallet" aria-selected="false" onClick={hideprevimg}>
                <span>
                <button class="bg_green_icon_wallet mr-3 ml-0" type="button"><i class="far fa-credit-card"></i></button>
                <button class="bg_purple_icon_complete mr-3 ml-0" type="button"><i class="fas fa-check"></i></button>
                MyEtherWallet
               
                
                </span>
                <span className="go_arrow_connect"> <Link to="/home"><i class="fas fa-arrow-right text-white"></i></Link></span>
                 
                  </a>
                <a className="nav-link" id="walletconnect-tab" data-toggle="tab" href="#walletconnect" role="tab" aria-controls="walletconnect" aria-selected="false" onClick={hideprevimg}>
               <span>
                <button class="bg_orange_icon_wallet mr-3 ml-0" type="button"><i class="far fa-credit-card"></i></button>
                <button class="bg_purple_icon_complete mr-3 ml-0" type="button"><i class="fas fa-check"></i></button>
                
                Wallet Connect
                
                </span>
                <span className="go_arrow_connect"> <Link to="/home"><i class="fas fa-arrow-right text-white"></i></Link></span>
                
                </a>
              </div>
            </nav>
            </div>
            <div className="col-12 col-md-5 col-lg-5 offset-md-1 con_left_sec_pad">
            <img src={require("../assets/images/connect_wallet.png")} alt="Connext Wallet" className="img-fluid w-100 mb-5" id="prev_img" />
            <div className="tab-content explore_tab_content my-4" id="nav-tabContent">
            <div className="tab-pane fade" id="formatic" role="tabpanel" aria-labelledby="formatic-tab">
              <div id="terms" className="mb-5">
            <p className="title_text_white terms_title mb-4">Terms of service</p>
            <p className="banner_desc_ep_1 font_14 mb-4">Please take a few minutes to read and understand <span className="text-white">Stacks Terms of Service.</span> To continue, you'll need to accept the terms of services by checking the boxes.</p>
            <img src={require("../assets/images/wallet_con.png")} alt="Connext Wallet" className="img-fluid w-100 mb-5 mt-4" id="prev_img" />
            <div className="act_menu">
           <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">I am atleast 13 years old</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                <label class="custom-control-label" for="customCheck2">I agree Stack terms of service</label>
                </div>
                </div>
                <div className="my-4">
                <Button className="btn_outline_grey mr-2 mb-3">
                  Cancel
                </Button>
                <Button className="create_btn create_btn_lit mb-3" onClick={getstarted}>
                 Get started now
                </Button>
                </div>
                </div>
                <div id="getstartsec" className="d-none mb-5">
                <p className="title_text_white terms_title mb-2">Scan to connect</p>
                <p className="banner_desc_ep_1 font_14 mb-4">Powered by USB Wallet</p>
                <div class="card card_bl_grey my-0 rad_2 card_sacn_sec">
                  <div class="card-body py-4 px-4">
                    <div className="card card_black">
                    <div class="card-body py-4 px-4 text-center">
                  <img src={require("../assets/images/qr_code.png")} alt="Connext Wallet" className="img-fluid" />

                    </div>
                    </div>
                  </div>
                </div>
                <Button className="btn_outline_grey mr-2 mb-3 mt-4">
                  Don't have a wallet app?
                </Button>
                </div>
            </div>
            <div className="tab-pane fade" id="coinbasewallet" role="tabpanel" aria-labelledby="coinbasewallet-tab">
            <div id="terms1" className="mb-5">
            <p className="title_text_white terms_title mb-4">Terms of service</p>
            <p className="banner_desc_ep_1 font_14 mb-4">Please take a few minutes to read and understand <span className="text-white">Stacks Terms of Service.</span> To continue, you'll need to accept the terms of services by checking the boxes.</p>
            <img src={require("../assets/images/wallet_con.png")} alt="Connext Wallet" className="img-fluid w-100 mb-5 mt-4" id="prev_img" />
            <div className="act_menu">
           <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                <label class="custom-control-label" for="customCheck3">I am atleast 13 years old</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck4" />
                <label class="custom-control-label" for="customCheck4">I agree Stack terms of service</label>
                </div>
                </div>
                <div className="my-4">
                <Button className="btn_outline_grey mr-2 mb-3">
                  Cancel
                </Button>
                <Button className="create_btn create_btn_lit mb-3" onClick={getstarted1}>
                 Get started now
                </Button>
                </div>
                </div>
                <div id="getstartsec1" className="d-none mb-5">
                <p className="title_text_white terms_title mb-2">Scan to connect</p>
                <p className="banner_desc_ep_1 font_14 mb-4">Powered by USB Wallet</p>
                <div class="card card_bl_grey my-0 rad_2 card_sacn_sec">
                  <div class="card-body py-4 px-4">
                    <div className="card card_black">
                    <div class="card-body py-4 px-4 text-center">
                  <img src={require("../assets/images/qr_code.png")} alt="Connext Wallet" className="img-fluid" />

                    </div>
                    </div>
                  </div>
                </div>
                <Button className="btn_outline_grey mr-2 mb-3 mt-4">
                  Don't have a wallet app?
                </Button>
                </div>
            </div>
            <div className="tab-pane fade" id="myetherwallet" role="tabpanel" aria-labelledby="myetherwallet-tab">
            <div id="terms2" className="mb-5">
            <p className="title_text_white terms_title mb-4">Terms of service</p>
            <p className="banner_desc_ep_1 font_14 mb-4">Please take a few minutes to read and understand <span className="text-white">Stacks Terms of Service.</span> To continue, you'll need to accept the terms of services by checking the boxes.</p>
            <img src={require("../assets/images/wallet_con.png")} alt="Connext Wallet" className="img-fluid w-100 mb-5 mt-4" id="prev_img" />
            <div className="act_menu">
           <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck5" />
                <label class="custom-control-label" for="customCheck5">I am atleast 13 years old</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck6" />
                <label class="custom-control-label" for="customCheck6">I agree Stack terms of service</label>
                </div>
                </div>
                <div className="my-4">
                <Button className="btn_outline_grey mr-2 mb-3">
                  Cancel
                </Button>
                <Button className="create_btn create_btn_lit mb-3" onClick={getstarted2}>
                 Get started now
                </Button>
                </div>
                </div>
                <div id="getstartsec2" className="d-none mb-5">
                <p className="title_text_white terms_title mb-2">Scan to connect</p>
                <p className="banner_desc_ep_1 font_14 mb-4">Powered by USB Wallet</p>
                <div class="card card_bl_grey my-0 rad_2 card_sacn_sec">
                  <div class="card-body py-4 px-4">
                    <div className="card card_black">
                    <div class="card-body py-4 px-4 text-center">
                  <img src={require("../assets/images/qr_code.png")} alt="Connext Wallet" className="img-fluid" />

                    </div>
                    </div>
                  </div>
                </div>
                <Button className="btn_outline_grey mr-2 mb-3 mt-4">
                  Don't have a wallet app?
                </Button>
                </div>
            </div>
            <div className="tab-pane fade" id="walletconnect" role="tabpanel" aria-labelledby="walletconnect-tab">
            <div id="terms3" className="mb-5">
            <p className="title_text_white terms_title mb-4">Terms of service</p>
            <p className="banner_desc_ep_1 font_14 mb-4">Please take a few minutes to read and understand <span className="text-white">Stacks Terms of Service.</span> To continue, you'll need to accept the terms of services by checking the boxes.</p>
            <img src={require("../assets/images/wallet_con.png")} alt="Connext Wallet" className="img-fluid w-100 mb-5 mt-4" id="prev_img" />
            <div className="act_menu">
           <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck7" />
                <label class="custom-control-label" for="customCheck7">I am atleast 13 years old</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck8" />
                <label class="custom-control-label" for="customCheck8">I agree Stack terms of service</label>
                </div>
                </div>
                <div className="my-4">
                <Button className="btn_outline_grey mr-2 mb-3">
                  Cancel
                </Button>
                <Button className="create_btn create_btn_lit mb-3" onClick={getstarted3}>
                 Get started now
                </Button>
                </div>
                </div>
                <div id="getstartsec3" className="d-none mb-5">
                <p className="title_text_white terms_title  mb-2">Scan to connect</p>
                <p className="banner_desc_ep_1 font_14 mb-4">Powered by USB Wallet</p>
                <div class="card card_bl_grey my-0 rad_2 card_sacn_sec">
                  <div class="card-body py-4 px-4">
                    <div className="card card_black">
                    <div class="card-body py-4 px-4 text-center">
                  <img src={require("../assets/images/qr_code.png")} alt="Connext Wallet" className="img-fluid" />

                    </div>
                    </div>
                  </div>
                </div>
                <Button className="btn_outline_grey mr-2 mb-3 mt-4">
                  Don't have a wallet app?
                </Button>
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
