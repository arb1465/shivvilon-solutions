import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Popup from "../../../components/ui/Popup";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { QuotationContext } from "../../../contexts/quotation/quotationContext";
import getCurrentDateTime from "../../../utils/getCurrentDateAndTime";
import calculateAmount from "../../../utils/calculateQuotationAmount";

const QuotationForm = () => {
  const navi = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [time, setTime] = useState(getCurrentDateTime());
  const { quotations, setQuotations } = useContext(QuotationContext);

  const [formData, setFormData] = useState({
    cliName: "",
    mobile: "",
    amount: "",
    materials: Array(5).fill({
      nameOfMaterial: "",
      gej: "",
      pic: "",
      qty: "",
    }),
    rateB: "",
    bending: "",
    add: "",
    status: "PENDING",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const total = calculateAmount(formData);

  const handleMaterialChange = (index, field, value) => {
    const updatedMaterials = [...formData.materials];
    updatedMaterials[index] = {
      ...updatedMaterials[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      materials: updatedMaterials,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuotation = {
      ...formData,
      id: Date.now(),
      quotationDate: getCurrentDateTime(),
      amount: total,
    };

    setQuotations([...quotations, newQuotation]);
    setShowPopup(true);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: "1px solid gray.300",
        borderRadius: 1,
        bgcolor: "white",
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>

        {/* Top Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            pb: 2,
            borderBottom: "1px solid #e2e8f0",
          }}
        >

          {/* LEFT: Back */}
          <Button
            btnName="← Back"
            btnColor="gray"
            txtCol="black"
            onClick={() => navi("/quotations")}
          />

          {/* RIGHT: Actions */}
          <Stack direction="row" spacing={1.5}>

            <Button
              btnName="Show WhatsApp"
              btnColor="green"
            />

            <Button
              btnName="Send Quotation →"
              btnType="submit"
              btnColor="secondary.main"
            />

          </Stack>

        </Box>


        {/* Client + Time */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "specify-around", alignItems: "center", mb: 2 }}>

          <Typography sx={{ minWidth: 95 }}>Client Name:</Typography>
          <Input inpName="cliName" isReq={true} inpValue={formData.cliName} inpPlaceholder="Enter Client Name" onChange={handleChange} />

          <Typography>Date:</Typography>
          <Input inpValue={time} readOnly sx={{ width: 20 }} />

        </Box>

        {/* Main Section */}
        <Grid container spacing={3} mt={2}>

          {/* Table */}
          <Grid item xs={12} md={6}>
            <Table
              sx={{
                "& th, & td": {
                  padding: "3px",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "5%" }}>No.</TableCell>
                  <TableCell sx={{ width: "40%" }}>Name</TableCell>
                  <TableCell sx={{ width: "15%" }}>Gej</TableCell>
                  <TableCell sx={{ width: "15%" }}>Price</TableCell>
                  <TableCell sx={{ width: "15%" }}>Qty</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {formData.materials.map((row, i) => {
                  const isRowFilled =
                    row.nameOfMaterial || row.gej || row.pic || row.qty;

                  return (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>

                      <TableCell>
                        <Input
                          inpValue={row.nameOfMaterial}
                          onChange={(e) =>
                            handleMaterialChange(i, "nameOfMaterial", e.target.value)
                          }
                          isReq={isRowFilled}
                        />
                      </TableCell>

                      <TableCell>
                        <Input
                          inpValue={row.gej}
                          onChange={(e) =>
                            handleMaterialChange(i, "gej", e.target.value)
                          }
                          isReq={isRowFilled}
                        />
                      </TableCell>

                      <TableCell>
                        <Input
                          inpValue={row.pic}
                          onChange={(e) =>
                            handleMaterialChange(i, "pic", e.target.value)
                          }
                          isReq={isRowFilled}
                        />
                      </TableCell>

                      <TableCell>
                        <Input
                          inpValue={row.qty}
                          onChange={(e) =>
                            handleMaterialChange(i, "qty", e.target.value)
                          }
                          isReq={isRowFilled}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>

            <Box display="flex" sx={{gap: "40px"}} justifyContent="space-between">
              <Typography>Mobile No.:</Typography>
              <Input inpName="mobile" isReq={true} inpValue={formData.mobile} onChange={handleChange} />
            </Box>

            <Box display="flex" sx={{gap: "40px"}} justifyContent="space-between">
              <Typography>Rate B:</Typography>
              <Input inpName="rateB" inpValue={formData.rateB} onChange={handleChange} />
            </Box>

            <Box display="flex" sx={{gap: "40px"}} justifyContent="space-between">
              <Typography>Bending:</Typography>
              <Input inpName="bending" inpValue={formData.bending} onChange={handleChange} />
            </Box>

            <Box display="flex" sx={{gap: "40px"}} justifyContent="space-between">
              <Typography>Add:</Typography>
              <Input inpName="add" inpValue={formData.add} onChange={handleChange} />
            </Box>

            <Box display="flex" sx={{gap: "40px"}} justifyContent="space-between">
              <Typography>Quotation Amount:</Typography>
              <Input inpValue={total} readOnly />
            </Box>

          </Grid>

        </Grid>

        {/* Footer */}
        <Typography mt={3} textAlign="center" color="text.secondary">
          ----- Warning msg or Instructions -----
        </Typography>

        {/* Popup */}
        <Popup
          isOpen={showPopup}
          title="Confirm Action"
          message="Quotation sent"
          onConfirm={() => {
            navi("/quotations");
            setShowPopup(false);
          }}
          onCancel={() => setShowPopup(false)}
        />

      </Box>
    </Paper>
  );
};

export default QuotationForm;