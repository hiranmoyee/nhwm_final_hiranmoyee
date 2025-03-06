import { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "How it works", path: "#" },
    { label: "Our Service", path: "#" },
    { label: "Reviews", path: "#" },
    { label: "Contact Us", path: "#" },
    { label: "FAQ", path: "#" },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Typography variant="h6" sx={{ ml: { xs: 1, md: 5 } }}>ExamHub</Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 250 }}>
                {menuItems.map((item, index) => (
                  <ListItem 
                    key={index} 
                    component="button" 
                    onClick={() => setDrawerOpen(false)} 
                    sx={{ textAlign: "left", width: "100%" }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
               <ListItem 
                  component="div" // Avoids nesting button inside button
                  onClick={() => { 
                    setDrawerOpen(false); 
                    navigate("/login"); 
                  }} 
                  sx={{ textAlign: "center", width: "100%" }}
                >
               <Button variant="contained" sx={{ backgroundColor: "#6c63ff", color: "white" }} fullWidth>
                  Get Started
                </Button>

              </ListItem>

              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            {menuItems.map((item, index) => (
              <Button key={index} variant="outlined" sx={{ color: "black", border: "none" }}>
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {!isMobile && (
          <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
            Get Started
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
