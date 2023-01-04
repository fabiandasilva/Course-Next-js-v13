"use client";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useState } from "react";
import { Info, Teams } from "../models";

interface Props {
  data: Teams;
}
function TeamList({ data }: Props) {
  const [onDisplay, setOnDisplay] = useState(data.results.slice(0, 20));

  const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
    setOnDisplay(data.results.slice(page, page + 5));
  };
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {data.results.map((t) => (
          <Grid item xs={4} key={t.id}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 340 }}
                image={t.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {t.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination count={data.results.length} onChange={handlePagination} />
    </Container>
  );
}

export default TeamList;
