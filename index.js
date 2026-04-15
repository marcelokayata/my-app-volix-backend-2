require("express-async-errors");
const express = require("express");
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/jobs");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 3000;

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});