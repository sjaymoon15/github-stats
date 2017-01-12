import React, { Component } from 'react';
import Repo from './repo';
import Masonry from 'react-masonry-component';

export default class DeployedRepos extends Component{

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
		const deployedrepos = this.props.deployedrepos;
		const masonryOptions = { transitionDuration: 0 };
		return (
			<div className='each-list'>
				<h4>Deployed Repos</h4>
				<Masonry
	        className={''} // default ''
	        elementType={'div'} // default 'div'
	        options={masonryOptions} // default {}
	        disableImagesLoaded={false} // default false
	        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
	    	>
	        {deployedrepos.map(this.renderRepos)}
	    	</Masonry>
			</div>
		);
	}
}




