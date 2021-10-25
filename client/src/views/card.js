import React, { useEffect, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import config from '../lib/config'
import { Link } from "react-router-dom";
export default function Card(props) {

	var { item } = props;
	return (
		<div className="col-12 col-md-6 col-lg-4 mb-4">
			<div>
				<div className="img_overlay">
					<div className="d-flex justify-content-between pos_top">
					</div>
					<div className="text-center pos_bot">
						<Button className="create_btn"><span className="font_12">Add favourites</span><i class="fas fa-heart"></i></Button>
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