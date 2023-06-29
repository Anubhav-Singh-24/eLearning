import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../context/Coursecontext';

const Login = (props) => {

  const {loginUser} = useContext(CourseContext)

  const { showAlert } = props;

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {

      loginUser(credentials.email, credentials.password)
      showAlert("Logged In Successfully!!", "green");
      setCredentials({ email: "", password: "" })
      navigate("/courses");
      
    } catch (error) {
      setCredentials({ email: "", password: "" })
      showAlert(error.toString(),'red');
    }
  }

  return (
    <div className='flex justify-center items-center my-24 overflow-hidden'>
      <div className="max-w-md w-full px-6 py-4 bg-black shadow-md shadow-cyan-200 hover:shadow-cyan-500 hover:shadow-lg border-solid border-2 border-cyan-400 rounded-lg overflow-hidden">
        <h3 className="text-center text-2xl font-bold mb-4 text-cyan-500">Login To your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className='block text-sm font-medium text-cyan-500'>Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-md py-1 px-1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={credentials.email}
              required
              placeholder='Email'
            />
          </div>
          <div className="relative mb-3">
            <label htmlFor="email" className='block text-sm font-medium text-cyan-500'>Password</label>
            <input
              type={show ? 'text' : 'password'}
              name="password"
              id="password"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-md py-1 px-1"
              onChange={handleChange}
              value={credentials.password}
              required
              placeholder='Password'
            />
            <i className={`fa-regular ${show ? 'fa-eye' : 'fa-eye-slash'} absolute top-3/4 transform -translate-y-1/2 right-2 cursor-pointer`} onClick={() => { setShow(!show) }}></i>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center px-6 py-3 border-2 border-solid border-cyan-500 bg-black text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
