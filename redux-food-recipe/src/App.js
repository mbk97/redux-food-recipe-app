import React,{useState, useEffect} from 'react';
import './App.css';
import Recipe from './Components/Recipe/Recipe'
import { connect } from 'react-redux';
import { fetchRecipe } from './Redux/Actions/actions';

function App({recipeData,fetchRecipe}) {

  const recipes = recipeData.recipes;
  const loading = recipeData.loading;
  const error = recipeData.error



  // this sets the default search to chicken
  const [query,setQuery] = useState('sandwich') 
  
  // this allows the default query to be updated
  const [search,setSearch] = useState('')



   useEffect(() =>{
      fetchRecipe(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[query])


   const updateSearch = (e) =>{
     setSearch(e.target.value)

   }

   const getSearch = (e) =>{
      e.preventDefault()
      setQuery(search)
      setSearch('')

      if(!search){
        return alert('please Enter a food name')
      }
   }



  return (
    <div className="App">

          <div className="title-container">
            <h1>Food Recipe App</h1>
          </div>
         
            <form className='search-form' onSubmit={getSearch}>
              <input type="text" className='search-bar' value={search} onChange={updateSearch}/>
              <button type='submit' className='search-button'>search</button>
              </form>


         <div className="recipes">
               <div className="loading-indicator">
                   {loading && <h2>Loading...</h2>}
               </div>

               <div className="error">
                 {error && !loading && <h2>{error.message}</h2>}
               </div>

               {recipes.map((recipe) =>{
                 return(
                   <>
                        <Recipe 
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        url={recipe.recipe.url}
                        />
                   </>
                 )
               })}

              
           </div>     



    </div>
  );
}



const mapStateToProps = (state) => {
  return{
    recipeData:state.recipe
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
     fetchRecipe:(query) => dispatch(fetchRecipe(query))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
