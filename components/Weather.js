var React = require('react');
var Main = require('./Main');
var CurrentWeather = require('./CurrentWeather')
import { VictoryLine, VictoryChart, VictoryBar, VictoryArea } from 'victory';

function Weather (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div> 
			<div className="row">
				<div className="col s12 m6 l6">
					<h4>
					<CurrentWeather
						city={props.weatherData.city.name} 
						temperature={props.weatherData.list[0].temp}
						temperatureScale={props.temperatureScale}
						weather={props.weatherData.list[0].weather[0]} />
					</h4>
				</div>
				<div className="center pad-top">Displaying as:</div>
					<br />
				<div className="col s12 m6 l6 xl6 valign-wrapper button-container">

					<button className="waves-effect waves-light btn-large valign" onClick={props.changeTempScale}>{props.temperatureScale}</button>
				</div>
			</div>
			<hr className="mobile-display"/>
			<div className="row">
				<div className="col s12 m6 l6">
				<h5 className="center">High vs Low</h5>
					<VictoryChart>
						<VictoryArea name="max"
							animate={{duration: 1000, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})}}}
							data={props.weatherData.list}
							x="newDate"
							y={"temp.max" + props.temperatureScale}
							style={{
								data: {fill: "red", opacity: 0.8},
								labels: {fontSize: 12}
							}}
						/>
						<VictoryArea name="min"
							animate={{duration: 1500, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})}}}
							label="Min"
							data={props.weatherData.list}
							x="newDate"
							y={"temp.min" + props.temperatureScale}
							style={{
								data: {fill: "blue", opacity: 0.7},
								labels: {fontSize: 12}
							}} />
					
				</VictoryChart>
				
				</div>
				<hr className="mobile-display"/>
				<div className="col s12 m6 l6">
				<h5 className="center">Cloud Coverage</h5>
					<VictoryChart
						domainPadding={30}>
						<VictoryBar
							animate={{duration: 2000, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})}}}
							data={props.weatherData.list}
							x="newDate"
							y="clouds"
							style={{
								data: {fill: "blue", width: 40}
							}} />
					</VictoryChart>
					
				</div>
			</div>
				
		</div>
		
}

module.exports = Weather;

