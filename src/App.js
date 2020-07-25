import React from "react";
import "./UIKit/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "pages/MainPage/MainPage";
import { StylesProvider } from "@material-ui/core";

const App = () => {
	return (
		<StylesProvider injectFirst={true}>
			<Router>
				<Switch>
					<Route path="/" exact>
						<MainPage />
					</Route>
					<Route path="*"> page not found</Route>
				</Switch>
			</Router>
		</StylesProvider>
	);
};

export default App;
