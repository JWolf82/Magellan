var ctrls = require('./controllers'),
    apiRouter = require('express').Router()
    
    
    
///Routes
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
      
      
module.exports = apiRouter

