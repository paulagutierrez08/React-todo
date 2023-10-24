import React from "react";

import "../styles/styles.css"

function AddTask ({onAddClick}){
    const [addTaskIpt, setAddTaskIpt ] = React.useState ('');

    const handleInputChange = (e) => {
        setAddTaskIpt(e.target.value)
    } 

    const handleOnAddClick=(e)=>{
        e.preventDefault();

        onAddClick(addTaskIpt);
        setAddTaskIpt(' ');
    }  

    return (
        <form onSubmit={handleOnAddClick}>
            <div className="add-task">
                <div>
                    <input type="text" name="add-task-ipt" id="add-task-ipt"  value={addTaskIpt} onChange={handleInputChange}/>
                </div>
                <div>
                    <input className="task-btn" type="submit" value="Add" />
                </div>
            </div>
        </form>
    )
}

export default AddTask;