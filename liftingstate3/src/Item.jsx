import { useState } from 'react';
import AddItems from './AddItem';
import ItemResults from './ItemResults';

const Item = () => {

    const [itemName, setItemName] = useState("");
    const [items, setItems] = useState([]);

    const newItem = ({ target }) => {
        setItemName(target.value)
    }

    const submitForm = (event) => {
        // Prevent form submission
        event.preventDefault();
    }

    const handleAdd = () => {
        // Save item name  state to array 
        setItems(items => [...items, itemName]);
    }

    const handleDelete = (id) => {
        const tempItems = [...items];
        tempItems.splice(id, 1);
        setItems(tempItems);
      };

    return (
        <>
            <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd} />
            {/* <ItemResults items={items} />*/}


         <ItemResults
        myItems={items}
        handler={handleDelete}
    />

        
        </>
    )
}
export default Item;