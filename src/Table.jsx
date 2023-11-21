import './Table.css'
function TableHeader(){
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}
function TableBody(){
    return (
        <tbody>
        </tbody>
    )
}

function Table(){
    return(
        <div>
            <TableHeader/>
            <TableBody/>
        </div>
    )
}

export default Table;