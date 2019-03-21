var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    
    title: 'Coca Cola', 
    
    flavorsTitle: 'Our Flavors', 
  
  flavorsParagraph: 'Coca Cola has many different flavors for you to enjoy. Below are just some of the great tastes we have to offer.',

classicFlavor: 'Our classic Coca Cola drink is sure to keep you refreshed on a hot day.',

cherryFlavor: 'Want to try something a bit different? Try our Cherry Cola for a delicious juicy taste.',

vanillaFlavor: 'Its like a cream soda in a bottle. Try our vanilla cola!'



}
  );
});

module.exports = router;
