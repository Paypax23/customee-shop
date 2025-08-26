import {LOG_IN,LOG_OUT} from '../actions/loginAction'

const initialState = [];

export const loginReducer = (state = initialState, action) => {
    const user = action.payload;
    
    switch (action.type) {
        case LOG_IN: {
            
            return user;
        }
        case LOG_OUT:
            state = []
           return  state;
        default : return state;
    }
}


