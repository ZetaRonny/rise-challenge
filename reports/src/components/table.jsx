import React from 'react'
import JsonData from './data.json' // static file data 
function Table({data}){
    let rows = cleanData(data.body);
    const table=rows.map(
        (row, index)=>{
            return(
                <div className='Grid-Data-Row'>
                    <div className='Demographic' key={row}><span>{row.title}</span></div>
                    <div key={index} data-value={row.onTrackRate.Q1}>{row.onTrackRate.Q1}%</div>
                    <div key={index} data-value={row.onTrackRate.Q2} className={ compareScores(row.onTrackRate.Q1, row.onTrackRate.Q2) }>{row.onTrackRate.Q2}%</div>
                    <div key={index} data-value={row.onTrackRate.Q3} className={ compareScores(row.onTrackRate.Q2, row.onTrackRate.Q3) }>{row.onTrackRate.Q3}%</div>
                    <div key={index} data-value={row.onTrackRate.Q4} className={ compareScores(row.onTrackRate.Q3, row.onTrackRate.Q4) }>{row.onTrackRate.Q4}%</div>
                </div>   
            )
        })

    /**
     * @param {string} data           data from out api call.
     * @return {array} obj            our newly formatted object for mapping  
     */
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
    /**
     * @param {integer} previous           previous scores.
     * @param {integer} current            current scores.
     * @return {string} color              the color associated with the score.
     */
    function compareScores(previous, current){
        let color = 'black';
        if(current - previous <= -5){   //drop in 5 percent
            color = 'red';
        }
        else if(current - previous  >= 5){  //increase in 5 percent
            color = 'green';
        }

        return color;    
    }


    // return our component to be rendered as html
    return(
        <div className='Grid-Container'>
            <div className='Grid-Header'>
                <p>Group</p>
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