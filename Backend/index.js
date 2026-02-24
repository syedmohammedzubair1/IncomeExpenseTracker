const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./DataBase/dbconfig");
const authRouter = require("./Routes/authRoutes");
const router = require("./Routes/transactionRoutes");
dotenv.config();

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/transactions",router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

