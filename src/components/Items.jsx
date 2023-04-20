import React from 'react'
import { useDeleteShopItemsMutation } from '../features/shopItems/apiSlice'

const Items = ({id, description, img, price, category}) => {
  const [deleteItem] = useDeleteShopItemsMutation()
  return (
    <div className=''>
        <div>
            <img className='max-w-[200px]' src={img} alt={description} />
        </div>
        <div>
            <p className='my-1 capitalize'>{description}</p>
            <div className='flex gap-4'>
              <h3 className='font-bold text-[21px]'>${price} USD</h3>
              <button className='text-[#FF6969]' onClick={() => deleteItem(id)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Items