const express = require("express")
const app = express()
app.get("/", (req, res) => res.send("Hello my"))
app.listen(3030)
