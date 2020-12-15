import React from 'react';
import {Pie} from 'react-chartjs-2';



export default function PieChart({globalData}) {
    let keys=Object.keys(globalData);
    keys=keys.map(key=>key.replace(/_/g,' '));
    const data = {
        labels: [
            ...keys
        ],
        datasets: [{
            data: Object.values(globalData),
            backgroundColor: [
            ...keys.map(key=>{
           
                return "#"+Math.floor(Math.random()*16777215).toString(16)
            })
            ],
            hoverBackgroundColor: [
                ...keys.map(key=>{
                  
                    return "#"+Math.floor(Math.random()*16777215).toString(16)
                })
            ]
        }]
    };
    return (
      <div style={{textAlign:'center'}}>
        <h2>Covid19 Stats</h2>
        <Pie data={data} />
      </div>
    );
};