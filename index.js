const express = require("express");
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/jobs");
const app = express();
const port = 3000;

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});