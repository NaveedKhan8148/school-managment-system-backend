// models/Parent.js
const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  cnic_no: {
    type: String,
    required: true,
    unique: true
  },
  contact_number: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Parent', parentSchema);