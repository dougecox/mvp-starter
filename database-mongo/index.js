var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  address: String,
  zipCode: Number,
  country: String
  // quantity: Number,
  // description: String
});

var AddressBook = mongoose.model('AddressBook', AddressBookSchema);

var selectAll = function(callback) {
  AddressBook.find({}, function(err, addresses) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, addresses);
    }
  });
};

module.exports.selectAll = selectAll;