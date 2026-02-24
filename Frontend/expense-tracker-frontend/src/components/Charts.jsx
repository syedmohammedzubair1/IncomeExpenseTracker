import { useEffect, useState } from "react";
import API from "../services/api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Charts() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    API.get("/transactions").then(res => {

      const expenses = res.data.filter(t => t.type === "expense");

      const map = {};
      expenses.forEach(t => {
        map[t.category] = (map[t.category] || 0) + t.amount;
      });

      setChartData({
        labels: Object.keys(map),
        datasets: [{
          data: Object.values(map),
          backgroundColor: [
            "#0d6efd",
            "#198754",
            "#ffc107",
            "#dc3545",
            "#6f42c1",
            "#20c997",
          ],
        }]
      });
    });
  }, []);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="mb-3">Expense Breakdown</h5>
        <div style={{maxWidth:"400px", margin:"auto"}}>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
