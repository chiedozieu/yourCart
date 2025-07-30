import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";



const app = express();
const port = process.env.PORT || 4000;

await connectDB()

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

app.listen(port, () => {
    console.log("Server is running on Port " + port);
   
});