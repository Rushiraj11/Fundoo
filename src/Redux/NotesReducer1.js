const initialNotesState = {
	loading: false,
	Notes: [],
	error: '',
};

export const notesApi = (state = initialNotesState, action) => {
    console.log(action)
    switch (action.type) {
        case 'FETCH_Notes_SUCCESS':
            console.log("Hello")
            return {
                ...state,
                Notes: action.payload,
                loading: false,
                error: '',
            };
            case 'FETCH_Notes_ERROR':
                return {
                   ...state,
                   Notes: [],
                   loading: false,
                   error: 'server error',
                };
                case 'FETCH_Notes_REQUEST':
                return {
                   ...state,
                   Notes: [],
                   loading: true,
                   error: '',
                };
         
        default:
            return state;
    }
};