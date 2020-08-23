import React, { useState } from 'react'
import FundDetails from './FundDetails'
import data from '../../data.json';
import { FiChevronDown } from 'react-icons/fi';
import { IconButton} from '@material-ui/core';

function PlanContainer({search}) {
    
    const dd=data;
    const [currentPage,setPage]=useState(20);
    return (
        <div className="Plans">


        {search!==""?[...Array(currentPage).keys()].map(i=>{
            if(search==="oneyearReturn" && dd.result?.funds[i].oneyearReturn>3){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }
            else if(search==="threeyearReturn" && dd.result?.funds[i].threeyearReturn>3){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }
            else if(search==="fiveyearReturn" && dd.result?.funds[i].fiveyearReturn>3){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }
            else if((dd.result?.funds[i].name).indexOf(search.toUpperCase())!==-1){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }
        }):
        [...Array(currentPage).keys()].map(i=>{
                console.log(i);
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
        })
        }
        
    <FiChevronDown className="next" onClick={()=>{setPage(currentPage+20);console.log(currentPage)}}><IconButton /></FiChevronDown>
    
        </div>
    )
}

export default PlanContainer
