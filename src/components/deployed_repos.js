import React from 'react';

const renderRepos = (repo) => {
	return (
		<div key={repo.id}>
			{repo.full_name}
			<a href={repo.homepage}>{repo.homepage}</a>
		</div>
	)
}

const DeploedRepos = (props) => {

	console.log('props in deployedrepos comp', props);
	console.log('renderRepos',renderRepos);
	return (
		<div>
			<h3>Deployed Repos</h3>
			{props.deployedrepos.map(renderRepos)}
		</div>
	);
}

export default DeploedRepos;
