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
  name: String,
  address: String,
  state: String,
  zipCode: Number,
  country: String
  // quantity: Number,
  // description: String
});


var addressBook = mongoose.model('AddressBook', AddressBookSchema);

var dummyData = new addressBook({
  name: "Don turtle",
  address: "32 Maple St",
  city: "Brooklyn",
  state: "NY",
  zipCode: 04105,
  country: 'USA'

});

dummyData.save(function(err) {
  if (err) throw err;
  console.log('User created!');
});
// console.log(db.addressbooks.find());
// db.addressBook.findOneAndUpdate(dummyData);


var selectAll = function(callback) {
  AddressBook.find({}, function(err, addresses) {
    if(err) {
      console.log('indb')
      callback(err, null);
    } else {
      callback(null, addresses);
    }
  });
};

module.exports.selectAll = selectAll;