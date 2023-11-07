const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
const port = process.env.PORT;

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`Server running at: http://localhost${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Failed to connect with mongodb!");
  });
