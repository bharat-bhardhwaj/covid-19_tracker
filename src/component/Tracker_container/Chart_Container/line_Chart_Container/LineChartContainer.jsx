import React from 'react';
import { Line } from "react-chartjs-2";



const LineChartContainer = ({sevenData,lineChartData}) => {
  let confirmed=[]  
  let deceased =[]
  let recovered =[]
  if(!lineChartData){
    sevenData?.forEach((ele) => {
      confirmed.push(ele.dailyconfirmed)
      deceased.push(ele.dailydeceased)
      recovered.push(ele.dailyrecovered)
    })
  }
    else{
      confirmed = lineChartData.confirmed
      deceased = lineChartData.deceased
      recovered = lineChartData.recovered
    }
 
 const data = {
    labels: ["1day", "2day", "3day", "4day", "5day", "6day","7day"],
    datasets: [
      {
        label: "confirmed",
        data: confirmed,
        fill: true,
        borderColor: "blue"
      },
      {
        label:"Recovered",
        data: recovered,
        fill: false,
        borderColor: "green"
      },{
        label: "deceased",
        data: deceased,
        fill: false,
        borderColor: "grey"
      }
    ]
  };
    return (
        <div style={
            {
                // width:'500px',
                // height: '100%',
                // marginRight:'10px'
            }
        }>
            <Line data={data} options={{
          legend: {
            display: true,
          },
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 60,
        }}/>
        </div>
    )
}

export default LineChartContainer
