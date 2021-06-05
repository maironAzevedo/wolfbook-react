import React from 'react'
import Header from '../../common/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'

function HomePage() {
    
    return (
        <>
            <h1>Seja bem vindo ao Wolf-Book</h1>
            <h2>A rede social da IN-Junior</h2>
            <LoginForm />
        </>
    )
}

export default HomePage
