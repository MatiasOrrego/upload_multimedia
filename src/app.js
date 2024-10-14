import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { productsRoutes } from "./routes/products.routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));    
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/products", productsRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})