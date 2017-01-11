import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommitActivity } from '../actions/index';
import Repo from './repo';


export default class DeployedRepos extends Component{

	renderRepos(repo){
		return (
			<div key={repo.id} className="col-lg-4 col-md-6">
				<div>
					<Repo repo={repo} />
				</div>
			</div>
		)
	}
	render(){	
		const deployedrepos = this.props.deployedrepos;
		return (
			<div>
				<h3>Deployed Repos</h3>
				<div className='row'>
					{deployedrepos.map(this.renderRepos)}
				</div>
			</div>
		);
	}
}




