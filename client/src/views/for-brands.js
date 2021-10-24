import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styled from "../../node_modules/styled-components";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const Icon = styled(props => (
  <div {...props}>
    <div className="minus"><i class="fas fa-chevron-down"></i></div>
    <div className="plus"><i class="fas fa-chevron-up"></i></div>
  </div>
))`
  & > .plus {
    display: block;
    color: #777E90;
    font-size: 14px;
    transform: rotate(180deg);
  }
  & > .minus {
    display: none;
    color: #777E90;
    font-size: 14px;
    
  }
  .Mui-expanded & > .minus {
    display: flex;
    
  }
  .Mui-expanded & > .plus {
    display: none;
   
  }
 
`;

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
  const [expanded, setExpanded] = React.useState('panel1');
  const [expanded1, setExpanded1] = React.useState('panel6');
  const [expanded2, setExpanded2] = React.useState('panel9');
  const [expanded3, setExpanded3] = React.useState('panel12');

  const handleChangeFaq = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangeFaq1 = (panel) => (event, isExpanded) => {
    setExpanded1(isExpanded ? panel : false);
  };
  const handleChangeFaq2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };
  const handleChangeFaq3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };

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
      <div className="inner_top_padding">
     
        <div className="container my-faq-1">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
            <p class="lates_tetx font_12  text-uppercase">Learn how to get started</p>
        <p className="title_text_white mb-3 line_h_40_p_x faq_tetx_big">Frequently Asked Questions</p>
        <p class="lates_tetx font_14">Jion stacks community now to get free updates and also alot of freebies are waiting for you or 
        <span>
          <a href="#" className="purple_a pl-1">Contact support</a>
        </span>
        </p>
            </div>
          </div>
       
          <div className="row pt-3 pb-0">
            <div className="col-12 col-md-4 col-lg-4">
            <nav className="masonry_tab_nav mt-3 mt-md-3 nav_vertical">
              <div className="nav nav-tabs masonry_tab home_masonary_tab px-0" id="nav-tab" role="tablist">
                <a className="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">
                  <i class="fas fa-home mr-3"></i>General</a>
                <a className="nav-link" id="support-tab" data-toggle="tab" href="#support" role="tab" aria-controls="support" aria-selected="false">
                <i class="fas fa-comments mr-3"></i>Support
                  </a>
                <a className="nav-link" id="hosting-tab" data-toggle="tab" href="#hosting" role="tab" aria-controls="hosting" aria-selected="false">
                <i class="fas fa-bolt mr-4"></i> Hosting
                  </a>
                <a className="nav-link" id="product-tab" data-toggle="tab" href="#product" role="tab" aria-controls="product" aria-selected="false">
                <i class="fas fa-box-open mr-3"></i>Product</a>
                
              </div>
            </nav>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
            <div className="tab-content explore_tab_content my-4" id="nav-tabContent">
            <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
           <hr className="hr_grey" />
            <div className="faq_panel">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeFaq('panel1')} className="mt-5">
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel1bh-content" id="panel1bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How does it work</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in  Reatc Native. Mix-and-match dozens of responsive elements to quickly configure your favourite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</p>
                      <Button className="btn_outline_grey my-3">
                      Learn more
                    </Button>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChangeFaq('panel2')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel2bh-content" id="panel2bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How to start with Stacks</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChangeFaq('panel3')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel3bh-content" id="panel3bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>Does it support Dark Mode</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChangeFaq('panel4')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel4bh-content" id="panel4bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>Does it support Auto-Layout</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChangeFaq('panel5')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel5bh-content" id="panel4bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>What is Stacks Design System</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

               
              </div>
            </div>
            <div className="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
            <hr className="hr_grey" />
            <div className="faq_panel">
                <Accordion expanded={expanded1 === 'panel6'} onChange={handleChangeFaq1('panel6')} className="mt-5">
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel6bh-content" id="panel6bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How does it work</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in  Reatc Native. Mix-and-match dozens of responsive elements to quickly configure your favourite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</p>
                      <Button className="btn_outline_grey my-3">
                      Learn more
                    </Button>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded1 === 'panel7'} onChange={handleChangeFaq1('panel7')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel7bh-content" id="panel7bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How to start with Stacks</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded1 === 'panel8'} onChange={handleChangeFaq1('panel8')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel8bh-content" id="panel8bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>Does it support Dark Mode</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                

               
              </div>
            </div>
            <div className="tab-pane fade" id="hosting" role="tabpanel" aria-labelledby="hosting-tab">
            <hr className="hr_grey" />
            <div className="faq_panel">
                <Accordion expanded={expanded2 === 'panel9'} onChange={handleChangeFaq2('panel9')} className="mt-5">
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel9bh-content" id="panel9bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How does it work</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in  Reatc Native. Mix-and-match dozens of responsive elements to quickly configure your favourite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</p>
                      <Button className="btn_outline_grey my-3">
                      Learn more
                    </Button>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded2 === 'panel10'} onChange={handleChangeFaq2('panel10')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel10bh-content" id="panel10bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How to start with Stacks</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded2 === 'panel11'} onChange={handleChangeFaq2('panel11')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel11bh-content" id="panel11bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>Does it support Dark Mode</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                

               
              </div>
            </div>
            <div className="tab-pane fade" id="product" role="tabpanel" aria-labelledby="product-tab">
            <hr className="hr_grey" />
            <div className="faq_panel">
                <Accordion expanded={expanded3 === 'panel12'} onChange={handleChangeFaq3('panel12')} className="mt-5">
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel12bh-content" id="panel12bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How does it work</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in  Reatc Native. Mix-and-match dozens of responsive elements to quickly configure your favourite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."</p>
                      <Button className="btn_outline_grey mt-3">
                      Learn more
                    </Button>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded3 === 'panel13'} onChange={handleChangeFaq3('panel13')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel13bh-content" id="panel13bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>How to start with Stacks</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded3 === 'panel14'} onChange={handleChangeFaq3('panel14')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel14bh-content" id="panel14bh-header" className="summary_pad">
                    <div className="accordian_head"><h2>Does it support Dark Mode</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                

               
              </div>
            </div>
            </div>
         
            </div>
          </div>
          
        </div>

        {/* Explore Section */}
        <section className="bid_section section pt-0 pb_faq_sec_scrol">
          <div className="container px-3 px-md-3 px-xl-3">
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

            <img src={require("../assets/images/nature_4.jpg")} class="img_hover img-fluid img_radius" alt="Shape"/>
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

            <img src={require("../assets/images/collection_03.png")} class="img_hover img-fluid img_radius" alt="Shape"/>
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
      </div>
      <Footer/>
    </div>
  );
}
