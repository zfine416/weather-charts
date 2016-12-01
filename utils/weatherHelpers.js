var axios = require('axios');
var moment = require('moment-timezone');

var binary = '01100001 01110000 01110000 01101001 01100100 00111101 01100011 00110111 00110000 00111000 00110001 00110011 01100110 01100011 01100010 00110100 01100110 00111000 00111000 00110001 00110011 00110111 01100001 01100101 01100001 00110000 00110010 01100100 00110100 00110110 01100011 01100100 01100011 00110010 00110000 00110110 00110100 01100110';

function binaryAgent(str) {
	var conjoin = '00100110 ' + str;
	var binString = '';

	conjoin.split(' ').map(function(bin) {
	    binString += String.fromCharCode(parseInt(bin, 2));
	  });
	return binString;
}

function getCityData (city) {
	return axios.get('api.openweathermap.org/data/2.5/forecast/daily?q=' + city + binaryAgent(binary));
}

function getZipData (city) {
	return axios.get('api.openweathermap.org/data/2.5/forecast/daily?zip=' + city + binaryAgent(binary));
}

function getF(temp) {
	return Math.round((temp * 9/5 - 459.67) * 100) / 100;
}

function getC(temp) {
	return Math.round((temp - 273.15) * 100) / 100;
}


function uppercaseDescription (des) {
	return des.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getDateTime(date) {
	var dateFormat = moment(date * 1000);
	return (dateFormat.format('M/D'))
}

var helpers = {
	zipCity: function (input) {
		return isNaN(parseInt(input)) ? getCityData(input) : getZipData(input) 
	},
	addData: function (data) {
		return data.map(function(weather) {
			weather.weather[0].description = uppercaseDescription(weather.weather[0].description);
			weather.temp.Fahrenheit = getF(weather.temp.day);
			weather.temp.Celcius = getC(weather.temp.day);
			weather.newDate = getDateTime(weather.dt);
			weather.temp.maxCelcius = getC(weather.temp.max);
			weather.temp.minCelcius = getC(weather.temp.min);
			weather.temp.maxFahrenheit = getF(weather.temp.max);
			weather.temp.minFahrenheit = getF(weather.temp.min);
		})
	}
}

module.exports = helpers;
