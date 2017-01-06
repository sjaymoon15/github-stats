import React, { Component } from 'react';
import { fetchRepos, fetchUserInfo } from '../actions/index';
import { connect } from 'react-redux';
import RepoList from './repo_list';
import UserInfo from './user_info';

class SearchBar extends Component {
	// temporary automatic fetch
	componentWillMount(){
		this.props.fetchRepos('sjaymoon15');
		this.props.fetchUserInfo('sjaymoon15');
	}
	constructor(props){
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event){
		this.setState({term: event.target.value});
	}
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchRepos(this.state.term);
		this.props.fetchUserInfo(this.state.term);
		this.setState({term: ''});
	}
	
	render(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit} className='input-group'>
					<input 
						placeholder='Type your Github username'
						className='form-control'
						value={this.state.term}
						onChange={this.onInputChange}
						/>
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-secondary'>Submit</button>
					</span>
				</form>
				<UserInfo />
				<RepoList />
			</div>
		)
	}
}
export default connect(null, {fetchRepos, fetchUserInfo})(SearchBar);
