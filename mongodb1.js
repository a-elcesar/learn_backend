var mongc=require('mongodb').MongoClient
var url='mongodb://elcesar:1234@localhost:27017/toko'

//buat connect n ngambil semua data
mongc.connect(url,function(err,client){
    console.log('Terhubung ke MongoDB')
    var koleksi=client.db('toko').collection('produk')
    koleksi.find().toArray((err,data)=>{
        console.log(data)
        client.close()
    })
})