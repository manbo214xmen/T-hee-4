const express = require('express');
const router = express.Router();
const multer = require('multer');

//define disk
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'public/imgs');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage:storage
});

const adminController = require('../app/controllers/AdminController');

router.get('/viewproducts', adminController.viewProducts);
router.post('/addproducts', upload.single('imglink'), adminController.addProducts);
router.get('/', adminController.index);

module.exports = router;