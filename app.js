// Core Module
const path = require('path');
// Extername Module
const express = require("express");
const app = express();
// Local Module
const userRouter = require("./routes/userRouter");
const houstRouter = require("./routes/houstRouter");
const rootDir = require("./utils/pathUtil");


app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",houstRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listning on port http://localhost:${PORT}`);
});
