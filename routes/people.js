var express = require('express');
var router = express.Router();

/* GET person page. */
// TODO: list people with thumbnails

router.get('/', function(req, res, next) {
  res.send("help us add list of people here")
})

// TODO: need to build out this route
// so that it gets a person record from Airtable
// TODO: also grab most recent 3 projects?

router.get('/:name', function(req, res, next) {
  res.render('json', {
    title: "under construction",
    json: req.params
  })
});


module.exports = router;
