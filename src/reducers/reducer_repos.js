const INITIAL_STATE = { all: [], repo: null, user: null };

export default function( state = INITIAL_STATE, action ){
	switch(action.type){
		case 'FETCH_REPOS':
			return { ...state, all: action.payload.data };
		case 'FETCH_USER_INFO':
			return { ...state, user: action.payload.data };
	}
	return state;
}