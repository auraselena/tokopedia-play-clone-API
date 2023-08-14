const Product = require("../model/productModel");

const insertProduct = (req, res) => {
  try {
    const { productID, productUrl, imgUrl, title, price } = req.body;

    const newProduct = new Product({
      productID,
      productUrl,
      imgUrl,
      title,
      price,
    });

    const saveProduct = newProduct.save();
    res.json({ success: true, data: newProduct, message: "Insert new product success!" });
  } catch (error) {
    console.error();
    res.status(500).send({ success: false, message: error.message });
  }
};

const productList = async (req, res) => {
  try {
    const videoId = req.params.videoID;
    const products = await Product.find({ videoID: videoId });
    res.send({ success: true, data: products });
  } catch (error) {
    console.error();
    res.status(500).send({ success: false, message: "Something is wrong!" });
  }
};

const allProducts = async (req,res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = keyword ? { $or: [
      { title: { $regex: keyword, $options: "i" } }
    ]} : {};
    const products = await Product.find(query);
    res.send({success: true, data: products})
  } catch (error) {
    console.error();
    res.status(500).send({success: false, message: error.message})
    
  }
}

module.exports = { insertProduct, productList, allProducts };
