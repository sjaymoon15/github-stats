import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import SearchBar from './components/search_bar';
import Repos from './components/repo_list';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={SearchBar} />
		<Route path='/repos' component={Repos} />
	</Route>
);