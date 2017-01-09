import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommitActivity } from '../actions/index';

class Repo extends Component {
	componentDidMount(){
		this.props.fetchCommitActivity(this.props.repo.owner.login, this.props.repo.name);
	}

	render(){
		const repo = this.props.repo;
		console.log('repo',repo);
		const name = repo.full_name.split('/')[1];
		console.log('activity', this.props.activity);
		return (
			<div>
				<a href={repo.html_url} target="_blank">{name}</a>

				<a href={repo.homepage} target="_blank">App Link</a>
			</div>
		)
	}
}
function mapStateToProp(state){
	return {
		activity: state.activity.commit_activity
	}
}

export default connect(mapStateToProp, {fetchCommitActivity})(Repo);

