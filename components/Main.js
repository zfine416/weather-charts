var React = require('react');
require('./Main.scss');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo center">Weather Charts</a>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;