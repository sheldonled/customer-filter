import express from 'express';
import bodyParser from 'body-parser';
import api from './api/index';

const app = express();
const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/api", api.index);
app.get("/api/customers", api.getCustomers);
app.get("/api/customer/:id", api.getCustomer);

//App Frontend
app.get("/", (req, res) => res.send("nothing here yet"));

//404 routes
app.use((req, res) =>  res.status(404).send("nothing here"));


app.listen(PORT, () =>
  console.log(`running on port ${PORT}`)
);