import { fetchRecipeFailure, fetchRecipeRequest, fetchRecipeSuccess } from "./actionTypes";
import axios from 'axios'
import { APP_ID} from "../../utils/api";
import { APP_KEY } from "../../utils/api";

export const fetchRecipe = (query) =>{
    return async (dispatch) =>{
        dispatch(fetchRecipeRequest())

        try {
            const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

            const data = response.data.hits
            dispatch(fetchRecipeSuccess(data))
            
        } catch (error) {
            dispatch(fetchRecipeFailure(error))
        }
    }
}