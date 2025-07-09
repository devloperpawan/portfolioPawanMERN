// const dotenv = require('dotenv');
// const cors = require('cors')
// const express = require('express');
// const connectDB = require('./config/db');
// const contactRoutes = require('./routes/contactRoutes');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json())

// connectDB();

// app.use("/api", contactRoutes);
// let PORT = process.env.PORT;
// app.listen(PORT, ()=>{
//     console.log(`Server Succesfull run on Port: ${PORT}`);
// })


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", contactRoutes);
app.use("/api", projectRoutes);
app.use("/api", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port: ${PORT}`);
});
