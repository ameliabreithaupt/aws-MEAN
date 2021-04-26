let ProductModel = require('../model/product.model.js');

//retrieve all product details
let getProductDetails = (req,res)=>{
    ProductModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}

let getProductById = (req,res)=>{
    let pid = req.params.pid;       //passing the id through path param
    ProductModel.find({_id:pid},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}

let storeProdectDetails = (req,res)=>{
    let product = new ProductModel({
        _id:req.body.pid,
        pname:req.body.pname,
        price:req.body.price
    });
    product.save((err,result)=>{
        if(!err){
            res.send("Records stored successfully")
        } else {
            res.send("Record didn't store...")
        }
    })
}

let deleteProdectDetails = (req,res)=>{
    let pid = req.params.pid;       //passing the id through path param
    ProductModel.deleteOne({_id:pid},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            }else {
                res.send("No such Product")
            }
        } 
    })
}

let updateProdectDetails = (req,res)=>{
    let pid = req.body.pid;       //passing the id through path param
    let upPrice = req.body.price;
    ProductModel.updateMany({_id:pid},{$set:{price:upPrice}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Record updated successfully")
            } else {
                res.send("No such Product")
            }
        } else {
            res.send("Error generated "+err)
        }
    })
}

module.exports={getProductDetails, getProductById,storeProdectDetails,deleteProdectDetails,updateProdectDetails}