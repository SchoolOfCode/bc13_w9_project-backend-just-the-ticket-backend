import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});