const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
dotenv.config();


//app level middleware
app.use(express.json());

//router
const mediaRouter = require("./routers/routes/media");
const authRouter = require("./routers/routes/auth");
const favRouter = require("./routers/routes/fav");
const searchRouter = require("./routers/routes/search");


//routers
app.use("/media", mediaRouter);
app.use("/auth", authRouter);
app.use("/favorite", favRouter);
app.use("/search", searchRouter);


//third party middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
  });

