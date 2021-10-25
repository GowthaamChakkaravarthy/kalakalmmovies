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
import { Link , useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
import config from '../lib/config';
import { login } from "action/movies";
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

export default function EditProfile(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const [post, setPost] = useState({});
	const [message, setMessage] = useState();
	const history = useHistory();
	// useEffect(()=>{
		
	// },[])
	const funlogin = async () => {
		var data = await login(post);
		console.log('registerdata>>>',data);
		if (data && data.resp && data.resp.data && data.resp.data.success && data.resp.data.success == false) {
			setMessage(data.resp.data.message);
			toast.warning(data.resp.data.message,toasterOption);
			setPost({});
		} else if (data && data.resp && data.resp.data && data.resp.data.success && data.resp.data.success == true){
			if (data.resp.data.data) {
				console.log('registerdata>>>',data.resp.data.data);
				toast.warning('Login Successfully',toasterOption);
				localStorage.setItem("userData", data.resp.data.data[0].email);
				history.push('/home');
				setPost({});
			}else {
				toast.warning(data.resp.data.message,toasterOption);
				setPost({});
			}
		}
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

				<div className="container">
					<div className="row pt-4 pb-2">
						<div className="col-12 col-md-4">
							<Button className="btn_outline_grey">
								<i class="fas fa-arrow-left mr-2"></i>Back to profile
							</Button>
						</div>
						<div className="col-12 col-md-8 float-md-right flex_end_center">
							<h5 class="bread_crumb mb-0 text-md-right mt-0">
								<span>
									<Link to="/home" className="breadcrumb_link"><span>Profile</span></Link>
								</span>
								<span><i class="fa fa-angle-right mx-3"></i></span>
								<span>Sign in</span>
							</h5>
						</div>
					</div>
				</div>
				<hr className="hr_grey"></hr>
				<div className="container my-5">
					<div className="row edit_prof_mar_top">
						<div className="col-12 col-md-10 col-xl-9 mx-auto">
							<h2 className="title_text_white mb-2">Sign in here</h2>
							<div className="row mt-5 pt-3">

								<div className="col-12 col-lg-6 mt-5 mt-lg-0 col_lg_edit_prof">

									<form>
										
										<div className="form-group mb-12">
											<label className="primary_label" htmlFor="name">Email</label>
											<input 
												type="text" 
												className="form-control primary_inp" 
												id="email" 
												defaultValue="example@netflix.com" 
												onChange={e => setPost({ ...post, email: e.target.value })}/>
										</div>
										
										<div className="form-group mb-12">
											<label className="primary_label" htmlFor="name">Password</label>
											<input 
												type="password" 
												className="form-control primary_inp" 
												id="password"  
												onChange={e => setPost({ ...post, password: e.target.value })}/>
										</div>

										<div className="mt-msg-ep">
											<div className="d-flex align-items-center">
												<Button className="primary_btn" onClick={() => funlogin()}>Signin</Button>
												<p className="lates_tetx font_14 cur_pointer hover_blue ml-3 mb-0"><Link to ='/signup'>Create New</Link></p>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
}
