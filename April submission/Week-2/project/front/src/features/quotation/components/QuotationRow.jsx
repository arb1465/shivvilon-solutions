import StatusBadge from "./StatusBadge";

const QuotationRow = ({ sr, name, amount, status }) => {
  return (
    <tr className="border-t">
      <td className="p-3">{sr}</td>
      <td className="p-3">{name}</td>
      <td className="p-3">₹{amount}</td>
      <td className="p-3 text-right">
        <StatusBadge status={status} />
      </td>
    </tr>
  );
};

export default QuotationRow;