import React, { useState, useEffect } from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries'
import PieChart from './PieChart';

export default function InfoPanel({ currentScreen, search }) {
    const [globalData, setGlobalData] = useState({});
    const [countryData, setCountryData] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setCountryData(Object.values(Object.values(data.countryitems[0])));
        }
        getData();
        
    },[]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            delete data.results[0].source;
            setGlobalData(data.results[0]);
            
        }
        getData();
    }, []);
    let data;
        if (currentScreen === 0)
            data= <GlobalStats globalData={globalData} />
        else if (currentScreen === 1)
            data= <AllCountries  globalData={countryData} search={search} />

        else
            data= <PieChart globalData={globalData} />
            return <div>
                {data}
            </div>


}
