const { handleExceptions } = require('../../middlewares/errorHandlers');

const router = require('express').Router();

router.post('/add', handleExceptions(require('./add').add));
router.get('/get', handleExceptions(require('./get').getAll));
router.get('/get/:id', handleExceptions(require('./get').get));
// router.post('/signup', handleExceptions(require('./signup').signup));

module.exports = router;
