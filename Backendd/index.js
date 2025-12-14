const express = require('express');
const app = express();

const port=8080;

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json());


app.get("/register",(req,res)=>{
    let {user, pass} = req.query;
   
    res.send(`This is the registration page.GET. User: ${user}`);
});
app.post("/register",(req,res)=>{
    let {user, pass} = req.body;
    res.send("This is the registration page.POST");
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

