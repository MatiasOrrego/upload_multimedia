import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";
import e from "express";

//storage
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "src/uploads/");
    },
    filename: (req, file, cb) =>{
        const fileName = crypto.randomUUID().toString()+path.extname(file.originalname);

        cb(null, fileName);
    }
})


//limits
const maxMb = 20;
const limits = { fileSize: 1024 * 1024 * maxMb };

//filters
const fileFilter = (req, file, cb) => {
//jpeg, jpg, png, gif

const fileTypes = /jpeg|jpeg|png|gif/;

const allowExtname = fileTypes.test(path.extname(file.originalname))

if(!allowExtname){
    return cb(new Error("Solo se permiten archivos de tipo imagen(jpeg, jpg, png, gif)"));
}
return cb(null, true);

}

export const upload = multer({ 
    storage,
    limits,
    fileFilter
});