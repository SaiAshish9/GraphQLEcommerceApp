import React from 'react'

import CollectionItem from '../item/item'

import './preview.scss'
const CollectionPreview=({title,items})=>(
  <div className='collection-preview' >

<h1 className='title'> {title.toUpperCase()}</h1>
<div className='preview'>
{
  items
  .filter((item,idx)=>idx<4)
  .map(({id,...other})=>(
    <CollectionItem key={id}
   {...other}

    />
  ))
}
</div>

  </div>
)


export default CollectionPreview
