import{ FaPlus}  from 'react-icons/fa';

import './Footer.css';

export default function Footer(){
    return(
        <div className="footer">
            <button onClick={()=>{alert(` Showing the results it takes some time` )}}>All Orders</button>
            <button onClick={()=>{alert(" Showing the results it takes some time")}}>Pending</button>
            <button onClick={()=>{alert( "Showing the results it takes some time")}}>Reviewed</button>
            <button onClick={()=>{alert(" Showing the results it takes some time")}}>Arrived</button>
           <button className='iconPlus' onClick={()=>{alert("can't add a new one now")}}><FaPlus/></button> 

        </div>
    );
}