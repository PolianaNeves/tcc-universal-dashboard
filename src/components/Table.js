import "./Table.css";

export default function Table(props) {
  return (
    <div className='section-table'>
      <table>
        <thead>
          <tr>
            {props.headers &&
              props.headers.map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {props.rows &&
            props.rows.map((row, index) => {
              return (
                <tr key={index}>
                  <td className='td-label'>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
