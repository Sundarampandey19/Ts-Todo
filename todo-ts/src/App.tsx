import SetTodos from './pages/SetTodos'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/setTodos' element={<SetTodos/>}/>
      </Routes>
    </Router>
    
    

    </>
  )
}

export default App
