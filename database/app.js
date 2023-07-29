const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB'); //THIS LINE IS WRONG
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10 
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

//fruit.save().then(() => console.log('meow'));

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texture"
});

//Basic CURD Operation

// Fruit.insertMany([apple, kiwi, orange, banana])
//     .then(function () {
//         console.log("Successfully saved defult items to DB");
//       })
//       .catch(function (err) {
//         console.log(err);
//       });


// Fruit.find({}) 
//     .then(function (FoundItems) {
//         console.log(FoundItems);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });

// Fruit.find({})
//     .then(function (FoundItems) {
//         // console.log(FoundItems);
//         mongoose.connection.close();      //This will close the connection
//         FoundItems.forEach(function(fruit){
//             console.log(fruit.name);
//         })
//       })
//       .catch(function (err) {
//         console.log(err);
//       });  

// Fruit.deleteOne({ name: 'Apple' })
//     // .then(function (FoundItems) {
//     //     console.log(FoundItems);
//     //   })
//       .then(console.log("Succesfully Deleted"))
//       .catch(function (err) {
//         console.log(err);
//       });

// Fruit.deleteOne({ name: 'Apple' })
//     // .then(function (FoundItems) {
//     //     console.log(FoundItems);
//     //   })
//       .then(console.log("Succesfully Deleted"))
//       .catch(function (err) {
//         console.log(err);
//       });


// Fruit.updateOne({_id: "64a84ee25c727aa0e3486b01"}, { $set: { name: 'Banana' } })
//     // .then(function (FoundItems) {
//     //     console.log(FoundItems);
//     //   })
//       .then(console.log("Succesfully Updated"))
//       .catch(function (err) {
//         console.log(err);
//       });

Person.updateOne({name: "John"}, { $set: { favouriteFruit: banana } }) //Relationship and Embedding Documents
    // .then(function (FoundItems) {
    //     console.log(FoundItems);
    //   })
      .then(console.log("Succesfully Updated"))
      .catch(function (err) {
        console.log(err);
      });




     
