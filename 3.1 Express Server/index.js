// Using latest version module to express
import express from "express";

// Getting a hold of Express
const app = express();

// Step 1. Port is the location where we are listening.
const port = 3000;

// Request, Response
app.listen(port, () => {
  console.log(`Server running on port ${port}.`); // <- Step 2. Callback
});

//netstat -ano | findstr "LISTENING"
