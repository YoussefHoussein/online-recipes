import React from 'react'
import './style.css'
import {AiFillHeart, AiFillMessage, AiOutlineShareAlt} from 'react-icons/ai'
const RecipeCard = () => {
  return (
    <div className='recipe-card flex center'>
        <div className="recipe-container flex column spaceBetween">
            <div className="images"></div>
            <h2>Name</h2>
            <h5>Cuisine</h5>
            <div>
                ingredients: 
                <ul>
                <li>rice</li>
                <li>tomato</li>
            </ul>
            </div>
            
            <div className='reaction flex'>
                <AiFillHeart className='icon'/>
                <AiFillMessage className='icon'/>
                <AiOutlineShareAlt className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard