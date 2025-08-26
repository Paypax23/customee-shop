export const LOG_OUT = "LOGOUT" ; 
export const LOG_IN =  "LOGIN";
export const logOut = ()=>{
   return {
        type:LOG_OUT
    }
}
export const logIn = (item)=>{
    return {
        type:LOG_IN,
        payload:item,
    }
}



