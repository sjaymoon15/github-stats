import React, { Component } from 'react';
import { fetchRepos } from '../actions/index';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
const masonryOptions = { transitionDuration: 0 };

class SearchBar extends Component {
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
		this.setState({term: ''});
	}
	renderRepos(repo){
		console.log('repo', repo);
		return (
			<div className="image-element-class each-box">
        <img src="https://unsplash.it/200/300/?random" />
        <p>{repo.full_name}</p>
    	</div>
		);
	}
	render(){
		if(!this.props.repos){
			return(
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
			)
		}
		return (
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
				<Masonry
          className={'my-gallery-class'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      	>
        {this.props.repos.map(this.renderRepos)}
      	</Masonry>
			</div>
		);
	}
}

function mapStateToProps(state){
	console.log('state',state);
	return {
		repos: state.repos.all
	}
}
export default connect(mapStateToProps, {fetchRepos})(SearchBar);
