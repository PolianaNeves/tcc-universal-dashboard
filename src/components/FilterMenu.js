import "./FilterMenu.css";

export default function FilterMenu(props) {
  return (
    <section className="filter-menu">
      {props.selectList &&
        props.selectList.map((select, index) => {
          return (
            <select
              className='filter-select'
              key={index}
              id={select.id}
              defaultValue={select.placeholder}
            >
              <option value={select.placeholder} disabled>
                {select.placeholder}
              </option>
              {select.options &&
                select.options.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
            </select>
          );
        })}

      {props.searchList &&
        props.searchList.map((search, index) => {
          return (
            <input
              className='filter-search'
              key={index}
              type="text"
              placeholder={search.placeholder}
              id={search.id}
            />
          );
        })}
    </section>
  );
}
