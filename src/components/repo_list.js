import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepoList extends Component {
	renderRepos(repo){
		console.log('repo', repo);
		return (
			<div className="each-box" key={repo.id}>
        <img src="https://unsplash.it/200/300/?random" />
        <p>{repo.full_name}</p>
    	</div>
		);
	}
	render(){
		return (
			<div>
        {this.props.repos.map(this.renderRepos)}
			</div>
		);
	}
}

function mapStateToProps(state){
	console.log('state',state);
	return {
		repos: state.repos.all
	}
}

export default connect(mapStateToProps)(RepoList);