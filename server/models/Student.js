const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
  name: String,
  grade: { type: Number, default: 0 },
})

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student
