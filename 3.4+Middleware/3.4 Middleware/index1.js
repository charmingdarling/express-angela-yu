// Import express module
import express from "express";

// Path module provides utilities for working with file and directory paths. It can be accessed using:
import { dirname } from "path";

// The URL module provides utilities for URL resolution and parsing. It can be accessed using:
import { fileURLToPath } from "url";

// __dirname is the directory name of the current module up until the part we want to access. In this case, the directory name of the current module is 3.4%2BMiddleware/3.4%20Middleware. So while it is true for our computer that the index.html file is in the public folder, it is not true for the server.

// The server is looking for the index.html file in the 3.4%2BMiddleware/3.4%20Middleware folder. So we need to go up one level in the directory name. We can do this using the dirname() method. The dirname() method returns the directory name of a path.

// We can use the import.meta.url property to get the URL of the current module. We can then use the fileURLToPath() method to convert the file URL to a file path.
// This is the directory name of the current module up until the part we want to access.

const __dirname = dirname(fileURLToPath(import.meta.url));

// This creates an instance of the express module.
const app = express();
const port = 3000;

// res.sendFile() is used to send static files, transfers the file at a given path. Sets the Content-Type response HTTP header field based on the filename’s extension. Unless the root option is set in the options object, path must be an absolute path to the file.

// In this instance, we are sending the index.html file in the public folder. The root option is set to __dirname which is the current directory name. In order to get the full path of this particular file, we need to do some extra work. We need to import the path module and use the dirname() method to get the directory name of the current module. We also need to import the url module and use the fileURLToPath() method to convert the file URL to a file path.

// We can then use the dirname() method to get the directory name of the current module. We can then use the + operator to concatenate the directory name with the path to the index.html file.
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html"); // C:\Users\user\Desktop\Node.js\3.4+Middleware\3.4 Middleware\public\index.html
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
