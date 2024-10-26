import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


const View = () => {
  const {id}  = useParams()
  console.log(id);

const [recipe,setRecipe] = useState({})

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipe")){
      const allRecipe = JSON.parse(sessionStorage.getItem("allRecipe"))
      setRecipe(allRecipe?.find(item=>item.id==id))
    }
  },[])
  console.log(recipe);
  
  return (
    <>
      <Header/>
          <div style={{paddingTop:'100px'}} className='flex content-center items-center mx-5'>
              <div className='grid grid-cols-2 items-center ms-5 mt-5'>
              <img width={'90%'} height={'200px'} src={recipe.image} alt="" />
             
              <div>
                  <h3 className='text-red-700 font-bold'>RID : {recipe.id}</h3>
                  <h1 className='text-5xl font-bold mb-3'>{recipe.name}</h1>
                  <h5 className='text-green-700 font-semibold ms-2 mt-1 mb-3'>{recipe.cuisine}</h5>
                  <p>
                      <span className='font-bold text-lg'>Ingredients </span>: {recipe.ingredients}
                  </p>
                  <h4 className='text-lg font-bold text-red-900 mt-2 mb-2'> Meal Type : {recipe.mealType}</h4>
                  <h5 className='text-green-700 font-bold  mt-1 mb-2'>Servings : {recipe.servings}</h5>
                  <p>
                      <span className='font-bold mt-4 mb-2'>Instructions </span>: {recipe.instructions}
                  </p>
                  <p className='text-lg font-semibold mt-3'>Rating : <span className='text-red-600'>{recipe.rating}/5</span></p>
  
                  
  
                  <div className='flex justify-between mt-5'>
                      <button className='text-white bg-blue-600 rounded p-2'>Buy Recipe</button>
                      <button className='text-white bg-green-600 rounded p-2'>Add To Favourite</button>
                      </div>
              </div>
              </div>
          </div>
    </>
  )
}

export default View