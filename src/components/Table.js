export default function Table(props) {
  return (
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
                <td>{row.label}</td>
                <td>{row.value}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}