import React, { useState,useEffect } from 'react';
import './App.css';
import DataOfValutebi from './components/DataOfValutebi'
const App =()=> {
    const [dataOfValuts, setDataOfValuts]= useState([])
    useEffect(()=>{
        fetch('http://www.valutebi.ge/rates').then((response)=>{
            return response.json()
        }).then((data)=>{
            setDataOfValuts(data)
        })
    },[])
    const monacemebi = dataOfValuts.map((value,index)=>(
        <DataOfValutebi
         key={value.name}
         ratesOfUSD={value.rates[index=0]}
         rateOfEUR={value.rates[index=1]}
         rateOfGBP={value.rates[index=2]}
         rateOfTRY={value.rates[index=3]}
         name={value.name}

        />

        ))
    console.log(dataOfValuts)
    console.log(monacemebi)
    return <ul>{monacemebi}</ul>
    // return <div>hello</div>
}
export default App;
