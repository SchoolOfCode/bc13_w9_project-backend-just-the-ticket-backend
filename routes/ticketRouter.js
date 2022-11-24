import express from 'express';
const ticketRouter = express.Router();

import { getAllTickets, createTicket, getTicketById, updateTicketById, deleteTicketById } from "../models/ticketModels.js";

ticketRouter.get("/", async function (req, res){
    const allTickets = await getAllTickets();
    res.status(200).json(allTickets);
});

ticketRouter.get("/:id", async function (req, res) {
    const ticket = await getTicketById(req.params.id);
    res.json({ success: true, payload: ticket });
  });

ticketRouter.post("/", async function (req, res){
    const newTicket = req.body;
    const result = await createTicket(newTicket);
    res.status(200).json(result);
});

ticketRouter.patch("/:id", async function (req, res) {
    const data = req.body;
    const updatedTicket = await updateTicketById(req.params.id, data);
    res.json({ success: true, payload: updatedTicket });
});

ticketRouter.delete("/:id", async function (req, res) {
  const result = await deleteTicketById(req.params.id);
  res.json({ success: true, payload: result });
});

export default ticketRouter;