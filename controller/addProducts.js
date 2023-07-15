const Product=require("../Schema");

const addProducts = async (req, res, next) => {
    const { name,writer,price,description,image} = req.body;
    let product;
    try{
    product=new Product({
            name,
            writer,
            price,
            description,
            image
        });
        await product.save();
    }catch(err){
        console.log(err);
    }
    if (!product) {
        return res.status(500).json({ message: 'Unable to add' })
    }
    else {
        return res.status(201).json({ product});
    }
}

module.exports=addProducts;

