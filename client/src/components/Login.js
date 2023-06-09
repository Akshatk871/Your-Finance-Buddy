import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='form'>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" id="" placeholder="abc@email.com"/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="" placeholder="password"/>
        </div>
        <div className='mb-3'>
          <button type="submit" className='btn btn-primary '>Login</button>
        </div>
        <div className="mb-3">
          <p>Create an account <Link to="/register">Register Here</Link></p>
        </div>
      </form>
    </div>
   
  )
}
