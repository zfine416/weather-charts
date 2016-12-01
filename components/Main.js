var React = require('react');
require('./Main.scss');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<nav>
   					<div className="nav-wrapper">
     					<a href="#" className="brand-logo center">React Weather App</a>
     					<ul id="nav-mobile" className="left hide-on-med-and-down">
      					</ul>
    				</div>
  				</nav>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;