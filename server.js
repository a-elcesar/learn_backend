//ini step ketiga
var express=require('express')
var cors=require('cors')
var mongoroute=require('./router/mongoroute')

//untuk menampung method2 express:
var app=express()
app.use(cors())
//pake mongoroute sebagai middleware:
app.use(mongoroute)

app.get('/',(req,res)=>{
    res.send('<h1>Tes Express x MongoDB</h1>')
})

app.listen(1234,()=>{
    console.log('Server aktif di port 1234')
})