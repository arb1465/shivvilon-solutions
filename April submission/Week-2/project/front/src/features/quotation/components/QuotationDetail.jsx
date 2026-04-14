import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuotationContext } from "../../../contexts/quotation/quotationContext";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import getCurrentDateTime from "../../../utils/getCurrentDateAndTime";
import calculateAmount from "../../../utils/calculateQuotationAmount";
import { useRef } from "react";
import { handleDownloadPDF } from "../../../utils/handleDownloadPDF";

const QuotationDetail = () => {
  const { quotations, setQuotations } = useContext(QuotationContext);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false)
  const navi = useNavigate();
  const pdfRef = useRef();

  const quotation = quotations.find((q) => q.id == Number(id));

  const [editData, setEditData] = useState(quotation)

  const renderCell = (field, index) => {
    const value = editData.materials[index][field]

    return (
      <td className="border py-1 px-2">
        {isEditing ? (
          <Input
            inpValue={value}
            inpWidth="w-full"
            onChange={(e) =>
              handleMaterialChange(index, field, e.target.value)
            }
          />
        ) : (
          <span className="px-1">{value}</span>
        )}
      </td>
    );
  };

  useEffect(() => {
    setEditData(quotation);
  }, [quotation]);

  const total = calculateAmount(editData);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMaterialChange = (index, field, value) => {
    const updated = [...editData.materials];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setEditData({
      ...editData,
      materials: updated,
    });
  };

  const handleSave = () => {
    const updatedItem = {
      ...editData,
      quotationDate: getCurrentDateTime(),
      amount: total,
    };

    const updatedData = quotations.map((item) =>
      item.id == id ? updatedItem : item
    );

    setQuotations(updatedData);
    setEditData(updatedItem);
    setIsEditing(false);
  };


  if (!quotation) return <div className="p-6">Quotation Not Found</div>;

  return (
    <>

      {/* Top Actions */}
      <div className="flex justify-end gap-4 mt-2 mb-6">
        <Button btnName="BACK" btnColor="white" txtCol="black" btnWidth="w-auto px-6" onClick={() => navi("/quotations")} />
        {!isEditing ? (
          <Button
            btnName="Edit"
            btnColor="blue"
            btnWidth="w-auto px-6"
            onClick={() => setIsEditing(true)}
          />
        ) : (
          <Button
            btnName="Save"
            btnColor="green"
            btnWidth="w-auto px-6"
            onClick={handleSave}
          />
        )}
        <Button btnName="PRINT" btnColor="red" btnWidth="w-auto px-6" onClick={() => handleDownloadPDF({ pdfRef, data: editData })} />
      </div>

        <div className="rounded-xl w-[880px] p-5 bg-white" ref={pdfRef}>

          {/* Top Row */}
          <div className="flex items-center justify-between gap-1 mb-2 mt-[-10px]">

            {/* Client Name */}
            <div className="flex items-center justify-between w-[70%] ">
              <span className="w-[30%] text-lg font-medium">Client Name:</span>
              <Input
                inpName="cliName"
                readOnly={!isEditing}
                onChange={handleChange}
                inpValue={editData.cliName}
                inpWidth="w-[70%] mr-4"
              />
            </div>

            {/* Date */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-medium">Date:</span>
              <Input
                readOnly={!isEditing}
                onChange={handleChange}
                inpValue={editData.quotationDate}
                inpWidth="w-48 text-center"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-3 gap-6">

            {/* LEFT → TABLE */}
            <div className="col-span-2 overflow-hidden">
              <table className="w-full text-md text-left h-full">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 w-[5%]">No.</th>
                    <th className="border p-2 w-[50%]">Name of Material</th>
                    <th className="border p-2 w-[10%]">Gej</th>
                    <th className="border p-2 w-[10%]">Price</th>
                    <th className="border p-2 w-[15%]">Quantity</th>
                  </tr>
                </thead>

                <tbody>
                  {editData.materials ? (
                    editData.materials.map((row, i) => (
                      <tr key={i}>
                        <td className="border p-2">{i + 1}</td>
                        {renderCell("nameOfMaterial", i)}
                        {renderCell("gej", i)}
                        {renderCell("pic", i)}
                        {renderCell("qty", i)}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="p-3 text-center">
                        No materials
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div>

            {/* RIGHT → FORM */}
            <div className="flex flex-col gap-1">

              <div className="flex justify-between items-center">
                <span>Mobile:</span>
                <Input
                  inpName="mobile"
                  readOnly={!isEditing}
                  onChange={handleChange}
                  inpValue={editData.mobile}
                  inpWidth="w-40 text-center"
                />
              </div>

              <div className="flex justify-between items-center">
                <span>Rate B:</span>
                <Input
                  inpName="rateB"
                  readOnly={!isEditing}
                  onChange={handleChange}
                  inpValue={editData.rateB}
                  inpWidth="w-40 text-center"
                />
              </div>

              <div className="flex justify-between items-center">
                <span>Bending:</span>
                <Input
                  inpName="bending"
                  readOnly={!isEditing}
                  onChange={handleChange}
                  inpValue={editData.bending}
                  inpWidth="w-40 text-center"
                />
              </div>

              <div className="flex justify-between items-center">
                <span>Add:</span>
                <Input
                  inpName="add"
                  readOnly={!isEditing}
                  onChange={handleChange}
                  inpValue={editData.add}
                  inpWidth="w-40 text-center"
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="font-medium">Quotation Amount:</span>
                <Input
                  readOnly
                  inpValue={editData.amount}
                  inpWidth="w-[45%] text-center font-bold"
                />
              </div>

            </div>
          </div>

      </div>
    </>
  );
};

export default QuotationDetail;