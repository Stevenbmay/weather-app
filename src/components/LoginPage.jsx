import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useLocationContext } from "../shared/context/LocationContext";
import { useUserContext } from "../shared/context/UserContext";
import { setUser } from "../shared/redux/userReducer";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();
    const { setLocation } = useLocationContext();
    const {
        data: resObject,
        error: reqError,
        mutate: login,
    } = useMutation({
        mutationFn: async (user) => {
            const { data } = await axios.post("/api/users/login", user);
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                setUser(res.data.user);
                setLocation(res.data.location);
            }
        },
    });

    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div>
                <label htmlFor="password">Password: </label>
                <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => {
                login({ username, password });
            }}>Login</button>

            {resObject && resObject.error && (
                <div style={{ textAlign: "center" }}>{resObject?.error}</div>
            )}
            {reqError && (
                <div style={{ textAlign: "center" }}>
                    Something went wrong, please try again later
                </div>
            )}
        </div>

    )
};

export default LoginPage;