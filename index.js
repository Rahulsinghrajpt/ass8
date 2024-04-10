const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('RAHUL,NAAM THO SUNNA HII HOGA.....')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
