var React = require('react');

function CurrentWeather (props) {
	return props.temperatureScale === "Celcius"
		? <div className="CurrentWeather">
			{ props.city }
			<br />
			{ props.temperature.Celcius + String.fromCharCode(176) + ' C' }
			<br />
			<i className={'wi wi-owm-' + props.weather.id}></i>
			{ props.weather.description }
		 </div>
		: <div className="CurrentWeather">
		 	{ props.city }
		 	<br />
			{ props.temperature.Fahrenheit + String.fromCharCode(176) + ' F'}
			<br />
			<i className={'wi wi-owm-' + props.weather.id}></i>
			{ props.weather.description }
		 </div>
}

module.exports = CurrentWeather;