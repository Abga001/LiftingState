const AddItem = ({ submitHandler, newItem, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter Item Name:"
                type="text"
                onChange={newItem}
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Item
            </button>
        </form>
    );
}

export default AddItem;