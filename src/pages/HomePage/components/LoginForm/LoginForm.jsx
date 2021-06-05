import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../../../../context/globalContext' 

import './LoginForm.css'

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const { handleLogin } = useContext(Context);

    const user = {
        "user": {
            email,
            password
        }
    }

    return (
        <>
            <div className="form">
                <fieldset>
                    <h2>Realize seu Login</h2>

                    <div className="input-area">
                        <label htmlFor="email">Seu Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" id="0" />
                    </div>
                    <div className="input-area">
                        <label htmlFor="password">Sua Senha:</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="1" />
                    </div>
                    <button onClick={() => handleLogin(history, user)}>Acessar</button>
                    <a href="">Esqueci minha senha</a>
                </fieldset>
            </div>
        </>
    )
}

export default LoginForm
