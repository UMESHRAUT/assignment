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
            console.log(search);
            if(search==="oneyearReturn"){
            if(dd.result?.funds[i].oneyearReturn>3){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }}
            if(search==="threeyearReturn"){
            if(dd.result?.funds[i].threeyearReturn>3){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }}
            if(search==="fiveyearReturn"){
            if(dd.result?.funds[i].fiveyearReturn>3){
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
            }}
        }):
        [...Array(currentPage).keys()].map(i=>{
                return <FundDetails key={dd.result?.funds[i].UID} details={dd.result?.funds[i]}/>
        })
        }
        
    <FiChevronDown className="next" onClick={()=>{setPage(currentPage+20);console.log(currentPage)}}><IconButton /></FiChevronDown>
    
        </div>
    )
}

export default PlanContainer
