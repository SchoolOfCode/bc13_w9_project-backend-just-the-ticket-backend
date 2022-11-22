import { query } from "../data/";

async function getAllTickets() {
    const result = await query("SELECT * FROM tickets;");
    const allTickets = result.rows;
    return allTickets;
  }

  export default {
    getAllTickets,
  };