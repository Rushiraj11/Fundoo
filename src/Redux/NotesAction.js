import UserService from "../services/UserService";
const userService = new UserService();


export const ChangeToNote = () => {
    return{
        type:"CLICK_ON_NOTE"
    }
}
export const ChangeToReminder = () =>{
    return{
        type:"CLICK_ON_REMINDER"
    }
}
export const ChangeToArchive = () =>{
    return{
        type:"CLICK_ON_ARCHIVE"
    }
}
export const ChangeToTrash = () =>{
    return{
        type:"CLICK_ON_TRASH"
    }
}
export const fetchNotesRequest = () => {
	return {
		type: 'FETCH_Notes_REQUEST',
	};
};
export const fetchNotesSuccess = (Notes) => {
	return {
		type: 'FETCH_Notes_SUCCESS',
		payload: Notes,
	};
};

export const fetchNotesError = () => {
	return {
		type: 'FETCH_Notes_ERROR',
	};
};
export const fetchNotes = () => { //thunk
	return (dispatch) => {
		dispatch(fetchNotesRequest());
      return   userService.displayNotes(
            "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList"
          )
          
			.then((res) => {
                console.log(res);
				dispatch(fetchNotesSuccess(res.data.data.data));
			})
			.catch((err) => dispatch(fetchNotesError(err)));
	};
};