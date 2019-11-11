import React from 'react'

import Directory from '../../components/directory/directory'

import './homepage.scss'

const Homepage=({history})=>{

  console.log(history)


  return (

    <div className='homepage'>
    <Directory />

    </div>
  )
}

export default Homepage
