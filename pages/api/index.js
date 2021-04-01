// pages/api/data.js
// route => /api/data
import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'hello GET' })
  })
  .post((req, res) => {
    res.json({ message: 'hello POST' })
  })

export default handler;