import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import ticketRouter from "./routes/ticketRouter.js";
const PORT = process.env.PORT;
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors("*"));

app.use("/api/tickets", ticketRouter)

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});