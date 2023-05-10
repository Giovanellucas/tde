const express = require("express");

const server = express();

{
let products = [
    {
    id:1,
    name: "Iphone Apple",
    description: "Iphone X a venda na olx",
    isDone: false,
},
{
    id:2,
    name: "Notebook Acer",
    description: "Notebook acer usado",
    isDone: false,
}
]
}

server.get("/products", (req, res)=>{
    res.json({
        products: [

        ]
    })
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
