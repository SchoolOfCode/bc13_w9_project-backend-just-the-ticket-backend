import { expect, test } from '@jest/globals'
import request from 'supertest';
import app from '../app.js'

import { getAllTickets } from "../models/ticketModels.js";

import { Pool } from '../data/index.cjs'

describe(`getting all tickets`, () => {
    test(`It gets all tickets`, async () => {
        const actual = await getAllTickets();
        const expected = expect.any(Array);
        expect(actual).toStrictEqual(expected);
    })

    test(`status 200 test`, async () => {
        const res = await request(app).get("/");
        expect(res.status).toStrictEqual(200);
    })

    test(`payload returns object with success and payload`, async () => {
        const res = await request(app).get("/api/tickets");
        expect(res.body.payload).toStrictEqual(expect.any(Array));
       
    })

})

describe (`creating a ticket`, () => {
    test('POST /api/ticket', async () => {
        const response = await request(app)
        .post('/api/tickets ')
        .send({
            question_author: "John",
            question_title: "How do I iterate over an array?",
            room_number: 1,
            problem_summary: "how many expressions in a for loop",
            tried_input: "looked on W3 School and Stackoverflow",
            code: "for (let i=0, i<name.length, i++)",
            error_logs: "uncaught syntax error"
        });
    
        // test status code
        expect(response.status).toEqual(201);
    
        // test body structure
        expect(response.body).toStrictEqual(
           expect.any(Array)
        );
    
        // test content of object
        const ticketArray = response.body;
        expect(ticketArray).toStrictEqual([{
            id: expect.any(Number),
            question_author: "John",
            question_title: "How do I iterate over an array?",
            room_number: 1,
            problem_summary: "how many expressions in a for loop",
            tried_input: "looked on W3 School and Stackoverflow",
            code: "for (let i=0, i<name.length, i++)",
            error_logs: "uncaught syntax error"
        }]);  

    })

})


describe (`deleting a ticket`, () => {
//    Test DELETE /api/tickets/:id
test(`DELETE /api/tickets/1`, async () => {
    const response = await request(app).delete(`/api/tickets/1`);

    // test status code
    expect(response.status).toEqual(200);

    // test body structure
    expect(response.body).toStrictEqual(
        expect.any(Array)
    );

    // test content of object
    const taskArray = response.body.payload;
    expect(taskArray).toStrictEqual([{
            id: 1,
            question_author: expect.any(String),
            question_title: expect.any(String),
            room_number: expect.any(Number),
            problem_summary: expect.any(String),
            tried_input: expect.any(String),
            code: expect.any(String),
            error_logs: expect.any(String),
    }]);  
    })

})



