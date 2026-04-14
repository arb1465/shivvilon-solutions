import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuotationContext } from "../../../contexts/quotation/quotationContext";
import Button from "../../../components/ui/Button";
import Popup from "../../../components/ui/Popup";

const ShowQuotations = ({ data }) => {
  const navigate = useNavigate();
  const { quotations, setQuotations } = useContext(QuotationContext);
  data
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleConfirm = () => {
    const updated = quotations.map((item) =>
      item.id === selectedId
        ? { ...item, status: "CONFIRM" }
        : item
    );

    setQuotations(updated);
    setShowPopup(false);
    setSelectedId(null);
  };

  return (
    <div className="mt-4 p-5 bg-white rounded-xl border overflow-hidden">

      <table className="w-full text-sm text-left">

        {/* HEADER */}
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">View</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">

                {/* Index */}
                <td className="p-3 border">{index + 1}</td>

                {/* Name */}
                <td className="p-3 border">{item.cliName}</td>

                {/* Amount */}
                <td className="p-3 border">₹ {item.amount}</td>

                {/* Status */}
                <td className="p-3 border">
                  <div className="flex items-center gap-2">

                    <span
                      className={`px-2 py-1 rounded text-xs
                        ${
                          item.status === "CONFIRM"
                            ? "bg-green-200 text-green-700"
                            : "bg-yellow-200 text-yellow-700"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                    {item.status === "PENDING" && (
                      <Button
                        btnName="Confirm"
                        btnColor="green"
                        btnWidth="w-auto px-2 py-1 text-xs"
                        onClick={() => {
                          setSelectedId(item.id);   // 🔥 store id
                          setShowPopup(true);       // 🔥 open popup
                        }}
                      />
                    )}

                  </div>
                </td>

                {/* View */}
                <td className="p-3 border">
                  <button
                    onClick={() => navigate(`/quotations/${item.id}`)}
                    className="text-indigo-600 hover:underline"
                  >
                    View
                  </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center">
                No Quotations Data
              </td>
            </tr>
          )}
        </tbody>

      </table>

      {/* 🔥 Popup */}
      <Popup
        isOpen={showPopup}
        title="Confirm Quotation"
        message="Are you sure you want to confirm this quotation?"
        onConfirm={handleConfirm}
        onCancel={() => {
          setShowPopup(false);
          setSelectedId(null);
        }}
      />

    </div>
  );
};

export default ShowQuotations;