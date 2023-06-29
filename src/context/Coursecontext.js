import React, { createContext, useState } from 'react';


const CourseContext = createContext();


const CourseProvider = ({ children }) => {
  
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  
  const [courses, setCourses] = useState([ {
    id: 1,
    courseName: "AI/ML",
    img: "https://byteinfotech.co/assets/images/services/app/20945347-%5BConverted%5D.png",
    price: "$24.99",
    playlist:'https://youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe'
  },
  {
    id: 2,
    courseName: "Data Science",
    img: "https://cdn.mindmajix.com/blog/images/what-is-data-science-30042022.png",
    price: "$19.99",
    playlist:'https://youtube.com/playlist?list=PLu0W_9lII9agK8pojo23OHiNz3Jm6VQCH'
  },
  {
    id: 3,
    courseName: "React.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    price: "$14.99",
    playlist:"https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
  },
  {
    id: 4,
    courseName: "Node.js",
    img: "https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F915aa873ca2e568f347fd579430ef38dd18cd8f3-420x308.png&w=1080&q=75",
    price: "$14.99",
    playlist:"https://youtube.com/playlist?list=PLobAq7hWqZWGTfhj4jNQAVzJd_y6iTErQ"
  },
  {
    id: 5,
    courseName: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    price: "$9.99",
    playlist:"https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
  },
  {
    id: 6,
    courseName: "C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    price: "$11.99",
    playlist:'https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL'
  },
  {
    id: 7,
    courseName: "JAVA",
    img: "https://cdn.springpeople.com/media/java.png",
    price: "$14.99",
    playlist:'https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q'
  },
  {
    id: 8,
    courseName: "AWS",
    img: "https://media.licdn.com/dms/image/D5612AQERySmtAVp7kQ/article-cover_image-shrink_600_2000/0/1680275682788?e=2147483647&v=beta&t=E7UEu2xOneY6O7S5Ud09E2YglQa_d9ZZGhIoZOmp9aI",
    price: "$9.99",
    playlist:'https://youtu.be/SOTamWNgDKc'
  }]);
  const [subscribedCourses, setSubscribedCourses] = useState([]);

  
  const registerUser = (user) => {
    
    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) {
      throw new Error('User with the same ID already exists!!');
    }
    setUsers([...users, user]);
    setCurrentUser(user);
  };

  
  const loginUser = (id, password) => {
    const user = users.find((u) => u.email === id);

    if (user) {
      if (user.password === password) {
        setCurrentUser(user);
      } else {
        throw new Error('Invalid Credentials!!');
      }
    } else {
      throw new Error('User does not exist!!');
    }
  };

  const logoutUser =()=>{
    setCurrentUser(null);
  }

  
  const subscribeCourse = (courseId) => {
    const course = courses.find((c) => c.id === courseId);

    if (course) {
      if (!subscribedCourses.find((c)=>c.id === course.id)) {
        setSubscribedCourses([...subscribedCourses, course]);
        return true;
      }else{
        return false;
      }
    } else {
      throw new Error('Course not found');
    }
  };

  
  
  const contextValue = {
    users,
    currentUser,
    courses,
    subscribedCourses,
    registerUser,
    loginUser,
    subscribeCourse,
    logoutUser,
    setCourses,
  };

  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseProvider };
