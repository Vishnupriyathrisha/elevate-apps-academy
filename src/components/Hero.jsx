import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: {
          xs: "auto",
          md: "100vh",
        },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: {
          xs: 11,
          sm: 12,
          md: 13,
          lg: 14,
        },
        pb: {
          xs: 7,
          sm: 8,
          md: 7,
        },

        background: `
          radial-gradient(
            circle at 5% 10%,
            rgba(5,150,105,0.16),
            transparent 25%
          ),
          radial-gradient(
            circle at 90% 15%,
            rgba(37,99,235,0.12),
            transparent 28%
          ),
          radial-gradient(
            circle at 80% 90%,
            rgba(20,184,166,0.12),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #e8f7f1 0%,
            #f2fbf8 48%,
            #eaf6ff 100%
          )
        `,
      }}
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 240,
            md: 480,
          },
          height: {
            xs: 240,
            md: 480,
          },
          borderRadius: "50%",
          background: "rgba(5,150,105,0.07)",
          filter: "blur(90px)",
          top: -170,
          left: -150,
          animation: "heroGlow1 9s ease-in-out infinite",

          "@keyframes heroGlow1": {
            "0%,100%": {
              transform: "translate(0,0) scale(1)",
            },
            "50%": {
              transform: "translate(70px,60px) scale(1.08)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 220,
            md: 430,
          },
          height: {
            xs: 220,
            md: 430,
          },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.07)",
          filter: "blur(95px)",
          right: -150,
          bottom: -130,
          animation: "heroGlow2 10s ease-in-out infinite",

          "@keyframes heroGlow2": {
            "0%,100%": {
              transform: "translate(0,0) scale(1)",
            },
            "50%": {
              transform: "translate(-60px,-50px) scale(1.1)",
            },
          },
        }}
      />

      {/* Decorative Grid */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage: `
            linear-gradient(
              rgba(5,150,105,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(5,150,105,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating circles */}

      <Box
        sx={{
          position: "absolute",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#059669",
          top: "23%",
          left: "7%",
          boxShadow: "0 0 0 7px rgba(5,150,105,0.06)",
          animation: "floatDot1 4s ease-in-out infinite",

          "@keyframes floatDot1": {
            "0%,100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-14px)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "#2563EB",
          top: "28%",
          right: "7%",
          animation: "floatDot2 5s ease-in-out infinite",

          "@keyframes floatDot2": {
            "0%,100%": {
              transform: "scale(1)",
              opacity: 0.6,
            },
            "50%": {
              transform: "scale(1.5)",
              opacity: 1,
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#14B8A6",
          bottom: "20%",
          left: "43%",
          animation: "floatDot3 4.5s ease-in-out infinite",

          "@keyframes floatDot3": {
            "0%,100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-10px)",
            },
          },
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.02fr 0.98fr",
            },
            alignItems: "center",
            gap: {
              xs: 6,
              md: 7,
              lg: 4,
            },
          }}
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <Box
            sx={{
              maxWidth: 690,
              animation:
                "heroContentReveal 0.9s cubic-bezier(.2,.8,.2,1) forwards",
              opacity: 0,

              "@keyframes heroContentReveal": {
                from: {
                  opacity: 0,
                  transform: "translateY(35px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            {/* TOP BADGE */}

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.8,
                mb: {
                  xs: 2.3,
                  md: 3,
                },
                borderRadius: "50px",
                background: "rgba(255,255,255,0.62)",
                border: "1px solid rgba(5,150,105,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 8px 25px rgba(15,118,110,0.06)",
              }}
            >
              <AutoAwesomeRoundedIcon
                sx={{
                  fontSize: 15,
                  color: "#059669",
                  animation:
                    "badgeSpark 2s ease-in-out infinite",

                  "@keyframes badgeSpark": {
                    "0%,100%": {
                      transform: "rotate(0deg) scale(1)",
                    },
                    "50%": {
                      transform:
                        "rotate(15deg) scale(1.12)",
                    },
                  },
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: 8,
                    sm: 9,
                    md: 10,
                  },
                  fontWeight: 800,
                  letterSpacing: {
                    xs: 1.2,
                    md: 1.8,
                  },
                  color: "#059669",
                }}
              >
                FUTURE-READY LEARNING
              </Typography>
            </Box>

            {/* MAIN HEADING */}

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 40,
                  sm: 52,
                  md: 65,
                  lg: 76,
                },
                lineHeight: {
                  xs: 1.06,
                  md: 1.02,
                },
                letterSpacing: {
                  xs: "-1.8px",
                  md: "-3px",
                },
                fontWeight: 850,
                color: "#12302B",
              }}
            >
              Learn skills.
              <br />

              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg,#059669,#0F766E,#2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Build the future.
              </Box>
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                mt: {
                  xs: 2.5,
                  md: 3,
                },
                maxWidth: 590,
                fontSize: {
                  xs: 13,
                  sm: 14,
                  md: 16,
                },
                lineHeight: 1.8,
                color: "#657D76",
              }}
            >
              Elevate App Academy helps students turn curiosity
              into practical technology skills through structured
              learning, hands-on projects, expert mentorship and
              industry-focused training.
            </Typography>

            {/* FEATURE MINI ROW */}

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: {
                  xs: 1,
                  sm: 1.3,
                },
                mt: 2.5,
              }}
            >
              {[
                {
                  icon: <CodeRoundedIcon />,
                  text: "Practical Coding",
                },
                {
                  icon: <GroupsRoundedIcon />,
                  text: "Expert Mentorship",
                },
                {
                  icon: <RocketLaunchRoundedIcon />,
                  text: "Real Projects",
                },
              ].map((item) => (
                <Box
                  key={item.text}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.6,
                    px: 1.1,
                    py: 0.65,
                    borderRadius: "9px",
                    background:
                      "rgba(255,255,255,0.45)",
                    border:
                      "1px solid rgba(5,150,105,0.07)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: "#059669",

                      "& svg": {
                        fontSize: 14,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 8,
                        sm: 9,
                      },
                      fontWeight: 700,
                      color: "#557069",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* BUTTONS */}

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                mt: 3.5,
              }}
            >
              <Button
                href="#programs"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  px: {
                    xs: 2.2,
                    sm: 2.8,
                  },
                  py: 1.35,
                  borderRadius: "13px",
                  textTransform: "none",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#fff",
                  background:
                    "linear-gradient(135deg,#059669,#0F766E)",
                  boxShadow:
                    "0 12px 28px rgba(5,150,105,0.18)",
                  transition: "all .3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#047857,#2563EB)",
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 17px 35px rgba(5,150,105,0.22)",
                  },

                  "& .MuiButton-endIcon": {
                    transition: "transform .3s ease",
                  },

                  "&:hover .MuiButton-endIcon": {
                    transform: "translateX(4px)",
                  },
                }}
              >
                Explore Programs
              </Button>

              <Button
                href="#about"
                startIcon={<PlayArrowRoundedIcon />}
                sx={{
                  px: {
                    xs: 2,
                    sm: 2.4,
                  },
                  py: 1.25,
                  borderRadius: "13px",
                  textTransform: "none",
                  fontSize: 11,
                  fontWeight: 750,
                  color: "#0F766E",
                  background:
                    "rgba(255,255,255,0.55)",
                  border:
                    "1px solid rgba(5,150,105,0.12)",
                  backdropFilter: "blur(10px)",
                  transition: "all .3s ease",

                  "&:hover": {
                    background:
                      "rgba(255,255,255,0.82)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Discover Elevate
              </Button>
            </Box>

            {/* TRUST MESSAGE */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.7,
                mt: 2.8,
              }}
            >
              <CheckCircleRoundedIcon
                sx={{
                  fontSize: 16,
                  color: "#059669",
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: 8,
                    sm: 9,
                  },
                  fontWeight: 650,
                  color: "#708780",
                }}
              >
                Learn today. Build tomorrow. Elevate your career.
              </Typography>
            </Box>
          </Box>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <Box
            sx={{
              position: "relative",
              minHeight: {
                xs: 410,
                sm: 500,
                md: 550,
                lg: 590,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              animation:
                "heroVisualReveal 1s cubic-bezier(.2,.8,.2,1) .15s forwards",
              opacity: 0,

              "@keyframes heroVisualReveal": {
                from: {
                  opacity: 0,
                  transform:
                    "translateY(35px) scale(.95)",
                },
                to: {
                  opacity: 1,
                  transform:
                    "translateY(0) scale(1)",
                },
              },
            }}
          >
            {/* BIG ORBIT */}

            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 300,
                  sm: 420,
                  md: 500,
                  lg: 540,
                },
                height: {
                  xs: 300,
                  sm: 420,
                  md: 500,
                  lg: 540,
                },
                borderRadius: "50%",
                border:
                  "1px solid rgba(5,150,105,0.11)",
                animation:
                  "heroOrbit 22s linear infinite",

                "@keyframes heroOrbit": {
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
                width: {
                  xs: 230,
                  sm: 330,
                  md: 390,
                },
                height: {
                  xs: 230,
                  sm: 330,
                  md: 390,
                },
                borderRadius: "50%",
                border:
                  "1px dashed rgba(37,99,235,0.12)",
                transform: "rotate(-20deg)",
              }}
            />

            {/* CENTRAL LEARNING CARD */}

            <Box
              sx={{
                position: "relative",
                zIndex: 5,
                width: {
                  xs: "88%",
                  sm: 420,
                  md: 470,
                  lg: 500,
                },
                borderRadius: {
                  xs: "23px",
                  sm: "28px",
                },
                p: {
                  xs: 1,
                  sm: 1.2,
                },
                background:
                  "linear-gradient(145deg,#123E36,#0A2E29)",
                boxShadow: `
                  0 35px 70px rgba(15,118,110,0.20),
                  0 10px 25px rgba(18,48,43,0.12)
                `,
                transform:
                  "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
                transition:
                  "transform .5s ease, box-shadow .5s ease",

                "&:hover": {
                  transform:
                    "perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(-6px)",
                  boxShadow:
                    "0 42px 82px rgba(15,118,110,0.25)",
                },
              }}
            >
              {/* TOP BAR */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: {
                    xs: 1,
                    sm: 1.4,
                  },
                  py: 0.8,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.7,
                  }}
                >
                  {[1, 2, 3].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background:
                          item === 1
                            ? "#34D399"
                            : item === 2
                            ? "#FBBF24"
                            : "#F87171",
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: 7,
                      sm: 8,
                    },
                    color:
                      "rgba(255,255,255,.5)",
                    letterSpacing: 1,
                    fontWeight: 700,
                  }}
                >
                  ELEVATE LEARNING LAB
                </Typography>
              </Box>

              {/* INNER SCREEN */}

              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: {
                    xs: "18px",
                    sm: "22px",
                  },
                  background:
                    "linear-gradient(145deg,#F6FCFA,#E8F7F2)",
                  p: {
                    xs: 1.5,
                    sm: 2.2,
                  },
                }}
              >
                {/* Screen glow */}

                <Box
                  sx={{
                    position: "absolute",
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    background:
                      "rgba(5,150,105,0.10)",
                    filter: "blur(50px)",
                    right: -50,
                    top: -50,
                  }}
                />

                {/* HEADER */}

                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: 34,
                          sm: 42,
                        },
                        height: {
                          xs: 34,
                          sm: 42,
                        },
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "11px",
                        color: "#fff",
                        background:
                          "linear-gradient(135deg,#059669,#0F766E)",
                        boxShadow:
                          "0 8px 18px rgba(5,150,105,.18)",
                      }}
                    >
                      <LaptopMacRoundedIcon
                        sx={{
                          fontSize: {
                            xs: 17,
                            sm: 21,
                          },
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: 9,
                            sm: 11,
                          },
                          fontWeight: 850,
                          color: "#12302B",
                        }}
                      >
                        Learn • Practice • Build
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 6.5,
                            sm: 8,
                          },
                          color: "#82958F",
                        }}
                      >
                        Your technology journey starts here
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label="LEARNING"
                    size="small"
                    sx={{
                      height: {
                        xs: 20,
                        sm: 23,
                      },
                      background:
                        "rgba(5,150,105,.08)",
                      color: "#059669",
                      fontSize: {
                        xs: 6,
                        sm: 7,
                      },
                      fontWeight: 800,
                    }}
                  />
                </Box>

                {/* COURSE AREA */}

                <Box
                  sx={{
                    mt: {
                      xs: 2,
                      sm: 2.5,
                    },
                    display: "grid",
                    gridTemplateColumns:
                      "1.35fr .8fr",
                    gap: 1.2,
                  }}
                >
                  {/* MAIN COURSE */}

                  <Box
                    sx={{
                      p: {
                        xs: 1.3,
                        sm: 1.6,
                      },
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg,#123E36,#165448)",
                      minHeight: {
                        xs: 145,
                        sm: 175,
                      },
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
                        background:
                          "rgba(52,211,153,.12)",
                        right: -45,
                        bottom: -45,
                      }}
                    />

                    <Typography
                      sx={{
                        position: "relative",
                        fontSize: {
                          xs: 6.5,
                          sm: 8,
                        },
                        fontWeight: 800,
                        color:
                          "rgba(255,255,255,.55)",
                        letterSpacing: 1,
                      }}
                    >
                      FEATURED PROGRAM
                    </Typography>

                    <Typography
                      sx={{
                        position: "relative",
                        mt: 1,
                        fontSize: {
                          xs: 15,
                          sm: 20,
                        },
                        lineHeight: 1.15,
                        fontWeight: 850,
                        color: "#fff",
                      }}
                    >
                      Full Stack
                      <br />
                      Development
                    </Typography>

                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        gap: 0.5,
                        mt: 1.4,
                        flexWrap: "wrap",
                      }}
                    >
                      {["React", "Node", "MongoDB"].map(
                        (tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 0.7,
                              py: 0.35,
                              borderRadius: "5px",
                              background:
                                "rgba(255,255,255,.10)",
                              color:
                                "rgba(255,255,255,.78)",
                              fontSize: {
                                xs: 5.5,
                                sm: 6.5,
                              },
                              fontWeight: 700,
                            }}
                          >
                            {tech}
                          </Box>
                        )
                      )}
                    </Box>

                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 1.3,
                      }}
                    >
                      <TrendingUpRoundedIcon
                        sx={{
                          fontSize: 13,
                          color: "#6EE7B7",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 6,
                            sm: 7,
                          },
                          color:
                            "rgba(255,255,255,.65)",
                        }}
                      >
                        Project-based learning
                      </Typography>
                    </Box>
                  </Box>

                  {/* SIDE STATS */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        p: 1.1,
                        borderRadius: "13px",
                        background:
                          "rgba(255,255,255,.72)",
                        border:
                          "1px solid rgba(5,150,105,.07)",
                      }}
                    >
                      <SchoolRoundedIcon
                        sx={{
                          fontSize: {
                            xs: 16,
                            sm: 19,
                          },
                          color: "#059669",
                        }}
                      />

                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: {
                            xs: 14,
                            sm: 18,
                          },
                          fontWeight: 850,
                          color: "#12302B",
                        }}
                      >
                        10+
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 5.5,
                            sm: 6.5,
                          },
                          color: "#80938D",
                        }}
                      >
                        Learning paths
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        p: 1.1,
                        borderRadius: "13px",
                        background:
                          "rgba(255,255,255,.72)",
                        border:
                          "1px solid rgba(37,99,235,.07)",
                      }}
                    >
                      <RocketLaunchRoundedIcon
                        sx={{
                          fontSize: {
                            xs: 16,
                            sm: 19,
                          },
                          color: "#2563EB",
                        }}
                      />

                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: {
                            xs: 14,
                            sm: 18,
                          },
                          fontWeight: 850,
                          color: "#12302B",
                        }}
                      >
                        25+
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 5.5,
                            sm: 6.5,
                          },
                          color: "#80938D",
                        }}
                      >
                        Project ideas
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* PROGRESS */}

                <Box
                  sx={{
                    mt: 1.4,
                    p: {
                      xs: 1.1,
                      sm: 1.4,
                    },
                    borderRadius: "13px",
                    background:
                      "rgba(5,150,105,.055)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      mb: 0.6,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 6.5,
                          sm: 8,
                        },
                        fontWeight: 750,
                        color: "#627A73",
                      }}
                    >
                      Your learning progress
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 7,
                          sm: 9,
                        },
                        fontWeight: 850,
                        color: "#059669",
                      }}
                    >
                      82%
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: {
                        xs: 4,
                        sm: 5,
                      },
                      borderRadius: "50px",
                      background:
                        "rgba(5,150,105,.10)",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "82%",
                        height: "100%",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(90deg,#059669,#2563EB)",
                        animation:
                          "progressFill 1.6s ease forwards",

                        "@keyframes progressFill": {
                          from: {
                            width: "0%",
                          },
                          to: {
                            width: "82%",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>

                {/* BOTTOM FEATURES */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    gap: 1,
                    mt: 1.3,
                  }}
                >
                  {[
                    "Mentorship",
                    "Projects",
                    "Career Skills",
                  ].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.4,
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          fontSize: 11,
                          color: "#059669",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 5.5,
                            sm: 7,
                          },
                          fontWeight: 700,
                          color: "#708780",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* =================================================
                FLOATING CARD — MENTOR
            ================================================= */}

            <Box
              sx={{
                position: "absolute",
                zIndex: 8,
                top: {
                  xs: 5,
                  sm: 25,
                  md: 35,
                },
                left: {
                  xs: 0,
                  sm: -5,
                  md: 0,
                },
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: {
                  xs: 1.2,
                  sm: 1.5,
                },
                py: 1,
                borderRadius: "15px",
                background:
                  "rgba(255,255,255,.86)",
                border:
                  "1px solid rgba(255,255,255,.95)",
                backdropFilter: "blur(14px)",
                boxShadow:
                  "0 15px 32px rgba(15,118,110,.11)",
                animation:
                  "mentorFloat 4s ease-in-out infinite",

                "@keyframes mentorFloat": {
                  "0%,100%": {
                    transform: "translateY(0)",
                  },
                  "50%": {
                    transform: "translateY(-8px)",
                  },
                },
              }}
            >
              <GroupsRoundedIcon
                sx={{
                  fontSize: 19,
                  color: "#059669",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: 7,
                    fontWeight: 750,
                    color: "#91A49E",
                    letterSpacing: 0.5,
                  }}
                >
                  LEARN WITH
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10.5,
                    fontWeight: 850,
                    color: "#12302B",
                  }}
                >
                  Expert Mentors
                </Typography>
              </Box>
            </Box>

            {/* =================================================
                FLOATING CARD — PROJECT
            ================================================= */}

            <Box
              sx={{
                position: "absolute",
                zIndex: 8,
                right: {
                  xs: 0,
                  sm: -3,
                  md: 0,
                },
                bottom: {
                  xs: 4,
                  sm: 20,
                  md: 25,
                },
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: {
                  xs: 1.2,
                  sm: 1.5,
                },
                py: 1,
                borderRadius: "15px",
                background:
                  "rgba(255,255,255,.88)",
                border:
                  "1px solid rgba(255,255,255,.95)",
                backdropFilter: "blur(14px)",
                boxShadow:
                  "0 15px 32px rgba(37,99,235,.10)",
                animation:
                  "projectFloat 4.5s ease-in-out infinite",

                "@keyframes projectFloat": {
                  "0%,100%": {
                    transform: "translateY(0)",
                  },
                  "50%": {
                    transform: "translateY(-9px)",
                  },
                },
              }}
            >
              <RocketLaunchRoundedIcon
                sx={{
                  fontSize: 19,
                  color: "#2563EB",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: 7,
                    fontWeight: 750,
                    color: "#91A49E",
                    letterSpacing: 0.5,
                  }}
                >
                  BUILD
                </Typography>

                <Typography
                  sx={{
                    fontSize: 10.5,
                    fontWeight: 850,
                    color: "#12302B",
                  }}
                >
                  Real Projects
                </Typography>
              </Box>
            </Box>

            {/* PLAY BUTTON */}

            <Box
              sx={{
                position: "absolute",
                zIndex: 10,
                top: "50%",
                left: "50%",
                transform:
                  "translate(-50%,-50%)",
                width: {
                  xs: 48,
                  sm: 58,
                },
                height: {
                  xs: 48,
                  sm: 58,
                },
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,.88)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 12px 28px rgba(15,118,110,.16)",
                opacity: 0.92,
                animation:
                  "playPulse 3s ease-in-out infinite",

                "@keyframes playPulse": {
                  "0%,100%": {
                    boxShadow:
                      "0 12px 28px rgba(15,118,110,.16)",
                  },
                  "50%": {
                    boxShadow:
                      "0 15px 38px rgba(15,118,110,.28)",
                  },
                },
              }}
            >
              <PlayCircleOutlineRoundedIcon
                sx={{
                  fontSize: {
                    xs: 27,
                    sm: 34,
                  },
                  color: "#059669",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* =====================================================
            STATS STRIP
        ===================================================== */}

        <Box
          sx={{
            mt: {
              xs: 5,
              sm: 6,
              lg: 3,
            },
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2,1fr)",
              sm: "repeat(4,1fr)",
            },
            gap: {
              xs: 1,
              sm: 1.5,
              md: 2,
            },
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          {[
            ["01", "Learning Paths", "Career-focused programs"],
            ["02", "Hands-on Projects", "Learn by building"],
            ["03", "Expert Guidance", "Mentor-led learning"],
            ["04", "Future Skills", "Industry-ready mindset"],
          ].map(([number, title, subtitle]) => (
            <Box
              key={number}
              sx={{
                position: "relative",
                p: {
                  xs: 1.4,
                  sm: 1.7,
                  md: 2,
                },
                borderRadius: "15px",
                background:
                  "rgba(255,255,255,.48)",
                border:
                  "1px solid rgba(5,150,105,.07)",
                backdropFilter: "blur(10px)",
                transition:
                  "transform .3s ease, background .3s ease",

                "&:hover": {
                  transform: "translateY(-4px)",
                  background:
                    "rgba(255,255,255,.72)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 7,
                    sm: 8,
                  },
                  fontWeight: 850,
                  color: "#059669",
                  letterSpacing: 1,
                }}
              >
                {number}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: {
                    xs: 9,
                    sm: 10,
                    md: 11,
                  },
                  fontWeight: 850,
                  color: "#12302B",
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.2,
                  fontSize: {
                    xs: 6.5,
                    sm: 7.5,
                  },
                  color: "#82938E",
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          opacity: 0.55,
        }}
      >
        <Typography
          sx={{
            fontSize: 7,
            fontWeight: 750,
            letterSpacing: 2,
            color: "#78908A",
          }}
        >
          SCROLL TO EXPLORE
        </Typography>

        <Box
          sx={{
            width: 1,
            height: 25,
            background:
              "linear-gradient(#059669,transparent)",
            animation:
              "scrollHero 1.8s ease-in-out infinite",

            "@keyframes scrollHero": {
              "0%,100%": {
                transform: "scaleY(.45)",
                transformOrigin: "top",
              },
              "50%": {
                transform: "scaleY(1)",
                transformOrigin: "top",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;