import React from "react";

function ItemDisplay({ itemName, id, handler }) {
    return (
        <li>
            {itemName}
            <button type="button" onClick={() => handler(id)}>DELETE</button>
        </li>
    );
}

export default ItemDisplay;