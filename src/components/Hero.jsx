import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 11, md: 13 },
        pb: { xs: 7, md: 9 },

        background: `
          radial-gradient(
            circle at 8% 15%,
            rgba(16,185,129,0.18),
            transparent 26%
          ),
          radial-gradient(
            circle at 88% 18%,
            rgba(37,99,235,0.13),
            transparent 28%
          ),
          radial-gradient(
            circle at 78% 88%,
            rgba(20,184,166,0.14),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #e8f7f1 0%,
            #effbf7 45%,
            #e9f6ff 100%
          )
        `,
      }}
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          width: 430,
          height: 430,
          borderRadius: "50%",
          background: "rgba(5,150,105,0.07)",
          filter: "blur(90px)",
          top: -150,
          left: -130,
          animation: "heroGlowOne 8s ease-in-out infinite",

          "@keyframes heroGlowOne": {
            "0%, 100%": {
              transform: "translate(0, 0) scale(1)",
            },
            "50%": {
              transform: "translate(70px, 50px) scale(1.08)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 390,
          height: 390,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.06)",
          filter: "blur(90px)",
          right: -130,
          bottom: -100,
          animation: "heroGlowTwo 9s ease-in-out infinite",

          "@keyframes heroGlowTwo": {
            "0%, 100%": {
              transform: "translate(0, 0) scale(1)",
            },
            "50%": {
              transform: "translate(-60px, -40px) scale(1.08)",
            },
          },
        }}
      />

      {/* Floating dots */}

      <Box
        sx={{
          position: "absolute",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#059669",
          top: "18%",
          right: "28%",
          boxShadow: "0 0 20px rgba(5,150,105,0.25)",
          animation: "heroDot 3s ease-in-out infinite",

          "@keyframes heroDot": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-12px)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 11,
          height: 11,
          borderRadius: "50%",
          background: "#2563EB",
          bottom: "20%",
          left: "20%",
          animation: "heroDotTwo 4s ease-in-out infinite",

          "@keyframes heroDotTwo": {
            "0%, 100%": {
              transform: "translateY(0)",
              opacity: 0.7,
            },
            "50%": {
              transform: "translateY(-15px)",
              opacity: 1,
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
          background: "#8BB7FF",
          top: "30%",
          right: "9%",
          animation: "heroDotThree 5s ease-in-out infinite",

          "@keyframes heroDotThree": {
            "0%, 100%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.5)",
            },
          },
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "0.95fr 1.05fr",
            },
            alignItems: "center",
            gap: { xs: 5, lg: 4 },
          }}
        >
          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <Box
            sx={{
              maxWidth: 650,
              animation: "heroTextReveal 0.9s ease forwards",
              opacity: 0,

              "@keyframes heroTextReveal": {
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
            {/* Small Label */}

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.8,
                borderRadius: "50px",
                background: "rgba(5,150,105,0.07)",
                border: "1px solid rgba(5,150,105,0.12)",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#059669",
                  boxShadow:
                    "0 0 0 5px rgba(5,150,105,0.08)",
                }}
              />

              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  color: "#059669",
                }}
              >
                ELEVATE YOUR POTENTIAL
              </Typography>
            </Box>

            {/* Main Heading */}

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 40,
                  sm: 54,
                  md: 66,
                  lg: 76,
                },
                lineHeight: 1.02,
                letterSpacing: "-3px",
                fontWeight: 850,
                color: "#12302B",
              }}
            >
              Learn.
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
                Build.
              </Box>{" "}
              Elevate.
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                mt: 3,
                maxWidth: 560,
                fontSize: {
                  xs: 13,
                  md: 16,
                },
                lineHeight: 1.8,
                color: "#657D76",
              }}
            >
              Turn your curiosity into real-world technology skills.
              Learn industry-ready tools, build meaningful projects
              and take your next step with confidence.
            </Typography>

            {/* Buttons */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mt: 4,
                flexWrap: "wrap",
              }}
            >
              <Button
                href="#courses"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  px: 2.8,
                  py: 1.35,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: 12,
                  fontWeight: 750,
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, #059669, #0F766E)",
                  boxShadow:
                    "0 12px 28px rgba(5,150,105,0.18)",
                  transition: "all 0.35s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #047857, #2563EB)",
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 16px 32px rgba(5,150,105,0.22)",
                  },

                  "& .MuiButton-endIcon": {
                    transition: "transform 0.3s ease",
                  },

                  "&:hover .MuiButton-endIcon": {
                    transform: "translateX(4px)",
                  },
                }}
              >
                Explore Courses
              </Button>

              <Button
                href="#about"
                startIcon={<PlayArrowRoundedIcon />}
                sx={{
                  px: 2.2,
                  py: 1.25,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#0F766E",
                  background: "rgba(255,255,255,0.45)",
                  border:
                    "1px solid rgba(5,150,105,0.12)",
                  backdropFilter: "blur(10px)",

                  "&:hover": {
                    background:
                      "rgba(255,255,255,0.7)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Discover More
              </Button>
            </Box>

            {/* Trust Row */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, sm: 3 },
                mt: 4.5,
                flexWrap: "wrap",
              }}
            >
              {[
                ["01", "Learn"],
                ["02", "Practice"],
                ["03", "Build"],
              ].map(([number, label]) => (
                <Box
                  key={number}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#059669",
                    }}
                  >
                    {number}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 650,
                      color: "#708780",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* =========================================
              RIGHT — MONITOR AREA
          ========================================= */}

          <Box
            sx={{
              position: "relative",

              minHeight: {
                xs: 390,
                sm: 480,
                md: 520,
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              animation:
                "monitorEntrance 1s cubic-bezier(.2,.8,.2,1) 0.15s forwards",
              opacity: 0,

              "@keyframes monitorEntrance": {
                from: {
                  opacity: 0,
                  transform: "translateY(40px) scale(0.94)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0) scale(1)",
                },
              },
            }}
          >
            {/* Orbit */}

            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 285,
                  sm: 410,
                  md: 470,
                },
                height: {
                  xs: 285,
                  sm: 410,
                  md: 470,
                },
                borderRadius: "50%",
                border:
                  "1px solid rgba(5,150,105,0.10)",
                animation:
                  "orbitRotate 18s linear infinite",

                "@keyframes orbitRotate": {
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
                  xs: 235,
                  sm: 330,
                  md: 390,
                },
                height: {
                  xs: 235,
                  sm: 330,
                  md: 390,
                },
                borderRadius: "50%",
                border:
                  "1px dashed rgba(37,99,235,0.10)",
                transform: "rotate(-25deg)",
              }}
            />

            {/* Master Floating Card */}

            <Box
              sx={{
                position: "absolute",
                zIndex: 8,

                top: {
                  xs: 8,
                  sm: 28,
                  md: 32,
                },

                left: {
                  xs: 0,
                  sm: 0,
                  md: -5,
                },

                display: "flex",
                alignItems: "center",
                gap: 0.8,

                px: 1.5,
                py: 1,
                borderRadius: "15px",

                background:
                  "rgba(255,255,255,0.82)",
                border:
                  "1px solid rgba(255,255,255,0.9)",
                backdropFilter: "blur(14px)",

                boxShadow:
                  "0 14px 30px rgba(15,118,110,0.10)",

                animation:
                  "masterFloat 4s ease-in-out infinite",

                "@keyframes masterFloat": {
                  "0%, 100%": {
                    transform: "translateY(0)",
                  },
                  "50%": {
                    transform: "translateY(-7px)",
                  },
                },
              }}
            >
              <CodeRoundedIcon
                sx={{
                  color: "#059669",
                  fontSize: 19,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: "#8AA09A",
                    letterSpacing: 0.5,
                  }}
                >
                  MASTER
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#12302B",
                  }}
                >
                  Full Stack
                </Typography>
              </Box>
            </Box>

            {/* =========================================
                MONITOR
            ========================================= */}

            <Box
              sx={{
                position: "relative",
                zIndex: 5,

                width: {
                  xs: "92%",
                  sm: 440,
                  md: 500,
                  lg: 530,
                },

                mt: {
                  xs: 1,
                  md: 0,
                },
              }}
            >
              {/* Monitor Outer Frame */}

              <Box
                sx={{
                  position: "relative",
                  width: "100%",

                  aspectRatio: {
                    xs: "15 / 10",
                    sm: "16 / 9",
                  },

                  borderRadius: {
                    xs: "18px",
                    sm: "23px",
                    md: "27px",
                  },

                  p: {
                    xs: "4px",
                    sm: "7px",
                    md: "8px",
                  },

                  background:
                    "linear-gradient(145deg, #163F38, #082D28 70%, #051F1B)",

                  boxShadow: `
                    0 30px 60px rgba(15,118,110,0.18),
                    0 10px 22px rgba(18,48,43,0.10),
                    inset 0 1px 0 rgba(255,255,255,0.15)
                  `,

                  transform:
                    "perspective(1200px) rotateY(-3deg) rotateX(2deg)",

                  transition:
                    "transform 0.5s ease, box-shadow 0.5s ease",

                  "&:hover": {
                    transform:
                      "perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(-5px)",
                    boxShadow:
                      "0 38px 72px rgba(15,118,110,0.22)",
                  },
                }}
              >
                {/* Camera */}

                <Box
                  sx={{
                    position: "absolute",
                    top: 3,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#071F1B",
                    zIndex: 10,
                  }}
                />

                {/* Screen */}

                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",

                    borderRadius: {
                      xs: "13px",
                      sm: "17px",
                      md: "20px",
                    },

                    overflow: "hidden",

                    background:
                      "linear-gradient(145deg, #F5FCF9, #EAF8F3 55%, #E5F4FA)",

                    border:
                      "1px solid rgba(255,255,255,0.4)",
                  }}
                >
                  {/* Screen Reflection */}

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "55%",
                      height: "100%",

                      background:
                        "linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.28), transparent 65%)",

                      transform: "translateX(100%)",

                      animation:
                        "screenShine 6s ease-in-out infinite",

                      "@keyframes screenShine": {
                        "0%, 45%": {
                          transform: "translateX(100%)",
                        },
                        "65%, 80%": {
                          transform: "translateX(-120%)",
                        },
                        "100%": {
                          transform: "translateX(-120%)",
                        },
                      },
                    }}
                  />

                  {/* =====================================
                      SCREEN HEADER
                  ===================================== */}

                  <Box
                    sx={{
                      position: "relative",

                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",

                      px: {
                        xs: 1.2,
                        sm: 2,
                        md: 2.3,
                      },

                      py: {
                        xs: 0.7,
                        sm: 1.2,
                        md: 1.4,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.7,
                      }}
                    >
                      <Box
                        sx={{
                          width: {
                            xs: 25,
                            sm: 34,
                            md: 38,
                          },

                          height: {
                            xs: 25,
                            sm: 34,
                            md: 38,
                          },

                          borderRadius: "8px",

                          display: "grid",
                          placeItems: "center",

                          color: "#fff",

                          background:
                            "linear-gradient(135deg, #059669, #0F766E)",

                          boxShadow:
                            "0 7px 15px rgba(5,150,105,0.16)",
                        }}
                      >
                        <TerminalRoundedIcon
                          sx={{
                            fontSize: {
                              xs: 13,
                              sm: 18,
                              md: 20,
                            },
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: 8,
                              sm: 10,
                              md: 12,
                            },

                            fontWeight: 850,
                            color: "#12302B",
                            lineHeight: 1.1,
                          }}
                        >
                          ELEVATE LAB
                        </Typography>

                        <Typography
                          sx={{
                            mt: 0.15,

                            fontSize: {
                              xs: 5.5,
                              sm: 7,
                              md: 8,
                            },

                            fontWeight: 600,
                            color: "#8AA09A",
                          }}
                        >
                          Your learning space
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        px: {
                          xs: 0.65,
                          sm: 1,
                        },

                        py: 0.35,

                        borderRadius: "50px",

                        background:
                          "rgba(34,197,94,0.10)",

                        color: "#059669",

                        fontSize: {
                          xs: 5.5,
                          sm: 7,
                          md: 8,
                        },

                        fontWeight: 800,
                        letterSpacing: 0.5,
                      }}
                    >
                      LIVE
                    </Box>
                  </Box>

                  {/* =====================================
                      CODE WINDOW
                  ===================================== */}

                  <Box
                    sx={{
                      mx: {
                        xs: 1.1,
                        sm: 1.9,
                        md: 2.2,
                      },

                      px: {
                        xs: 1,
                        sm: 1.6,
                        md: 1.9,
                      },

                      py: {
                        xs: 0.7,
                        sm: 1.2,
                        md: 1.35,
                      },

                      borderRadius: "12px",

                      background:
                        "linear-gradient(135deg, #123E36, #164F45)",

                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.05)",

                      fontFamily:
                        "'Fira Code', 'Courier New', monospace",

                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        fontFamily: "inherit",

                        fontSize: {
                          xs: 6.5,
                          sm: 7.5,
                          md: 9,
                        },

                        lineHeight: {
                          xs: 1.5,
                          sm: 1.65,
                          md: 1.65,
                        },

                        color: "#7DD3FC",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ color: "#67E8F9" }}
                      >
                        const
                      </Box>{" "}
                      future ={" "}
                      <Box
                        component="span"
                        sx={{ color: "#F9A8D4" }}
                      >
                        "developer"
                      </Box>
                      ;
                      <br />

                      <Box
                        component="span"
                        sx={{ color: "#67E8F9" }}
                      >
                        const
                      </Box>{" "}
                      skills = [
                      <Box
                        component="span"
                        sx={{ color: "#F9A8D4" }}
                      >
                        "React"
                      </Box>
                      ,{" "}
                      <Box
                        component="span"
                        sx={{ color: "#F9A8D4" }}
                      >
                        "Node"
                      </Box>
                      ];
                      <br />

                      <Box
                        component="span"
                        sx={{ color: "#C4B5FD" }}
                      >
                        build
                      </Box>
                      (future);
                    </Typography>
                  </Box>

                  {/* =====================================
                      PROGRESS
                  ===================================== */}

                  <Box
                    sx={{
                      mx: {
                        xs: 1.2,
                        sm: 2,
                        md: 2.3,
                      },

                      mt: {
                        xs: 0.9,
                        sm: 1.6,
                        md: 1.8,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          "space-between",

                        mb: 0.45,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: 6,
                            sm: 7.5,
                            md: 9,
                          },

                          fontWeight: 750,
                          color: "#657D76",
                        }}
                      >
                        Learning Progress
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 6.5,
                            sm: 8,
                            md: 10,
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
                          xs: 3,
                          sm: 5,
                          md: 6,
                        },

                        borderRadius: "50px",
                        overflow: "hidden",

                        background:
                          "rgba(5,150,105,0.10)",
                      }}
                    >
                      <Box
                        sx={{
                          width: "82%",
                          height: "100%",
                          borderRadius: "50px",

                          background:
                            "linear-gradient(90deg, #059669, #2563EB)",

                          animation:
                            "progressLoad 1.8s ease forwards",

                          "@keyframes progressLoad": {
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

                  {/* =====================================
                      TECHNOLOGY CHIPS
                  ===================================== */}

                  <Box
                    sx={{
                      display: "flex",

                      gap: {
                        xs: 0.3,
                        sm: 0.5,
                      },

                      flexWrap: "wrap",

                      mx: {
                        xs: 1.2,
                        sm: 2,
                        md: 2.3,
                      },

                      mt: {
                        xs: 0.8,
                        sm: 1.4,
                        md: 1.6,
                      },
                    }}
                  >
                    {[
                      "React",
                      "Node.js",
                      "MongoDB",
                      "UI/UX",
                    ].map((tech, index) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          height: {
                            xs: 18,
                            sm: 21,
                            md: 24,
                          },

                          borderRadius: "6px",

                          background:
                            "rgba(5,150,105,0.07)",

                          color:
                            index === 3
                              ? "#0F766E"
                              : "#35776A",

                          fontSize: {
                            xs: 5.2,
                            sm: 6.5,
                            md: 7.5,
                          },

                          fontWeight: 700,

                          "& .MuiChip-label": {
                            px: {
                              xs: 0.6,
                              sm: 0.8,
                              md: 1,
                            },
                          },
                        }}
                      />
                    ))}
                  </Box>

                  {/* =====================================
                      NEXT MILESTONE
                  ===================================== */}

                  <Box
                    sx={{
                      mx: {
                        xs: 1.2,
                        sm: 2,
                        md: 2.3,
                      },

                      mt: {
                        xs: 0.8,
                        sm: 1.4,
                        md: 1.6,
                      },

                      mb: {
                        xs: 0.8,
                        sm: 1.5,
                        md: 1.7,
                      },

                      px: {
                        xs: 1,
                        sm: 1.5,
                        md: 1.7,
                      },

                      py: {
                        xs: 0.7,
                        sm: 1,
                        md: 1.2,
                      },

                      borderRadius: "11px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",

                      background:
                        "linear-gradient(135deg, rgba(5,150,105,0.06), rgba(37,99,235,0.06))",

                      border:
                        "1px solid rgba(5,150,105,0.05)",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: 5.2,
                            sm: 6.5,
                            md: 7.5,
                          },

                          fontWeight: 700,
                          color: "#91A59F",
                          letterSpacing: 0.35,
                        }}
                      >
                        NEXT MILESTONE
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.2,

                          fontSize: {
                            xs: 7.2,
                            sm: 9,
                            md: 11,
                          },

                          fontWeight: 850,
                          color: "#12302B",
                        }}
                      >
                        Build Real Project
                      </Typography>
                    </Box>

                    <RocketLaunchRoundedIcon
                      sx={{
                        fontSize: {
                          xs: 16,
                          sm: 21,
                          md: 25,
                        },

                        color: "#2563EB",

                        animation:
                          "rocketFloat 2.5s ease-in-out infinite",

                        "@keyframes rocketFloat": {
                          "0%, 100%": {
                            transform:
                              "translateY(0) rotate(-5deg)",
                          },

                          "50%": {
                            transform:
                              "translateY(-4px) rotate(3deg)",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* =========================================
                  MONITOR STAND
              ========================================= */}

              <Box
                sx={{
                  position: "relative",

                  width: {
                    xs: 65,
                    sm: 90,
                    md: 105,
                  },

                  height: {
                    xs: 40,
                    sm: 52,
                    md: 60,
                  },

                  mx: "auto",

                  mt: {
                    xs: -1,
                    sm: -1.2,
                    md: -1.5,
                  },

                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform:
                      "translateX(-50%)",

                    width: {
                      xs: 13,
                      sm: 18,
                      md: 21,
                    },

                    height: "100%",

                    borderRadius:
                      "0 0 7px 7px",

                    background:
                      "linear-gradient(90deg, #143D36, #0B2D28)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform:
                      "translateX(-50%)",

                    width: {
                      xs: 78,
                      sm: 105,
                      md: 125,
                    },

                    height: {
                      xs: 6,
                      sm: 9,
                      md: 10,
                    },

                    borderRadius: "50%",

                    background:
                      "linear-gradient(90deg, #123E36, #071F1B)",

                    boxShadow:
                      "0 7px 14px rgba(18,48,43,0.14)",
                  }}
                />
              </Box>
            </Box>

            {/* =========================================
                EXPERIENCE FLOATING CARD
            ========================================= */}

            <Box
              sx={{
                position: "absolute",
                zIndex: 9,

                right: {
                  xs: 0,
                  sm: 0,
                  md: -5,
                },

                bottom: {
                  xs: 8,
                  sm: 22,
                  md: 28,
                },

                display: "flex",
                alignItems: "center",
                gap: 0.8,

                px: 1.5,
                py: 1,

                borderRadius: "15px",

                background:
                  "rgba(255,255,255,0.84)",

                border:
                  "1px solid rgba(255,255,255,0.9)",

                backdropFilter: "blur(14px)",

                boxShadow:
                  "0 14px 30px rgba(37,99,235,0.10)",

                animation:
                  "experienceFloat 4.5s ease-in-out infinite",

                "@keyframes experienceFloat": {
                  "0%, 100%": {
                    transform: "translateY(0)",
                  },

                  "50%": {
                    transform: "translateY(-8px)",
                  },
                },
              }}
            >
              <RocketLaunchRoundedIcon
                sx={{
                  color: "#2563EB",
                  fontSize: 19,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: "#8AA09A",
                  }}
                >
                  EXPERIENCE
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#12302B",
                  }}
                >
                  Build Projects
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          bottom: 22,
          left: "50%",
          transform: "translateX(-50%)",
          display: {
            xs: "none",
            md: "flex",
          },

          flexDirection: "column",
          alignItems: "center",
          gap: 0.7,

          opacity: 0.65,
        }}
      >
        <Typography
          sx={{
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#78908A",
          }}
        >
          SCROLL TO EXPLORE
        </Typography>

        <Box
          sx={{
            width: 1,
            height: 28,

            background:
              "linear-gradient(#059669, transparent)",

            animation:
              "scrollLine 1.8s ease-in-out infinite",

            "@keyframes scrollLine": {
              "0%, 100%": {
                transform: "scaleY(0.5)",
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