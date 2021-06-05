import React from 'react'
import Header from '../../common/Header/Header'
import { ReactComponent as WomanImage } from '../../assets/wfh_1.svg'
import LoginForm from './components/LoginForm/LoginForm'

import './HomePage.css'

function HomePage() {
    
    return (
        <>  
            <div className="page-wrapper">
                <div className="text-dialog">
                    <h1>Seja bem vindo ao Wolf-Book</h1>
                    <h2>A rede social da IN-Junior</h2>
                    <WomanImage id="woman-image"/>
                </div>
                <LoginForm />
            </div>
        </>
    )
}

export default HomePage
