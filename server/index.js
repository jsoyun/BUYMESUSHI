import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/routes.js';
import nodemailer from 'nodemailer';
import { setWebPush } from './services/push.js';
import https from 'https';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();


const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const User = require("./models/User");

const multer = require("multer");
const cors = require("cors");
const path = require("path");

const { Product } = require("./models/Product");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/users");
const authBoardRouter = require("./routes/authBoard");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

dotenv.config();

const publicVapidKey = process.env.VAPID_PUBLIC_KEY;
const privateVapidKey = process.env.VAPID_PRIVATE_KEY;

setWebPush(publicVapidKey, privateVapidKey);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));
app.use(logger());
app.set('etag', false);

app.use('/', router);

app.locals.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const { auth } = require("./middleware/auth");
const importDate = require("./routes/seederScript");

const connectAndImport = async () => {
  try {
    await connectDB();
    await importDate();
  } catch (err) {
    console.log(err);
  }
};

connectAndImport();

//쓰는건가?
app.use(express.json());

app.use("/api/products", productRoutes);
// app.use("/api/shop", productRoutes);

app.use("/api/users", userRouter);
app.use("/api/authboard", authBoardRouter);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});




