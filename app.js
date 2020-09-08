const express = require("express");
const app = express();

//Middleware
app.use(express.json({ extended: false }));
const upload = require("./middleware/multerupload");

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.post("/", upload, (req, res) => {
  const { name } = req.body;
  const { file } = req.file;

  console.log(req.file);

  const book = {
    name,
    file,
  };

  res.json(book);
});

app.post("/api", (req, res) => {
  res.send("STILL WORKING");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
