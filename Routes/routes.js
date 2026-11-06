const express=require('express') 
const userController=require('../controller/userController')
const bookController=require('../controller/bookController')
const authMiddleware=require('../Middlewares/authMiddleware')
const adminauthMiddleware=require('../Middlewares/adminAuthMiddleware')

const multerMiddleware=require('../Middlewares/multerMiddleware')
// to set up routes outside express server, create object for Router class in express
const router=new express.Router()

// register
router.post('/register',userController.registerController)
router.post('/login',userController.loginController)
router.post('/google-login',userController.googleLogin)
router.get('/homebooks',bookController.getHomePageBookController)


// -------------authorized user-------------------

router.put('/user/edit/:id',authMiddleware,multerMiddleware.single('picture'),userController.userEditController)
router.post('/add-book',authMiddleware,multerMiddleware.array('uploadImages',3),bookController.addBokkController)
router.get('/all-books',authMiddleware,bookController.getBooksPageBookController)
router.get('/user-books',authMiddleware,bookController.getUserBookController)
router.get('/bought-books',authMiddleware,bookController.getUserBoughtBookController)
router.get('/single-book/:id',authMiddleware,bookController.getSingleBookController)
//get book via ai
router.post('/books-ai',authMiddleware,bookController.generateBookAbstractController)
router.delete('/remove-book/:id',authMiddleware,bookController.removeBookController)
router.get('/make-payment/:id',authMiddleware,bookController.bookpaymentController)
router.post('/verify-payment',bookController.verifyPayementController)

// ---------------------admin-----------------------------
router.get('/books',adminauthMiddleware,bookController.getAllBooksController)
router.get('/books',adminauthMiddleware,bookController.getAllBooksController)
router.get('/all-users',adminauthMiddleware,userController.getAllUsersControler)

module.exports=router