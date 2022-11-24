import { query } from "../data/index.cjs";

export async function getAllTickets() {
    const result = await query("SELECT * FROM tickets;");
    const allTickets = result.rows;
    return allTickets;
  }

export async function createTicket(ticketList) {
    const result = await query(
      `INSERT INTO tickets (question_author, question_title, room_number, problem_summary, tried_input, code, error_logs)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * `,
      [ticketList.name, ticketList.question, ticketList.roomNumber, ticketList.problem, ticketList.description, ticketList.code, ticketList.errorLog]
    );
    return result.rows;
  }

export async function getTicketById(id) {
  const result = await query(
    `SELECT * 
    FROM tickets
    WHERE id = $1`, [id]);
  const ticket = result.rows[0];
  return ticket;
}

export async function updateTicketById(id, ticketList) {
  const result = await query(
    `UPDATE tickets
    SET question_author = $1, question_title = $2, room_number = $3, problem_summary = $4, tried_input = $5, code = $6, error_logs = $7
    WHERE id = $8
    RETURNING *`, [ticketList.name, ticketList.question, ticketList.roomNumber, ticketList.problem, ticketList.description, ticketList.code, ticketList.errorLog, id]) 
  const updatedTicket = result.rows[0];
  return updatedTicket;
}

export async function deleteTicketById(id) {
  const result = await query(
    `DELETE FROM tickets 
    WHERE id = $1
    RETURNING *`, [id]) 
  const updatedTicket = result.rows[0];
  return updatedTicket;
}