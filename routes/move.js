const router = require("express").Router();
const db = require("../data/dbConfig.js");

router.post('/', async (req, res) => {
  const {dir, prev_room, next_room} = req.body;
  
  let prev = await db('rooms').where({room_id: prev_room.room_id}).first();
  let next = await db('rooms').where({room_id: next_room.room_id}).first();
  
  if (prev){
    prev.exits = JSON.parse(prev.exits)
  }else {
    prev = makeRoom(prev_room)
  }
  if (next){
    next_room.exits = JSON.parse(next.exits)
  }else {
    next = makeRoom(next_room)
  }
  
  
  
});

const makeRoom = (room) => {
  exits = room.exits;
  exitsOb = {
  
  };
  exits.forEach( exit => {
    exitsOb[exit] = "?"
  });
  
  room.exits = JSON.stringify(exitsOb);
  return db('room').insert(room).returning('*')
  
};

module.exports = router;