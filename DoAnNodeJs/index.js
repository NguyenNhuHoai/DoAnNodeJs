const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const theLoaiRoute = require("./routes/theLoaiRoute");
const loaiTinRoute = require("./routes/loaiTinRoute");
const tinTucRoute = require("./routes/tinTucRoute");

dotenv.config();
const app = express();

mongoose.connect((process.env.MONGODB_ULR))
    .then(() => console.log('Connected!'));


app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/theLoai", theLoaiRoute);
app.use("/v1/loaiTin", loaiTinRoute);
app.use("/v1/tintuc", tinTucRoute);
app.listen(8000, () => {
    console.log("Server is running");
})