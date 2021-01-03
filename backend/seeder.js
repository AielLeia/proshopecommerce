import mongoose from 'mongoose';
import dotenv from 'dotenv';
import 'colors';
import { users, products } from './data/index.js';
import { Order, Product, User } from './models/index.js';
import { connectDB } from './config/index.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProduct = products.map((p) => ({
      ...p,
      user: adminUser,
    }));

    await Product.insertMany(sampleProduct);

    console.log('Data Imported'.green.inverse);
    process.exit(0);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.red.inverse);
    process.exit(0);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}
