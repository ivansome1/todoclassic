import { AddTaskForm } from "@/features/tasks/add-task";
import { Global } from "@emotion/react";
import { Add, Close, Menu, Search } from "@mui/icons-material";
import { Box, Fab, IconButton, SwipeableDrawer, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { DockContext } from "./model";

const drawerBleeding = 54;
const drawerWidth = 700;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

export const DockProvider: FC<PropsWithChildren & { after?: ReactNode }> = ({
  children,
  after,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <DockContext.Provider value={{ open, setOpen }}>
      {children}
      <Root>
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          allowSwipeInChildren
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              maxWidth: drawerWidth,
              width: "100%",
              mx: "auto",
              boxShadow: "none",
            },
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
              maxWidth: drawerWidth,
              width: "100%",
              maxHeight: drawerBleeding,
              height: "100%",
              boxShadow: "none",
              borderTop: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              px: 2,
            }}
          >
            <Fab
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              sx={{
                position: "absolute",
                mx: "auto",
                right: 0,
                left: 0,
                top: -28,
              }}
              color="primary"
              aria-label="Add task"
            >
              {open ? <Close /> : <Add />}
            </Fab>

            <IconButton sx={{ mr: "auto" }}>
              <Menu />
            </IconButton>
            <IconButton>
              <Search />
            </IconButton>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              overflow: "auto",
              maxWidth: drawerWidth,
              width: "100%",
              boxShadow: "none",
            }}
          >
            <AddTaskForm />
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </DockContext.Provider>
  );
};
