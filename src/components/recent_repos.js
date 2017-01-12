import React, { Component } from 'react';
import Repo from './repo';


export default class RecentRepos extends Component{

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
		const recentrepos = this.props.recentrepos;
		return (
			<div className='each-list'>
				<h4>Recently Updated Repos</h4>
				<div className='row'>
					{recentrepos.map(this.renderRepos)}
				</div>
			</div>
		);
	}
}




