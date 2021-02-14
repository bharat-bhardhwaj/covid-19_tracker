export const  getAllDataReducer =(state={
   
},action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state, 
                statewise: action.payload.statewise,
      
            }
        case 'ADD_CASE_DATA':
            return {
                ...state,
                casesTime:action.payload.casesTime
            }
        case 'ADD_SEVEN_DATA':
            return {
                ...state,
                sevenData: action.payload
            }
        default:
            return state
    }
}