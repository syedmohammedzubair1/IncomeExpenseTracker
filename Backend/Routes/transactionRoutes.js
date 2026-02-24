const router = require("express").Router();
const auth = require("../Middleware/authMiddleware");
const {
  addTransaction,
  getTransactions,
  deleteTransaction,
  getSummary
} = require("../Controllers/transactionController");

router.post("/", auth, addTransaction);
router.get("/", auth, getTransactions);
router.delete("/:id", auth, deleteTransaction);
router.get("/summary",auth,getSummary);
module.exports = router;
