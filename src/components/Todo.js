

function Todo({ todoValue, onCheckChange }){
    
    return (
       <div className="card rounded shadow-sm gy-2">
       <div className="card-body d-flex align-items-center">
       <input type="checkbox" onChange={onCheckChange}
        className="form-check-input rounded-circle "
        />
        <span className="ms-2 fw-semibold">{todoValue}</span>
       </div>
       </div>
    );
}

export default Todo;