import React, { useState, useEffect } from 'react'
import FundDetails from './FundDetails'
import data from '../../data.json';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs';
import { IconButton} from '@material-ui/core';
function Page({search,goto}) {

    const dd=data;
    const [currentPage,setPage]=useState(20);
    const [list,setList]=useState([]);

    useEffect(() => {
        setList(dd?.result?.funds)
        setPage(goto+10)
        console.log("Go to changed");

        return () => {
            // 
        }
    }, [Page,goto])

    return (
        <div className="Plans">
        {search!==""?list.slice(currentPage,currentPage+20).map(i=>{
            if(search==="oneyearReturn" && i.oneyearReturn>3){
                return <FundDetails key={i.UID} details={i}/>
            }
            else if(search==="threeyearReturn" && i.threeyearReturn>3)
                return <FundDetails key={i.UID} details={i}/>            
            else if(search==="fiveyearReturn" && i.fiveyearReturn>3)
                return <FundDetails key={i.UID} details={i}/>       
            else if((i.name).indexOf(search.toUpperCase())!==-1)
                return <FundDetails key={i.UID} details={i}/>   
            return null;
        }):
        list.slice(currentPage,currentPage+20).map(i=>{

                return <FundDetails key={i.UID} details={i}/>
        })
        }
        </div>
    )
}

export default Page
