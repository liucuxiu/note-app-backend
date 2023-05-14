import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},  { timestamps: true })

export const NoteModel = mongoose.model('Note', noteSchema);