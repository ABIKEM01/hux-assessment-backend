const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");
const cors = require("cors");
const app = require("./app.js"); 

dotenv.config();

app.use(cors("*")); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
