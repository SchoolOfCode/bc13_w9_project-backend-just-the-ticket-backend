import express from 'express';
import morgan from "morgan";
import ticketRouter from "./routes/ticketRouter.js";
const PORT = process.env.PORT;
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/tickets", ticketRouter)

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
  });