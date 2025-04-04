const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
// ✅ Task Routes


dotenv.config();

const authRoutes = require("./routes/auth"); // ✅ Authentication Routes
const uploadRoutes = require("./routes/upload"); // ✅ File Upload Routes
const taskRoutes = require("./routes/taskRoutes"); // ✅ Task Routes

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // ✅ Serve uploaded files

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes); // Authentication Routes
app.use("/api/upload", uploadRoutes); // File Upload Routes
app.use("/api/task", taskRoutes); // ✅ Fixed: Used the correct variable name


// ✅ Test Route
app.get("/", (req, res) => {
    res.send("🚀 Backend is running and connected to MongoDB!");
});

// app.post('/add', (req,res =>{
//   const task = req.body.task;
//   res.send({ message: "Task received", task });
// }));

app.post('/add', (req, res) => {
  const task = req.body.task;
  
  Task.create({ task: task })
    .then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});


              //ALTERNATIVE WAY BELOW



// app.post('/add', (req, res) => {  // ✅ Correct parentheses placement
//   const task = req.body.task;
//   res.send({ message: "Task received", task });
// });

app.get('/get',(req,res)=>{
  Task.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
