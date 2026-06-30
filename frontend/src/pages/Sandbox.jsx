import {useState} from "react";

function TodoList(){

  const [todos, setTodos] = useState([
     { id:1, text:"blue"},
     { id:2, text:"red" }
  ]);

  const [todoText,setTodoText] = useState("");

  function handleTodoTextChange(event){
    setTodoText(event.target.value);
  }

  function addTodo(){
    const newTodo = {
      id: Date.now(),
      text: todoText
    };

    setTodos([...todos,newTodo]);
    setTodoText("");
  }

  return (
     <div>
        <h5>ToDos</h5>
        <input value={todoText} onChange={handleTodoTextChange} />
        <button onClick={addTodo}>Add todo</button>
        <ul>
          <li>
            {todos.map((todo) => 
                <li key={todo.id}>{todo.text}</li>
              )}
          </li>
        </ul>
     </div>
    );
}

function SignUpForm(){
  const [formData,setFormData]=useState(
   {
     name:"",
     faveColor:"",
    });

  function handleChangeEvent(event){
     const fieldName = event.target.name;
     const fieldValue = event.target.value;

     setFormData({
     ...formData, 
     [fieldName]: fieldValue,
     });
  }

 return (
    <div>
      <input name="name" value={formData.name} onChange={handleChangeEvent} />
      <p>name: {formData.name}</p>
      <input name="faveColor" value={formData.faveColor} onChange={handleChangeEvent} />
      <p> faveColor: {formData.faveColor} </p>
    </div>
  );
}

export default function Sandbox() {
  return (
    <section>
      <h1>Sandbox</h1>
      <p>A place to try new things here..</p>
      <SignUpForm />
      <TodoList />
    

    </section>
  );
}