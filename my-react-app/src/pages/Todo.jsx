// import React, {useState} from "react";
// import axios from "axios";
// import Create from "./Create";


// function Todo() {
//     const [todos, setTodos] =useState([])

//     useEffect(() => { axios.get("http://localhost:5000/api/task")
//     .then(result => setTodods(result.data))
//     .catch(err => console.log(err));
// }, []);
//     return (
//         <div className="todo" >
//            <h2 className="text-4xl"> Todo List</h2>
//            <Create/>
//            {
//             todos.length === 0?
//             <div><h2 className="text-xl">No Records</h2></div>:
//             todos.map(todo =>( 
//             <div key={todo._id}>
//                 {todo.task}
//             </div>
//             ))
//          }
//         </div>
//     );
// }

// export default Todo;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Create from "./Create";

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/task/")
//             .then(result => setTodos(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className="todo">
//             <h2 className="text-4xl"> Todo List</h2>
//             <Create />
//             {todos.length === 0 ? (
//                 <div><h2 className="text-xl">No Records</h2></div>
//             ) : (
//                 todos.map(todo => (
//                     <div key={todo._id}>{todo.task}</div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default Todo;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Create from "./Create";
//  import "../App.css"; // Import CSS file

// function Todo() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/task/")
//             .then(result => setTodos(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className="todo-container">
//             <h2 className="todo-title">✅ My To-Do List</h2>
//             <Create refreshTasks={() => {
//                 axios.get("http://localhost:5000/api/task/")
//                     .then(result => setTodos(result.data))
//                     .catch(err => console.log(err));
//             }} />
//             {todos.length === 0 ? (
//                 <div className="no-tasks">No Records Found 🚀</div>
//             ) : (
//                 todos.map(todo => (
//                     <div key={todo._id} className="todo-item">
//                         <span className="task-text">{todo.task}</span>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default Todo;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Create from "./Create";
// import "../App.css"; // CSS file

// function Todo() {
//     const [todos, setTodos] = useState([]);
//     const [completed, setCompleted] = useState({}); // Track completed tasks

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     const fetchTasks = () => {
//         axios.get("http://localhost:5000/api/task/")
//             .then(result => {
//                 setTodos(result.data);
//                 const initialCompleted = {};
//                 result.data.forEach(todo => {
//                     initialCompleted[todo._id] = false;
//                 });
//                 setCompleted(initialCompleted);
//             })
//             .catch(err => console.log(err));
//     };

//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:5000/api/task/${id}`)
//             .then(() => fetchTasks())
//             .catch(err => console.log(err));
//     };

//     const toggleComplete = (id) => {
//         setCompleted(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     return (
//         <div className="todo-container">
//             <h2 className="todo-title">✅ My To-Do List</h2>
//             <Create refreshTasks={fetchTasks} />
//             {todos.length === 0 ? (
//                 <div className="no-tasks">No Records Found 🚀</div>
//             ) : (
//                 todos.map(todo => (
//                     <div key={todo._id} className="todo-item">
//                         <div className="todo-icons">
//                             <span
//                                 className="checkmark"
//                                 onClick={() => toggleComplete(todo._id)}
//                                 title="Mark as done"
//                             >
//                                 {completed[todo._id] ? "✅" : "☐"}
//                             </span>
//                             <span
//                                 className="delete-icon"
//                                 onClick={() => handleDelete(todo._id)}
//                                 title="Delete task"
//                             >
//                                 🗑️
//                             </span>
//                         </div>
//                         <span
//                             className={`task-text ${completed[todo._id] ? "completed" : ""}`}
//                         >
//                             {todo.task}
//                         </span>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default Todo;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create";
import "../App.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState({});

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get("http://localhost:5000/api/task/")
            .then(result => {
                setTodos(result.data);
                const initialCompleted = {};
                result.data.forEach(todo => {
                    initialCompleted[todo._id] = false;
                });
                setCompleted(initialCompleted);
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/task/delete/${id}`)
            .then(() => fetchTasks())
            .catch(err => console.log(err));
    };

    const toggleComplete = (id) => {
        setCompleted(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="todo-container">
            <h2 className="todo-title">✅ My To-Do List</h2>
            <Create refreshTasks={fetchTasks} />
            {todos.length === 0 ? (
                <div className="no-tasks">No Records Found 🚀</div>
            ) : (
                todos.map(todo => (
                    <div key={todo._id} className="todo-item">
                        {/* Checkbox icon */}
                        <span
                            className="checkmark"
                            onClick={() => toggleComplete(todo._id)}
                            title="Mark as done"
                        >
                            {completed[todo._id] ? "☑️" : "☐"}
                        </span>

                        {/* Task text */}
                        <span className={`task-text ${completed[todo._id] ? "completed" : ""}`}>
                            {todo.task}
                        </span>

                        {/* Delete icon */}
                        <span
                            className="delete-icon"
                            onClick={() => handleDelete(todo._id)}
                            title="Delete task"
                        >
                            🗑️
                        </span>
                    </div>
                ))
            )}
        </div>
    );
}

export default Todo;
