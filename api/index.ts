import Emitter from './infra/Event-emitter'
import express from 'express';
import files from './events/_setup'

const app = express();
const PORT = 8000;
console.log("Events: ", files.map(f=> f.split('.')[0]).join(', '))
app.post("/:event", (req, res) => {
    Emitter.pub(req.params.event, {...res})
    res.send({}) 
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});