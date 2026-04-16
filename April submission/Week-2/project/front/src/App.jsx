import Layout from "./main-layout/Layout";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardArea from "./features/dashboard/DashboardArea";
import MaterialArea from "./features/material/MaterialArea";
import QuotationArea from "./features/quotation/QuotationArea";
import PaymentArea from "./features/payment/PaymentArea";
import QuotationForm from "./features/quotation/components/QuotationForm";
import QuotationDetail from "./features/quotation/components/QuotationDetail";
import MaterialDetail from "./features/material/components/MaterialDetail"
import MaterialForm from "./features/material/components/MaterialForm";

import QuotationProvider from "./contexts/quotation/QuotationProvider";
import MaterialProvider from "./contexts/material/MaterialProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Main Layout */}
        <Route element={<Layout />}>

          <Route
            path="/dashboard"
            element={
              <MaterialProvider>
                <QuotationProvider>
                  <DashboardArea />
                </QuotationProvider>
              </MaterialProvider>
            }
          />

          <Route
            path="/materials"
            element={
              <MaterialProvider>
                <MaterialArea />
              </MaterialProvider>
            }
          />

          <Route
            path="/materials/new-material"
            element={
              <MaterialProvider>
                <MaterialForm />
              </MaterialProvider>
            }
          />

          <Route
            path="/materials/:id"
            element={
              <MaterialProvider>
                <MaterialDetail />
              </MaterialProvider>
            }
          />

          
          <Route path="/payment" element={<PaymentArea />} />

          {/* ✅ Wrap once here */}
          <Route
            path="/quotations"
            element={
              <QuotationProvider>
                <QuotationArea />
              </QuotationProvider>
            }
          />

          <Route
            path="/quotations/send-quotation"
            element={
              <QuotationProvider>
                <QuotationForm />
              </QuotationProvider>
            }
          />

          <Route
            path="/quotations/:id"
            element={
              <QuotationProvider>
                <QuotationDetail />
              </QuotationProvider>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;