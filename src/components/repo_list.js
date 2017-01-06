import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeploedRepos from './deployed_repos';

class RepoList extends Component {
	renderRepos(repo){
		return (
			<div className="each-box" key={repo.id}>
        <p>{repo.full_name}</p>
    	</div>
		);
	}
	render(){
		// deployed repos component -> each
		// most commited repos?
		// most current repos?
		return (
			<div className='col-md-9 list-group'>
				<DeploedRepos allRepos={this.props.repos} />
        {this.props.repos.map(this.renderRepos)}

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