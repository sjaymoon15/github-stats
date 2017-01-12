import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
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
		const masonryOptions = { transitionDuration: 0 };
		return (
			<div className='each-list'>
				<h4>Recently Updated Repos</h4>
				<Masonry
	        className={''} // default ''
	        elementType={'div'} // default 'div'
	        options={masonryOptions} // default {}
	        disableImagesLoaded={false} // default false
	        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
	    	>
	        {recentrepos.map(this.renderRepos)}
	    	</Masonry>
			</div>
		);
	}
}




