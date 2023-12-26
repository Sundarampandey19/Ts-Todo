
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (  <div>
    <div>Home</div>
    <button
    onClick={()=>{
        navigate("/SetTodos");
    }} 
    >Enter Todos</button>    
    </div>
  )
}

export default Home