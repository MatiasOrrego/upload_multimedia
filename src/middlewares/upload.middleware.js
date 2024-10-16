import { upload } from "../settings/upload.config.js";

export const uploadImage = (req, res, next) => {
    const uploadSingle = upload.single("image");
    
    uploadSingle(req, res, (error) => {
        if (error || !req.file) {
            console.log(error);
            return res.status(400).json({ message: "error al subir el archivo" });
        }

        // Asegúrate de que req.body sea un objeto
        if (!req.body) {
            req.body = {};
        }

        // Asigna el nombre del archivo subido a req.body.image
        req.body.image = req.file.filename;

        next();
    });
};