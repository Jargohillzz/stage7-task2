import React from 'react'

const BlogCard = ( {blog} ) => {
    return (
        <div className="card" key={blog.id}>
            <div className="card-title">{blog.author}</div>
            <div className="card-body">
                <p>{blog.preview}</p>
            </div>
        </div>
    )
}

export default BlogCard
