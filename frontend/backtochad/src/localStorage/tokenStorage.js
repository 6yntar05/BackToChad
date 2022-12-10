export const getTokenFromStorage = () => localStorage.getItem("token");
export const saveTokenToStorage = (token) => localStorage.setItem("token", token);