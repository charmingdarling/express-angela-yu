import express from "express";

// Body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. It breaks down and analyzes the body portion (information) of an incoming HTTP request and based on the body, it populates the req.body property. You may see this as email or password that is submitted by the user on a login page, for example.

import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// When the submit button is pressed, it will make the POST request to the /submit route. The POST request will contain the data from the form. We can access this data using the req.body property. We can then log the data to the console.

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
