import { FETCH_RECIPE_FAILURE, FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS } from "../Actions/actionTypes";


const initialState = {
    recipes:[],
    loading:false,
    error:""
}


export const recipeReducer = (state = initialState,action) =>{

   switch(action.type){
       case FETCH_RECIPE_REQUEST:
           return{
               ...state,
               loading:true,
               error:"",
               recipes:[]
           }

           case FETCH_RECIPE_SUCCESS:
               return{
                   ...state,
                   loading:false,
                   error:false,
                   recipes:action.payload
               }

          case FETCH_RECIPE_FAILURE:
              return{
                  ...state,
                  loading:false,
                  error:action.payload
              }

           default: return state
   }


}