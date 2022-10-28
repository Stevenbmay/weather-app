import { useMemo } from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";



const AuthRoute = ({ requireUser, component, user }) => {
    const redirct = useMemo(() => (requireUser ? "/login" : "/weather"), [requireUser]
    )

    const auth = useMemo(() => {
        return (!requireUser && !user) || (requireUser && user);
    }, [requireUser, user]);
    if (auth) {
        return <>{component}</>
    }
    return <Navigate to={redirct} />
}

const mapDispatchToProps = () => ({})
const mapStateToProps = (state) => ({ user: state.user })

const ConAuthRoute = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthRoute)

export const PrivateRoute = ({ component }) => {
    return <ConAuthRoute requireUser={true} component={component} />;
};

export const PublicRoute = ({ component }) => {
    return <ConAuthRoute requireUser={false} component={component} />;
};