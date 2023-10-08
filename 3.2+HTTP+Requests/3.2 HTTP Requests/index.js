// In class >> const express = require("express");
// In order to use this, remember to go into package.json and write "type": "module" under main.

import express from "express";
const app = express(); // Getting a hole of Express
const port = 3000; // Establish port number we are litsening to.

// Express method to allow server to handle the get requests. Path between the ""
// Requests come in from browser, hits a particular path, and we can get a hold of it inside the anonymous function.
app.get("/", (req, res) => {
  // console.log(req.rawHeaders); // Log the request parameter with raw headers. Lots of information given.

  // Send back a response - in this case a piece of text
  res.send("Welcome Home");
});

app.get("/contact", (req, res) => {
  res.send(`Contact me at: kim@kim.com`);
});

app.get("/aboutme", (req, res) => {
  res.send(`I am 37 years-old. I have a little white puppy named Momo.`);
});

// Listening to port. Request and Response for port using a callback
app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});

// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
