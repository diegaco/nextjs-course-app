import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = id => notes.find(note => note.id == parseInt(id));

const handler = nc()
  .get((req, res) => {
    const { id } = req.query;
    const note = getNote(id);
    if (!note) {
      res.status(404)
      res.end()
      return
    }
    res.json({ data: note })
  })
  .patch((req, res) => {
    const { id } = req.query;
    const note = getNote(id);
    const updated = {...note, ...req.body}
    const idx = notes.findIndex(note => note.id == parseInt(id))
    notes[idx] = updated;

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    res.json({ data: updated });

  })
  .delete((req, res) => {
    const { id } = req.query;
    const note = getNote(id);
    if (!note) {
      res.status(404)
      res.end()
      return
    }
    const idx = notes.findIndex(note => note.id == parseInt(id))
    const deletedNote = notes.splice(idx, 1);
    res.json({ data: deletedNote });
  });

export default handler;