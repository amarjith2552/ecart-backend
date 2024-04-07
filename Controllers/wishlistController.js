const wishlists = require('../Models/wishlistSchema')

//add to wishlist
exports.addWishlist = async (req,res)=>{
    //get a product id
    const {id,title,price,image}=req.body

    //get an user id
    const userId= req.payload

    //add details of the product to the db
    try{
        const existingProduct = await wishlists.findOne({id})
        if(existingProduct){
            res.status(404).json("product already exists")
        }
        else{
            const newproduct = new wishlists({
                id,title,price,image,
                userId
            })
            await newproduct.save()
            res.status(200).json("product added successfully")
        }
    }
    catch(err){
        res.status(500).json("error",err)
    }
}

//get all wishlist products
exports.getwishlist = async (req,res)=>{
    //get all products from mongodb - find()
    try{
        const wishlistProducts = await wishlists.find()
        if(wishlistProducts){
            res.status(200).json(wishlistProducts)
        }
        else{
            res.status(404).json("product not found")  
        }
    }
    catch(err){
        res.status(500).json(err)
    }
    }