import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface PropsTodos {
  todos: Todo[]; 
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}

export default function Sidebar({ todos, setTodos }: PropsTodos) {
  const { login, register , isAuthenticated  , user , logout , isLoading}  = useKindeAuth();

  return (
   <section className=" flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[17px] pb-[27px]">

        <AddTodoForm  todos={todos} setTodos={setTodos}/>

        <div className="mt-auto space-y-2">
          {
             isLoading ? null : isAuthenticated ? (
              <>
              <p className="text-[16px]">Logged in as : {user?.email} </p>
              <Button onClick={logout} buttonType="secondary">Log Out</Button> 

              </>
            ) :(
              <>
              <Button onClick={login} buttonType="secondary">Login in</Button> 
              <Button onClick={register} buttonType="secondary">Register</Button> 
              </>
            )
          }
      
        </div>
   </section>

  )
}
