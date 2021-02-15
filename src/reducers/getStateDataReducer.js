export const  getStateDataReducer =(state={
   
},action) => {
    switch(action.type){
       case 'UPDATE_STATE_DATA':
           return {
               ...state,
               stateData:action.payload
           }
        case 'DELETE_STATE_DATA':
            return {
                ...state,
                stateData:''
            }
        case 'ADD_STATE_SEVEN_DATA':
            return {
                ...state,
                stateSevenData:action.payload
            }
        case 'LINE_CHART_DATA':
            return {
                ...state,
                LineChartData:action.payload
            }
        case 'DELETE_LINE_DATA':
            return {
                ...state,
                LineChartData:''
            }

        default:
            return state
    }
}