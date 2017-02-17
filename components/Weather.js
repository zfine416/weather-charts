var React = require('react');
var Main = require('./Main');
var CurrentWeather = require('./CurrentWeather')
import { VictoryLine, VictoryChart, VictoryBar, VictoryArea } from 'victory';
var PropTypes = React.PropTypes;

function Weather (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div> 
			<div className="entry" id="CurrentWeather">
				<h4>
					<CurrentWeather
						city={props.weatherData.city.name} 
						temperature={props.weatherData.list[0].temp}
						temperatureScale={props.temperatureScale}
						weather={props.weatherData.list[0].weather[0]} />
				</h4>
				<button className="waves-effect waves-light btn-large valign metric" onClick={props.changeTempScale}>{props.temperatureScale}</button>
			</div>
			<div className="entry" id="NewCity">
				<div className="half">

					<h5>Enter New City:</h5>
					<input onChange={props.updateCityState}/>
					<button className="waves-effect waves-light btn-large valign" onClick={props.renderNewCityData}>Change!</button>
				</div>
			</div>
			<div className="entry">
				<div>
					<h6>High <input type="color" name="favcolor" value={props.highColor} onChange={props.changeHighColor}/></h6>
					<h6>Low  <input type="color" name="favcolor" value={props.lowColor} onChange={props.changeLowColor}/></h6>
				</div>
					<VictoryChart>
						<VictoryArea name="max"
							animate={{duration: 1000, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})}}}
							data={props.weatherData.list}
							x="newDate"
							y={"temp.max" + props.temperatureScale}
							style={{ data: {fill: props.highColor, opacity: 0.8}, labels: {fontSize: 12} }}
						/>
						<VictoryArea name="min"
							animate={{duration: 1500, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})}}}
							label="Min"
							data={props.weatherData.list}
							x="newDate"
							y={"temp.min" + props.temperatureScale}
							style={{
								data: {fill: props.lowColor, opacity: 0.7},
								labels: {fontSize: 12}
							}} />
					
				</VictoryChart>
				
			</div>
			<div className="entry">
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
		
}

Weather.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	weatherData: PropTypes.object,
	highColor: PropTypes.string,
	lowColor: PropTypes.string,
	temperatureScale: PropTypes.string.isRequired,
	changeTempScale: PropTypes.func.isRequired,
	updateCityState: PropTypes.func.isRequired,
	renderNewCityData: PropTypes.func.isRequired,
	changeHighColor: PropTypes.func.isRequired,
	changeLowColor: PropTypes.func.isRequired
}

module.exports = Weather;

