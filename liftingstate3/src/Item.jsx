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

    return (
        <>
            <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd} />
            <ItemResults items={items} />
        </>
    )
}
export default Item;