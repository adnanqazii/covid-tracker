import React, { useState, useEffect } from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries'
import PieChart from './PieChart';
import Rates from './Rates';
import GDP from './GDP';
import Electricity from './Electricity';
import ElectricityBusiness from './ElectricityBusiness';
export default function InfoPanel({ currentScreen, search }) {
    const [globalData, setGlobalData] = useState({});
    
  
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            delete data.Countries;
            setGlobalData(data.Global);
            
        }
        getData();
    }, []);
   
    let data;
        if (currentScreen === 0)
            return <GlobalStats globalData={globalData} />
        else if (currentScreen === 1)
            data= <AllCountries  search={search} />

        else if(currentScreen===2) {
            data= <PieChart globalData={globalData} />
           
        }
        else if(currentScreen===3) {
            data=<Rates />
        }  
        else if(currentScreen===4) {
            data=<GDP />
        } 
        else if(currentScreen===5) {
            data=<Electricity />
        }   
        else if(currentScreen===6) {
            data=<ElectricityBusiness />
        }   
        return <div>
        {data}
    </div>

}
