CREATE TABLE tickets (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
question_author VARCHAR,
question_title VARCHAR,
room_number INTEGER,
problem_summary VARCHAR, 
tried_input VARCHAR,
code VARCHAR, 
error_logs VARCHAR
);

INSERT INTO tickets
(question_author, question_title, room_number, problem_summary, tried_input, code, error_logs)
VALUES
('John', 'How do I iterate over an array?', 1, 'how many expressions in a for loop', 'looked on W3 School and Stackoverflow', 'for (let i=0, i<name.length, i++)', 'uncaught syntax error');