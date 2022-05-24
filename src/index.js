const express = require("express");
const app = express();

require("dotenv").config();

const host = process.env.HOST;
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// users route
const usersRoute = require("./routes/users.routes");
app.use("/users", usersRoute);

// login route
const loginRoute = require("./routes/login.routes");
app.use("/login", loginRoute);

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
