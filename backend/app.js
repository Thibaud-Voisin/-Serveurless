const express = require('express');
const app = express();
const multer = require('multer');
const { Pool } = require('pg');
app.use(express.json());
const port = 3000;
const cors = require('cors')

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'serveurless',
  password: 'password',
  port: 5433,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });``

app.use(cors())

app.get('/get_cart', async (req, res) => {
  const ress = await pool.query('SELECT * FROM cart ORDER BY id DESC LIMIT 1');
  if (ress.rows.length == 0) {
    res.sendStatus(400);
  }
  else{
  const menuItems = JSON.parse(ress.rows[0].string_value);

  const formattedData = {
    state: 1,
    timestamp: Math.floor(Date.now() / 1000),
    table: 12,
    data: menuItems.map(item => ({
      number: item.number,
      name: item.name,
      image: item.image,
      ingredients: item.ingredients,
      price: item.price,
      description: item.description,
      type: item.type
    }))
  };
  res.send(formattedData);
}
});

app.get('/info_avance', async (req, res) => {
  const ress = await pool.query('SELECT * FROM status ORDER BY id DESC LIMIT 1');
  if (ress.rows.length == 0) {
    res.send(0);
  }
  else {
    res.send('' + ress.rows[0].int_value);
  }
});

app.post('/send_cart', async (req, res) => {
  
  const result = await pool.query('INSERT INTO cart (string_value) VALUES ($1)', [JSON.stringify(req.body)]);
    console.log(req);
    console.log(req.body);
    res.send('Good');
});

app.post('/send_status', async (req, res) => {
  const result = await pool.query('INSERT INTO status (int_value) VALUES ($1)', [1]);
    console.log(req);
    console.log(req.body);
    res.send('Good');
});

app.post('/update_status', async (req, res) => {
  let intt = (JSON.parse(JSON.stringify(req.body)).valuee);
  const result = await pool.query('UPDATE status SET int_value = ($1) WHERE id = (SELECT MAX(id) FROM status)', [intt]);
  console.log(req);
    console.log(req.body);
    res.send('Good');
});

    



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});