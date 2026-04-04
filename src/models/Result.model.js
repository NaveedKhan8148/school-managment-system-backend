// models/Result.js
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  grade: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Compound index for unique result per student per class per subject per semester
resultSchema.index({ student_id: 1, class_id: 1, subject: 1, semester: 1 }, { unique: true });

module.exports = mongoose.model('Result', resultSchema);