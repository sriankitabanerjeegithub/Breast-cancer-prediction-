const express = require("express");
const multer = require("multer");
const File = require("../models/File"); // ✅ Import File Model
const authMiddleware = require("../middleware/auth"); // ✅ Protect Upload Route

const router = express.Router();

// ✅ Setup Multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Save files in "uploads" folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });

// ✅ Upload Route (Only logged-in users)
router.post("/", authMiddleware, upload.single("file"), async (req, res) => {
    try {
        // ✅ Save file details to MongoDB
        const newFile = new File({
            filename: req.file.filename,
            filepath: "/uploads/" + req.file.filename,
        });

        await newFile.save();
        res.json({ message: "✅ File uploaded successfully!", file: newFile });
    } catch (error) {
        res.status(500).json({ message: "❌ Upload failed", error });
    }
});

module.exports = router;
