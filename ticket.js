const express = require('express')
const router = express.Router()
const controllers = require("../controllers/ticket");
  
router.post("/create", controllers.create);
router.get("/",controllers .findAll);
router.get("/:ticketId", controllers.findOne);
router.put("/", controllers.update);
router.delete("/", controllers.delete);
router.delete("/:id",controllers.deleteAll);
 module.exports = router