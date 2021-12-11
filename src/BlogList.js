import React from 'react'
import BlogCard from './BlogCard';
// import { useState } from 'react';

const BlogList = () => {
    // const [name, setName] = useState('Bola');
    // const [age, setAge] = useState(25)
    // const handleClick = () =>{
    //     setName('Jargo');
    //     setAge(27);
    // }
    const blogs = [
        {
            author: 'Hillz',
            id: 1,
            preview: 'Phasellus ut eleifend nisi, sed tincidunt metus. Proin porta faucibus elit in molestie. Donec posuere, sapien sit amet tristique laoreet, orci erat  dignissim risus. Vestibulum auctor odio non laoreet dictum. Sed aliquet lacus fermentum, blandit urna et, aliquam lectus.'
        },
        {
            author: 'Stampeder',
            id:2,
            preview: 'Phasellus ut eleifend nisi, sed tincidunt cursus non. In rutrum blandit consectetur. Vestibulum id dignissim risus. Vestibulum auctor odio non laoreet dictum. Sed aliquet lacus fermentum, blandit urna et, aliquam lectus.'
        },
        {
            author: 'longidor',
            id: 3,
            preview: 'Phasellus ut eleifend nisi, sed tincidunt metus. Proin porta faucibus elit in molestie. Donec posuere, sapien sit amet tristique laoreet, orci erat semper nunc, id interdum odio nibh vel massa. Pellentesque fermentum elit ante, quis venenatis ligula.'
        }
    ];

    // const content = blogs.map(blog => (
    //     <div className="card" key={blog.id}>
    //         <div className="card-title">{blog.author}</div>
    //         <div className="card-body">
    //             <p>{blog.preview}</p>
    //         </div>
    //     </div>
    // ));


    return (
        <div>
            <h1>Welcome to my Blog!</h1>
            <h2>try and be happy</h2>
            {/* <p>Hello, {name}. You are {age} years old.</p>
            <button onClick={handleClick}>click me </button> */}
            {
                blogs.map( blog => (
                    <BlogCard blog={ blog }/>
                ))
            }
        </div>
    )
}

export default BlogList
