import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const getCurrentDateTime = () => {
  const now = new Date();

  return now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};



const QuotationForm = () => {
  const navi = useNavigate()
  const [time, setTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border rounded-xl p-6 w-full max-w-7xl mx-auto">

      {/* Top Row */}
      <div className="flex flex-wrap gap-4 items-center justify-between">

        <div className="flex items-center justify-between w-full md:w-[63%]">
          <label className="text-lg font-medium mr-2" htmlFor="cliName">Client Name:</label>
          <Input
            inpType="text"
            inpName="cliName"
            inpPlaceholder="Enter name"
            inpWidth="w-[82%]"
          />
        </div>

        <div className="w-full md:w-[35%]">
          <label className="text-lg font-medium">Date & Time: </label>
           {time}
        </div>

      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-4">

        {/* Table Section */}
        <div className="flex-1 border rounded-lg overflow-hidden">

          <table className="w-full text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">No.</th>
                <th className="border p-2 w-[55%]">Name of Material</th>
                <th className="border p-2 w-[10%]">Gej</th>
                <th className="border p-2 w-[10%]">Price</th>
                <th className="border p-2 w-[15%]">Quantity</th>
              </tr>
            </thead>

            <tbody>
              {[1,2,3,4,5].map((i) => (
                <tr key={i}>
                  <td className="border">{i}</td>
                  <td className="border py-1 px-2"> 
                    <Input
                      inpName={"nameOfMaterial"}
                      rColor={"black"}
                      isReq={true}
                    />
                  </td>
                  <td className="border py-1 px-2">
                    <Input
                      inpName={"nameOfMaterial"}
                      rColor={"black"}
                      isReq={true}
                    />
                  </td>
                  <td className="border py-1 px-2">
                    <Input
                      inpName={"nameOfMaterial"}
                      rColor={"black"}
                      isReq={true}
                    />
                  </td>
                  <td className="border py-1 px-2">
                    <Input
                      inpName={"nameOfMaterial"}
                      rColor={"black"}
                      isReq={true}
                    />
                  </td>
                </tr>
              ))}

            </tbody>
            
          </table>

        </div>

        {/* Right Form */}
        <div className="w-full md:w-[35%] flex flex-col gap-3">

          <div className="flex items-center gap-3">
            <label className="w-32">Mobile No.:</label>
            <Input inpType="text" inpName="mobile" inpPlaceholder="0000000000" isReq={true}/>
          </div>

          <div className="flex items-center gap-3">
            <label className="w-32">Rate B:</label>
            <Input inpType="text" inpName="rateB" inpPlaceholder="-----" />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-32">Bending:</label>
            <Input inpType="text" inpName="bending" inpPlaceholder="-----" />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-32">Add:</label>
            <Input inpType="text" inpName="add" inpPlaceholder="-----" />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-32">Quotation Amt:</label>
            <Input inpType="text" inpName="amount" inpPlaceholder="30000" isReq={true} />
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-gray-600">
        ----- Warning msg or Instructions -----
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-2">
        <Button btnName="Send Quotation" btnColor="blue" btnWidth="w-auto px-6" />
        <Button btnName="Cancel" btnColor="white" txtCol="black" btnWidth="w-auto px-6" onClick={() => {navi("/quotation")}}/>
      </div>

    </div>
  );
};

export default QuotationForm;