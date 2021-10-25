import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import Myitems from "views/my-items.js";
import Signup from "views/signup";
import Signin from "views/signin";
import Info from 'views/info';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
	<BrowserRouter basename="/" >
		<Switch>
			<Route path="/my-items" component={Myitems} />
			<Route path="/home" component={Myitems} />
			<Route path="/signup" component={Signup} />
			<Route path="/signin" component={Signin} />
			<Route path="/info/:id" component={Info} />
			<Route exact path="/*" component={Myitems}>
			<Redirect to="/my-items" />
			</Route>
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
