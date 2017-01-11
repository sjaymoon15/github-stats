import React, { Component } from 'react';
import Repo from './repo';


export default class RecentRepos extends Component{

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
		const recentrepos = this.props.recentrepos;
		return (
			<div>
				<h4>Recent Repos</h4>
				<div className='row'>
					{recentrepos.map(this.renderRepos)}
				</div>
			</div>
		);
	}
}




