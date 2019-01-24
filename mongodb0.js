var mongc=require('mongodb').MongoClient
var url='mongodb://elcesar:1234@localhost:27017/toko'

//make a connection
mongc.connect(url,function(err,client){
    console.log('Terhubung ke MongoDB')
    client.close()
})