// import React, { useState } from 'react'
// import axios from 'axios'


// const Create = () => {
// const [task,setTask] = useState()
// const handleAdd = () => {
// axios.post('http://localhost:5000/add',{task: task})
// .then(result => console.log(result))
// .catch(err => console.log(err))
// }
//   return (
//     <div className="create-form">
//       <input type ="text" className="create-form-input"   placeholder="Enter task..."  onChange={(e)=> setTask(e.target.value)} />
//       <button type="button" className="create-form-button" onClick={handleAdd}>Add</button>
//     </div>
//   )
// }

// export default Create
// import React, { useState } from 'react';
// import axios from 'axios';

// const Create = () => {
//   const [task, setTask] = useState("");

//   const handleAdd = () => {
//     axios.post('http://localhost:5000/api/task/add', { task })
//       .then(result => {
//         console.log(result);
//         setTask(""); // Clear input after submission
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="create-form">
//       <input 
//         type="text" 
//         className="create-form-input"  
//         placeholder="Enter task..."
//         value={task}  
//         onChange={(e) => setTask(e.target.value)} 
//       />
//       <button type="button" className="create-form-button" onClick={handleAdd}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default Create;

import React, { useState } from "react";
import axios from "axios";

const Create = ({ refreshTasks }) => {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        axios.post("http://localhost:5000/api/task/add", { task })
            .then(() => {
                setTask("");
                refreshTasks(); // Refresh the task list
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create-form">
            <input 
                type="text" 
                className="create-form-input"  
                placeholder="Enter task..."
                value={task}  
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="button" className="create-form-button" onClick={handleAdd}>
                Add
            </button>
        </div>
    );
};

export default Create; 