/** Introduction to Node.js
 *  server.js
 *  Created by xxxx
 *  Commented and modified by Mauro J. Pappaterra on 30 of March 2018.
 */
const express = require ('express')
const logger = require('morgan')
const errorhandler = require ('errorhandler')
const bodyParser = require ('body-parser')

let store = {}
store.accounts = []

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

/*End Point GET: retrieve all accounts*/
app.get('/accounts', (req,res) =>{
    res.status(200).send(store.accounts)
})

/*End Point POST: add new account*/
app.post('/accounts', (req,res) =>{
    let newAccount = req.body
    let id = store.accounts.length
    store.accounts.push(newAccount)
res.status(201).send({id: id})
})

/*End Point PUT: updates account*/
app.put('/accounts/:id', (req,res) =>{
    store.accounts[req.params.id] = req.body
    res.status(200).send(store.accounts[req.params.id])
})

/*End Point DELETE: deletes account*/
app.put('/accounts/:id', (req,res) =>{
    store.accounts.splice(req.params.id,1)
    res.status(204).send()
})

app.listen(3000)
