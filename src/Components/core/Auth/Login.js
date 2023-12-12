import React from 'react'
import Template from './Template'
import login from "../../../assets/login.png"

const Login = () => {

    return (
        <div>
            <Template 
                title={"Welcome Back"}
                description1={"Elevate Your Ride, the Clone Zone Way."}
                description2={"Start your engine, we've got the parts"}
                image={login}
                formType={"login"}
            />
        </div>
    )
}

export default Login