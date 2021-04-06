const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 4200

app.use(express.static('public'))
app.get("/",(req,res)=>{
  res.sendFile(__dirname +'/index.html');
  console.log(__dirname+'/index.html');
})

app.listen(port,()=>{
  console.log('started listening on port '+ port);
})
