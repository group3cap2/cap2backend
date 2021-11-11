const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
dotenv.config();


//app level middleware
app.use(express.json());

//third party middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
  });

