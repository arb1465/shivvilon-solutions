import QuotationRow from "./QuotationRow";

const QuotationTable = () => {
  return (
    <div className="mt-4 bg-white rounded-xl border overflow-hidden">
      
      <table className="w-full text-sm text-left">
        
        {/* Header */}
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">SERIAL NO</th>
            <th className="p-3">NAME</th>
            <th className="p-3">QUOTATION AMOUNT</th>
            <th className="p-3 text-right">RESPONSE STATUS</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          <QuotationRow sr="1" name="AASUTOSH BARAIYA" amount="32400" status="PENDING" />
          <QuotationRow sr="2" name="SANTOSH BARAIYA" amount="11600" status="CONFIRM" />
          <QuotationRow sr="3" name="ARB" amount="6500" status="PENDING" />
        </tbody>

      </table>
    </div>
  );
};

export default QuotationTable;