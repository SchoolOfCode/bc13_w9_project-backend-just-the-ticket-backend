import express from "express";
const ticketRouter = express.Router();

import { getAllTickets } from "";

ticketRouter.get("/", async function (req, res){
    const allTickets = await getAllTickets();
    res.status(200).json(allTickets);
});

ticketRouter.get("/:id", async function (req, res){
    const ticket = await getTicketById(req.params.id);
    res.json({success: true, payload: result})
})

ticketRouter.post("/", async function (req, res){
    const newTicket = req.bodyconst result = await createTicket(newTicket)
    res.json({success: true, payload: result})
})
export default ticketRouter;