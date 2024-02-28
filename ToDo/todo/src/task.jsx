function Task({task,deleted}) {

   function deleteİd(){
        deleted(task.id)
    }
    return ( <>
    
        <div className="card">
            <h3>Görev Adı</h3>
           <h4>{task.title}</h4>
           <h4>Yapılacak Olan</h4>
           <p>{task.desc}</p>
           <button onClick={deleteİd} >SİL</button>
        </div>
    </> );
}

export default Task;