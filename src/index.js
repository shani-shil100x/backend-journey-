import dotenv from "dotenv";
import connectDb from "./db/index.js";

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
