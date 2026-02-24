import { useEffect, useState } from "react";
import API from "../services/api";

function TransactionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/transactions").then(res => setData(res.data));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <h5 className="mb-3">Transactions</h5>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map(t => (
              <tr key={t._id}>
                <td className={t.type==="income"?"text-success":"text-danger"}>
                  {t.type}
                </td>
                <td>{t.category}</td>
                <td>₹ {t.amount}</td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default TransactionList;
