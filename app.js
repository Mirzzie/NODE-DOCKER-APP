const express = require("express");
const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("TERRAFORM + ANSIBLE + AWS +AZURE DEVOPS - ITS ALL FUN!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
