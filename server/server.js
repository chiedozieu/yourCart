import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";



const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

// allow multiple origins
const allowedOrigins = process.env.FRONTEND_URL

// middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}))

app.get("/", (req, res) => {
    res.send("Hello from the server!");
});
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
    console.log("Server is running on Port " + port);
   
});