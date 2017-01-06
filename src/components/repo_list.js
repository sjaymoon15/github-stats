import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepoList extends Component {
	renderRepos(repo){
		console.log('repo', repo);
		return (
			<div className="each-box" key={repo.id}>
        <p>{repo.full_name}</p>
    	</div>
		);
	}
	render(){
		return (
			<div className='col-md-9 list-group'>
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