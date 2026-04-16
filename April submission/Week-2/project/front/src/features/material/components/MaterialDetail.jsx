import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Paper, Grid, Stack } from "@mui/material";
import { useContext } from "react";
import { MaterialContext } from "../../../contexts/material/materialContext";
import Button from "../../../components/ui/Button";

const MaterialDetail = () => {
  const { id } = useParams();
  const navi = useNavigate()
  const { materials } = useContext(MaterialContext);

  const material = materials.find(
    (item) => item.id === Number(id)
  );

  if (!material) return <Typography>Material not found</Typography>;

  return (
    <Paper sx={{ p: 2, mt: 2 }}>

      {/* Back Button */}
      <Button
        btnName="← Back"
        btnColor="gray"
        txtCol="black"
        onClick={() => navi("/materials")}
      />

      <Typography variant="h4" sx={{ marginTop: "30px", marginBottom: "10px"}}>
        Material Details
      </Typography>

      <Stack spacing={2}>
        <Grid item xs={6}>
          <Typography><b>Name:</b> {material.name}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography><b>Quantity:</b> {material.quantity}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography><b>Weight:</b> {material.properties.weight}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography><b>Thickness:</b> {material.properties.thickness}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography><b>Height:</b> {material.properties.height}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography><b>Length:</b> {material.properties.length}</Typography>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default MaterialDetail;