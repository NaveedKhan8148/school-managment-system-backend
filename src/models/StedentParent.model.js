// models/StudentParent.js
const mongoose = require('mongoose');

const studentParentSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parent',
    required: true
  },
  relationship: {
    type: String,
    enum: ['Father', 'Mother', 'Guardian'],
    required: true
  }
}, {
  timestamps: true
});

// Compound index to prevent duplicate relationships
studentParentSchema.index({ student_id: 1, parent_id: 1 }, { unique: true });

module.exports = mongoose.model('StudentParent', studentParentSchema);