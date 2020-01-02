import React from 'react'

import Directory from '../../components/directory/directory'

import './homepage.scss'

import {HomepageContainer} from './homepage.styles.js'

const Homepage=({history})=>{



  return (

    <HomepageContainer>
    <Directory />

    </HomepageContainer>
  )
}

export default Homepage
