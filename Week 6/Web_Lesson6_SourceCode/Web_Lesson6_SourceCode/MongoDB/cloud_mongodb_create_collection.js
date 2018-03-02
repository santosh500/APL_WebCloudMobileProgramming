/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root@ds123752.mlab.com:23752/librarydatabase';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("books");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
