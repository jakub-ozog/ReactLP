import {createContext, useContext} from "react";

export const NavigationContext = createContext(null);

export const contextData = {
    currentPage: null,
    constant: 'CONSTANT',
    navigate: () => undefined,
}

export default function useNavigationContext() {
    return useContext(NavigationContext);
}
