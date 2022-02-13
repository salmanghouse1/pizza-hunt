const router = require('express').Router()
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

router
    .route('/')
    .get(getAllPizza())
    .post(createPizza())



router
    .route('/:id')
    .get(getPizzaById())
    .put(createPizza())
    .delete(deletePizza());


module.exports = router