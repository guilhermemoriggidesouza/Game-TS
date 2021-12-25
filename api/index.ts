import Emitter from './infra/Event-emitter'
import express from 'express';
import files from './events/_setup'

const app = express();
const PORT = 8000;
const events = files.map((f) => f.split('.')[0])
app.post("/:event", (req, res) => {
    if(events.find((f) => f == req.params.event)){
        res.send({ success: true }) 
    } else {
        res.status(404).send({ success: false, msg: "cannot find event" })
    }
})
    
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});