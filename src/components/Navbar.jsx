import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import elogo from "../assets/elogo.png";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlinedIcon />,
    },
    {
      label: "About",
      icon: <InfoOutlinedIcon />,
    },
    {
      label: "Courses",
      icon: <MenuBookOutlinedIcon />,
    },
    {
      label: "Why Us",
      icon: <AutoAwesomeOutlinedIcon />,
    },
    {
      label: "Contact",
      icon: <EmailOutlinedIcon />,
    },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(239, 250, 246, 0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(5, 150, 105, 0.08)",
        color: "#12302B",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 68, sm: 76, md: 94 },
            justifyContent: "space-between",
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          {/* LOGO */}
          <Box
            component="a"
            href="#home"
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={elogo}
              alt="Elevate Apps Academy"
              sx={{
              width: { xs: 58, sm: 68, md: 98, lg: 96 },
              height: { xs: 58, sm: 68, md: 98, lg: 96 },
              objectFit: "contain",
              display: "block",
              transition: "transform 0.3s ease",

                "&:hover": {
                transform: "scale(1.05)",
                 },
            }}
            />
          </Box>

          {/* NAVIGATION */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              gap: {
                xs: 0,
                sm: 0.3,
                md: 0.7,
                lg: 1.2,
              },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={`#${item.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
                startIcon={item.icon}
                sx={{
                  minWidth: "auto",
                  px: {
                    xs: 0.55,
                    sm: 0.9,
                    md: 1.3,
                    lg: 1.7,
                  },
                  py: 0.8,
                  color: "#526C65",
                  fontSize: {
                    xs: 8,
                    sm: 10,
                    md: 11,
                    lg: 12,
                  },
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "9px",
                  whiteSpace: "nowrap",

                  "& .MuiButton-startIcon": {
                    marginRight: {
                      xs: 0.2,
                      sm: 0.35,
                      md: 0.5,
                    },
                  },

                  "& .MuiButton-startIcon svg": {
                    fontSize: {
                      xs: 13,
                      sm: 15,
                      md: 17,
                    },
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    bottom: 2,
                    width: 0,
                    height: "2px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(90deg, #059669, #2563EB)",
                    transform: "translateX(-50%)",
                    transition: "width 0.3s ease",
                  },

                  "&:hover": {
                    color: "#059669",
                    background:
                      "rgba(5, 150, 105, 0.05)",
                  },

                  "&:hover .MuiButton-startIcon": {
                    color: "#059669",
                    transform: "translateY(-2px)",
                  },

                  "&:hover::after": {
                    width: "45%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* START LEARNING */}
          <Button
            href="#contact"
            variant="contained"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              flexShrink: 0,
              px: { sm: 1.5, md: 2.2, lg: 2.5 },
              py: { sm: 1, md: 1.2 },
              borderRadius: "50px",
              textTransform: "none",
              fontSize: { sm: 9, md: 10, lg: 11 },
              fontWeight: 700,
              color: "#ffffff",
              background:
                "linear-gradient(135deg, #059669, #0F766E)",
              boxShadow:
                "0 8px 20px rgba(5, 150, 105, 0.16)",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #047857, #1D4ED8)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Start Learning
            <Box
              component="span"
              sx={{
                ml: 0.5,
                fontSize: 14,
              }}
            >
              ↗
            </Box>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;