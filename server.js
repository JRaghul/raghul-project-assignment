const express = require('express')
const { MongoClient } = require("mongodb");
const bp = require('body-parser')
const app = express()
const cors = require('cors');
require('dotenv').config()
app.use(bp.json())
app.use(cors())

const client = new MongoClient(process.env.DB_CRED)

async function get_all_data(client) {
    console.log(" inside get all data")
    const data = await client.db('fundmanage').collection('assign').find().toArray()
    console.log("data :", data)
    return data
}

async function get_data_with_name(client, params) {
    console.log(params)
    const data = await client.db('fundmanage').collection('assign').find({member_name:params}).toArray()
    console.log("data :", data)
    return data
}

async function post_data(client,data) {
    console.log(" inside get with name data")
    await client.db('fundmanage').collection('assign').insertOne(data)
    return {}
}

async function edit_data(client,data,param) {
    console.log(param)
    await client.db('fundmanage').collection('assign').replaceOne({member_name:param},{
        member_name:data.member_name,
        fund_name:data.fund_name,
        assign_date:data.assign_date,
    })
    return {"status":"sucess"}
}

async function delete_data_with_name(client, params) {
    console.log(" inside delete with name data")
    await client.db('fundmanage').collection('assign').findOneAndDelete({ member_name: params })
    return {
        "opration deletion": "sucess"
    }
}   
const port = process.env.PORT || 9998

app.listen(port, async () => {
    console.log('http://localhost:'+port+'/')
})

app.get('/assign/:membername?', async (req,res) =>{
    if(req.params.membername === undefined){
        const data = await get_all_data(client)
        res.status(200).json(data)
    }
    else{
        const data = await get_data_with_name(client,req.params.membername)
        res.status(200).json(data)
    }
})

app.post('/assign/', async (req,res) =>{
    if(req.body){
        const data = await post_data(client,req.body)
        res.status(201).json(data)
    }
})

app.put('/assign/:membername', async (req,res) =>{
    if (req.body){
        if(req.params.membername){
            const data = await edit_data(client,req.body,req.params.membername)
            res.status(200).json(data)
        }
    }
})

app.delete('/assign/:membername', async (req,res) =>{
    console.log(req.params.membername === undefined)
    if(req.params.membername !== undefined){
        const data = await delete_data_with_name(client,req.params.membername)
        res.status(200).json(data)
    }
    else{
        res.status(400).json("member id needed")
    }
})
