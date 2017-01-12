import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import Graph from './sparklines';
import axios from 'axios';

export default class Repo extends Component {
	constructor(props){
		super(props);
		this.state = { user: '', repoTitle: '', activity: [] };
	}
	componentDidMount(){
		
		const user = this.props.repo.owner.login;
		const repoTitle = this.props.repo.full_name.split('/')[1];
		const ROOT_URL = 'https://api.github.com';
		const url = `${ROOT_URL}/repos/${user}/${repoTitle}/stats/commit_activity`;
		axios.get(url)
		.then(({data}) => { 
			this.setState({ user: user, repoTitle: repoTitle, activity: data });
		});
	}
	
	getSparklineData(data){
		if(!this.state.activity){
			return <div></div>
		}
		let sparklinesData = [];
		let totalCommits = 0;
		this.state.activity.forEach((obj) => {
			sparklinesData = sparklinesData.concat(obj.days); 
			totalCommits += obj.total;
		});

		return (
			<div>
				<Graph data={sparklinesData} totalCommits={totalCommits} />
			</div>
		);
	}

	render(){
		if(!this.props.repo){
			return (
				<div>loading...</div>
			);
		}
		const repo = this.props.repo;

		return (
			<div>
				<a href={repo.html_url} target="_blank">{this.state.repoTitle}</a>
				{this.getSparklineData(this.state)}
				<hr></hr>
				{repo.description}
				{repo.homepage? <div className="align-right"><a href={repo.homepage} target="_blank" >Web App link</a></div> : ''}
			</div>
		);
	}
}




