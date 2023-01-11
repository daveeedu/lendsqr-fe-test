import './App.css';
import config from "./utils/config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Dashboard from './pages/home/Dashboard';
import UserDetails from './pages/home/UserDetails';
import Guarantors from './pages/home/Guarantors';
import Loans from './pages/home/Loans';
import DecisionModel from './pages/home/DecisionModel';
import Savings from './pages/home/Savings';
import LoanRequest from './pages/home/LoanRequest';
import Whitelist from './pages/home/Whitelist';
import Organization from './pages/home/Organization';
import LoanProduts from './pages/home/LoanProduts';
import SavingsProducts from './pages/home/SavingsProducts';
import FeesAndCharges from './pages/home/FeesAndCharges';
import Transactions from './pages/home/Transactions';
import Services from './pages/home/Services';
import Settlement from './pages/home/Settlement';
import Reports from './pages/home/Reports';
import Preference from './pages/home/Preference';
import FeesAndPricing from './pages/home/FeesAndPricing';
import AuditLogs from './pages/home/AuditLogs';
import ServicesAccount from './pages/home/ServicesAccount';
import Karma from './pages/home/Karma';


const { pageUrls } = config;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={pageUrls.dashboard}  element={<Dashboard />} />
        <Route path={pageUrls.userDetails}  element={<UserDetails />} />
        <Route path={pageUrls.guarantors}  element={<Guarantors />} />
        <Route path={pageUrls.loans}  element={<Loans />} />
        <Route path={pageUrls.decisionModel}  element={<DecisionModel />} />
        <Route path={pageUrls.savings}  element={<Savings />} />
        <Route path={pageUrls.loanRequest}  element={<LoanRequest />} />
        <Route path={pageUrls.whitelist}  element={<Whitelist />} />
        <Route path={pageUrls.karma}  element={<Karma />} />
        <Route path={pageUrls.organization}  element={<Organization />} />
        <Route path={pageUrls.loanProduts}  element={<LoanProduts />} />
        <Route path={pageUrls.savingsProducts}  element={<SavingsProducts />} />
        <Route path={pageUrls.feesAndCharges}  element={<FeesAndCharges />} />
        <Route path={pageUrls.transactions}  element={<Transactions />} />
        <Route path={pageUrls.services}  element={<Services />} />
        <Route path={pageUrls.settlement}  element={<Settlement />} />
        <Route path={pageUrls.reports}  element={<Reports />} />
        <Route path={pageUrls.preference}  element={<Preference />} />
        <Route path={pageUrls.feesAndPricing}  element={<FeesAndPricing />} />
        <Route path={pageUrls.auditLogs}  element={<AuditLogs />} />
        <Route path={pageUrls.servicesAccount}  element={<ServicesAccount />} />

       
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
