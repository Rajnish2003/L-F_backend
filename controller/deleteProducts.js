const Product=require("../Schema");

const deleteproduct = async (req, res, next) =>{
    const id = req.params.id;
    let product = await Product.findByIdAndRemove(id);
    if (!product) {
        return res.status(404).json({ message: 'Unable to delete by this id' })
    }
    else {
        return res.status(200).json({ message: 'Product successfully deleted' });
    }
}

module.exports=deleteproduct;