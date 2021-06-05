import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../common/Header/Header'

import { Context } from '../../context/globalContext'

function Feed() {
    const history = useHistory()

    const { handleLogout, authenticated } = useContext(Context)

    const userInfo = JSON.parse(localStorage.getItem('userLogged'))
    return (
        <>
            <Header />
            <h1>Bem vindo ao feed, {userInfo.name}</h1> 
            <button onClick={() => handleLogout(history)}>Sair</button>
            { console.log(authenticated) }
        </>
    )
}

export default Feed
