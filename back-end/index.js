const express = require('express')
const app = express()
const port = process.env.NEXT_PUBLIC_PORT_BACKEND || 5000
const db = require('./db')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/users/list', async (req, res) => {
  try {
    console.log('Fetching users from the database');
    var sql = 'SELECT * FROM users';
    const [result] = await db.query(sql)
    res.send(result);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
})

app.get('/health-check', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.status(200).send('OK');
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).send('DB Connection Failed');
  }
});

