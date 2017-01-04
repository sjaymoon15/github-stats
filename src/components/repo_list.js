import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class RepoList extends Component {
	componentDidMount(){
		console.log('this.props.repos', this.props.repos);
	}
	render(){
		return (
			<div>RepoList here</div>
		);
	}
}

// function mapStateToProps(state){
// 	console.log('state',state);
// 	return {
// 		repos: state.repos.all
// 	}
// }

// export default connect(mapStateToProps)(RepoList);