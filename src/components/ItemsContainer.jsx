import React from 'react'
import Items from './Items'

const ItemsContainer = () => {
  return (
    <section className='col-start-2 col-end-4'>
        <div className='grid grid-cols-3 gap-4'>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
        </div>
    </section>
  )
}

export default ItemsContainer