import axios from 'axios';

const ROOT_URL = 'https://api.github.com/users';

export function fetchRepos(user){
	const url = `${ROOT_URL}/${user}/repos?sort=updated`;
	const request = axios.get(url);
	return {
		type: 'FETCH_REPOS',
		payload: request
	};
};

export function fetchUserInfo(user){
	const url = `${ROOT_URL}/${user}`;
	const request = axios.get(url);
	return {
		type: 'FETCH_USER_INFO',
		payload: request
	};
};