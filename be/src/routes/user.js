const router = require("express").Router();
const userCtr = require('../controllers/userController');

router.post('/', userCtr.create);
router.get('/', userCtr.read);
router.get('/:id', userCtr.readOne);
router.patch('/', userCtr.update);
router.delete('/', userCtr.delete);

module.exports = router;
