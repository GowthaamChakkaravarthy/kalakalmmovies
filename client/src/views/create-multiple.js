import React, { useEffect, useCallback } from "react";

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

import { Scrollbars } from 'react-custom-scrollbars';

import Dropzone from 'react-dropzone';

import {useDropzone} from 'react-dropzone';
import { Line, Circle } from 'rc-progress';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function CreateSingle(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const {getRootProps, getInputProps} = useDropzone()

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
       
        <div className="container my-5">
          <div className="row pad_bot_create_1">
          
            <div className="col-12 col-md-6 col-lg-7 pad_top_create">
            <h2 className="mb-5 title_text_white flex_center_between d-block d-sm-flex faq_tetx_big">Create Multiple Collectible
            <Button className="btn_outline_grey float-right min_w_170">
              <Link to='/create-single'>Switch to single</Link>
            
          </Button>
            </h2>
            <div className="clearfix"></div>
              <form className="mt-4 mt-md-0">
              <p className="mt-0 banner_title_ep line_hei_sm">Upload file</p>
                <p className="banner_desc_ep_1">Drag or choose your file to upload</p>
                <div {...getRootProps()} className="card card_bl_grey rad_2 cursor_pointer">
                  <div className="card-body text-center p-5">
              <input {...getInputProps()} />
              <p className="mt-0 mb-3 banner_desc_ep font_16"><i class="fas fa-file-image"></i></p>
              <p className="mt-0 mb-3 banner_desc_ep">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
              </div>
            </div>
                {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone> */}
                <p className="mt-0 banner_title_ep line_hei_sm mt-5 mb-4">Item Details</p>
                <div className="row">
                  <div className="col-12 col-md-6">
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="name">Item Name</label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder='e. g. "Redeemable Bitcoin Card with logo"'/>
                  </div>
                  </div>
                  <div className="col-12 col-md-6">
                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="no">No.of Copies</label>
                    <input type="text" className="form-control primary_inp" id="no" placeholder='e. g. "20"'/>
                  </div>
                    </div>
                </div>
                  

                  <div className="form-group mb-4">
                    <label className="primary_label" htmlFor="description">Description</label>
                    <input type="text" className="form-control primary_inp" id="description" placeholder='e. g. “After purchasing you will able to recived the logo...”'/>
                  </div>
              

                <div className="row">
                  <div className="form-group col-lg-4 mb-4">
                    <label className="primary_label" htmlFor="royalties">Royalties</label>
                    <select className="form-control  primary_inp custom-select selc_hg">
                      <option>10%</option>
                      <option>20%</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 mb-4">
                    <label className="primary_label" htmlFor="size">Size</label>
                    <input type="text" className="form-control primary_inp" id="size" placeholder='e. g. Size'/>

                  </div>
                  <div className="form-group col-lg-4 mb-4">
                    <label className="primary_label" htmlFor="property">Properties</label>
                    <input type="text" className="form-control primary_inp" id="property" placeholder='e.g. Properties'/>
                  </div>
                </div>
                <hr className="hr_grey" />
                <div className="d-flex justify-content-between align-items-start mt-5">
                      <div>
                        <label className="primary_label text-white text-capitalize" htmlFor="putonsale">Put on sale</label>
                        <p className="form_note">You’ll receive bids on this item</p>
                      </div>
                      <label className="switch toggle_custom">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="puton_sale_sec  d-none">
                  <Scrollbars style={{ height: 180 }}>
                  <div className="colct_img_section">
                  <div className="card card_bl_grey mr-2">
                    <div className="card-body p-3">
                     <img src={require("../assets/images/price.svg")} class="img-fluid img_radius img_col_change" alt="Fixed Price"/>
                      <p className="colctn_card_txt mt-2">Fixed Price</p>

                    </div>
                  </div>
               
                  <div className="card card_bl_grey mr-2">
                    <div className="card-body p-3">
                     <img src={require("../assets/images/unlimited.svg")} class="img-fluid img_radius img_col_change" alt="Unlimited Auction"/>

                      <p className="colctn_card_txt">Unlimited Auction</p>

                    </div>
                  </div>
                
                  </div>
                  </Scrollbars>
                  </div>
                  <div className="fiexd_price_sec  d-none">
                  <label className="primary_label" htmlFor="price">Price</label>

                  <div className="input-group mb-3">
                <input type="text" className="form-control primary_inp bor_rit_rad" placeholder="0" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                  <select className="form-control  primary_inp custom-select selc_hg">
                     <option>Select</option>
                      <option>ETH</option>
                      <option>BTC</option>
                    </select>
                  </span>
                </div>
              </div>
              <p className="banner_desc_ep_1">Service fee 2.5%<br/>
              You will receive ETH</p>
                  </div>

                    <div className="d-flex justify-content-between align-items-start mt-3">
                      <div>
                        <label className="primary_label text-white text-capitalize" htmlFor="instant">Instant sale price</label>
                        <p className="form_note">Enter the price for which the item will be instantly sold</p>
                      </div>
                      <label className="switch toggle_custom">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                      </label>
                    </div>

                    <div className="d-flex justify-content-between align-items-start mt-3">
                      <div>
                        <label className="primary_label text-white text-capitalize" htmlFor="unlock">Unlock once purchased</label>
                        <p className="form_note">Content will be unlocked after successful transaction</p>
                      </div>
                      <label className="switch toggle_custom">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="form-group col-lg-12 mb-4 px-0 unlock_des d-none">
                    <label className="primary_label" htmlFor="unlock">Unlock</label>
                    <input type="text" className="form-control primary_inp" id="size" placeholder='Digital key, code to redeem or link to a file..'/>

                  </div>
                    <label className="primary_label text-white text-capitalize mt-3" htmlFor="choose">Choose collection</label>
                    <p className="form_note">Choose an exiting collection or create a new one</p>
                    <Scrollbars style={{ height: 180 }}>
                  <div className="colct_img_section">
                  <div className="card card_bl_grey mr-2" data-toggle="modal" data-target="#choose_collection_modal">
                    <div className="card-body p-3">
                    <button class="bg_white_icon ml-0 mb-2" type="button"><i class="fas fa-plus"></i></button>
                      <p className="colctn_card_txt mt-2">Create Collection</p>

                    </div>
                  </div>
                  <div className="card card_bl_grey mr-2" data-toggle="modal" data-target="#choose_collection_modal">
                    <div className="card-body p-3">
                    <button className="bg_green_icon ml-0 mb-2" type="button"></button>
                      <p className="colctn_card_txt">Crypto Legend - Professor</p>

                    </div>
                  </div>
                  <div className="card card_bl_grey mr-2" data-toggle="modal" data-target="#choose_collection_modal">
                    <div className="card-body p-3">
                    <button className="bg_pink_icon ml-0 mb-2" type="button"></button>
                      <p className="colctn_card_txt">Crypto Legend - Professor</p>

                    </div>
                  </div>
                  <div className="card card_bl_grey mr-2" data-toggle="modal" data-target="#choose_collection_modal">
                    <div className="card-body p-3">
                    <button className="bg_purple_icon ml-0 mb-2" type="button"></button>
                      <p className="colctn_card_txt">Legend Photography</p>

                    </div>
                  </div>
                  </div>
                  </Scrollbars>
                <div className="d-flex justify-content-between align-items-center pb-3 pt-3">
                  <Button className="create_btn" data-toggle="modal" data-target="#create_item_modal">Create item<i class="fas fa-long-arrow-right pl-2"></i></Button>
                  <span className="text_light_bl">Auto saving<i class="fa fa-spinner ml-2 spinner_icon spin_sm" aria-hidden="true"></i></span>
                  
                </div>
              </form>
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-xl-4 offset-md-1 offset-lg-1 pad_top_create">
              <div className="card card_bl_black my-0 rad_2 item_multiple">
                <div className="card-body p-4 p-xl-5">
                <p class="filter_act_text mb-4">Preview</p>
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
    <p class="lates_tetx font_14 cur_pointer hover_blue mb-0"><i class="fas fa-times-circle mr-2"></i>Clear all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

      {/* Choose Collection Modal */}
      <div class="modal fade primary_modal" id="choose_collection_modal" tabindex="-1" role="dialog" aria-labelledby="choose_collection_modalCenteredLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="choose_collection_modalLabel">Collection</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="d-flex align-items-center">
                <img src={require("../assets/images/img_01.png")} alt="logo" className="img-fluid mr-2"/>
                <div>
                <p class="mt-0 mb-2 banner_desc_ep">We recommend an image of at least 400x400.Gifs work too <span><i class="fas fa-sign-language ml-1"></i></span></p>
                <div className="btn_outline_grey create_btn_lit btn_flex_choose btn_flex_choose d-inline-flex">Upload
                    <input className="inp_file" type="file" name="file" />
                  </div>
                </div>
              </div>
              <form className="mt-4">
                <div className="form-row">
                  <div className="form-group col-md-12 mb-3">
                    <label className="primary_label" htmlFor="name">Display Name <span className="text-muted">(30 available)</span></label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Enter token name"/>
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label className="primary_label" htmlFor="desccription">Symbol <span className="text-muted">(required)</span></label>
                    <input type="text" className="form-control primary_inp" id="desccription" placeholder="Enter token symbol"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 mb-3">
                    <label className="primary_label" htmlFor="name">Description <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control primary_inp" id="name" placeholder="Spread some words about token collection"/>                  
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label className="primary_label" htmlFor="desccription">Short url</label>
                    <input type="text" className="form-control primary_inp" id="desccription" defaultValue="Company/Enter URL"/>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <Button className="create_btn w-100 btn-block">Create Collection</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Create Item Modal */}
      <div class="modal fade primary_modal" id="create_item_modal" tabindex="-1" role="dialog" aria-labelledby="create_item_modalCenteredLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="create_item_modalLabel">Follow Steps</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">                         
              <form> 
              <div className="media approve_media">
                <button className="bg_grey_icon pro_initial d-none" type="button"><i class="fas fa-thumbs-up"></i></button>
                <button className="bg_green_icon pro_complete ml-0 ml-0" type="button"><i class="fas fa-check"></i></button>
                <span className="pro_progress d-none"><Circle percent="30" strokeWidth="8" strokeColor="#6C62FF" /></span>
          <button className="bg_border_red_icon pro_fail d-none" type="button"><i class="fas fa-thumbs-up"></i></button>
                  
                 
                  <div className="media-body ml-3">
                    <p className="mt-0 approve_text">Approve</p>
                    <p className="mt-0 approve_desc">Approve performing transactions with your wallet</p>
                  </div>
                </div>
              <div className="text-center my-3">
              <Button className="create_btn create_btn_lit btn-block d-none">Start now</Button>  
              <Button className="create_btn create_btn_lit btn-block d-none"><i class="fa fa-spinner spinner_icon spin_sm" aria-hidden="true"></i></Button>    

              <Button className="done_btn create_btn_lit btn-block">Done</Button>  
              <Button className="btn_outline_grey fail_btn create_btn_lit btn-block d-none">Failed</Button>                
              <p className="approve_desc text-left my-3 d-none">Something went wrong, please <a className="try_link">try again</a></p>


              </div>
              <div className="media approve_media mt-moda-cus">
                <button className="bg_grey_icon pro_initial" type="button"><i class="fas fa-file-image"></i></button>
                <button className="bg_green_icon pro_complete ml-0 ml-0 d-none" type="button"><i class="fas fa-check"></i></button>
                <span className="pro_progress d-none"><Circle percent="30" strokeWidth="8" strokeColor="#6C62FF" /></span>
          <button className="bg_border_red_icon pro_fail d-none" type="button"><i class="fas fa-file-image"></i></button>
                  
                 
                  <div className="media-body ml-3">
                    <p className="mt-0 approve_text">Upload files & Mint token</p>
                    <p className="mt-0 approve_desc">Call contract method</p>
                  </div>
                </div>
              <div className="text-center my-3">
              <Button className="create_btn create_btn_lit btn-block">Start now</Button> 
              <Button className="create_btn create_btn_lit btn-block d-none"><i class="fa fa-spinner spinner_icon spin_sm" aria-hidden="true"></i></Button>    

              <Button className="done_btn create_btn_lit btn-block d-none">Done</Button> 
              <Button className="btn_outline_grey fail_btn create_btn_lit btn-block d-none">Failed</Button>                
              <p className="approve_desc text-left my-3 d-none">Something went wrong, please <a className="try_link">try again</a></p>

              </div>

              <div className="media approve_media mt-moda-cus">
                <button className="bg_grey_icon pro_initial" type="button"><i class="fas fa-pencil-alt"></i></button>
                <button className="bg_green_icon pro_complete ml-0 ml-0 d-none" type="button"><i class="fas fa-check"></i></button>
                <span className="pro_progress d-none"><Circle percent="30" strokeWidth="8" strokeColor="#6C62FF" /></span>
          <button className="bg_border_red_icon pro_fail d-none" type="button"><i class="fas fa-pencil-alt"></i></button>
                  
                 
                  <div className="media-body ml-3">
                    <p className="mt-0 approve_text">Sign sell order</p>
                    <p className="mt-0 approve_desc">Sign sell order using your wallet</p>
                  </div>
                </div>
              <div className="text-center my-3">
              <Button className="create_btn create_btn_lit btn-block d-none" disabled>Start now</Button>  
              <Button className="create_btn create_btn_lit btn-block"><i class="fa fa-spinner spinner_icon spin_sm" aria-hidden="true"></i></Button>    
             
              <Button className="done_btn create_btn_lit btn-block d-none">Done</Button>   
              <Button className="btn_outline_grey fail_btn create_btn_lit btn-block d-none">Failed</Button>                
              <p className="approve_desc text-left my-3 d-none">Something went wrong, please <a className="try_link">try again</a></p>

              </div>

              <div className="media approve_media mt-moda-cus">
                <button className="bg_grey_icon pro_initial d-none" type="button"><i class="fas fa-lock"></i></button>
                <button className="bg_border_red_icon pro_fail" type="button"><i class="fas fa-lock"></i></button>
                
                <button className="bg_green_icon pro_complete ml-0 ml-0 d-none" type="button"><i class="fas fa-check"></i></button>
                <span className="pro_progress d-none"><Circle percent="30" strokeWidth="8" strokeColor="#6C62FF" /></span>
                  
                 
                  <div className="media-body ml-3">
                    <p className="mt-0 approve_text">Sign lock order</p>
                    <p className="mt-0 approve_desc">Sign lock order using your wallet</p>
                  </div>
                </div>
              <div className="text-center my-3">
              <Button className="create_btn create_btn_lit btn-block d-none" disabled>Start now</Button>
              <Button className="create_btn create_btn_lit btn-block d-none"><i class="fa fa-spinner spinner_icon spin_sm" aria-hidden="true"></i></Button>    

              <Button className="done_btn create_btn_lit btn-block d-none">Done</Button>   
              <Button className="btn_outline_grey fail_btn create_btn_lit btn-block">Failed</Button>                
              <p className="approve_desc text-left my-3 d-none">Something went wrong, please <a className="try_link">try again</a></p>

              </div>
              </form>
            </div>
          </div>
        </div>
        </div>

    </div>
  );
}
