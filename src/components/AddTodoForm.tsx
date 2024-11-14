import { useState } from "react";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface PropsTodos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function AddTodoForm({ todos, setTodos }: PropsTodos) {
  const [userinput, setUserinput] = useState('');
  const {isAuthenticated} = useKindeAuth();

  // Handle input changes
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserinput(event.target.value);
  };

  const addTask = () => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("Log in to add more 3 todos"); 
      return; 
    }

    if (userinput.trim()) {
      const newTodo: Todo = {
        id: todos.length + 1, 
        text: userinput.trim(),
        isCompleted: false,
      };
      setTodos([...todos, newTodo]); 
      setUserinput(''); 
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        onChange={handleInput}
        type="text"
        value={userinput}
        className="h-[45px] border border-black/[12] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
      />
      <Button type="submit">Add to list</Button> 
    </form>
  );
}
