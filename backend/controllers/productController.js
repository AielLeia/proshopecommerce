import asyncHandler from 'express-async-handler';
import { Product } from '../models/index.js';

// @desc    Fecth all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fecth single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
    return;
  }

  res.status(404);
  throw new Error('Product not found');
});

// @desc    Deleet a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
    return;
  }
  res.status(404);
  throw new Error('Product not found');
});

export { getProducts, getProductById, deleteProduct };
