import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext";



const Menu = () => {
    const { user, clearUser } = useUserContext();
    return (
        <nav>
            {user && (
                <NavLink className="logout hover" to="/login" onClick={() => {
                    clearUser();
                }}>Logout</NavLink>
            )}
        </nav>
    )
}
export default Menu