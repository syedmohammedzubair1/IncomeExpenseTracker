const Transaction = require("../Models/Transaction");

// ADD
exports.addTransaction = async (req, res) => {
  const { type, amount, category,date } = req.body;

  const transaction = await Transaction.create({
    type,
    amount,
    category,          // ⭐ NEW
    date: date || Date.now(),
    userId: req.user.id
  });

  res.status(201).json(transaction);
};

// GET (USER BASED — SAFE)
exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find({ userId: req.user.id })
    .sort({ createdAt: -1 });

  res.json(transactions);
};

// DELETE (ONLY OWNER CAN DELETE ⭐)
exports.deleteTransaction = async (req, res) => {
  const transaction = await Transaction.findOne({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!transaction)
    return res.status(404).json({ message: "Not found" });

  await transaction.deleteOne();

  res.json({ message: "Transaction deleted" });
};

exports.getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const now = new Date();

    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - 7);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    const transactions = await Transaction.find({ userId });

    let totalIncome = 0;
    let totalExpense = 0;
    let dailyExpense = 0;
    let weeklyExpense = 0;
    let monthlyExpense = 0;
    let yearlyExpense = 0;

    transactions.forEach(t => {

      if (t.type === "income") totalIncome += t.amount;
      else totalExpense += t.amount;

      if (t.type === "expense") {
        if (t.date >= startOfToday) dailyExpense += t.amount;
        if (t.date >= startOfWeek) weeklyExpense += t.amount;
        if (t.date >= startOfMonth) monthlyExpense += t.amount;
        if (t.date >= startOfYear) yearlyExpense += t.amount;
      }

    });

    res.json({
      balance: totalIncome - totalExpense,
      totalIncome,
      totalExpense,
      dailyExpense,
      weeklyExpense,
      monthlyExpense,
      yearlyExpense
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};