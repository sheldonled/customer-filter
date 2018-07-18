import express from 'express';
import {join} from 'path';
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
app.get("/", (req, res) => res.sendFile(join(__dirname,'frontend/dist/index.html')));
app.get("/app.js", (req, res) => res.sendFile(join(__dirname,'frontend/dist/app.js')));

//404 routes
app.use((req, res) =>  res.status(404).send("nothing here"));


app.listen(PORT, () =>
  console.log(`running on port ${PORT}`)
);