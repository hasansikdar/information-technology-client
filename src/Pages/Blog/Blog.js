import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const blogs = useLoaderData();
    const {question, answer, id} = blogs;
    console.log(blogs);
    return (
        <div className='blogs'>
            this is blog
            {
                blogs.map(blog => <div key={blog.id}>
                    <div className='blog'>
                        <h3>{blog?.question}</h3>
                        <p>{blog?.answer}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blog;