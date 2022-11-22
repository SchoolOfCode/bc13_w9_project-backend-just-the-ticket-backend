import express from 'express';
const ticketRouter = express.Router();

import { getAllTickets, createTicket } from "../models/ticketModels.js";

ticketRouter.get("/api/tickets", async function (req, res){
    const allTickets = await getAllTickets();
    res.status(200).json(allTickets);
});

ticketRouter.post("/api/tickets", async function (req, res){
    const newTicket = req.body;
    const result = await createTicket(newTicket);
    res.status(200).json(result);
});

export default ticketRouter;