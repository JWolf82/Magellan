//Requires
var express = require('express')
var bodyParser = require('body-parser')

//Create app object
var app = express()

//Initial Config
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/'))

//Routes
app.get('/CanaryIslands', function(req, res){
    console.log("Log")
    res.sendFile('CanaryIslands.html', {root : './html'})
    
})

app.get('/CapeVerde', function(req, res){
    console.log("Log")
    res.sendFile('CapeVerde.html', {root : './html'})
    
})

app.get('/Guam', function(req, res){
    console.log("Log")
    res.sendFile('Guam.html', {root : './html'})
    
})

app.get('/Philippines', function(req, res){
    console.log("Log")
    res.sendFile('Philippines.html', {root : './html'})
    
})

app.get('/Seville', function(req, res){
    console.log("Log")
    res.sendFile('seville.html', {root : './html'})
    
})

app.get('/StraitofMagellan', function(req, res){
    console.log("Log")
    res.sendFile('StraitofMagellan.html', {root : './html'})
    
})


//Index/Home
app.get('/', function(req,res){
    console.log("The Request")
    res.sendFile('index.html', {root : './html'})
})

//Listen for connections
var port = process.env.PORT || 3000
app.listen(port, function(){
    
})