const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const cors = require('cors')

app.use(cors())

let tickets_data = {};

app.get('/', (req, res) => {
  res.send(tickets_data);
});

app.post('/send_order', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send('Good');
    });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});