import { useState, useEffect } from 'react'

import { create } from '../../service/api'

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)

    const handleLogin = (history, user) => {
        create.post('/login', user )
        .then((res) => {
            localStorage.setItem('userLogged', JSON.stringify(res.data.user))
            create.defaults.headers.Authorization = res.data.token
            setAuthenticated(true)
            history.push('/feed')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleLogout = (history) => {
        localStorage.removeItem('userLogged')
        create.defaults.headers.Authorization = undefined
        setAuthenticated(false)
        history.push('/login')
    }

    return { authenticated, handleLogin, handleLogout }
}