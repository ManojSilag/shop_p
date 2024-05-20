import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 5500;
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddlerware.js";
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
