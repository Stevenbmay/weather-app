export const SET_LOCATION = "Set Favorites";
export const INITIAL_LOCATION_STATE = [];


export function locationReducer(state, action) {
    switch (action.type) {
        case SET_LOCATION:
            console.log(action.payload);
            return action.payload

        default:
            return state;
    }
}