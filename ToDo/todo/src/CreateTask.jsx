import "./form.css"
import { useState } from "react"
function CreateTask({onAdd}) {
    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    
    function changeInput(event) {
        
        
        setTitle(event.target.value)
       
    }

    function changeText(event){
        setDesc(event.target.value)
        
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(title.length>3 && desc.length>3){
            onAdd(title,desc)
        }
        
        setTitle("")
        setDesc("")
        
        
      };
    return (
        <>
            <div className="create">

                <form className="formCreate">
                    <input type="text"  placeholder="Başlık" value={title} onChange={changeInput} />
                    <textarea placeholder="İşinizi Girin" value={desc} onChange={changeText}></textarea>
                    <button onClick={handleSubmit}>Ekle</button>
                </form>
            </div>
        </>
    );
}

export default CreateTask;