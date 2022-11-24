import { expect, test } from '@jest/globals'
import request from 'supertest';
import app from '../app.js'


import { getAllTickets } from "../models/ticketModels.js";

import db  from '../data/index.cjs'
import ticketRouter from './ticketRouter.js';
  const pool = db.pool;

    test(`It gets all tickets`, async () => {
        const actual = await getAllTickets();
        const expected = expect.any(Array);
        expect(actual).toStrictEqual(expected);
    })

    test(`status 200 test`, async () => {
        const res = await request(app).get("/api/tickets");
        expect(res.status).toBe(200);
    })

    test(`returns object with success and payload`, async () => {
        const res = await request(app).get("/api/tickets");
        expect(res.body).toStrictEqual(expect.any(Array));
       
    })
    test ('post objects with key value pair', async ()=> {
        const newTicket = "Mike"
        const res = await request(app).post("/api/tickets").send({name: "Mike"}) 
        expect(res.body).toStrictEqual([
            {
                "id": expect.any(Number),
                "question_author": "Mike",
                "question_title": null,
                "room_number": null,
                "problem_summary": null,
                "tried_input": null,
                "code": null,
                "error_logs": null,
                "status": null
            }
        ])
    })
    test('deletes a ticket', async ()=> {
        const res = await request(app).delete("/api/tickets/1")
        expect(res.status).toBe(200);
    })

    afterAll(async function(){
        await pool.end();
    });