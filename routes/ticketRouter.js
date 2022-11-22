import express from "express";
const ticketRouter = express.Router();

import { getAllTickets } from "";

ticketRouter.get("/", async function (req, res){
    const allTickets = await getAllTickets();
    res.status(200).json(allTickets);
});

export default ticketRouter;