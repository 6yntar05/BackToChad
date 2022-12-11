import {useMemo} from "react";


const useParsedToken = (token: string) => {
    return useMemo(() => {
        const encodedPayload = token.split(".")[1];
        const base64 = encodedPayload.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload) as {id: string, login: string}
    }, [token]);
}

export default useParsedToken;