var React = require('react');
var PropTypes = React.PropTypes;


function Home (props) {
	return (
		<div className="home-container">
			<form 
				className="middle center"
				onSubmit={props.onSubmitCity} >
		          <input
		          	onChange={props.onUpdateCity} 
		          	placeholder="Enter City:" 
		          	id="first_name" 
		          	type="text" 
		          	className="validate" />
		  		   <input
		  		   	type="submit" 
		  		   	className="waves-effect waves-light btn-large" /> 
		  		   <div className="empty-fix"></div>
		  	</form>	
	    </div>
	)
}

Home.propTypes = {
	onUpdateCity: PropTypes.func.isRequired,
	onSubmitCity: PropTypes.func.isRequired
}


module.exports = Home;

