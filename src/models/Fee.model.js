// models/Fees.js
const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  fee_type: {
    type: String,
    enum: ['Tuition', 'Lab', 'Library'],
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  due_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Paid', 'Pending', 'Overdue'],
    default: 'Pending'
  },
  paid_date: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Fees', feesSchema);