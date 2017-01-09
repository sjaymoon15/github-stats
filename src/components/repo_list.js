import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeployedRepos from './deployed_repos';

class RepoList extends Component {
	// renderRepos(repo){
	// 	return (
	// 		<div className="each-box" key={repo.id}>
 //        <p>{repo.full_name}</p>
 //    	</div>
	// 	);
	// }
	render(){

		const deployedrepos = this.props.repos.filter(repo => repo.homepage);
		console.log(deployedrepos);
		// deployed repos component -> each
		// most commited repos?
		// most current repos?
		return (
			<div className='col-md-9 list-group'>
				<DeployedRepos deployedrepos={deployedrepos} />

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