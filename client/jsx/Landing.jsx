import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <input className='search' type='text' placeholder='Search' />
        <Link to='/search' className='browse-all'> or Browse All</Link>
      </div>
    )
  }
  
}

module.exports = Landing