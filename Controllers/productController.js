const products = require('../Models/productSchema')

//get all products from the database
exports.getAllProducts = async (req,res)=>{
//get all products from mongodb - find()
try{
    const AllProducts = await products.find()
    res.status(200).json(AllProducts)
}
catch(err){
    res.status(404).json(err)
}
}

//get particular product details
exports.getproduct = async (req,res)=>{
    const {id} = req.params
//get a particular product details from db - findone()
try{
    getaproduct = await products.findOne({id})
    res.status(200).json(getaproduct)
}
catch(err){
    res.status(404).json(err)
}
}