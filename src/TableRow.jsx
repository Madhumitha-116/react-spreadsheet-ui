export default function TableRow({ item, serial }) {
  return (
    <tr onClick={() => console.log(item.Jobrequest)}>
      <td>{serial}</td>
      <td>{item.Jobrequest}</td>
      <td>{item.submitted}</td>
      <td>
        <span className={`status ${item.status.toLowerCase().replaceAll(' ', '-')}`}>
          {item.status}
        </span>
      </td>
      <td>{item.submitter}</td>
      <td><a href={`https://${item.url}`} target="_blank" rel="noreferrer">{item.url}</a></td>
      <td>{item.assigned}</td>
      <td>
        <span className={`priority ${item.priority}`}>{item.priority}</span>
      </td>
      <td>{item.dueDate}</td>
      <td>{item.value}</td>
    </tr>
  );
}
