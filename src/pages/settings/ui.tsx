import { Settings } from "@/widgets/settings";
import { SettingsHeader } from "@/widgets/settings-header";
import { Box } from "@mui/material";

export const SettingsPage = () => {
  return (
    <Box>
      <SettingsHeader />
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Settings />
      </Box>
    </Box>
  );
};
