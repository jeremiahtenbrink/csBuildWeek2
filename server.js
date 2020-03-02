const express = require( "express" );
const cors = require( "cors" );
const helmet = require( "helmet" );
const move = require('./routes/move.js')

const server = express();

server.use( helmet() );
server.use( cors() );
server.use( express.json() );

server.use('/move', move);


server.use("/api", (req, res) => {
  console.log("inside of server up message");
  return res.status(200).json({ message: "Server up and running" });
});


module.exports = server;
