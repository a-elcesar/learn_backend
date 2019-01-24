//ini step kedua, nanti perintah2 dari mongodb nya dimasukin ke sini

//route utk mengexport:
var router=require('express').Router()
var bodyParser=require('body-parser')
var mongo=require('mongodb')
var mongc=mongo.MongoClient
var url='mongodb://elcesar:1234@localhost:27017/toko'
router.use(bodyParser.json())

// route utk GET all data
router.get('/data',(req,res)=>{
    mongc.connect(url,(err,client)=>{
        console.log('Terhubung')
        var koleksi=client.db('toko').collection('produk')
        koleksi.find().toArray((err,data)=>{
            console.log(data)
            res.send(data)
            client.close()
        })
    })
})

//route utk POST data
//coming soon


module.exports=router