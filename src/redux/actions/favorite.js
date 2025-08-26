export const ADD_TO_FAVORITE = "add_to_favorite";
export const REMOVE_FROM_FAVORITE = "remove_from_favorite";
export const addToFavorite = (item) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: item,
    }
}
export const removeFromFavorite = (id)=>{
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: id
    }
}