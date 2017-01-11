import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {
	render(){
		if(!this.props.user){
			return <div></div>;
		}
		const user = this.props.user;
		return(
			<div className='col-md-3 user-info'>
				<img src={this.props.user.avatar_url} alt="user image" width="60%" />
				<h3>{user.name}</h3>
				<h4>{user.login}</h4>
				<a href={"mailto:"+user.email}>{user.email}</a>
				<hr></hr>
				<div>
					<a href={"http://linkedin.com/in/"+ user.login} className="btn btn-social-icon btn-linkedin">
				    <span className="fa fa-linkedin"></span>
				  </a>
				  <a href={"http://github.com/"+ user.login} className="btn btn-social-icon btn-github">
				    <span className="fa fa-github"></span>
				  </a>
				</div>
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