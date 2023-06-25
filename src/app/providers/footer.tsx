import { Footer } from "@/widgets/footer";
import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const FooterProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      <Box sx={{ mt: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
};
