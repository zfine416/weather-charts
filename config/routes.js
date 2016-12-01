var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var WeatherContainer = require('../containers/WeatherContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='weather/:city' component={WeatherContainer} />
		</Route>
	</Router>
)

module.exports = routes;
