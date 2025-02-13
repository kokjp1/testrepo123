const express = require('express'); 
const app = express();

// [EXPRESS] intialization 

express().get('/', onhome)
express().listen(5500)
console.log("✅ De server runnt op port 8000.✅")

// --

function onhome(req, res) {
    res.send('<h1>Hello World</h1>');
}