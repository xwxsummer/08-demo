import React from 'react';
import {Link} from 'react-router'

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
      <Link to='/' activeStyle={{color: '#FF5722'}} onlyActiveOnIndex={true} >
      <span className='glyphicon glyphicon-home'></span><br/>Home</Link>
      <Link to='/blog' activeStyle={{color: '#FF5722'}}>
      <span className='glyphicon glyphicon-edit'></span><br/>Blog</Link>
      <Link to='/work' activeStyle={{color: '#FF5722'}}>
      <span className='glyphicon glyphicon-education'></span><br/>Work</Link>
      <Link to='/about' activeStyle={{color: '#FF5722'}}>
      <span className='glyphicon glyphicon-heart'></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
