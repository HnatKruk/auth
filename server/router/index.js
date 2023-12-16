const Router = require('express')
const UserController = require('../controllers/user-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const { body } = require('express-validator')

const router = new Router()

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  UserController.registration
)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddleware, UserController.getUsers)

module.exports = router