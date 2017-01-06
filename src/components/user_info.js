import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {
	render(){
		if(!this.props.user){
			return <div></div>;
		}
		return(
			<div>
				{this.props.user.name}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		user: state.repos.user
	}
}

export default connect(mapStateToProps)(UserInfo);