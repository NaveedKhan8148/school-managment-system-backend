// models/Timetable.js
const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  day_of_week: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  },
  time_slot: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  room_location: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Compound index to prevent timetable conflicts
timetableSchema.index({ class_id: 1, day_of_week: 1, time_slot: 1 }, { unique: true });
timetableSchema.index({ teacher_id: 1, day_of_week: 1, time_slot: 1 }, { unique: true });

module.exports = mongoose.model('Timetable', timetableSchema);