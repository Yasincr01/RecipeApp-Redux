import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipes } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
    const dispatch = useDispatch()
  return (
    <nav className='flex  bg-green-900 fixed w-full p-5'>
      <Link className='text-white font-bold text-2xl' to={'/'}><i class="fa-solid fa-utensils me-2 text-yellow-500"></i>Recipe App</Link>
      <ul className='flex-1 text-right'>
       {
        insideHome &&  <><li className='list-none inline-block px-5'><input onChange={e => dispatch(searchRecipes(e.target.value.toLowerCase()))} style={{ width: '300px' }} className='rounded p-1' type="text" placeholder='Search Recipe Here' /></li><Link className='text-white font-semibold text-xl' to={'/'}><i class="fa-solid fa-phone me-1"></i>Contact Us</Link><ul className='flex-1 text-right'></ul></> 
       }     
      </ul>
      </nav>
  )
}

export default Header