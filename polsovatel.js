const express = require('express')
const controllers = require("../controllers/polsovatel");
const router = express.Router()



router.post("/create", controllers.create);
router.get("/",controllers .findAll);
router.get("/:Id", controllers.findOne);
router.put("/", controllers.update);
router.delete("/:id", controllers.delete);
router.delete("/",controllers.deleteAll);
 module.exports = router