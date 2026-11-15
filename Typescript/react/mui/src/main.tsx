import { Button, Typography } from "@mui/material";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <>
    <Typography variant="h3">Hello, MUI</Typography>
    <Button variant="contained">A Material UI button</Button>
  </>,
);
