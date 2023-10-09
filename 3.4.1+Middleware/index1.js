// Import express module
import express from "express";
// Class uses -> const express = require("express");

// Path module provides utilities for working with file and directory paths. It can be accessed using:
import { dirname } from "path";
// Class uses -> const path = require("path");

// The URL module provides utilities for URL resolution and parsing. It can be accessed using:
import { fileURLToPath } from "url";

// If we do not use the body-parser module, we will get undefined for req.body.
import bodyParser from "body-parser";

// __dirname is the directory name of the current module up until the part we want to access. In this case, the directory name of the current module is 3.4%2BMiddleware/3.4%20Middleware. So while it is true for our computer that the index1.html file is in the public folder, it is not true for the server.

// The server is looking for the index.html file in the 3.4%2BMiddleware/3.4%20Middleware folder. So we need to go up one level in the directory name. We can do this using the dirname() method. The dirname() method returns the directory name of a path.

// We can use the import.meta.url property to get the URL of the current module. We can then use the fileURLToPath() method to convert the file URL to a file path.
// This is the directory name of the current module up until the part we want to access.

const __dirname = dirname(fileURLToPath(import.meta.url));

// This creates an instance of the express module.
const app = express();
const port = 3000;

// Body-parser extracts the whole body of an incoming request and places it on req.body. It analyzes this information of an incoming HTTP request. Based on the body, it populates the req.body property. You may see this as email or password that is submitted by the user on a login page, for example.

// The use method gets called before any of the other methods. It is used to set up middleware.

// In Express.js, the app.use() method is used to connect middleware functions on a specific path. The path argument can be a string representing a path pattern or a regular expression.

// When the path is set to "/", it means that the middleware function will be executed for every incoming request, regardless of the route. This is often used for middleware that needs to be applied globally to all routes. If you specify a different path, like "/users" or "/api", the middleware function will only be executed for requests that match that path.

// The function argument is a middleware function. [("/", middlewareFunction")] <- "middlewareFunction" is the function argument.

// <-------------------> //

// What is a regular expression? A regular expression, also known as a regex, is a sequence of characters that defines a search pattern. It is a powerful tool used for pattern matching and manipulation of strings. Regular expressions are supported in many programming languages and text editors.

// With regular expressions, you can search for specific patterns within a string, validate input, extract information, and perform string manipulation operations like replacing, splitting, and matching.

// Regular expressions consist of a combination of literal characters and special characters called metacharacters. Metacharacters have special meanings and are used to define the pattern you want to match. For example, the metacharacter . matches any single character, and the metacharacter * matches zero or more occurrences of the preceding character or group.

// Here are a few common metacharacters used in regular expressions:

// . (dot): Matches any single character except a newline.

// * (asterisk): Matches zero or more occurrences of the preceding character or group.

// + (plus): Matches one or more occurrences of the preceding character or group.

// ? (question mark): Matches zero or one occurrence of the preceding character or group.

// [] (square brackets): Matches any single character within the brackets.

// () (parentheses): Groups multiple characters or expressions together.

// Regular expressions can be as simple or as complex as needed, depending on the pattern you want to match. They provide a concise and flexible way to work with strings and are widely used in tasks such as form validation, data extraction, and text processing.

// <-------------------> //

// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

// The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please refer to the qs library.

// Once you have declared the middleware, you can use the req.body property to access the data from the form. Every request object now has a body. (Otherwise, without bodyParser, you will get undefined for req.body.)
app.use(bodyParser.urlencoded({ extended: true }));

// res.sendFile() is used to send static files, transfers the file at a given path. Sets the Content-Type response HTTP header field based on the filename’s extension. Unless the root option is set in the options object, path must be an absolute path to the file.

// In this instance, we are sending the index.html file in the public folder. The root option is set to __dirname which is the current directory name. In order to get the full path of this particular file, we need to do some extra work. We need to import the path module and use the dirname() method to get the directory name of the current module. We also need to import the url module and use the fileURLToPath() method to convert the file URL to a file path.

// We can then use the dirname() method to get the directory name of the current module. We can then use the + operator to concatenate the directory name with the path to the index.html file.
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html"); // C:\Users\user\Desktop\Node.js\3.4+Middleware\3.4 Middleware\public\index.html
  res.sendFile(__dirname + "/public/index.html");
});

// When the submit button is pressed, it will make the POST request to the /submit route. The POST request will contain the data from the form. We can access this data using the req.body property. We can then log the data to the console.
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Try going to http://localhost:3000/submit and you will see the data from the form in the console.
