import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favorite";

const initialState = {
    items: [],
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                return {
                    ...state
                };
            }
            return { ...state, items: [...state.items, item] };


        }
        case REMOVE_FROM_FAVORITE: {
             return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
        }
        default: return state;
    }
}

