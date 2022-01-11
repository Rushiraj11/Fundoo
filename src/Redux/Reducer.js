const initialNavBarState = {            // global state
    changeoption: "Keep"
};

export const navReducer = (state = initialNavBarState, action) => {
    console.log(action)
    switch (action.type) {
        case 'CLICK_ON_NOTE':
            console.log("Hello")
            return {
                ...state,
                changeoption: "Notes"
            };
            case 'CLICK_ON_REMINDER':
                return {
                   ...state,
                    changeoption: "Reminder"
                };
        case 'CLICK_ON_ARCHIVE':
            return {
                ...state,
                changeoption: "Archive"
            };
        case 'CLICK_ON_TRASH':
            return {
                ...state,
                changeoption: "Trash"
            };
        default:
            return state;
    }
};