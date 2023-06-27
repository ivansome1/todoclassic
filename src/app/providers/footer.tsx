import { Footer } from "@/widgets/footer";
import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const FooterProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </Box>

      <Box sx={{ mt: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
};
