import React from 'react';
import {Link} from 'react-router';
class LeftNav extends React.Component {


  render () {

    return(
      <div className='leftnav-wrap'>
        <h2>夏婉轩{this.props.title}</h2>
        <Link to="/" activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}>
          <span className='glyphicon glyphicon-home'></span>Home</Link>
        <Link to="blog" activeStyle={{color: '#E91E63'}}>
          <span className='glyphicon glyphicon-edit'></span>Blog</Link>
        <Link to="work" activeStyle={{color: '#E91E63'}}>
          <span className='glyphicon glyphicon-education'></span>Work</Link>
        <Link to="about" activeStyle={{color: '#E91E63'}}>
          <span className='glyphicon glyphicon-heart'></span>About</Link>
      </div>
    )
  }
}

export default LeftNav;
