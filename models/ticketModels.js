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

  export default  {
    getAllTickets,
  };