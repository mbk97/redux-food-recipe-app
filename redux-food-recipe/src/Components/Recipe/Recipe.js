import React from 'react'
import './recipe.css'

const Recipe = ({title,calories,image, ingredients,url}) => {
    return (
        <div  className="recipe">
            <img className='image' src={image} alt="" />
            <h1>{title}</h1>
            <ol >
               {
                  ingredients.map(ingredient =>{
                      return(
                          <li className='ingredients-list'>{ingredient.text}</li>
                      )
                  })
               }
            </ol>
            <div className="calories">
                 <p>calories:{calories}</p>
            </div>

                <div className="link">
                     <a href={url} className='see-more'>See more</a>
                </div>
        </div>
    )
}

export default Recipe
