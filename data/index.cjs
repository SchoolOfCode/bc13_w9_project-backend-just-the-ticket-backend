const { Pool } = require("pg");

if (process.env.POSTGRES_CONNECTION_URL == undefined) {
  console.log("POSTGRES_CONNECTION_URL is undefined")
}

const pool = new Pool({
  connectionString: 'postgresql://postgres:qrlviNSiN8AuSLb0oZUU@containers-us-west-36.railway.app:5662/railway'
});

module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
};