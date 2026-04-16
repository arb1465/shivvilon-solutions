import React, { useContext } from "react";
import { Box, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import { MaterialContext } from "../../contexts/material/materialContext";
import QuotationStats from "../quotation/components/QuotationStats";

const DashboardArea = () => {

  const { materials } = useContext(MaterialContext)

  return (
    <Box>
      <Stack 
        sx = {{ width: "100%" }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {materials.map((item) => (
          <ProductCard
            key={item.id}
            productName={item.name}
            property={item.properties}
            quantity={item.quantity}
            productId={item.id}
          />
        ))}
      </Stack>
      <Box sx={{ marginTop: "30px" }}>    
        <QuotationStats/>
      </Box>
    </Box>
  );
};

export default DashboardArea;