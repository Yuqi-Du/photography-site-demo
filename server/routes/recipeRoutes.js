const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

/**
 * App Routes, linked to controller
*/
router.get('/', photoController.homepage);
router.get('/categories', photoController.exploreCategories);
router.get('/categories/:name', photoController.exploreCategoriesByName);
router.post('/search', photoController.searchRecipe);
router.get('/add-photo', photoController.addPhoto);
router.post('/add-photo', photoController.addPhotoOnPost);
router.get('/contact', photoController.contactPage);

router.get('/photo/:id', photoController.explorePhoto);
router.get('/explore-latest', photoController.exploreLatest);
router.get('/explore-random', photoController.exploreRandom);


 
// need to expose the router
module.exports = router;