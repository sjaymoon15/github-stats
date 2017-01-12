import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeployedRepos from './deployed_repos';
import RecentRepos from './recent_repos.js';

class RepoList extends Component {
	render(){

		const deployedrepos = this.props.repos.filter(repo => repo.homepage);
		console.log(deployedrepos);
		const recentrepos = this.props.repos.slice(0,10);
		
		return (
			<div className='col-md-9'>
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