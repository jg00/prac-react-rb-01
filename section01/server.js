const path = require("path");
const express = require("express");
const app = express();

// We need some way of serving up our files.  Only job will be to serve up the front end items we have in this section
app.use(express.static(path.join(__dirname, "/")));

/* Check only
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
*/

// 204: No Content
app.use("/favicon.ico", (req, res, next) => {
  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Server started!");
});
