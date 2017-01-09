import React, { Component } from 'react';
import Repo from './repo';

export default class DeployedRepos extends Component{
	renderRepos(repo){
		return (
			<div key={repo.id} className="col-md-4">
				<Repo repo={repo} />
			</div>
		)
	}
	render(){	
		return (
			<div>
				<h3>Deployed Repos</h3>
				<div className='row'>
					{this.props.deployedrepos.map(this.renderRepos)}
				</div>
			</div>
		);
	}
}

