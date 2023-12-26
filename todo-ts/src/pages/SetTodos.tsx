import { useState ,useEffect} from 'react'
import axios from 'axios'


const SetTodos = () => {
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    // const [Todo,setTodo] = useState([])
    const [Todo, setTodo] = useState<iTisTodo[]>([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/todos',{})
    .then((Response)=>{
      // console.log(Response.data)
      const todos = Response.data
      setTodo(todos)
    })
    .catch(err=>console.log(err))
  },[Todo])



  function PushTodo(){
    // const newTodo:iTisTodo = [
    //   ...Todo,
    //   {
    //     "_id":"",
    //     "Title":Title,
    //     "Description":Description,
    //   },
    // ] 
    axios.post('http://localhost:3000/todos',{
        "Title":Title,
        "Description":Description
    }).then((result)=>{
    
    //   setTodo(newTodo)
      setTitle('')
      setDescription('')

      console.log(result.data)})
    .catch(err=>console.log(err))

    
      
  }

  return (
    < div className='max-w-3xl mx-auto mt-28 shadow-xl p-10'>
    <h1 className='text-center text-xl'>To Do App</h1>
    <div className='mt-4 flex flex-wrap '>
    <input type="text" placeholder="Enter Todo Here" value={Title} onChange={(e)=>{setTitle(e.target.value)}} 
    className='m-4 p-4 border-black border'
    />
    <input type="text" placeholder="Description" value={Description} onChange={(e)=>{setDescription(e.target.value)}} 
    className='m-4 p-4 border-black border'
    />
    </div>
    <br />
    
    <button onClick={PushTodo} 
    className='m-4 p-4 border-black border '
    >Submit</button>
    <div>
      {Todo.length===0 ? <h2 className='m-4 p-4 border-black border'>No Todos</h2> : RenderTodo({todo:Todo}) }
      
      
    </div>

    </div>
  )
}

export default SetTodos

interface Todo {
    _id: {id:string;}
    title: string;
    description: string;
    // Add other properties as needed
  }
  
  interface RenderTodoProps {
    todo: Todo[];
  }


function RenderTodo({todo}:RenderTodoProps){
  return todo.map((todoItem)=>(
      <div key={todoItem._id.id} className='m-4 p-4 border-black border' >
        <div>{todoItem.title}</div>
        <div>{todoItem.description}</div>
        <button onClick={()=>Delete({id:todoItem._id})}>Delete</button>
        </div>
        ))
      }

  
//   function RenderTodo({ todo }: RenderTodoProps): JSX.Element {
//     return todo.map((todoItem) => (
//       <div key={todoItem._id} className='m-4 p-4 border-black border'>
//         <div>{todoItem.title}</div>
//         <div>{todoItem.description}</div>
//         <button onClick={() => Delete({ id: todoItem._id })}>Delete</button>
//       </div>
//     ));
//   }
  

const Delete = async(id:deleteparam)=> {
    const _id = id.id
    await axios.delete(`http://localhost:3000/todos/${_id}`)
  .then(()=>{
    console.log("Deleted")})
  .catch(error=>{console.log("Error sending request"+ error)})

}

interface deleteparam{
    id:{
        id:string
    }
}



interface iTisTodo{
    _id: {
        id:string;
    };
    title: string;
    description: string;
}
