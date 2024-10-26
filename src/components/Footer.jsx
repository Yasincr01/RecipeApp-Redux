import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'150px'}} className=' mt-5 w-full bg-green-900 text-white p-4'>
      <div className="flex justify-between">
          <div style={{width:'400px'}} className='intro'>
            <h5 className='text-xl font-bold mb-2'>
            <i class="fa-solid fa-utensils me-2 text-yellow-500"></i>Recipe APP</h5>
            <p>Designed and Built with all Love in the World by
               the Luminar Team with the Help of our
                Contributors.</p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>
          <div className="flex flex-col">
            <h5 className='text-xl font-bold'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} >About</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Orders</Link>
          </div>
          <div className="flex flex-col">
            <h5 className='text-xl font-bold'>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
            <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
            <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
          </div>
          <div className="flex flex-col">
          <h5 className='text-xl font-bold'> Contact Us </h5>
          <div className='flex mt-2'>
            <input placeholder='Enter Your Email Here...' type='text' className='form-control' />
            <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right '></i></button>      
          </div>
            <div className="icons flex justify-between mt-3">
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-solid fa-phone'></i></a>

            </div>
          </div>
      </div>
      <p className='text-center mt-3 text-white'>CopyRight &copy; June 2024 Batch, Recipe APP/Developed By Yasin. Built with React Redux</p>
    </div>
  )
}

export default Footer