const INITIAL_STATE = { commit_activity: [] }
export default function( state = INITIAL_STATE, action ){
	switch(action.type){
		case 'FETCH_COMMIT_ACTIVITY':
			// return [ ...state, action.payload.data ];
			return { ...state, commit_activity: action.payload.data }
	}
	return state;
}