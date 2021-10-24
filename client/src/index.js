import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import Myitems from "views/my-items.js";
import Editprofile from "views/edit-profile";
import Info from 'views/info';
ReactDOM.render(
	<BrowserRouter basename="/" >
		<Switch>
			<Route path="/my-items" component={Myitems} />
			<Route path="/home" component={Myitems} />
			<Route path="/edit-profile" component={Editprofile} />
			<Route path="/info/:id" component={Info} />
			<Route exact path="/*" component={Myitems}>
			<Redirect to="/my-items" />
			</Route>
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
