const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is the root'));

router.get('/styles', controllers.getAllStyles);
router.get('/styles/:id', controllers.getStyleById);

router.post('/beers', controllers.NewBeer);
router.get('/beers', controllers.getAllBeers);
router.get('/beers/:id', controllers.getBeerById);

router.get('/inTypes', controllers.getAllInTypes);
router.put('/inTypes/:id', controllers.getInTypeById);

router.post('/ingredients', controllers.Newingredient);
router.get('/ingredients', controllers.getAllingredients);
router.get('/ingredients/:id', controllers.getingredientById);

module.exports = router;
