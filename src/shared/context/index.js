import { LocationProvider } from "./LocationContext"
import { UserProvider } from "./UserContext";

export * from "./UserContext";
export * from "./LocationContext";

export default function StateProvider(props) {
    return (
        <UserProvider>
            <LocationProvider>{props.children}</LocationProvider>
        </UserProvider>
    );
}