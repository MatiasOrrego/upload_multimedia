import { Router} from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";

const productsRoutes = Router();

//POST /products
productsRoutes.post("/", uploadImage, (req, res) => {
    console.log (req.body);

    res.status(201).json({
        image: "http://localhost:4000/uploads" + req.body.image
    });
})

export { productsRoutes };