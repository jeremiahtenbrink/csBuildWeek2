const router = require("express").Router();
const db = require("../data/dbConfig.js");

router.get('/', async (req, res) => {
  const rooms = await db('rooms');
  const map = {};
  rooms.forEach(room => {
    room.exits = JSON.parse(room.exits)
    map[room.room_id] = room;
  });
  
  res.status(200).json(map);
});


router.post('/', async (req, res) => {
  const {dir, prev_room, next_room} = req.body;
  
  let prev = await db('rooms').where({room_id: prev_room.room_id}).first();
  let next = await db('rooms').where({room_id: next_room.room_id}).first();
  
  delete(prev_room['players']);
  delete(prev_room['cooldown']);
  delete(prev_room['errors']);
  delete(prev_room['messages']);
  
  delete(next_room['players']);
  delete(next_room['cooldown']);
  delete(next_room['errors']);
  delete(next_room['messages']);
  
  
  if (prev){
    prev.exits = JSON.parse(prev.exits)
  }else {
    prev = await makeRoom(prev_room);
    prev = prev[0]
    prev.exits = JSON.parse(prev.exits);
  }
  if (next){
    next.exits = JSON.parse(next.exits)
  }else {
    next = await makeRoom(next_room);
    next = next[0]
    next.exits = JSON.parse(next.exits);
  }
  
  prev.exits[dir] = next.room_id;
  next.exits[getReverseDirection(dir)] = prev.room_id;
  let resultNext = await updateRoom(next);
  let resultPrev = await updateRoom(prev);
  
  console.log(resultNext)
  res.status(200).json({message: "moved ok"})
});

const getReverseDirection= (dir) => {
  let directions = {
    "n": "s",
    "s": "n",
    "e": "w",
    "w": "e"
  };
  return directions[dir];
};

const updateRoom = (room) => {
  room.exits = JSON.stringify(room.exits);
  return db('rooms').where({room_id: room.room_id}).update(room)
};

const makeRoom = (room) => {
  exits = room.exits;
  exitsOb = {
  
  };
  exits.forEach( exit => {
    exitsOb[exit] = "?"
  });
  
  room.exits = JSON.stringify(exitsOb);
  return db('rooms').insert(room).returning('*')
  
};

module.exports = router;