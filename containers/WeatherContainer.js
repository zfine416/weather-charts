var React = require('react');
var Weather = require('../components/Weather');
var weatherHelper = require('../utils/weatherHelpers');

var WeatherContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			temperatureScale: 'Celcius',
			city: this.props.routeParams.city,
			highColor: "#FF0000",
			lowColor: "#0000FF"
		}
	},
	componentDidMount: function() {
		weatherHelper.zipCity(this.state.city)
			.then(function(response) {
				weatherHelper.addData(response.data.list);
				this.setState({
					isLoading: false,
					weatherData: response.data
				})
			}.bind(this))
	},
	updateCityState: function(e) {
		this.setState({
			city: e.target.value
		})
	},
	renderNewCityData: function(e) {
		weatherHelper.zipCity(this.state.city)
			.then(function(response) {
				weatherHelper.addData(response.data.list);
				this.setState({
					isLoading: false,
					weatherData: response.data
				})
			}.bind(this))
	},
	changeTempScale: function(e) {
		(e.target.innerHTML.substr(0,10) === "Fahrenheit")
			? this.setState({
				temperatureScale: 'Celcius'
			})
			: this.setState({
				temperatureScale: 'Fahrenheit'
			})
	},
	changeHighColor: function(e) {
		this.setState({
			highColor: e.target.value
		})
	},
	changeLowColor: function(e) {
		this.setState({
			lowColor: e.target.value
		})
	},
	render: function() {
		return (
			<Weather 
				isLoading={this.state.isLoading} 
				weatherData={this.state.weatherData}
				temperatureScale={this.state.temperatureScale}
				highColor={this.state.highColor}
				lowColor={this.state.lowColor}
				changeTempScale={this.changeTempScale}
				updateCityState={this.updateCityState}
				renderNewCityData={this.renderNewCityData}
				changeHighColor={this.changeHighColor}
				changeLowColor={this.changeLowColor}/>
		)
	}
});

module.exports = WeatherContainer;