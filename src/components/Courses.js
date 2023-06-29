import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../context/Coursecontext';

const Courses = (props) => {
  const { showAlert } = props;
  const { courses, currentUser, subscribeCourse, subscribedCourses } = useContext(CourseContext);

  let navigate = useNavigate();

  const handleSubscribe = (id) => {
    if (!currentUser) {
      showAlert('You need to login first!', 'yellow');
      navigate('/login');
    } else {
      subscribeCourse(id);
      showAlert('Your subscription added successfully!!', 'green');
    }
  };

  return (
    <div className='bg-black'>
      <div className='mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-cyan-500 text-center'>Courses we offer</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {courses.map((course) => {
            const isSubscribed = subscribedCourses.find((c)=>c.id === course.id) ? true:false;
            console.log(isSubscribed)
            return (
              <div
                key={course.id}
                className='transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 relative rounded-lg bg-black shadow-lg shadow-cyan-200 p-4 hover:shadow-cyan-500'
              >
                <div className='w-auto overflow-hidden rounded-md bg-black lg:aspect-none'>
                  <img
                    src={course.img}
                    alt={course.courseName}
                    className='h-full w-full lg:h-full lg:w-full'
                    style={{ aspectRatio: '3/2', objectFit: 'contain' }}
                  />
                </div>
                <div className='mt-4'>
                  <div>
                    <h3 className='text-sm text-cyan-500 text-center'>{course.courseName}</h3>
                    <p className='text-sm font-medium text-cyan-500 text-center my-2'>{course.price}</p>
                  </div>
                </div>
                <div className='pb-6 sm:pb-8 text-center'>
                  <button
                    disabled={isSubscribed}
                    className='px-6 py-3 border-2 border-solid border-cyan-500 bg-black text-cyan-500 hover:rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110'
                    onClick={() => handleSubscribe(course.id)}
                  >
                    {isSubscribed ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
