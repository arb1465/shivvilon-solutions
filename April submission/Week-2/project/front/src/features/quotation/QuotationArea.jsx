import QuotationStats from "./components/QuotationStats";
import QuotationActions from "./components/QuotationActions";
import QuotationTable from "./components/QuotationTable";

const QuotationArea = () => {
  return (
    <div className="flex flex-col gap-4">
      
      <QuotationStats />
      <QuotationActions />
      <QuotationTable />

    </div>
  );
};

export default QuotationArea;