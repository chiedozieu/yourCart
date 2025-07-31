import { v2 as cloudinary } from "cloudinary";
import Product from "../models/productModel.js";


// add product POST /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);
    const images = req.files;
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    await Product.create({
      ...productData,
      image: imagesUrl,
    });
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.error("Error in addProduct:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// get product GET /api/product/list
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error("Error in productList:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// get single product GET /api/product/id
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.error("Error in productById:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Change product in stock /api/product/stock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;
    const product = await Product.findByIdAndUpdate(id, { inStock });
    res.json({ success: true, message: "Stock updated" });
  } catch (error) {
    console.error("Error in changeStock:", error.message);
    res.json({ success: false, message: error.message });
  }
};
