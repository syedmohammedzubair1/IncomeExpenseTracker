import { useState } from "react";
import API from "../services/api";

function TransactionForm() {
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");
  const [date,setDate] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/transactions", {
      type,
      category,
      amount: Number(amount),
      date,
    });

    setAmount("");
    window.location.reload();
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <h5 className="card-title mb-3">Add Transaction</h5>

        <form onSubmit={submitHandler}>

          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-select"
              value={type}
              onChange={(e)=>setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}>
              <option>Salary</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Bills</option>
              <option>Shopping</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
            />
          </div>
            <div className="mb-3">
  <label className="form-label">Date</label>
  <input
    type="date"
    className="form-control"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
</div>

          <button className="btn btn-primary w-100">
            Add Transaction
          </button>

        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
