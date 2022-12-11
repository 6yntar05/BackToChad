import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useAuth} from "../contexts/authContext";
import {FC, ReactNode} from "react";
import LoadingPlaceholder from "./LoadingPlaceholder";
import Login from "./Login/Login";
import Chat from "./Chat/Chat";
import RegisterPage from "./Register/RegisterPage";

enum AccessLevel {
    any,
    authenticated,
    admin
}

interface IRoutInfo {
    path: string,
    element: ReactNode,
    accessLevel: AccessLevel
}

const routs: IRoutInfo[] = [
    {
        path: "/",
        element: <Chat/>,
        accessLevel: AccessLevel.authenticated,
    },
    // {
    //     path: "/chats/:id",
    //     element: <ChatPage/>,
    //     accessLevel: AccessLevel.authenticated,
    // },
    // {
    //     path: "/logs",
    //     accessLevel: AccessLevel.admin,
    //     element: <LogsPage/>
    // },
    {
        path: "/login",
        accessLevel: AccessLevel.any,
        element: <Login/>
    },
    {
        path: "/register",
        accessLevel: AccessLevel.any,
        element: <RegisterPage/>
    },
    // {
    //     path: "/users",
    //     accessLevel: AccessLevel.authenticated,
    //     element: <UsersPage/>
    // },
    // {
    //     path: "/register",
    //     accessLevel: AccessLevel.any,
    //     element: <RegisterPage/>
    // },
    // {
    //     path: "/statistics",
    //     accessLevel: AccessLevel.admin,
    //     element: <StatisticsPage/>
    // },
    // {
    //     path: "/about",
    //     accessLevel: AccessLevel.any,
    //     element: <AboutPage/>
    // },
]

const Routing = () => {
    return (
        <Routes>
            {routs.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<RouteWithAuth {...route} />}/>
            ))}
        </Routes>
    )
}

const RouteWithAuth: FC<IRoutInfo> = (props) => {
    const authContext = useAuth();
    const location = useLocation();

    if(authContext.loading)
        return <LoadingPlaceholder/>

    if (!authContext.token && props.accessLevel > AccessLevel.any)
        return <Navigate to={"/login"} replace state={{backUrl: location.pathname}}/>;

    // if (!auth.user?.isAdmin && props.accessLevel == AccessLevel.admin)
    //     return <AccessDeniedPlaceholder/>

    return <>{props.element}</>;
}

export default Routing;