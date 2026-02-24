import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Charts from "../components/Charts";
import SummaryCards from "../components/SummaryCards";
function Dashboard() {
  return (
    <div className="container-fluid py-4">

      <h2 className="mb-4 fw-bold text-center">💰 Expense Tracker Dashboard</h2>

      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-md-4">
          <TransactionForm />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-8">
          <Charts />
          <div className="mt-4">
            <TransactionList />
          </div>
        </div>

        <div className="col-12">
              <SummaryCards />
            </div>

      </div>

    </div>
  );
}

export default Dashboard;
