var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Contacts
var contacts = new Schema({
  name: {
    type: String
  },
  number: {
    type: Number
  },
  email: {
    type: String
  },
  services: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'contacts'
});

module.exports = mongoose.model('contacts', contacts);