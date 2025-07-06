import {
  FaFileAlt,
  FaSortAmountDown,
  FaFilter,
  FaSyncAlt,
  FaAngleDoubleRight
} from 'react-icons/fa';

export default function HeaderLeft() {
  return (
    <div className="header-left">
      <div className="header1">
        <h2>Spreadsheet Form Submission</h2>
      </div>
      <div className="header2">
        <button onClick={()=>{alert("toolbar is clicked")}}> Toolbar <FaAngleDoubleRight /></button>
        <button onClick={()=>{alert("File is clicked")}}><FaFileAlt /> File</button>
        <button onClick={()=>{alert("Sort is clicked")}}><FaSortAmountDown /> Sort</button>
        <button onClick={()=>{alert("Filter is clicked")}}><FaFilter /> Filter</button>
        <button onClick={()=>{alert("CellView is clicked")}}><FaSyncAlt /> Cell View</button>
      </div>
    </div>
  );
}

