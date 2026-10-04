import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import elogo from "../assets/elogo.png";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: <HomeOutlinedIcon />,
  },
  {
    label: "About",
    href: "#about",
    icon: <InfoOutlinedIcon />,
  },
  {
    label: "Programs",
    href: "#programs",
    icon: <MenuBookOutlinedIcon />,
  },
  {
    label: "Why Us",
    href: "#why-us",
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    label: "Learning",
    href: "#learning",
    icon: <GroupsOutlinedIcon />,
  },
  {
    label: "Network",
    href: "#network",
    icon: <PublicOutlinedIcon />,
  },
  {
    label: "Events",
    href: "#events",
    icon: <EventOutlinedIcon />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <EmailOutlinedIcon />,
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

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
        zIndex: 1200,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 1,
            sm: 2,
            md: 3,
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: 66,
              sm: 76,
              md: 86,
            },
            gap: {
              xs: 0.8,
              sm: 1.2,
              md: 2,
            },
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Box
            component="a"
            href="#home"
            onClick={() => setActiveItem("Home")}
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
                width: {
                  xs: 52,
                  sm: 64,
                  md: 78,
                  lg: 86,
                },
                height: {
                  xs: 52,
                  sm: 64,
                  md: 78,
                  lg: 86,
                },
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
              flex: 1,
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "flex-start",
                lg: "center",
              },
              gap: {
                xs: 0.2,
                sm: 0.4,
                md: 0.5,
                lg: 0.7,
              },
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {navItems.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <Button
                  key={item.label}
                  href={item.href}
                  startIcon={item.icon}
                  onClick={() => setActiveItem(item.label)}
                  sx={{
                    position: "relative",
                    flexShrink: 0,
                    minWidth: "auto",
                    px: {
                      xs: 0.65,
                      sm: 0.9,
                      md: 1.1,
                      lg: 1.25,
                    },
                    py: {
                      xs: 0.8,
                      sm: 1,
                      md: 1.1,
                    },
                    color: isActive ? "#059669" : "#526C65",
                    background: isActive
                      ? "rgba(5, 150, 105, 0.08)"
                      : "transparent",
                    fontSize: {
                      xs: 9,
                      sm: 10,
                      md: 11,
                      lg: 12,
                    },
                    fontWeight: isActive ? 800 : 650,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    borderRadius: "9px",
                    transition:
                      "color 0.25s ease, background 0.25s ease",

                    "& .MuiButton-startIcon": {
                      marginRight: {
                        xs: 0.25,
                        sm: 0.4,
                        md: 0.55,
                      },
                      transition: "transform 0.25s ease",
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
                      left: "18%",
                      right: "18%",
                      bottom: 3,
                      height: "2px",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(90deg, #059669, #2563EB)",
                      transform: isActive
                        ? "scaleX(1)"
                        : "scaleX(0)",
                      transition: "transform 0.3s ease",
                    },

                    "&:hover": {
                      color: "#059669",
                      background: "rgba(5, 150, 105, 0.06)",
                    },

                    "&:hover .MuiButton-startIcon": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* START LEARNING */}
          <Button
            href="#contact"
            variant="contained"
            onClick={() => setActiveItem("Contact")}
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{
              flexShrink: 0,
              minWidth: "auto",
              px: {
                xs: 1,
                sm: 1.4,
                md: 2,
              },
              py: {
                xs: 0.9,
                sm: 1,
                md: 1.2,
              },
              borderRadius: "50px",
              textTransform: "none",
              fontSize: {
                xs: 9,
                sm: 10,
                md: 11,
              },
              fontWeight: 800,
              whiteSpace: "nowrap",
              color: "#ffffff",
              background:
                "linear-gradient(135deg, #059669, #0F766E)",
              boxShadow:
                "0 8px 20px rgba(5, 150, 105, 0.16)",

              "& .MuiButton-endIcon": {
                ml: {
                  xs: 0.2,
                  sm: 0.5,
                },
                "& svg": {
                  fontSize: {
                    xs: 13,
                    sm: 15,
                    md: 17,
                  },
                },
              },

              "&:hover": {
                background:
                  "linear-gradient(135deg, #047857, #1D4ED8)",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 10px 24px rgba(5, 150, 105, 0.25)",
              },
            }}
          >
            Start Learning
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;