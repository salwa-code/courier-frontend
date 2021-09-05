import React from 'react'
import Formin from './Formin'
import useForm from './useForm'
import validateInfo from './validateInfo'

const Login = () => {
    return (
        <div>
            <Formin/>
            <useForm/>
            <validateInfo/>
        </div>
    )
}

export default Login
