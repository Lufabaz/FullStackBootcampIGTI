// Branch feature/modeloMongoose
import mongoose from 'mongoose'

const gradesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: Date.now,
})

const gradesSchema = mongoose.model('grades-v1', gradesSchema)
export { gradesSchema }