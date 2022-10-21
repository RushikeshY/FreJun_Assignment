const express = require("express");

require("dotenv").config();

const cors = require("cors");

const ConnectDatabase = require("./Connection");
const BlogController = require("./BlogContrller");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/bloglist", BlogController);

app.listen(process.env.PORT, async () => {

  console.log(`Server running on port ${process.env.PORT}`);
  try {
    await ConnectDatabase;
    console.log(`Database connected Successfully`);
  } catch (error) {
    console.log("Failed to connect Database");
    console.log(error);
  }
});
