import React from 'react'
import Template from './Template'
import signUpImg from "../../../assets/signup.webp"
import { useSelector } from 'react-redux'

const SignUp = () => {
  const {loading} = useSelector((state) => state.auth);
  return (
      <div className='flex items-center justify-center mx-auto'>
        {
          loading ? (
            <div className="spinner mt-[350px]"></div>
          ) : (
            <div>
                <Template 
                    title="Clarkton: Turning Wheels, building Dreams!!!!"
                    description1="Elevate Your Ride, the Clone Zone Way."
                    description2="Start your engine, we've got the parts"
                    image={signUpImg}
                    formType="signup"
                />
            </div>
          )
        }
      </div>
  )
}

export default SignUp
