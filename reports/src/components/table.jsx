import React from 'react'
import JsonData from './data.json' // static file data 
 function Table({data}){
    let rows = cleanData(data.body);
    const table=rows.map(
        (row)=>{
            return(
                <div className='Grid-Data-Row'>
                    <div>{row.title}</div>
                    <div>{row.onTrackRate.Q1}</div>
                    <div>{row.onTrackRate.Q2}</div>
                    <div>{row.onTrackRate.Q3}</div>
                    <div>{row.onTrackRate.Q4}</div>
                </div>
            )
        })

    //check if data is coming back as a string if so format it and add it to the array for the mapping of values 
    function cleanData(data){
        //first check is we have a string 
        const isString = typeof data === 'string' ; // type check
        let obj = [];
        if(isString == true){
            let str = '[' + data + ']'; // the base string in the provided json was missing some elements in order to function as a proper json so i added them in 
            obj = JSON.parse(str);
        }
        return obj;
    }
    // return our component to be rendered as html
    return(
        <div className='Grid-Container'>
            <div className='Grid-Header'>
                <p>Title</p>
                <p>Q1</p>
                <p>Q2</p>
                <p>Q3</p>
                <p>Q4</p>
            </div>
            <div className='Grid-Dynamic-Data'>
                {table}
            </div>            
        </div>
    )
 }
 
 export default Table;