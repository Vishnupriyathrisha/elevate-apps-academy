import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import elogo from "../assets/elogo.png";

const Footer = () => {
  const quickLinks = [
    {
      label: "Home",
      icon: <HomeOutlinedIcon />,
      href: "#home",
    },
    {
      label: "About",
      icon: <InfoOutlinedIcon />,
      href: "#about",
    },
    {
      label: "Courses",
      icon: <MenuBookOutlinedIcon />,
      href: "#courses",
    },
    {
      label: "Why Us",
      icon: <AutoAwesomeOutlinedIcon />,
      href: "#why-us",
    },
    {
      label: "Contact",
      icon: <EmailOutlinedIcon />,
      href: "#contact",
    },
  ];

  const learningLinks = [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "UI / UX Design",
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(
            circle at 8% 15%,
            rgba(5, 150, 105, 0.12),
            transparent 27%
          ),
          radial-gradient(
            circle at 92% 25%,
            rgba(37, 99, 235, 0.11),
            transparent 28%
          ),
          radial-gradient(
            circle at 70% 100%,
            rgba(20, 184, 166, 0.10),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #e5f6ef 0%,
            #edf9f5 48%,
            #e7f4fc 100%
          )
        `,
      }}
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: "50%",
          border: "1px solid rgba(5,150,105,0.08)",
          top: { xs: -120, md: -180 },
          right: { xs: -110, md: -140 },
          animation: "footerRotate 22s linear infinite",
          "@keyframes footerRotate": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.07), transparent 68%)",
          bottom: { xs: -80, md: -130 },
          left: { xs: -80, md: -100 },
          filter: "blur(2px)",
          animation: "footerGlow 7s ease-in-out infinite",
          "@keyframes footerGlow": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-18px)",
            },
          },
        }}
      />

      {/* Floating dots */}

      {[
        { top: "18%", left: "5%", delay: "0s" },
        { top: "30%", left: "95%", delay: "1.5s" },
        { top: "72%", left: "8%", delay: "2.5s" },
        { top: "82%", left: "91%", delay: "1s" },
      ].map((dot, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: dot.top,
            left: dot.left,
            width: { xs: 4, md: 6 },
            height: { xs: 4, md: 6 },
            borderRadius: "50%",
            background:
              index % 2 === 0
                ? "rgba(5,150,105,0.35)"
                : "rgba(37,99,235,0.3)",
            animation: `footerDot 4s ease-in-out ${dot.delay} infinite`,
            "@keyframes footerDot": {
              "0%, 100%": {
                transform: "translateY(0)",
                opacity: 0.4,
              },
              "50%": {
                transform: "translateY(-10px)",
                opacity: 1,
              },
            },
          }}
        />
      ))}

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          pt: { xs: 8, sm: 10, md: 12 },
        }}
      >
        {/* =========================================
            TOP CTA
        ========================================= */}

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            mb: { xs: 7, md: 9 },
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 5 },
            borderRadius: { xs: "24px", md: "30px" },
            background: "rgba(255,255,255,0.42)",
            border: "1px solid rgba(255,255,255,0.7)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 20px 60px rgba(15,118,110,0.07)",
            overflow: "hidden",
            animation: "footerCta 0.8s ease both",
            "@keyframes footerCta": {
              from: {
                opacity: 0,
                transform: "translateY(25px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "15%",
              right: "15%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #059669, #2563EB, transparent)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 9, sm: 10, md: 11 },
              fontWeight: 800,
              letterSpacing: { xs: 2.5, md: 3.5 },
              color: "#059669",
              mb: 1.2,
            }}
          >
            YOUR NEXT CHAPTER STARTS HERE
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "25px",
                sm: "32px",
                md: "42px",
              },
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              color: "#12302B",
            }}
          >
            Keep Learning.
            <br />
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #059669, #0F766E, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Keep Building.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              maxWidth: 580,
              mx: "auto",
              color: "#657C76",
              fontSize: { xs: 12, sm: 13 },
              lineHeight: 1.7,
            }}
          >
            Every skill you learn is another step towards the developer you
            want to become.
          </Typography>
        </Box>

        {/* =========================================
            FOOTER CONTENT
        ========================================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1.4fr 1fr 1fr",
              lg: "1.5fr 1fr 1fr 1fr",
            },
            gap: { xs: 5, sm: 4, md: 6 },
            pb: { xs: 6, md: 8 },
          }}
        >
          {/* =====================================
              BRAND
          ===================================== */}

          <Box>
            <Box
              component="a"
              href="#home"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={elogo}
                alt="Elevate Apps Academy"
                sx={{
                  width: { xs: 68, md: 82 },
                  height: { xs: 68, md: 82 },
                  objectFit: "contain",
                  transition: "transform 0.35s ease",
                  "&:hover": {
                    transform: "scale(1.06) rotate(-2deg)",
                  },
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 18, md: 21 },
                fontWeight: 800,
                color: "#12302B",
                mb: 1,
              }}
            >
              Elevate Apps Academy
            </Typography>

            <Typography
              sx={{
                maxWidth: 350,
                color: "#667D77",
                fontSize: { xs: 12, sm: 13 },
                lineHeight: 1.8,
              }}
            >
              Learn practical technology skills, build real-world projects,
              and take your next step with confidence.
            </Typography>

            {/* Social icons */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2.5,
              }}
            >
              {[LinkedInIcon, InstagramIcon, YouTubeIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      width: 37,
                      height: 37,
                      color: "#52716A",
                      background: "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(5,150,105,0.08)",
                      transition:
                        "transform 0.3s ease, color 0.3s ease, background 0.3s ease",
                      "&:hover": {
                        color: "#059669",
                        background: "rgba(5,150,105,0.08)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </IconButton>
                )
              )}
            </Stack>
          </Box>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#12302B",
                mb: 2.2,
              }}
            >
              EXPLORE
            </Typography>

            <Stack spacing={1.2}>
              {quickLinks.map((item) => (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    width: "fit-content",
                    color: "#607872",
                    textDecoration: "none",
                    fontSize: { xs: 12, sm: 13 },
                    transition:
                      "color 0.3s ease, transform 0.3s ease",
                    "& svg": {
                      fontSize: 16,
                      color: "#059669",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover": {
                      color: "#059669",
                      transform: "translateX(5px)",
                    },
                    "&:hover svg": {
                      transform: "scale(1.12)",
                    },
                  }}
                >
                  {item.icon}
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* =====================================
              LEARNING
          ===================================== */}

          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#12302B",
                mb: 2.2,
              }}
            >
              LEARNING
            </Typography>

            <Stack spacing={1.2}>
              {learningLinks.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#607872",
                    fontSize: { xs: 12, sm: 13 },
                    transition: "transform 0.3s ease, color 0.3s ease",
                    cursor: "default",
                    "&:hover": {
                      color: "#059669",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <CodeOutlinedIcon
                    sx={{
                      fontSize: 16,
                      color: "#2563EB",
                    }}
                  />

                  {item}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* =====================================
              ACADEMY
          ===================================== */}

          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#12302B",
                mb: 2.2,
              }}
            >
              ACADEMY
            </Typography>

            <Stack spacing={1.4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.2,
                }}
              >
                <SchoolOutlinedIcon
                  sx={{
                    fontSize: 19,
                    color: "#059669",
                    mt: 0.1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#607872",
                    fontSize: { xs: 12, sm: 13 },
                    lineHeight: 1.6,
                  }}
                >
                  Practical learning
                  <br />
                  for real-world skills.
                </Typography>
              </Box>

              <Box
                component="a"
                href="#contact"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.6,
                  width: "fit-content",
                  color: "#059669",
                  fontSize: { xs: 12, sm: 13 },
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "gap 0.3s ease",
                  "&:hover": {
                    gap: 1.1,
                  },
                }}
              >
                Start Learning
                <ArrowOutwardOutlinedIcon
                  sx={{
                    fontSize: 15,
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <Divider
          sx={{
            borderColor: "rgba(5,150,105,0.09)",
          }}
        />

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <Box
          sx={{
            minHeight: { xs: 82, sm: 70 },
            py: { xs: 2.5, sm: 2 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            sx={{
              color: "#71857F",
              fontSize: { xs: 10, sm: 11 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} Elevate Apps Academy. All rights
            reserved.
          </Typography>

          <Typography
            sx={{
              color: "#71857F",
              fontSize: { xs: 10, sm: 11 },
              display: "flex",
              alignItems: "center",
              gap: 0.6,
            }}
          >
            Crafted with
            <Box
              component="span"
              sx={{
                color: "#059669",
                fontWeight: 800,
              }}
            >
              curiosity
            </Box>
            & growth.
          </Typography>

          {/* Back to top */}

          <IconButton
            component="a"
            href="#home"
            aria-label="Back to top"
            sx={{
              width: 38,
              height: 38,
              color: "#059669",
              background: "rgba(5,150,105,0.07)",
              border: "1px solid rgba(5,150,105,0.1)",
              transition:
                "transform 0.3s ease, background 0.3s ease",
              "&:hover": {
                background: "rgba(5,150,105,0.13)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <KeyboardArrowUpOutlinedIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;