const express = require("express");
const app = express();
const routes = require("./routes/routes")

require("dotenv").config();

const host = process.env.HOST;
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// route application
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
