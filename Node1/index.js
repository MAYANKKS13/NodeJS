const express = require('express'); 
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const res = require('express/lib/response');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {
    next();
   });

app.get("/api/users", (req, res) => {
    // res.setHeader('myName', 'MAYANK');
    console.log(req.headers);
    return res.json(users);
}); 

app.get("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data)=>{
        return res.json({status: "pending"}); 
    });
    
}); 








app.listen(8080);