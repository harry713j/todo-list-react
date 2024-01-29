function AddTodo({ onInputChange, inputTextValue, onAddClick }){
    return (
        <div className="input-group input-group-seamless mt-2">
            <input type="text" value={inputTextValue} onChange={onInputChange} 
                placeholder="add items..."
                className="mt-2 form-control"
            />
            <span className="input-group-append mt-2">
            <button type="button" onClick={onAddClick} 
            className="btn btn-outline-secondary rounded">
            <i className="fa-solid fa-plus"></i>
            </button>
            </span>
            
        </div>
    );
}

export default AddTodo;