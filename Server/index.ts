import  express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const PORT = 3000
import TodoModel from './db/Todo'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.get('/todos',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
    
})

app.delete('/todos/:id',(req,res)=>{
    const _id = req.params.id
    // console.log(req.params.id) 
    deleteData(_id)
    res.send("Id received")
})

app.post('/todos',(req,res)=>{
    const {Title,Description} = req.body
    TodoModel.create({
        title:Title,
        description:Description
    }).then((result)=>{
        res.json(result)
    })
    
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)  
})



const deleteData = async (id:string)=>{
    try{
        const deleteTodo = await TodoModel.deleteOne({_id:id})
    }catch(err){
        console.log(err)
    }
}

