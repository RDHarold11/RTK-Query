import React from 'react'
import Items from './Items'
import Loading from './Loading'
import { useGetShopItemsQuery } from '../features/shopItems/apiSlice'

const ItemsContainer = () => {

    const {data: items, isLoading, isError, error} = useGetShopItemsQuery()
    if(isError){
        return <p>There's an error {error}</p>
    } else if (isLoading){
        return <Loading></Loading>
    }
  return (
    <section className='col-start-2 col-end-4'>
        <div className='grid grid-cols-3 gap-4'>
            {items.map((item) => (
                <Items {...item} key={item.id}/>
            ))}
        </div>
    </section>
  )
}

export default ItemsContainer