import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='form'>
      <form>
      <div className="mb-3">
        <label for="" className="form-label">Name</label>
        <input type="text" className='form-control' name="name" placeholder='Your Name' />
      </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" id="" placeholder="abc@email.com"/>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="" placeholder="password"/>
        </div>
        <div className='mb-3'>
            <label for='' className='form-label'>OTP</label>
            <input type="text" className='form-control' name='otp' placeholder='OTP'/>
        </div>
        <div className='mb-3'>
          <button type="submit" className='btn btn-primary '>Login</button>
        </div>
        <div className="mb-3">
          <p>Already have an account <Link to="/Login">Login Here</Link></p>
        </div>
      </form>
    </div>
  )
}