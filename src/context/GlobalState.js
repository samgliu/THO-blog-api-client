import React, { createContext, useContext, useEffect, useState } from 'react';

const initialState = [];

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    function doesHttpOnlyCookieExist(cookiename) {
        var d = new Date();
        d.setTime(d.getTime() + 1000);
        var expires = 'expires=' + d.toUTCString();

        document.cookie = cookiename + '=new_value;path=/;' + expires;
        return document.cookie.indexOf(cookiename + '=') == -1;
    }

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn,
                isAdmin,
                setIsAdmin,
                doesHttpOnlyCookieExist,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
