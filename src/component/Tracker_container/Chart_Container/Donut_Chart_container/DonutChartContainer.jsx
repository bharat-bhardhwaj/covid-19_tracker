import React from 'react'
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
        hoverBackgroundColor: ['lightblue', 'lightgreen', '#darkgrey'],
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
      ctx.font = 1.5+ 'em Verdana'
      ctx.textBaseline = 'middle'

      var text = confirmed,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2

      ctx.fillText(text, textX, textY)
      ctx.fillText('confirmed',textX,textY+40)
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
