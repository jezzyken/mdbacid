// index.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(express.json());

const walletRoutes = require("./routes/wallets");
const transactionRoutes = require( './routes/transactions');

app.use("/api/wallets", walletRoutes);
app.use('/api/transactions', transactionRoutes);


mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB");
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
