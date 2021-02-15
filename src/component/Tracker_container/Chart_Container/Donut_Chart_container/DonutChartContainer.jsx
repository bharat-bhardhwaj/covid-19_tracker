import React,{useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js'

const DonutChartContainer = ({confirmed,deceased,recovered}) => {
  const active = Number(confirmed) -(Number(deceased) + Number(recovered))
  const data = {
    labels: ['active', 'recovered', 'deceased'],
    datasets: [
      {
       
        data:[active,recovered, deceased],
        backgroundColor: ['blue', 'green', 'grey'],
        hoverBackgroundColor: ['lightblue', 'lightgreen', 'darkgrey'],
      },
    ],
  }

  

  var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
      originalDoughnutDraw.apply(this, arguments)

      var chart = this.chart.chart
      var ctx = chart.ctx
      var width = chart.width
      var height = chart.height

      // var fontSize = (height / 114).toFixed(2)
   
      ctx.font = 1.2+ 'em Verdana'
      ctx.textBaseline = 'middle'
      
      var text = confirmed,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2
      

        
      ctx.clearRect(100+10,100+13,85,76)
      ctx.fillStyle ='#000000'
      ctx.fillText(text, textX, textY)
      ctx.fillText('confirmed',textX-4,textY+40)
 
      ctx.save()
    },
  })
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          legend: {
            display: true,
          },
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 60,
        }}
      />
    </div>
  )
}

export default DonutChartContainer
