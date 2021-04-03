import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
  .get((req, res) => {
    res.json({data: notes})
  })
  .post((req, res) => {
    const note = {
      id: Date.now(),
      ...req.body
    }
    notes.push(note);
    res.json({data: note})
  });

export default handler;