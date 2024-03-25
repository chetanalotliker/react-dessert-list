function DessertList({ listdata }) {
    const itemList = listdata.map(item => {
        return <li key={item.id}>{item.name} - {item.calorie} cal</li>
    })
    return (
        <div>
            <h1>List of the calories of each dessert</h1>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}

export default DessertList;
