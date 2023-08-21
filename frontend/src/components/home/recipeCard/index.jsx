import React from 'react'
import './style.css'
import {AiFillHeart, AiFillMessage, AiOutlineShareAlt} from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from '../../../assessts/loginImage.jpg'

const RecipeCard = () => {
  return (
    <div className='recipe-card flex center'>
        <div className="recipe-container flex column spaceBetween">
            <div className="images">
                <Carousel>
                    <div>
                        <img src={image} alt="Image 1" />
                    </div>
                    <div>
                        <img src={image} alt="Image 2" />
                    </div>
                    <div>
                        <img src={image} alt="Image 3" />
                    </div>
                </Carousel>
            </div>
            
            <h2>Name</h2>
            <h5>Cuisine</h5>
            <div>
                ingredients: 
            <ul>
                <li>rice</li>
                
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