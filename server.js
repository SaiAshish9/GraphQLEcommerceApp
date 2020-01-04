const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

if(process.env.NODE_ENV !== 'production')
require('dotenv').config( )

const port=process.env.PORT||5000

const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)

app.use(cors())

if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'shoppingcart/build')))


app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'shoppingcart/build','index.html'))
})


app.post('/payment',(req,res)=>{
  const body={
    source:req.body.token.id,
    amount:req.body.amount,
    currency:'usd'
  }


  stripe.charges.create(body,(e,res)=>{
    if(e){
      res.status(500).send({error:e})
    }else{
      res.status(200).send({success:res})
    }
  })


})

}

app.listen(port,(e)=>{
  if(e) throw e;
  console.log('server started on port '+port);
})
