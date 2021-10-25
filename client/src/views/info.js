import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import { Scrollbars } from 'react-custom-scrollbars';
import { Line, Circle } from 'rc-progress';
import { getMoviesById } from "action/movies";
import config from '../lib/config'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return null;
}



export default function Info(props) {
	const classes = useStyles();
	const { ...rest } = props;
	var { id } = useParams();
	const [movie, setMovie] = useState([]);
	window.addEventListener('scroll', function () {
		var elementPosition = document.getElementById('sec_5') && document.getElementById('endtag').offsetTop;
		var endPosition = document.getElementById('endtag') && document.getElementById('endtag').offsetTop;
		if (elementPosition &&  endPosition && window.pageYOffset > elementPosition && window.pageYOffset < (endPosition - 330)) {
		if (document.getElementById('ppy')){
			document.getElementById('ppy').style.position = "fixed";
			document.getElementById('ppy').style.top = "130px";
		}

		} else {
			if (document.getElementById('ppy')){
			document.getElementById('ppy').style.position = "absolute";
			document.getElementById('ppy').style.top = "130px";
			}

		}
	});
	
	useEffect(() => {
		getfunMovieById()
	}, [])
	
	const getfunMovieById = async () => {
		var data = { id };
		var movieLists = await getMoviesById(data);
		if (movieLists && movieLists.list && movieLists.list.status == 200 && movieLists.list.data ) {
			setMovie(movieLists.list.data);
			console.log('>>>>movieListt', movieLists.list.data);
		}
	}

	function hideDetail() {
		document.getElementById("image_div").classList.toggle('expand_img');
		document.getElementById("img_des").classList.toggle('show_des');
		document.getElementById("detai_div").classList.toggle('hide_detail');
		// document.getElementById("arrow_icon").classList.toggle('fa-shrink');

	}	
	function timeConvert(n) {
		var num = n;
		var hours = (num / 60);
		var rhours = Math.floor(hours);
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		return rhours + " hrs " + rminutes + " mins";
	}
	function hideDetailowner() {
		document.getElementById("image_div_owner").classList.toggle('expand_img');
		document.getElementById("img_des_owner").classList.toggle('show_des');
		document.getElementById("detai_div_owner").classList.toggle('hide_detail');
		// document.getElementById("arrow_icon_owner").classList.toggle('fa-shrink');
	}

	function toggleIcon() {
		document.getElementById("myitems_icon_share").classList.toggle('d-flex');

	}

	function toggleIconowner() {
		document.getElementById("myitems_icon_share_owner").classList.toggle('d-flex');

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
			<div className="inner_top_padding">
				<div className="container" id="sec_5">
					{/* info row */}
					<div className="row info_row buyer_div py-5">
						<div className="col-12 col-md-6" id="image_div">

							<div className="flex_center flex_center_start">
								{/* <div className="float-right arrow_expand" onClick={hideDetail}>
		<i class="fas fa-arrows-alt" aria-hidden="true" id="arrow_icon"></i>
		</div>
		<div className="clearfix"></div> */}
								<div className="info_img_sec">
									<div className="img_overlay">
										<div className="d-flex pos_top">
											<span className="badge badge-black-art ml-3">{movie && movie.tagline}</span>
											<span className="badge badge-purple-soon ml-3">{movie && movie.status} {movie &&  movie.status == true && 'Adult'}</span>
										</div>
										<img src={config.imagerootpath + movie.poster_path || movie.backdrop_path} alt="Collections" className="img-fluid info_img" />
									</div>
								</div>
								<div className="img_des" id="img_des">
									<p className="info_title">{movie && movie.original_title}</p>
								</div>
							</div>

						</div>

						<div className="col-12 col-md-5 bg_right_info px-3 px-md-0 mt-4 mt-md-0" id="detai_div">

							<div>
								<div className="px-0 px-md-0">
									<p className="info_title">{movie && movie.original_title}</p>
									<p className="mb-0">
										<span class="badge badge-green-outline mb-2">{movie && timeConvert(movie && movie.runtime)}</span>
										<span class="badge badge-grey-outline mb-2 ml-2">{ movie &&  `IMDB : ${movie.vote_average}`}</span>
										<span className="mt-0 banner_desc_user_grey ml-2 mb-2">{movie && movie.original_language}</span>
										<span className="mt-0 banner_desc_user_grey ml-2 mb-2"><a href={movie && movie.homepage} target="_blank">Watch Now</a></span>
									</p>



								</div>

								<p className="info_des px-0 px-md-0">{movie && movie.overview}</p>
								<Scrollbars style={{ height: 75 }} className="zindex_minus">
									<nav className="masonry_tab_nav mt-4 info_tab_parnt mx-0 mx-md-0">
										<div className="nav nav-tabs masonry_tab home_masonary_tab" id="nav-tab" role="tablist">
											<a className="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Available Language </a>
											<a className="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">History</a>
										</div>
									</nav>
								</Scrollbars>

								<div className="tab-content explore_tab_content mt-2 px-0 px-md-0" id="nav-tabContent">
									<div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
										<div className="proposal_panel_overall">
											<Scrollbars style={{ height: 240 }} className="zindex_minus">
												<div className="inner_div_info">
													{
														movie && movie.spoken_languages && movie.spoken_languages.map((list,index) => 
														<div className="media follow_media info_media">
														<div className="img_medi_sec_new mr-3">
															<img src={require("../assets/images/lang.png")} alt="User" className="img-fluid" />
														</div>
														<div className="media-body flex_body">
															<div>
																<p className="mt-0 media_num">{list.english_name}</p>
															</div>
														</div>
													</div>
														)
													}
												</div>
											</Scrollbars>

										</div>
									</div>
									
									<div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
										<div className="proposal_panel_overall">
											<Scrollbars style={{ height: 240 }} className="zindex_minus">
												<div className="inner_div_info">
													{
														movie && movie.production_companies && movie.production_companies.map((list,index) => 
														<div className="media follow_media info_media">
														<div className="img_medi_sec_new mr-3">
															<img src={config.imagerootpath + list.logo_path} alt="NoIMG" className="img-fluid" />
														</div>
														<div className="media-body flex_body">
															<div>
																<p className="mt-0 media_num">{list.name}</p>
															</div>
														</div>
													</div>
														)
													}

												</div>
											</Scrollbars>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
					
				</div>

				<p id="endtag"></p>
			</div>
		</div>
	);
}
