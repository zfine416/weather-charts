var React = require('react');
var Weather = require('../components/Weather');
var weatherHelper = require('../utils/weatherHelpers');

var WeatherContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			temperatureScale: 'Celcius'
		}
	},
	componentDidMount: function() {
		var city = this.props.routeParams.city;
		weatherHelper.zipCity(city)
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
	render: function() {
		return (
			<Weather 
				isLoading={this.state.isLoading} 
				weatherData={this.state.weatherData}
				temperatureScale={this.state.temperatureScale}
				changeTempScale={this.changeTempScale}/>
		)
	}
});

module.exports = WeatherContainer;