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
}, { timestamps: true });

noteSchema.virtual('shortContent').get(function () {
  return this.content ? this.content.substring(0, 25) : undefined;
});

export const NoteModel = mongoose.model('Note', noteSchema);