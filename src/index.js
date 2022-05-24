const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const host = process.env.HOST;
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const whitelist = [
  "http://localhost:3000",
  "http://btg.istetkmce.in",
  "https://btg.istetkmce.in",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// users route
const usersRoute = require("./routes/users.routes");
app.use("/users", usersRoute);

// login route
const loginRoute = require("./routes/login.routes");
app.use("/login", loginRoute);

// players route
const playersRoute = require("./routes/players.routes");
app.use("/createnewteam", playersRoute);

// admin route
const adminRoute = require("./routes/admin.routes");
app.use("/admin", adminRoute);

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
