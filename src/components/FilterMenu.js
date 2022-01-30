export default function FilterMenu(props){
    return (<>
        {props.selectList && (
            <div>
                {props.selectList.map((select, index) => {
                    return (
                        <select key={index} id={select.id} defaultValue={select.placeholder}>
                            <option value={select.placeholder} disabled>{select.placeholder}</option>
                            {select.options && select.options.map((option, index) => {
                                return(
                                    <option key={index} value={option.value}>{option.label}</option>
                                )
                            })}
                        </select>
                    )
                })}
            </div>
        )}

        {props.searchList && props.searchList.map((search, index) => {
            return <input key={index} type="text" placeholder={search.placeholder} id={search.id}/>
        })}
    </>);
}