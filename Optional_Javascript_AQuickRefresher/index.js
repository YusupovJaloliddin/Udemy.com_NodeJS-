const DbConnection = require("./db");
const dotenv = require("dotenv");
const app = require("express")();
dotenv.config();

//MongoDb connection
DbConnection();
app.get("/", async (req, res) => {
  res.send("Salom");
});
app.listen(process.env.PORT || 3001, () => {
  console.log(
    `Server is working on http://localhost:${process.env.PORT || 3001}`
  );
});
