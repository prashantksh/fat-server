var express = require('express');
var router = express.Router();
var bugs = require('../data');

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.send(bugs);
});

router.get('/get/:id', function(req, res, next) {
  let id = +req.params.id;
  res.send(bugs.filter(bug => bug.id === id));
});

router.post('/create', function(req, res, next) {
  const bug = req.body;
  bugs.push(bug);
  res.send('Add operation successful');
});

router.put('/update', function(req, res, next) {
  const bug = req.body;
  const id = +bug.id;
  const index = bugs.indexOf({ id: +bug.id });
  bugs[index] = bug;
  res.send('Update operation successful');
});

router.delete('/delete/:id', function(req, res, next) {
  let id = +req.params.id;
  const index = bugs.indexOf({ id });
  bugs = bugs.splice(index, 1);

  res.send('Delete operation successful');
});

module.exports = router;
