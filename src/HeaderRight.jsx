import { useState } from 'react';
import {
  FaSearch,
  FaUser,
  FaPlus,
  FaBell,
  FaShareAlt,
  FaUpload,
  FaDownload 
} from 'react-icons/fa';

 export default function HeaderRight() {
  const[inputvalue,setInputValue]=useState("");
  return (
    <div className="header-right">
      <div className="header1">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search within sheet" 
           onChange={(e)=>
          {
            
             setInputValue(console.log(e.target.value));
          }
        }/>
          
        </div>
         <button  onClick={()=> {alert("No New notifications🔔")} }>
        <FaBell  id=" Bell"className="icon" />
         </button>

          <span className="profile"  onClick={()=>{alert("Profile Name:Madhu")}}>Madhu <FaUser /></span>
       
      </div>
      <div className="header2">
        <button onClick={()=>{alert("Import Button is clicked")}}><FaDownload /> Import</button>
        <button onClick={()=>{alert("Export Button is clicked")}}><FaUpload /> Export</button>
        <button onClick={()=>{alert("Share Button is clicked")}}><FaShareAlt /> Share</button>
        <button onClick={()=>{alert("NewAction button is clicked")}}><FaPlus /> NewAction</button>
      </div>
    </div>
  );
}

