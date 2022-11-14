import React, {
    useReducer,
    useContext,
    useCallback,
} from "react";
import { createContext } from "react";
import { INITIAL_LOCATION_STATE, locationReducer, SET_LOCATION } from "../redux/locationReducer";


const LocationContext = createContext(null);

export function useLocationContext() {
    return useContext(LocationContext);
}

export function LocationProvider(props) {
    const [location, dispatch] = useReducer(locationReducer, INITIAL_LOCATION_STATE);

    const setLocation = useCallback(
        (location) => {
            console.log(location);
            dispatch({ type: SET_LOCATION, payload: location });
        },
        [dispatch]
    );
    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {props.children}
        </LocationContext.Provider>
    );
}