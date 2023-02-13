const express = require("express");
const router = express.Router();


const {quesions,Alldata,findById,deleteById,Contact,deleteContact,getAllContacts}=require("../controllers/clientController")
const {requireAuth}=require("../middleware/authJWT")

router.post("/qpost",quesions)
router.get("/qpost/getall",requireAuth,Alldata)
router.get("/qpost/getall/:id",requireAuth,findById)
router.post("/qpost/delete/:id",requireAuth,deleteById)
router.post("/contact",Contact)
router.delete("/contact/:id",requireAuth,deleteContact)
router.get("/contact/all",requireAuth,getAllContacts)

module.exports = router;
