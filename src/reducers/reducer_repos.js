const INITIAL_STATE = { all: [], repo: null };

export default function( state = INITIAL_STATE, action){
	switch(action.type){
		case 'FETCH_REPOS':
			return { ...state, all: action.payload.data };
	}
	return state;
}