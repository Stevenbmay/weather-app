import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom"
import { clearUser } from "../redux/userReducer";


const Menu = (user, clearUser) => {

    return (
        <nav>
            {!user && (
                <NavLink to="/login">Login</NavLink>
            )}
            {user && (
                <>
                    <NavLink to="/weather">Weather</NavLink>
                    <NavLink to="/login" onClick={clearUser}>Logout</NavLink>
                </>
            )}
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearUser: () => {
            dispatch(clearUser());
        },
    };
};
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(Menu);