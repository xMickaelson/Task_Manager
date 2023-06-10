const express = require("express");
const taskRouter = require("./routers/routerTasks");
const { config } = require("dotenv");
const app = express();
require("./db/connect");
const notFound = require("./middleware/not-found");
//middleware
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", taskRouter);
app.use(notFound);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening to server at Port ${port}`);
});
