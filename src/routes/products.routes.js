import { Router} from "express";

const productsRoutes = Router();

productsRoutes.post("/", (req, res) => {
    console.log (req.body);

    res.status(201).json({message: "Product created"});
})

export { productsRoutes };