import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export function fetchRepos(owner){
	const url = `${ROOT_URL}/${owner}/repos`;
	const request = axios.get(url);
	return {
		type: 'FETCH_REPOS',
		payload: request
	};
};