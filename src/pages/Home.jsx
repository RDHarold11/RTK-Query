import React from 'react'
import Sidebar from '../components/Sidebar'
import ItemsContainer from '../components/ItemsContainer'

const Home = () => {
  return (
    <main className='min-h-[100vh] max-w-[1300px] mx-auto grid grid-cols-3 mt-12 items-center'>
      <Sidebar></Sidebar>
      <ItemsContainer></ItemsContainer>
    </main>
  )
}

export default Home