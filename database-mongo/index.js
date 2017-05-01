var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cards');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var AddressBookSchema = mongoose.Schema({
  fullname: String,
  street: String,
  state: String,
  zipCode: Number,
  country: String
  // quantity: Number,
  // description: String
});

                                                                                                                 
var addressBook = mongoose.model('AddressBook', AddressBookSchema);

// var dummyData = new addressBook({
//   fullname: "Douglas Cox",
//   street: "944 Market Street",
//   city: "San Francisco",
//   state: "California",
//   zipCode: 94105,
//   country: 'USA'

// });

// dummyData.save(function(err) {
//   if (err) throw err;
//   console.log('User created!', dummyData.fullname);
// });
// console.log('addressbooks.find', db.addressbooks.find());
// db.addressBook.findOneAndUpdate(dummyData);


var selectAll = function(callback) {
  addressBook.find({}, function(err, addresses) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, addresses);
    }
  });
};

module.exports.selectAll = selectAll;

module.exports.addressBook = addressBook;