import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/elearning-logo.jpg'
import { CourseContext } from '../context/Coursecontext';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {currentUser,logoutUser} = useContext(CourseContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let location = useLocation();

  const handleLogout = () => {
    logoutUser();
    localStorage.removeItem('user');
    props.showAlert("Logged Out Successfully!!", "green");
  }

  return (
    <nav className="sticky top-0 bg-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="Logo" className='w-20' />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/' ? 'text-cyan-500' : 'text-white'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/courses' ? 'text-cyan-500' : 'text-white'
                  }`}
              >
                Courses
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              type="button"
              className="text-white hover:text-cyan-500 focus:outline-none focus:text-cyan-200"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {!currentUser ? (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  to="/login"
                  className={`px-3 py-2 rounded-md text-sm hover:text-cyan-500 font-medium  ${location.pathname === '/login' ? 'text-cyan-500' : 'text-white'
                    }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/signup' ? 'text-cyan-500' : 'text-white'
                    }`}
                >
                  Signup
                </Link>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  to="/subscribed"
                  className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/subscribed' ? 'text-cyan-500' : 'text-white'
                    }`}
                >
                  Subscribed Courses
                </Link>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium text-white"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/' ? 'text-cyan-500' : 'text-white'
                }`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/courses' ? 'text-cyan-500' : 'text-white'
                }`}
            >
              Courses
            </Link>
          </div>
          {!currentUser ? (
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/login"
                className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/login' ? 'text-cyan-500' : 'text-white'
                  }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/signup' ? 'text-cyan-500' : 'text-white'
                  }`}
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/subscribed"
                  className={`px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium  ${location.pathname === '/subscribed' ? 'text-cyan-500' : 'text-white'
                    }`}
                >
                  Subscribed Courses
                </Link>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md hover:text-cyan-500 text-sm font-medium text-white"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
