import React, { createContext } from 'react'

import useAuth from './hooks/useAuth'

const Context = createContext()

function GlobalProvider({ children }) {

    const { authenticated, handleLogin, handleLogout } = useAuth()

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            { children }
        </Context.Provider>
    )
}

export { Context, GlobalProvider }