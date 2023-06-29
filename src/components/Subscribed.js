import React, { useContext } from 'react'
import { CourseContext } from '../context/Coursecontext';
import { Link } from 'react-router-dom';

const Subscribed = () => {

    const {subscribedCourses} = useContext(CourseContext)

  return (
    <div className='bg-black'>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-cyan-500 text-center">Your Subscribed Courses</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {subscribedCourses.map((course) => (
            <div key={course.id} className="transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 relative rounded-lg bg-black shadow-lg shadow-cyan-200 p-4 hover:shadow-cyan-500">
              <div className="w-auto overflow-hidden rounded-md bg-black lg:aspect-none">
                <img
                  src={course.img}
                  alt={course.courseName}
                  className="h-full w-full lg:h-full lg:w-full"
                  style={{aspectRatio:"3/2", objectFit:"contain"}}
                />
              </div>
              <div className="mt-4">
                <div>
                  <h3 className="text-sm text-cyan-500 text-center">{course.courseName}</h3>
                </div>
              </div>
              <div className=" pb-6 sm:pb-8 text-center">
                <button
                  className="my-2 px-6 py-3 border-2 border-solid border-cyan-500 bg-black text-cyan-500 hover:rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110">
                  <Link to={course.playlist} target='_blank'>Watch</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Subscribed
