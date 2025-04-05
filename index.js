const express = require("express");
const fs = require("fs");
const app = express();

app.get("/file/:fileName", (req, res) =>{
    const n = req.params.fileName;
    fs.readFile(n, "utf-8", (err, data)=>{
        res.json({data});
    })
})

app.listen(3000);