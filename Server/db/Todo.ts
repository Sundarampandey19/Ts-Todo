import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    title:String,
    description:String
})

const TodoModel = mongoose.model("Todos",TodoSchema)

export default TodoModel
