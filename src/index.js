import connectDb from "./db/index.js";
import {app} from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`port live on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb error", err);
  });
