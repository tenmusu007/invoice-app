import { Box } from "@mui/material";
import { Children } from "../../../types/children";
const BoxLayout = ({ children }: Children) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      {children}
    </Box>
  );
};

export default BoxLayout;
