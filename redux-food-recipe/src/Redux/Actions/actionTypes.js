export const FETCH_RECIPE_REQUEST='FETCH_RECIPE_REQUEST'
export const FETCH_RECIPE_SUCCESS='FETCH_RECIPE_SUCCESS'
export const FETCH_RECIPE_FAILURE='FETCH_RECIPE_FAILURE'


export const fetchRecipeRequest = () => ({
    type:FETCH_RECIPE_REQUEST
})


export const fetchRecipeSuccess = (data) => ({
    type:FETCH_RECIPE_SUCCESS,
    payload:data
})


export const fetchRecipeFailure = (error) => ({
    type:FETCH_RECIPE_FAILURE,
    payload:error
})