const express = require('express')
const controllers = require("../controllers/airport");
const router = express.Router()



router.post("/create", controllers.create);
router.get("/",controllers .findAll);
router.get("/:Id", controllers.findOne);
router.put("/", controllers.update);
router.delete("/", controllers.delete);
router.delete("/:id",controllers.deleteAll);
 module.exports = router