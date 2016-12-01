var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			city: '',
		}
	},
	handleUpdateCity: function(e) {
		this.setState({
			city: e.target.value
		})
	},
	handleSubmitCity: function(e) {
		this.context.router.push('weather/' + this.state.city)
	},
	render: function() {
		return (
			<Home 
				onUpdateCity={this.handleUpdateCity} 
				onSubmitCity={this.handleSubmitCity}/>
		)
	}
});

module.exports = HomeContainer;