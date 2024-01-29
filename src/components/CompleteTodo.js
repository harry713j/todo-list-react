function CompleteTodo({ completedTodos }){
    
    return (
        <>
            {
                completedTodos.map(todo => {
                    return (
                        <div key={`${todo.id}`} className="card rounded shadow-none gy-2">
                          <div className="card-body d-flex align-items-center ">
                            <input type="checkbox"  
                              className="form-check-input rounded-circle" 
                              checked
                              disabled
                              />
                            <span className="ms-2 align-middle fw-normal" style={{
                                textDecoration: 'line-through'
                            }}>
                            {todo.text}
                            </span>
                          </div>
                         </div>
                    )
                 }
                )
            }
        </>
        
    );
}


export default CompleteTodo;