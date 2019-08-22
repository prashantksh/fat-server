var express = require('express');
var router = express.Router();
var poll_items = require('../data');

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.send(poll_items);
});

router.get('/get/:id', function(req, res, next) {
  let id = +req.params.id;
  res.send(poll_items.filter(p => p.id === id));
});

router.get('/votes/:id', (req, res) => {
  let id = +req.params.id;
  let poll_item = poll_items.filter(p => p.id === id)[0];
  if (!poll_item) {
    res.sendStatus(400);
  } else {
    res.send({ voteCount: poll_item.voteCount });
  }
});

router.get('/votes', (req, res) => {
  let total = 0;
  poll_items.forEach(p => {
    total += +p.voteCount;
  });

  res.send({ totalVotes: total });
});

router.get('/groups', (req, res) => {
  res.send({ groups: ['Development', 'Marketing', 'Operations'] });
});

router.post('/create', function(req, res, next) {
  const poll_item = req.body;
  poll_items.push(poll_item);
  res.send({ message: 'Add operation successful' });
});

router.put('/vote/:id', (req, res) => {
  let id = +req.params.id;
  let item = poll_items.filter(p => p.id === id)[0];
  if (!item) {
    res.sendStatus(400);
  } else {
    item.voteCount++;
    res.send({ message: `Voted successfully for ${item.title}` });
  }
});

router.put('/update', function(req, res, next) {
  const poll_item = req.body;
  const index = poll_items.indexOf({ id: +poll_item.id });

  if (index < 0) {
    res.sendStatus(400);
  } else {
    poll_items[index] = poll_item;
    res.send({ message: 'Update operation successful' });
  }
});

router.delete('/delete/:id', function(req, res, next) {
  let id = +req.params.id;
  const index = poll_items.indexOf({ id });
  if (index < 0) {
    res.sendStatus(400);
  } else {
    poll_items = poll_items.splice(index, 1);
    res.send({ message: 'Delete operation successful' });
  }
});

module.exports = router;
