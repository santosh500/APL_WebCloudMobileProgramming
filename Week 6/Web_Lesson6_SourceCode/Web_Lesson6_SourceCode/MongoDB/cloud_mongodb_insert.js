/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:tampa@ds123752.mlab.com:23752/librarydatabase';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("librarydatabase");
    var myobj = [
        { bookName: 'The Bible', authorName: 'Several', noOfCopies:'100',edition:'Tenth',ISBN:'2212312'}

    ];
    dbase.collection("books").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        db.close();
    });
});