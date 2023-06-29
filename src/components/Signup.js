import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../context/Coursecontext';

const Signup = (props) => {

  const { showAlert } = props
  const { registerUser } = useContext(CourseContext)

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  })

  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [cshow, setCShow] = useState(false);
  const [pswdError, setPswdError] = useState(true);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
    if (!passwordPattern.test(credentials.password)) {
      setPswdError(
        'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be 8-16 characters long.'
      );
      return;
    }
    setPswdError('')
    if (credentials.password !== credentials.cpassword) {
      showAlert('Passwords do not match', 'yellow')
      setCredentials({ ...credentials, password: '', cpassword: '' })
    } else {
      try {
        registerUser(credentials)
        props.showAlert("Profile Created Successfully", "green");
        navigate("/courses")
      } catch (error) {
        setCredentials({ email: '', password: '', cpassword: '' })
        showAlert(error.toString(),'red')
      }
    }
  }



  return (
    <div className="flex justify-center items-center my-8">
      <div className="max-w-md w-full px-6 py-4 bg-black shadow-md border-solid border-2 border-cyan-400 shadow-cyan-200 hover:shadow-cyan-500 hover:shadow-lg rounded-lg overflow-hidden">
        <h3 className="text-center text-2xl font-bold mb-4 text-cyan-500">Create an Account with us!!</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-cyan-500">Name</label>
            <input
              type="text"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-md py-1 px-1"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              onChange={handleChange}
              value={credentials.name}
              required
              minLength={5}
              placeholder='Your Name'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-cyan-500">Email address</label>
            <input
              type="email"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-md py-1 px-1"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={credentials.email}
              required
              minLength={5}
              placeholder='Your Email'
            />
            <div id="emailHelp" className="form-text text-cyan-500">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="password" className="form-label text-cyan-500">Password</label>
            <input
              type={show ? 'text' : 'password'}
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-md py-1 px-1"
              id="password"
              name="password"
              onChange={handleChange}
              value={credentials.password}
              required
              placeholder='Password'
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$'
            // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <i className={`fa-regular ${show ? 'fa-eye' : 'fa-eye-slash'} absolute top-3/4 transform -translate-y-1/2 right-2 cursor-pointer`} onClick={() => { setShow(!show) }}></i>
          </div>
          {pswdError && <p className="text-red-500 text-xs">{pswdError}</p>}
          <div className="mb-3 relative">
            <label htmlFor="cpassword" className="form-label text-cyan-500">Confirm Password</label>
            <input
              type={cshow ? 'text' : 'password'}
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-md py-1 px-1"
              id="cpassword"
              name="cpassword"
              onChange={handleChange}
              value={credentials.cpassword}
              required
              minLength={8}
              placeholder='Confirm'
            />
            <i className={`fa-regular ${cshow ? 'fa-eye' : 'fa-eye-slash'} absolute top-3/4 transform -translate-y-1/2 right-2 cursor-pointer`} onClick={() => { setCShow(!cshow) }}></i>
          </div>
          <button type="submit" className="w-full flex justify-center px-6 py-3 border-2 border-solid border-cyan-500 bg-black text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
