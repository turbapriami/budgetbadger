import React from 'react';
import { Doughnut } from 'react-chartjs-2'


const TransactionPie = ({ data, labels }) => {
  // data = [40, 60]
  const chartData = { 
    labels: labels,
    datasets:[
    {
      label: 'test',
      data: data,
      backgroundColor: ["rgb(71, 255, 178)", "rgba(95, 0, 96, 0.8)"]
    }]
  }
  return (
    <Doughnut data={chartData} />
  )
}

export default TransactionPie;