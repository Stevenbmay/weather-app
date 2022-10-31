import { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../shared/redux/userReducer";

const LoginPage = ({ login }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1 className="center">Steven's Weather App</h1>
            <div><h1>Please Login</h1></div>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div>
                <label htmlFor="password">Password: </label>
                <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => {
                if (username && password) {
                    login({ username })
                }
            }}>Login</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(setUser(user)),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);