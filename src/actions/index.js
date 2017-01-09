import axios from 'axios';

const ROOT_URL = 'https://api.github.com';

export function fetchRepos(user){
	const url = `${ROOT_URL}/users/${user}/repos?sort=updated`;
	const request = axios.get(url);
	return {
		type: 'FETCH_REPOS',
		payload: request
	};
};

export function fetchUserInfo(user){
	const url = `${ROOT_URL}/users/${user}`;
	const request = axios.get(url);
	return {
		type: 'FETCH_USER_INFO',
		payload: request
	};
};

export function fetchCommitActivity(user, repo){
	const url = `${ROOT_URL}/repos/${user}/${repo}/stats/commit_activity`;
	const request = axios.get(url);
	return {
		type: 'FETCH_COMMIT_ACTIVITY',
		payload: request
	}
}