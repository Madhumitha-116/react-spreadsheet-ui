import TableRow from './TableRow';
import { spreadsheetData } from './Data/dummy-data';
import './Table.css';
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default function Table() {
  const icon= <IoIosArrowDropdownCircle/>;
  return (
    <div className="table-wrapper">
      <table className="spreadsheet-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Request  &nbsp; &nbsp;{icon}</th>
            <th>Submitted &nbsp; &nbsp;{icon}</th>
            <th>Status &nbsp; &nbsp;{icon}</th>
            <th>Submitter &nbsp; &nbsp;{icon}</th>
            <th>URL &nbsp; &nbsp;{icon}</th>
            <th>Assigned </th>
            <th>Priority </th>
            <th>Due Date </th>
            <th>Est. Value</th>
          </tr>
        </thead>
<tbody>
  {spreadsheetData.map((item, index) => (
    <TableRow key={index} item={item} serial={index + 5} />
  ))}

  {Array(10).fill().map((_, i) => (
    <tr key={`empty-${i}`}>
      <td>{spreadsheetData.length + i + 5}</td> 
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

