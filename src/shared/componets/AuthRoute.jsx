import { useMemo } from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginPage from "../../components/LoginPage";
import WeatherPage from "../../components/weatherPage";
import { useUserContext } from "../context/UserContext";

const AuthRoute = ({ requiresUser, component }) => {
    const { user } = useUserContext();
    const redirectTo = useMemo(
        () => (requiresUser ? "/login" : "/weather"),
        [requiresUser]
    );

    const authorized = useMemo(() => {
        return (!requiresUser && !user) || (requiresUser && user);
    }, [requiresUser, user]);

    if (authorized) {
        return <>{component}</>;
    }

    return <Navigate to={redirectTo} />;
};

export const PrivateRoute = ({ component }) => {
    return <AuthRoute requiresUser={true} component={component} />;
};

export const PublicRoute = ({ component }) => {
    return <AuthRoute requiresUser={false} component={component} />;
};