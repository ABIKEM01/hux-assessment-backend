const express = require("express") ;
const {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js") ;
const { authenticate } = require("../middlewares/authMiddleware.js") ;

const router = express.Router();

router.post("/", authenticate, createContact);
router.get("/", authenticate, getContacts);
router.get("/:id", authenticate, getContact);
router.put("/:id", authenticate, updateContact);
router.delete("/:id", authenticate, deleteContact);

module.exports= router;
