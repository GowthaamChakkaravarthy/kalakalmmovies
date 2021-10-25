import React, { useEffect, useState } from "react";
import axios from 'axios';
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
import { Line, Circle } from 'rc-progress';
import { getMovies } from "action/movies";
import Card from "./card";
import { getFavourite } from "action/movies";
import { addFavourite } from "action/movies";
import { toast } from 'react-toastify';
import config from '../lib/config';
import { login } from "action/movies";
import { removFavourite } from "action/movies";
toast.configure();
let toasterOption = config.toasterOption;
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return null;
}

export default function Myitems(props) {
	const classes = useStyles();
	var userdata = null;
	const { ...rest } = props;
	const [movies, setMovies] = useState([]);
	const [sortby, setSortBy] = useState('popular');
	const [page, setPage] = useState(1);
	const [loader,showLoader] = useState(false);
	function toggleIcon() {
		document.getElementById("myitems_icon_share").classList.toggle('d-flex');
	}

	if(localStorage.getItem('userData')){
		userdata = localStorage.getItem('userData')
	}
	useEffect(() => {
		getAllMovies();
	}, [sortby,page]);

	const getAllMovies = async () => {
		showLoader(true)
		var data = { sortby,page };
		var movieLists = await getMovies(data);
		if (movieLists && movieLists.list && movieLists.list.status == 200 && movieLists.list.data && movieLists.list.data.results) {
			console.log('>>>>movieLists', movieLists.list.data.results);
			setMovies(movieLists.list.data.results);
			showLoader(false);
		}
	}
	const getFavouriteMovies = async () => {
		showLoader(true)
		var movieLists = await getFavourite();
		console.log('>>>>movieLists', movieLists.resp.data.list);
		if (movieLists && movieLists.resp && movieLists.resp.data && movieLists.resp.data.list) {
			setMovies(movieLists.resp.data.list);
			showLoader(false);
		}
	}
	const addtoFavourite = async (payload) => {
		var favourites = await addFavourite(payload);
		console.log('>>>>movieLists', favourites.resp.data.message);
		if (favourites && favourites.resp && favourites.resp.data && favourites.resp.data.success == true) {
			// if (favourites.resp.data.list) {
			// 	setMovies(favourites.resp.data.list);
			// }
			toast.success(favourites.resp.data.message || 'Successfully Added',toasterOption);
		}
	}
	const rmvFavourite = async (payload) => {
		var rmfavourites = await removFavourite(payload);
		if (rmfavourites && rmfavourites.resp && rmfavourites.resp.data && rmfavourites.resp.data.success == true) {
			console.log('>>>>rmlists', rmfavourites.resp.data.message);
			toast.success(rmfavourites.resp.data.message || 'Successfully Removed',toasterOption);
			getFavouriteMovies();
		}
	}
	const setFilter = async (filter) => {
		setSortBy(filter);
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
			<ScrollToTopOnMount />
			<div className={classes.pageHeader + " items_header"}>
				<div>

					<div className="items_bg">
						<img src={require("../assets/images/wallpaper.jpg")} alt="profile" className="img-fluid" />
						<div className="container edit_cover_container">
						</div>
						{/* <div className="clearfix"></div> */}
					</div>

				</div>
				<div>

					<div className="container px-0">

						<div className="row w-100 mx-0 pb-5">
							<div className="col-12 col-md-4 col-lg-3 mt_minus_myitems">
								<div class="card card_bl_grey my-0 rad_2 border-0 mb-5">
									<div class="card-body py-4">
										<div className="item_prof mb-4 mt-2">
											<div className="items_profile">
												<img src={require("../assets/images/myitems-profile.png")} alt="profile" className="img-fluid" />
											</div>
										</div>
										<div className="text-center">
											<p className="filter_act_text mb-2">Welcome {userdata && userdata || "Guest"}</p>

											
											
											{/* <div className="d-flex py-4 justify-content-center">
												<button className="create_btn flex_btn">Follow</button>
												<button class="bg_red_icon" type="button" onClick={toggleIcon}>
													<i class="fas fa-upload"></i>
												</button>
												<div class="dropdown">
													<button class="bg_red_icon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														<i class="fas fa-ellipsis-h"></i>
													</button>
													<div class="dropdown-menu dd_report" aria-labelledby="dropdownMenuButton">
														<a class="dropdown-item" href="#" data-toggle="modal" data-target="#report_page_modal">Report Page</a>
													</div>
												</div>
											</div>
											<div className="myitems_icon_share align-items-center justify-content-center mt-4 mb-5" id="myitems_icon_share">
												<i class="fab fa-twitter mr-3"></i>
												<i class="fab fa-instagram mr-3"></i>
												<i class="fab fa-facebook-f"></i>
											</div>
											<hr className="hr_grey" />
											<p className="lates_tetx font_12 mb-0 mt-5">Member since Mar 15, 2021</p> */}

										</div>
									</div>
								</div>

							</div>
							<div className="col-12 col-md-8 col-lg-9 mt-itmes-tab">
								<Scrollbars style={{ height: 75 }}>

									<nav className="masonry_tab_nav">
										<div className="nav nav-tabs masonry_tab home_masonary_tab pl-0" id="nav-tab" role="tablist">
											<a className="nav-link active" id="onsale-tab" data-toggle="tab" href="#onsale" role="tab" aria-controls="onsale" onClick={() => {setFilter('popular') 
										setPage(1)}} aria-selected="true">
												Popular
											</a>
											<a className="nav-link" id="collectibles-tab" data-toggle="tab" href="#collectibles" role="tab" aria-controls="collectibles" onClick={() => {setFilter('latest')
										      setPage(1)}} aria-selected="false">
												Latest
											</a>
											{
											userdata && 
												<a className="nav-link" id="liked-tab" data-toggle="tab" href="#liked" role="tab" aria-controls="liked" aria-selected="false" onClick={() => getFavouriteMovies()}>
													Favourites
												</a>
											}
										</div>
									</nav>


								</Scrollbars>
								<div className="tab-content explore_tab_content mt-2" id="nav-tabContent">
									<div className="tab-pane fade show active" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
										<div className="proposal_panel_overall">
											<div className="text-center py-2">
												<div className="row">
													{
														movies && movies.map((item , index)=> 
														<div className="col-12 col-md-6 col-lg-4 mb-4">
														<div>
															<div className="img_overlay">
																<div className="d-flex justify-content-between pos_top">
																</div>
																<div className="text-center pos_bot">
																	<Button className="create_btn" onClick={() => addtoFavourite(item)}><span className="font_12">Add favourites</span><i class="fas fa-heart"></i></Button>
																</div>
																<Link to = {`/info/${item.id}`}>
																	<div className="img_col_md">
																		<img src={config.imagerootpath + item.poster_path || item.backdrop_path} class="img-fluid img_radius" alt="Shape" />
																	</div>
																</Link>
															</div>
															<div className="media mt-3">
											
																<div className="media-body flex_body">
																	<div>
																		<p className="mt-0 banner_desc_user">{item.title}</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
														)
													}
												</div>
												{/* <div className="text-center py-3">
													<button className="create_btn" onClick={() => setPage(page + 1)}> Load More {loader == true && <i class="fa fa-spinner ml-2 spinner_icon spin_lg" aria-hidden="true"></i> }  </button>
												</div> */}
											</div>
											{
												movies.length == 0 && 
												<div className="text-center py-3">
													<p className="not_found_text">No items found</p>
												</div>
											}	
										</div>
									</div>
									<div className="tab-pane fade" id="collectibles" role="tabpanel" aria-labelledby="collectibles-tab">
										<div className="proposal_panel_overall">
											{/* <div className="text-center py-3">
												<p className="not_found_text">No items found</p>
												<p className="not_found_text_sub">Come back soon! Or try to browse something for you on our marketplace</p>
												<div className="mt-3">
													<Button className="create_btn">Browse Marketplace</Button>
												</div>
											</div> */}
											<div className="text-center py-2">
												<div className="row">
													{
														movies && movies.map((item , index)=> 
														<div className="col-12 col-md-6 col-lg-4 mb-4">
														<div>
															<div className="img_overlay">
																<div className="d-flex justify-content-between pos_top">
																</div>
																<div className="text-center pos_bot">
																	<Button className="create_btn" onClick={() => addtoFavourite(item)}><span className="font_12">Remove favourites</span><i class="fas fa-heart"></i></Button>
																</div>
																<Link to = {`/info/${item.id}`}>
																	<div className="img_col_md">
																		<img src={config.imagerootpath + item.poster_path || item.backdrop_path} class="img-fluid img_radius" alt="Shape" />
																	</div>
																</Link>
															</div>
															<div className="media mt-3">
											
																<div className="media-body flex_body">
																	<div>
																		<p className="mt-0 banner_desc_user">{item.title}</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
														)
													}
												</div>
												<div className="text-center py-3">
													<button className="create_btn" onClick={() => setPage(page + 1)}> Load More {loader == true && <i class="fa fa-spinner ml-2 spinner_icon spin_lg" aria-hidden="true"></i> }  </button>
												</div>
											</div>
											{
												movies.length == 0 && 
												<div className="text-center py-3">
													<p className="not_found_text">No items found</p>
												</div>
											}
										</div>
									</div>

									<div className="tab-pane fade" id="liked" role="tabpanel" aria-labelledby="liked-tab">
										<div className="proposal_panel_overall">
										<div className="text-center py-2">
												<div className="row">
													{
														movies && movies.map((item , index)=> 
														<div className="col-12 col-md-6 col-lg-4 mb-4">
														<div>
															<div className="img_overlay">
																<div className="d-flex justify-content-between pos_top">
																</div>
																<div className="text-center pos_bot">
																	<Button className="create_btn" onClick={() => {rmvFavourite(item)
																		getFavourite()}}>
																			<span className="font_12">Remove favourites</span><i class="fas fa-heart"></i></Button>
																</div>
																<Link to = {`/info/${item.id}`}>
																	<div className="img_col_md">
																		<img src={config.imagerootpath + item.poster_path || item.backdrop_path} class="img-fluid img_radius" alt="Shape" />
																	</div>
																</Link>
															</div>
															<div className="media mt-3">
											
																<div className="media-body flex_body">
																	<div>
																		<p className="mt-0 banner_desc_user">{item.title}</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
														)
													}
												</div>
												<div className="text-center py-3">
													<button className="create_btn" onClick={() => setPage(page + 1)}> Load More {loader == true && <i class="fa fa-spinner ml-2 spinner_icon spin_lg" aria-hidden="true"></i> }  </button>
												</div>
											</div>
											{
												movies.length == 0 && 
												<div className="text-center py-3">
													<p className="not_found_text">No items found</p>
												</div>
											}
										</div>
									</div>

									
									
								</div>

							</div>
						</div>

					</div>

				</div>

			</div>
		</div>
	);
}
