import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

const masonryOptions = { transitionDuration: 0 };

class RepoList extends Component {
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
		return (
			<div>
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

export default connect(mapStateToProps)(RepoList);