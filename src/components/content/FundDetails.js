import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { FcComboChart } from 'react-icons/fc';
import { IconButton} from '@material-ui/core';
import { Link } from 'react-router-dom';

function FundDetails({details}) {
    const{name,FundType}=details;
    // console.log(details.FundType);
    // console.log(props.details);
    const[showDetails,setShow]=useState(false);
    const toggle=()=>{
        setShow(!showDetails)
    }
    return (
        <div className="MutualFund">
            <div className="overView">
                <img src={`https://picsum.photos/id/${details.UID}/200/300`} alt="name" className="house_img"></img>
                {/* <Link to="/new"> */}
                <div className="house_details">
                 <h2 className="fund_name">{name}</h2>
                    <p className="fund_details">{FundType}</p>
                </div>
                <IconButton>
                    <a href={`${details.FundUrl}`}>
                <FiChevronRight className="icon"/>
                </a>
                </IconButton>
            </div>
            <div className={showDetails?"details":"hide"}>
                <div className="deep-details">
                    <FcComboChart className="details_chart"/>
                </div>
                <div className="deep-details">
                <p>Average 3Y Rolling Return</p>
                {details.threeyearReturn>0?<h2>{details.threeyearReturn} %</h2>:<span>Not Available</span>}
                </div>
                <div className="deep-details">
                <p>3Y Standard Deviation</p>
                <h2>7.5%</h2>
                </div>
                <div className="deep-details">
                <p>1Y Return</p>
                {details.oneyearReturn>0?<h2>{details.oneyearReturn} %</h2>:<span>Not Available</span>}
                </div>
            </div>
            <div className="options">
                <button className="toggleDetails" onClick={toggle}>{showDetails?<span>Hide Performance Details <BsChevronDown className="hide-details"/></span>:<span>Show Performance Details <BsChevronDown/></span>}</button>
                <button className="investButton"><GiShoppingCart className="addToCart" /> <span className="invest_now">Invest Now</span></button>
            </div>
        </div>
    )
}

export default FundDetails
