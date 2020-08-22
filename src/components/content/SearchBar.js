import React, { useState, useEffect } from 'react'
import { GoSearch } from 'react-icons/go';

function SearchBar(props) {
    const[sort,setSort]=useState("");
    const[screener,setScreener]=useState(false);
    const[searchText,setSearch]=useState(false);
   
    useEffect(() => {
        console.log("logger");
            props.search(sort)
        
        return () => {
            // 
        }
    }, [sort])


    const clearFilter=()=>{
        setSort("");
    }
    return (
        <div className="Search">
            {searchText?<input placeholder="Type to Search.." className="input"/>:<>
           <button className="filter" onClick={clearFilter}>All Funds </button>
           <button className="filter" onClick={()=>setScreener(!screener)}>Screener</button>
           <button className="filter">Filter by AMC </button>
           </> }
            <div onClick={()=>setSearch(!searchText)} className={searchText?"search-icon search-icon-disable":"search-icon"}>
            <GoSearch />
            </div>
            <div className={screener?"Screener show-screener":"Screener hide-screener"}>
                <ul>
                    <li onClick={()=>{setSort("");setScreener(false)}} > clear Filter</li>
                    <li onClick={()=>{setSort("fiveyearReturn");setScreener(false)}} value="5Y-BEST">Best 5-year return</li>
                    <li onClick={()=>{setSort("threeyearReturn");setScreener(false)}} value="3Y-BEST">Best 3-year return</li>
                    <li onClick={()=>{setSort("oneyearReturn");setScreener(false)}} value="1Y-BEST">Best 1-year return</li>
                </ul>
            </div>
        </div>
    )
}

export default SearchBar
