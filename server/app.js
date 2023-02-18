import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_LINK, {useNewUrlParser: true})
.then(()=> console.log("MongoDB connected"))
.catch((error)=> console.log(error))

app.listen(PORT, ()=> {console.log(`Server is running on port ${PORT}`)})
