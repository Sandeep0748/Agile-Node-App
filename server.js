const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({name: "agile-node-app"})
});

app.get("/Student",(req,res) =>{
    res.status(200).json([
        {
        name: "Sandeep",
        age: 24,
        city: "gorakhpur"
        },
        {
            name: "Akshay",
            age: 24,
            city: "gorakhpur"
            }
        
    ])
})

app.listen(3000);