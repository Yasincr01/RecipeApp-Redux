import React from 'react'
import Header from '../components/Header'

const Pnf = () => {
  return (
    <>
    <Header/>
        <div style={{paddingTop:'100px',height:'80vh'}} className='flex justify-center items-center flex-col'>
                    <h1 className='font-bold text-8xl mb-1 mt-2 text-center'>404</h1>
            <img height={'400px'} width={'400px'} src="https://i.pinimg.com/originals/a3/59/56/a35956ec9f42082d3eeee4ba1b506060.gif" alt="" />
            <h1 className='font-bold text-4xl mb-2'>Looks Like You're Lost3</h1>
            <p className='mb-2'>The Page your looking for is not available</p>
            <Link to={'/'} className='bg-green-600 p-2 text-white rounded'>Home</Link>
        </div>
    </>
  )
}

export default Pnf