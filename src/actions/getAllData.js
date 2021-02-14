import axios from 'axios';

export const getData =() => async (dispatch,getState) => {

    try {

        const {data } = await axios.get('https://api.covid19india.org/data.json');
        const newData ={}
        
        newData.statewise=data["statewise"]
        
        dispatch({
            type:'ADD_DATA',
            payload:newData
        })
        
    } catch (error) {
        console.log(error)
    }

    

}
export const gettotalData =() => async (dispatch,getState) => {

    try {

        const {data } = await axios.get('https://api.covid19india.org/data.json');
        const newData ={}
        let cases = data["cases_time_series"]

        newData.casesTime= cases[cases.length -1]
        
        dispatch({
            type: 'ADD_CASE_DATA',
            payload:newData
        })
        
    } catch (error) {
        console.log(error)
    }

    

}


export const getLastsevenData =() => async (dispatch,getState) => {

    try {

        const {data } = await axios.get('https://api.covid19india.org/data.json');
        const newData =[]
        let cases = data["cases_time_series"]

        for(let i=cases.length-1; i>=cases.length-7; i--){
            newData.unshift(cases[i])
        }
        
        dispatch({
            type: 'ADD_SEVEN_DATA',
            payload:newData
        })
        
    } catch (error) {
        console.log(error)
    }

    

}
