import React from 'react';
import BlogCard from '../component/BlogCard';

class Blog extends React.Component {

  render () {
  
    let lists=data.map((item,i)=><BlogCard {...item} key={i} />)
    return(
      <div className="blog-wrap">
        {lists}
      </div>


    )
  }
}

export default Blog;
