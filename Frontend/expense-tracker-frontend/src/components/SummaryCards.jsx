import { useEffect, useState } from "react";
import axios from "axios";


// 🔥 Define OUTSIDE (top level)
function Card({ title, value, color }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div className={`card border-0 shadow-sm bg-${color} text-white`}>
        <div className="card-body">
          <h6 className="mb-1">{title}</h6>
          <h3 className="fw-bold">₹ {value}</h3>
        </div>
      </div>
    </div>
  );
}


function SummaryCards({ refresh }) {
  const [summary, setSummary] = useState(null);

  const fetchSummary = async () => {
    try {
      const res = await axios.get("/api/transactions/summary", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setSummary(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
  let ignore = false;

  const load = async () => {
    try {
      const res = await axios.get("/api/transactions/summary", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (!ignore) setSummary(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  load();

  return () => {
    ignore = true;
  };

}, [refresh]);


  if (!summary) return <div className="text-center">Loading summary...</div>;

  return (
    <div className="row g-3 mb-4">

      <Card title="Balance" value={summary.balance} color="dark" />
      <Card title="Total Income" value={summary.totalIncome} color="success" />
      <Card title="Total Expense" value={summary.totalExpense} color="danger" />
      <Card title="Today Expense" value={summary.dailyExpense} color="primary" />
      <Card title="Weekly Expense" value={summary.weeklyExpense} color="warning" />
      <Card title="Monthly Expense" value={summary.monthlyExpense} color="info" />
      <Card title="Yearly Expense" value={summary.yearlyExpense} color="secondary" />

    </div>
  );
}

export default SummaryCards;
