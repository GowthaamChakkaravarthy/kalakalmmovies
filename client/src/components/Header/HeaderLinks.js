/*eslint-disable*/
import React from "react";
import { Notifications, AccountBalanceWallet } from '@material-ui/icons';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import { Scrollbars } from 'react-custom-scrollbars';
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();

	const toggletheme = () => {

		document.getElementById("root").classList.toggle('light_theme');
		var usebody = document.getElementsByClassName("mobile_nav");
		for (var j = 0; j < usebody.length; j++) {
			usebody[j].classList.toggle('light_theme')
		}


	};
	const toggleUsermenu = () => {
		var useclass = document.getElementsByClassName("usemneu_dd");
		for (var i = 0; i < useclass.length; i++) {
			useclass[i].classList.toggle('d-none')
		}




	}

	const toggleSearchmenu = () => {
		var useclass = document.getElementsByClassName("searchmneu_dd");
		for (var i = 0; i < useclass.length; i++) {
			useclass[i].classList.toggle('d-none')
		}




	}
	return (
		<List className={classes.list + " main_navbar"}>


			<ListItem className={classes.listItem}>
				<Link className={classes.navLink} to="/Discover">Discover</Link>
			</ListItem>
			<ListItem className={classes.listItem + " menu_dropdown dropdown_header_ul user_dd_ul ml-3"} onClick={toggleUsermenu}>
				{/* <img src={require("../../assets/images/user_01.png")} alt="User" className="img-fluid user_header" /> */}
				<div className="noti_parent noti_parnt_user usemneu_dd d-none" id="usemneu_dd">
					<p className="noti_head pt-4 mb-0">
						<span>Enrico Cole</span>
					</p>
					<div className="px-3">
						<p className="info_des">oxc4c16ab5ac7d...b21a<i className="fas fa-sticky-note notes_fa"></i></p>
						<div className="media header_media pt-0">
							<img src={require("../../assets/images/netflix.png")} alt="User" className="img-fluid mr-3 coin_header" />
							<div className="media-body flex_body">
								<div>
									<p className="mt-0 media_num">Balance</p>
									<p className="balance_txt_header pt-0 mb-0">
										<span>4.689 ETH</span>
									</p>

								</div>

							</div>
						</div>
						<Button className="btn_outline_grey my-3 font_12 btn-block">Manage fund on Coinbase</Button>

						<ul className="user_prof_ul">
							<li><Link to="/edit-profile"><span><i class="fas fa-user mr-2"></i>My profile</span></Link></li>
							<li><Link to="/my-items"><span><i class="fas fa-file-image mr-2"></i>My items</span></Link></li>
							<li className="swithcj_li">
								<div className="d-flex justify-content-between align-items-center heade_switch">
									<div>
										<span className="hsder_ul_spn"><i class="fas fa-lightbulb mr-2"></i>Dark theme</span>
									</div>
									<label className="switch toggle_custom">
										<input type="checkbox" onChange={toggletheme} />
										<span className="slider"></span>
									</label>
								</div>

							</li>
							<li><Link to="/home"><span><i class="fas fa-sign-out-alt mr-2"></i>Disconnect</span></Link></li>
						</ul>
					</div>
				</div>
			</ListItem>
		</List>
	);
}
