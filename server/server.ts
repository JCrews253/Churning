import express from "express";

const app = express();

app.get("/api", (req, res) => res.json({ value: "hello" }));

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
