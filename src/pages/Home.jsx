import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'

const Home = () => {
    const dispatch = useDispatch()

    const { allRecipe, loading, error } = useSelector(state => state.recipeReducer)
    // console.log(allRecipe, loading, error);

    const [currentPage,setCurrentPage] = useState(1)
    const recipesPerPage = 8
    const totalPage = Math.ceil(allRecipe?.length/recipesPerPage)
    const currentPageLastRecipeIndex = currentPage * recipesPerPage
    const currentPageFirstRecipeIndex = currentPageLastRecipeIndex - recipesPerPage
    const visibleRecipeCards = allRecipe?.slice(currentPageFirstRecipeIndex,currentPageLastRecipeIndex)

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [])

    const navigateToNextPage = ()=>{
        if(currentPage!=totalPage){
            setCurrentPage(currentPage+1)
        }
    }

    const navigateToPrevPage = ()=>{
        if(currentPage!=1){
            setCurrentPage(currentPage-1)
        }
    }

    return (
        <>
            <Header insideHome={true} />

            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>

                {
                    loading ?
                        <div className='flex flex-col justify-center items-center my-5 text-lg'>
                            <img width={'500px'} className='me-3' src="https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif" alt="" />
                            <h1 className='text-green-800 font-bold text-5xl'>Loading...</h1>
                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                               {
                                allRecipe?.length>0 ?
                                visibleRecipeCards.map(recipes=>(
                                    <div key={recipes?.id} className='rounded border p-4 shadow'>
                                    <img width={'100%'} height={'150px'} src={recipes.image} alt="" />
                                    <div className='text-center'>
                                        <h3 className='text-xl font-bold'>{recipes.name}</h3>
                                        <Link className='bg-green-900 rounded p-1 mt-3 text-white inline-block' to={`${recipes?.id}/view`}>View More</Link>
                                    </div>
                                </div>
                                ))
                                :
                                <div style={{width:'100vw',height:'50vh'}} className='flex font-bold justify-center items-center text-red-700 my-5 text-5xl  '><i class="fa-solid fa-circle-exclamation me-3 text-4xl"></i>Recipes Not Found</div>
                                }                        
                            </div>

                            <div className="text-center text-2xl font-bold my-20">
                                <span onClick={navigateToPrevPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
                                <span>{currentPage} of {totalPage}</span>
                                <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Home