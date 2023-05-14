import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  _id: {
    type: String,
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
  }
},  { timestamps: true })

export const NoteModel = mongoose.model('Note', noteSchema);