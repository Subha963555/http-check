const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  responseCodes: [String],
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('List', listSchema);
