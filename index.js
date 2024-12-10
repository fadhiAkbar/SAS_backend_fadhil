import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./router/ProductRouter.js";

const app = express();
const uri =
  "mongodb+srv://Tomsaymon:Fadhilakbar(123456)@sasfadhilakbar.fbw9b.mongodb.net/?retryWrites=true&w=majority&appName=SASfadhilakbar";
// mongoose.connect("mongodb://localhost:27017/fullstack_db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Success connected..."));

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(6000, () => console.log("Server running..."));
