import React, { useState, useEffect } from 'react'
import FundDetails from './FundDetails'
import data from '../../data.json';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs';
import { IconButton, Icon} from '@material-ui/core';
import Page from './Page';
// import 'react-vtua'

function PlanContainer({search}) {
    
    const dd=data;
    const [currentPage,setPage]=useState(parseInt(20));
    const [list,setList]=useState([]);
    let id=undefined;

    useEffect(() => {
        var car=window.location.pathname;
        id=car.split("/");
        console.log(id.length);
        if(parseInt(id[2])>0){
        setPage(parseInt(id[2]))
            console.log(id[2]);
    }
        // window.location.href=14;
        setList(dd?.result?.funds)
        return () => {
            // 
        }
    }, [window.location.href])
        console.log(list.length);
    return (
        <div className="Plans">
        <Page search={search} goto={currentPage}/>
        <div className="pageChanger">
        <IconButton><BsChevronLeft className="next" onClick={()=>{window.location.href=(`/assignment/${currentPage-20}`);}}></BsChevronLeft></IconButton>
        <IconButton><BsChevronRight className="next" onClick={()=>{window.location.href=(`/assignment/${currentPage+20}`)}}></BsChevronRight></IconButton>
        </div>
        </div>
    )
}

export default PlanContainer
