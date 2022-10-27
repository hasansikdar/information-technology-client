import React from 'react';
import { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllCourses from '../Pages/Shared/Courses/AllCourses/AllCourses';
import SingleCourse from '../Pages/Shared/Courses/AllCourses/SingleCourse/SingleCourse';
import Course from '../Pages/Shared/Courses/Course/Course';
import Instructor from '../Pages/Shared/Courses/Course/Related-Courses/Rcourse.js/CourseDetails/CourseDescription/Instructor/Instructor';
import Overview from '../Pages/Shared/Courses/Course/Related-Courses/Rcourse.js/CourseDetails/CourseDescription/Overview/Overview';
import Reviews from '../Pages/Shared/Courses/Course/Related-Courses/Rcourse.js/CourseDetails/CourseDescription/Reviews/Reviews';
import CourseDetails from '../Pages/Shared/Courses/Course/Related-Courses/Rcourse.js/CourseDetails/CourseDetails';
import RelatedCourses from '../Pages/Shared/Courses/Course/Related-Courses/RelatedCourses';
import Courses from '../Pages/Shared/Courses/Courses';
import Login from '../Pages/Shared/Login/Login';
import Register from '../Pages/Shared/Register/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('http://localhost:5000/blog')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/related-courses',
                element: <RelatedCourses></RelatedCourses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]
    },
    {
        path: '*',
        element: <Error>404 Page Not Found</Error>
    },
    {
        path: '/course-details/:id',
        loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
        element: <CourseDetails></CourseDetails>,
        children: [
            {
                path: '/course-details/:id/',
                element: <Overview></Overview>,
                loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
            },
            {
                path: '/course-details/:id/overview',
                element: <Overview></Overview>,
                loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
            },
            {
                path: '/course-details/:id/instructor',
                element: <Instructor></Instructor>,
                loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
            },
            {
                path: '/course-details/:id/reviews',
                element: <Reviews></Reviews>,
                loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
            },
            
        ]
    },
    {
        path:'/courses',
        element:<Courses></Courses>,
        loader: () => fetch('http://localhost:5000/courses'),
        children: [
            {
              path: '/courses',
              element:<AllCourses></AllCourses>,
              loader: () => fetch('http://localhost:5000/courses/')
            },
            {
                path: '/courses/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/courses/course',
                element: <Course></Course>
            }
        ]
    }
    
    
])