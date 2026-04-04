// models/AcademicWarning.js
const mongoose = require('mongoose');

const academicWarningSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  rule_violated: {
    type: String,
    required: true
  },
  detail_description: {
    type: String,
    required: true
  },
  warning_date: {
    type: Date,
    required: true,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('AcademicWarning', academicWarningSchema);