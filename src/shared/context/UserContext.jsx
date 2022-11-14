import React, {
    useReducer,
    useContext,
    useCallback,
} from "react";
import { createContext } from "react";
import { CLEAR_USER, INITIAL_USER_STATE, SET_USER, userReducer } from "../redux/userReducer";


const UserContext = createContext(null);

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider(props) {
    const [user, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);

    const setUser = useCallback(
        (user) => dispatch({ type: SET_USER, payload: user }),
        [dispatch]
    );

    const clearUser = useCallback(() => {
        dispatch({ type: CLEAR_USER });
    }, [dispatch]);

    return (
        <UserContext.Provider value={{ user, setUser, clearUser }}>
            {props.children}
        </UserContext.Provider>
    );
}