const express = require("express");
const ngrok = require("@ngrok/ngrok");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  console.log("access token: ", req.get("token"));
  console.log("data: ", JSON.stringify(req.body, null, 2));
  res.json({ code: 0 });
});

ngrok.listen(app).then(() => {
  console.log("established listener at: " + app.listener.url());
});
