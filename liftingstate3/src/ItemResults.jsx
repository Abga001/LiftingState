
import ItemDisplay from './ItemDisplay';


    function ItemResults({ myItems, handler }) {
    return (
        <ul className="previousSearch">
            {myItems.map((itemName, index) => (
                <ItemDisplay
                    itemName={itemName}
                    // Prevent duplicate keys by appending index:
                    key={index}
                    id={index}
                    handler={handler}
                />
            ))}
        </ul>
    );
}

export default ItemResults;