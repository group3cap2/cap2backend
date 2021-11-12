const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors())


//app level middleware
app.use(express.json());

//router
const mediaRouter = require("./routers/routes/media");
const authRouter = require("./routers/routes/auth");
const favRouter = require("./routers/routes/fav");


//routers
app.use("/media", mediaRouter);
app.use("/auth", authRouter);
app.use("/favorite", favRouter);

//third party middleware
app.use(morgan("dev"));
app.use(helmet());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
  });

