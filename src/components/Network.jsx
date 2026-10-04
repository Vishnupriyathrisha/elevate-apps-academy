import {
  Box,
  Container,
  Typography,
  Chip,
} from "@mui/material";

import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const networkPoints = [
  {
    id: 1,
    label: "Learning Hub",
    title: "Campus Learning",
    text: "A future-ready space for structured learning and practical training.",
    top: "29%",
    left: "25%",
    accent: "#059669",
  },
  {
    id: 2,
    label: "Coming Soon",
    title: "Tech Community",
    text: "A growing network where learners can connect, collaborate and share ideas.",
    top: "43%",
    left: "48%",
    accent: "#2563EB",
  },
  {
    id: 3,
    label: "Learning Network",
    title: "Project Hub",
    text: "A collaborative environment focused on projects, experimentation and innovation.",
    top: "26%",
    left: "70%",
    accent: "#0F766E",
  },
  {
    id: 4,
    label: "Coming Soon",
    title: "Future Hub",
    text: "More learning opportunities and communities will be connected here.",
    top: "64%",
    left: "74%",
    accent: "#7C3AED",
  },
];

const Network = () => {
  return (
    <Box
      id="network"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, sm: 10, md: 13 },
        background:
          "linear-gradient(145deg, #F0FDF9 0%, #ECFDF5 42%, #EFF6FF 100%)",
      }}
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 240, md: 450 },
          height: { xs: 240, md: 450 },
          borderRadius: "50%",
          background: "rgba(5,150,105,0.10)",
          filter: "blur(85px)",
          top: "-150px",
          left: "-130px",
          animation: "networkGlowOne 9s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 420 },
          height: { xs: 220, md: 420 },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.09)",
          filter: "blur(85px)",
          bottom: "-140px",
          right: "-120px",
          animation: "networkGlowTwo 10s ease-in-out infinite",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 5, lg: 7 },
        }}
      >
        {/* =========================
            HEADER
        ========================== */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 820,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            animation: "networkFadeUp 0.8s ease both",
          }}
        >
          <Chip
            icon={
              <PublicRoundedIcon
                sx={{
                  fontSize: "15px !important",
                  color: "#059669 !important",
                }}
              />
            }
            label="ELEVATE NETWORK"
            sx={{
              mb: 2,
              height: 34,
              px: 1,
              borderRadius: "50px",
              background: "rgba(255,255,255,0.76)",
              border: "1px solid rgba(5,150,105,0.13)",
              color: "#047857",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.4,
              backdropFilter: "blur(12px)",
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: 32,
                sm: 42,
                md: 52,
                lg: 60,
              },
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-1.7px",
              color: "#12302B",
              mb: 2,
            }}
          >
            One Learning Network.
            <Box
              component="span"
              sx={{
                display: "block",
                background:
                  "linear-gradient(90deg, #059669, #0F766E, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Many Possibilities.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: 13, sm: 14, md: 16 },
              lineHeight: 1.85,
              color: "#5B716B",
            }}
          >
            Elevate is building a connected learning ecosystem where
            students, mentors, ideas and opportunities can come
            together to create something meaningful.
          </Typography>
        </Box>

        {/* =========================
            MAIN NETWORK AREA
        ========================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.55fr 0.75fr",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* =========================
              MAP
          ========================== */}

          <Box
            sx={{
              position: "relative",
              minHeight: {
                xs: 430,
                sm: 500,
                md: 560,
              },
              borderRadius: { xs: 4, md: 5 },
              overflow: "hidden",
              background:
                "linear-gradient(145deg, #E9FAF4, #EAF4FF)",
              border:
                "1px solid rgba(255,255,255,0.95)",
              boxShadow:
                "0 25px 70px rgba(15,118,110,0.10)",
              animation: "networkFadeUp 0.9s ease both",
            }}
          >
            {/* GRID */}

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                opacity: 0.45,
                backgroundImage:
                  "linear-gradient(rgba(5,150,105,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(5,150,105,0.07) 1px, transparent 1px)",
                backgroundSize: {
                  xs: "35px 35px",
                  md: "50px 50px",
                },
              }}
            />

            {/* ABSTRACT MAP SHAPE */}

            <Box
              sx={{
                position: "absolute",
                width: "70%",
                height: "68%",
                top: "15%",
                left: "15%",
                opacity: 0.75,
                transform: "rotate(-5deg)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "48%",
                  height: "45%",
                  top: "4%",
                  left: "5%",
                  borderRadius:
                    "52% 48% 45% 55% / 48% 42% 58% 52%",
                  background:
                    "rgba(255,255,255,0.72)",
                  border:
                    "1px solid rgba(5,150,105,0.10)",
                  boxShadow:
                    "0 15px 40px rgba(5,150,105,0.04)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: "40%",
                  height: "52%",
                  top: "30%",
                  left: "38%",
                  borderRadius:
                    "45% 55% 50% 50% / 55% 45% 55% 45%",
                  background:
                    "rgba(255,255,255,0.65)",
                  border:
                    "1px solid rgba(37,99,235,0.09)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: "27%",
                  height: "28%",
                  top: "8%",
                  right: "3%",
                  borderRadius:
                    "55% 45% 50% 50%",
                  background:
                    "rgba(255,255,255,0.58)",
                  border:
                    "1px solid rgba(15,118,110,0.08)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: "22%",
                  height: "25%",
                  bottom: "2%",
                  left: "10%",
                  borderRadius:
                    "48% 52% 42% 58%",
                  background:
                    "rgba(255,255,255,0.55)",
                  border:
                    "1px solid rgba(37,99,235,0.08)",
                }}
              />
            </Box>

            {/* DOTTED CONNECTING LINES */}

            <Box
              sx={{
                position: "absolute",
                top: "35%",
                left: "28%",
                width: "23%",
                borderTop:
                  "2px dashed rgba(5,150,105,0.32)",
                transform: "rotate(18deg)",
                transformOrigin: "left center",
                animation:
                  "networkLineOne 2s ease-in-out infinite",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "43%",
                left: "50%",
                width: "23%",
                borderTop:
                  "2px dashed rgba(37,99,235,0.30)",
                transform: "rotate(-25deg)",
                transformOrigin: "left center",
                animation:
                  "networkLineTwo 2.4s ease-in-out infinite",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "45%",
                left: "49%",
                width: "28%",
                borderTop:
                  "2px dashed rgba(15,118,110,0.26)",
                transform: "rotate(21deg)",
                transformOrigin: "left center",
                animation:
                  "networkLineThree 2.8s ease-in-out infinite",
              }}
            />

            {/* MAP LABEL */}

            <Box
              sx={{
                position: "absolute",
                top: { xs: 18, md: 25 },
                left: { xs: 18, md: 25 },
                px: 1.5,
                py: 0.8,
                borderRadius: "50px",
                background:
                  "rgba(255,255,255,0.78)",
                backdropFilter: "blur(12px)",
                border:
                  "1px solid rgba(255,255,255,0.9)",
                boxShadow:
                  "0 10px 25px rgba(15,118,110,0.07)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 9,
                  fontWeight: 850,
                  color: "#047857",
                  letterSpacing: 1.1,
                }}
              >
                LEARNING NETWORK
              </Typography>
            </Box>

            {/* COMPASS */}

            <Box
              sx={{
                position: "absolute",
                top: { xs: 18, md: 25 },
                right: { xs: 18, md: 25 },
                width: 45,
                height: 45,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "rgba(255,255,255,0.76)",
                backdropFilter: "blur(12px)",
                border:
                  "1px solid rgba(255,255,255,0.9)",
                color: "#2563EB",
              }}
            >
              <PublicRoundedIcon
                sx={{ fontSize: 21 }}
              />
            </Box>

            {/* NETWORK PINS */}

            {networkPoints.map((point, index) => (
              <Box
                key={point.id}
                sx={{
                  position: "absolute",
                  top: point.top,
                  left: point.left,
                  zIndex: 4,
                  transform:
                    "translate(-50%, -50%)",
                  animation: `networkPinAppear 0.7s ease ${
                    index * 0.35
                  }s both`,
                }}
              >
                {/* PULSE */}

                <Box
                  sx={{
                    position: "absolute",
                    width: 42,
                    height: 42,
                    left: "50%",
                    top: "50%",
                    transform:
                      "translate(-50%, -50%)",
                    borderRadius: "50%",
                    background: `${point.accent}18`,
                    animation:
                      "networkPulse 2.2s ease-out infinite",
                    animationDelay:
                      `${index * 0.3}s`,
                  }}
                />

                {/* PIN */}

                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 40, md: 46 },
                    height: { xs: 40, md: 46 },
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    color: point.accent,
                    border:
                      "3px solid rgba(255,255,255,0.95)",
                    boxShadow:
                      "0 10px 28px rgba(15,118,110,0.18)",
                    cursor: "pointer",
                    transition:
                      "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                    },
                  }}
                >
                  <LocationOnRoundedIcon
                    sx={{
                      fontSize: {
                        xs: 20,
                        md: 24,
                      },
                    }}
                  />
                </Box>

                {/* LABEL */}

                <Box
                  sx={{
                    position: "absolute",
                    top: {
                      xs: 46,
                      md: 52,
                    },
                    left: "50%",
                    transform:
                      "translateX(-50%)",
                    minWidth: {
                      xs: 100,
                      md: 125,
                    },
                    px: 1,
                    py: 0.7,
                    borderRadius: "10px",
                    background:
                      "rgba(255,255,255,0.84)",
                    backdropFilter: "blur(10px)",
                    border:
                      "1px solid rgba(255,255,255,0.95)",
                    boxShadow:
                      "0 8px 20px rgba(15,118,110,0.07)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 8,
                      fontWeight: 800,
                      color: point.accent,
                      letterSpacing: 0.6,
                    }}
                  >
                    {point.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: "#12302B",
                    }}
                  >
                    {point.title}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* BOTTOM MAP MESSAGE */}

            <Box
              sx={{
                position: "absolute",
                left: { xs: 18, md: 25 },
                bottom: { xs: 18, md: 25 },
                right: { xs: 18, md: "auto" },
                maxWidth: 330,
                px: 2,
                py: 1.5,
                borderRadius: "16px",
                background:
                  "rgba(255,255,255,0.76)",
                backdropFilter: "blur(14px)",
                border:
                  "1px solid rgba(255,255,255,0.95)",
                boxShadow:
                  "0 12px 30px rgba(15,118,110,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#12302B",
                  mb: 0.4,
                }}
              >
                Growing beyond boundaries
              </Typography>

              <Typography
                sx={{
                  fontSize: 9.5,
                  color: "#657A75",
                  lineHeight: 1.6,
                }}
              >
                More learning hubs and communities can
                become part of the Elevate network over time.
              </Typography>
            </Box>
          </Box>

          {/* =========================
              RIGHT INFO PANEL
          ========================== */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              animation:
                "networkFadeUp 0.9s ease 0.2s both",
            }}
          >
            {/* INTRO CARD */}

            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: { xs: 3.5, md: 4 },
                background:
                  "rgba(255,255,255,0.75)",
                border:
                  "1px solid rgba(255,255,255,0.95)",
                boxShadow:
                  "0 18px 50px rgba(15,118,110,0.07)",
                backdropFilter: "blur(15px)",
              }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "rgba(5,150,105,0.10)",
                  color: "#059669",
                  mb: 2,
                }}
              >
                <PublicRoundedIcon />
              </Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: 19,
                    sm: 21,
                    md: 23,
                  },
                  fontWeight: 900,
                  color: "#12302B",
                  mb: 1,
                }}
              >
                A Network Built Around Learners.
              </Typography>

              <Typography
                sx={{
                  fontSize: 11.5,
                  lineHeight: 1.75,
                  color: "#657A75",
                }}
              >
                Learning becomes more powerful when people,
                ideas and opportunities connect. Our vision is
                to build an ecosystem that encourages students
                to keep exploring and creating.
              </Typography>
            </Box>

            {/* NETWORK FEATURES */}

            {[
              {
                icon: <SchoolRoundedIcon />,
                title: "Learning Hubs",
                text: "Spaces designed around focused learning.",
                accent: "#059669",
              },
              {
                icon: <GroupsRoundedIcon />,
                title: "Community",
                text: "Connect with learners and mentors.",
                accent: "#2563EB",
              },
              {
                icon: <CodeRoundedIcon />,
                title: "Project Culture",
                text: "Learn through practical creation.",
                accent: "#0F766E",
              },
            ].map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: { xs: 2, md: 2.2 },
                  borderRadius: { xs: 3, md: 3.5 },
                  background:
                    "rgba(255,255,255,0.68)",
                  border:
                    "1px solid rgba(255,255,255,0.9)",
                  boxShadow:
                    "0 12px 32px rgba(15,118,110,0.055)",
                  backdropFilter: "blur(12px)",
                  transition:
                    "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateX(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${item.accent}10`,
                    color: item.accent,
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 850,
                      color: "#12302B",
                      mb: 0.25,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 9.5,
                      lineHeight: 1.5,
                      color: "#70827E",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>

                <ArrowForwardRoundedIcon
                  sx={{
                    ml: "auto",
                    fontSize: 17,
                    color: item.accent,
                  }}
                />
              </Box>
            ))}

            {/* COMING SOON */}

            <Box
              sx={{
                mt: "auto",
                p: { xs: 2.5, md: 3 },
                borderRadius: { xs: 3.5, md: 4 },
                background:
                  "linear-gradient(135deg, #064E42, #0F766E)",
                color: "#fff",
                boxShadow:
                  "0 20px 50px rgba(4,78,66,0.16)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  right: -45,
                  top: -45,
                  border:
                    "1px solid rgba(255,255,255,0.10)",
                }}
              />

              <Typography
                sx={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1.3,
                  color: "#A7F3D0",
                  mb: 0.8,
                }}
              >
                WHAT'S NEXT?
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 900,
                  mb: 0.8,
                }}
              >
                More Connections. More Possibilities.
              </Typography>

              <Typography
                sx={{
                  fontSize: 10.5,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                The Elevate network can continue to grow
                with new learning communities, collaborations
                and opportunities.
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.6,
                  mt: 1.8,
                  px: 1.2,
                  py: 0.6,
                  borderRadius: "50px",
                  background:
                    "rgba(255,255,255,0.10)",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <AutoAwesomeRoundedIcon
                  sx={{
                    fontSize: 14,
                    color: "#A7F3D0",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 8.5,
                    fontWeight: 800,
                  }}
                >
                  COMING SOON
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* =========================
            BOTTOM STATS
        ========================== */}

        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {[
            ["01", "Learning", "Connect with knowledge"],
            ["02", "Community", "Grow with others"],
            ["03", "Projects", "Create meaningful work"],
            ["04", "Future", "Keep moving forward"],
          ].map(([number, title, text]) => (
            <Box
              key={number}
              sx={{
                p: { xs: 2, sm: 2.5 },
                borderRadius: { xs: 3, md: 3.5 },
                background:
                  "rgba(255,255,255,0.65)",
                border:
                  "1px solid rgba(255,255,255,0.9)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 900,
                  color: "#059669",
                  mb: 0.8,
                }}
              >
                {number}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 13,
                    sm: 15,
                  },
                  fontWeight: 850,
                  color: "#12302B",
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.4,
                  fontSize: 9.5,
                  color: "#70827E",
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* =========================
          ANIMATIONS
      ========================== */}

      <style>
        {`
          @keyframes networkFadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes networkPinAppear {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.4);
            }

            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }

          @keyframes networkPulse {
            0% {
              transform: translate(-50%, -50%) scale(0.7);
              opacity: 0.8;
            }

            70% {
              transform: translate(-50%, -50%) scale(1.55);
              opacity: 0;
            }

            100% {
              transform: translate(-50%, -50%) scale(1.55);
              opacity: 0;
            }
          }

          @keyframes networkLineOne {
            0%,
            100% {
              opacity: 0.25;
            }

            50% {
              opacity: 0.8;
            }
          }

          @keyframes networkLineTwo {
            0%,
            100% {
              opacity: 0.2;
            }

            50% {
              opacity: 0.75;
            }
          }

          @keyframes networkLineThree {
            0%,
            100% {
              opacity: 0.2;
            }

            50% {
              opacity: 0.7;
            }
          }

          @keyframes networkGlowOne {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(35px, 25px);
            }
          }

          @keyframes networkGlowTwo {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(-30px, -25px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Network;