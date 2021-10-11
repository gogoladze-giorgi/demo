// import classes from './DataOfValutebi.module.css'
import React, {Fragment} from 'react'

const DataOfValutebi =(props)=> {
    console.log( props.ratesOfUSD)
    return <Fragment>
    {props.ratesOfUSD.map((valueOfUSD)=>(
           <li> {valueOfUSD.timestamp}</li>
        ))}
    </Fragment>
}
export default DataOfValutebi;
