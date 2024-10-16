import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";

import { productsRoutes } from "./routes/products.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));    
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/uploads",express.static(path.join(path.resolve(), "src", "uploads")));

// Routes
app.use("/products", productsRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})