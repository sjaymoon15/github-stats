import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeployedRepos from './deployed_repos';
import RecentRepos from './recent_repos.js';

class RepoList extends Component {
	render(){

		const deployedrepos = this.props.repos.filter(repo => repo.homepage);
		const recentrepos = this.props.repos.slice(0,4);
		// deployed repos component -> each
		// most commited repos?
		// most current repos?
		return (
			<div className='col-md-9 list-group'>
				<DeployedRepos deployedrepos={deployedrepos} />
				<RecentRepos recentrepos={recentrepos} />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		repos: state.repos.all
	}
}

export default connect(mapStateToProps)(RepoList);