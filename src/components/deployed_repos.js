import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repo from './repo';


export default class DeployedRepos extends Component{

	renderRepos(repo){
		return (
			<div key={repo.id} className="col-lg-4 col-md-6">
				<div className='each-repo'>
					<Repo repo={repo} />
				</div>
			</div>
		)
	}
	render(){	
		const deployedrepos = this.props.deployedrepos;
		return (
			<div className='each-list'>
				<h4>Deployed Repos</h4>
				<div className='row'>
					{deployedrepos.map(this.renderRepos)}
				</div>
			</div>
		);
	}
}




