var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("knowledge");
    const obj ={name:"aaa",content:"bbbbbb"}
    dbo.collection("js").insertOne(obj, (err, res) => {
        if (err) throw err;
        console.log("插入成功")
    })
    dbo.collection("js").find({}).toArray((err, res) => {
        if (err) throw err;
        console.log(res)
    })
    db.close()
});
