import { createContext } from "react";

export const UserNavigationContext = createContext();

export const UserProvider = () => {
    return (
        <UserNavigationContext.Provider>
        </UserNavigationContext.Provider>
    )
}