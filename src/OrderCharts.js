import React from 'react'
import { GoogleCharts } from "google-charts"

const OrderCharts=({orders})=>{
    
    GoogleCharts.load(drawChart)
    const arr = [['number of orders', 'customers count']]
    for(const key in orders){
        arr.push([key, orders[key]])
    }

    function drawChart() {
        const data = GoogleCharts.api.visualization.arrayToDataTable(arr)                  
        const options = {
            backgroundColor:'#FBE0C3'
        }
        const chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'))
        chart.draw( data , options);
    }

    return (
            <div id = 'piechart'  
                style={{width: '500px' , height: '400px', marginTop:'0px' }} 
            >
            </div>
    )
}

export default OrderCharts