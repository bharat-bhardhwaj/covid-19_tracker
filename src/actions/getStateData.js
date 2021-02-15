import axios from 'axios';
export const updatestateData =(state,confirmed,recovered,deceased) => (dispatch,getState) => {
 dispatch({
     type:'UPDATE_STATE_DATA',
     payload:{
         state,
         confirmed,
         deceased,
         recovered
     }
 })
}
export const DeleteStateData = () =>(dispatch)=> {
    dispatch({
        type:'DELETE_STATE_DATA'
    })
}

export const getLastStatesevenData =() => async (dispatch,getState) => {

    try {

        const {data } = await axios.get('https://api.covid19india.org/states_daily.json');
        const newData =[]
        let cases = data["states_daily"]

        for(let i=cases.length-1; i>=cases.length-21; i--){
            newData.unshift(cases[i])
        }
        
        dispatch({
            type: 'ADD_STATE_SEVEN_DATA',
            payload:newData
        })
        
    } catch (error) {
        console.log(error)
    }

    

}

export const lineChartData =(stateCode) =>(dispatch,getstate)=>{
    const ans = getstate().getStateDataReducer.stateSevenData;
    let confirmed=[]
    let deceased=[]
    let recovered=[]

    ans.forEach((ele => {
        if(ele["status"]=='Confirmed'){
            confirmed.push(ele[stateCode])
        }else if(ele["status"]=='Recovered'){
            deceased.push(ele[stateCode])
        }else{
            recovered.push(ele[stateCode])
        }
    }))

 

    dispatch({
        type:'LINE_CHART_DATA',
        payload:{
            confirmed,
            deceased,
            recovered
        }
    })
}

export const  DeleteLineData =() => (dispatch) => {

    dispatch({
        type:'DELETE_LINE_DATA'

    })
}


