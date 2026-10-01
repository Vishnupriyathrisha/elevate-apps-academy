import {
  Box,
  Container,
  Typography,
  Chip,
  LinearProgress,
} from "@mui/material";

import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const WhyUs = () => {
  const reasons = [
    {
      number: "01",
      icon: <CodeRoundedIcon />,
      title: "Learn by Building",
      text: "Move beyond theory and turn every concept into something you can actually build.",
      accent: "#059669",
    },
    {
      number: "02",
      icon: <GroupsRoundedIcon />,
      title: "Practical Guidance",
      text: "Learn with structured guidance that keeps your learning journey simple and focused.",
      accent: "#0F766E",
    },
    {
      number: "03",
      icon: <RocketLaunchRoundedIcon />,
      title: "Real-World Skills",
      text: "Develop practical skills using tools and technologies used in modern development.",
      accent: "#2563EB",
    },
    {
      number: "04",
      icon: <TrendingUpRoundedIcon />,
      title: "Career Growth",
      text: "Build confidence, strengthen your portfolio and prepare for your next opportunity.",
      accent: "#7C3AED",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "UI/UX",
  ];

  return (
    <Box
      id="why-us"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 9, sm: 11, md: 14 },

        background: `
          radial-gradient(
            circle at 5% 20%,
            rgba(16,185,129,0.13),
            transparent 27%
          ),
          radial-gradient(
            circle at 92% 18%,
            rgba(37,99,235,0.10),
            transparent 28%
          ),
          radial-gradient(
            circle at 78% 90%,
            rgba(20,184,166,0.12),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #e8f7f1 0%,
            #effbf7 48%,
            #e9f6ff 100%
          )
        `,
      }}
    >
      {/* =====================================================
          SOFT BACKGROUND GLOW
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 260, md: 430 },
          height: { xs: 260, md: 430 },
          borderRadius: "50%",
          background: "rgba(5,150,105,0.065)",
          filter: "blur(90px)",
          top: -130,
          left: -130,
          animation: "softGlowOne 14s ease-in-out infinite",

          "@keyframes softGlowOne": {
            "0%, 100%": {
              opacity: 0.7,
            },
            "50%": {
              opacity: 1,
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 240, md: 390 },
          height: { xs: 240, md: 390 },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.05)",
          filter: "blur(90px)",
          right: -120,
          bottom: -120,
          animation: "softGlowTwo 16s ease-in-out infinite",

          "@keyframes softGlowTwo": {
            "0%, 100%": {
              opacity: 0.65,
            },
            "50%": {
              opacity: 1,
            },
          },
        }}
      />

      {/* =====================================================
          STATIC / SOFT FLOATING DOTS
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#059669",
          top: "18%",
          left: "7%",
          opacity: 0.55,
          animation: "dotPulse 4s ease-in-out infinite",

          "@keyframes dotPulse": {
            "0%, 100%": {
              opacity: 0.35,
            },
            "50%": {
              opacity: 0.8,
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
          top: "26%",
          right: "7%",
          opacity: 0.45,
          animation: "dotPulseTwo 5s ease-in-out infinite",

          "@keyframes dotPulseTwo": {
            "0%, 100%": {
              opacity: 0.3,
            },
            "50%": {
              opacity: 0.75,
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
        {/* =====================================================
            HEADING
        ===================================================== */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 6, md: 8 },

            animation:
              "headingAppear 0.9s cubic-bezier(.2,.7,.2,1) forwards",

            "@keyframes headingAppear": {
              from: {
                opacity: 0,
                transform: "translateY(24px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              px: 1.5,
              py: 0.8,
              mb: 2.2,
              borderRadius: "50px",
              background: "rgba(5,150,105,0.07)",
              border: "1px solid rgba(5,150,105,0.12)",
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 14,
                color: "#059669",
                animation: "starPulse 3s ease-in-out infinite",

                "@keyframes starPulse": {
                  "0%, 100%": {
                    opacity: 0.7,
                  },
                  "50%": {
                    opacity: 1,
                  },
                },
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
              WHY ELEVATE
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: 34,
                sm: 46,
                md: 58,
                lg: 64,
              },
              lineHeight: 1.05,
              letterSpacing: "-2.5px",
              fontWeight: 850,
              color: "#12302B",
            }}
          >
            More Than Learning.
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
              It's Your Next Step.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              maxWidth: 650,
              mx: "auto",
              fontSize: { xs: 13, md: 15 },
              lineHeight: 1.8,
              color: "#657D76",
            }}
          >
            At Elevate Apps Academy, learning is designed around
            practice, projects and progress — helping you transform
            knowledge into real-world confidence.
          </Typography>
        </Box>

        {/* =====================================================
            MAIN SHOWCASE
        ===================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.05fr 0.95fr",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* =====================================================
              LEFT FEATURE CARD
          ===================================================== */}

          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              minHeight: { xs: 430, md: 500 },
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: { xs: "24px", md: "30px" },

              background:
                "linear-gradient(145deg, rgba(255,255,255,0.72), rgba(226,245,238,0.72))",

              border: "1px solid rgba(5,150,105,0.10)",

              boxShadow:
                "0 25px 60px rgba(15,118,110,0.08)",

              backdropFilter: "blur(18px)",

              animation:
                "featureAppear 0.9s cubic-bezier(.2,.7,.2,1) 0.15s forwards",

              opacity: 0,

              "@keyframes featureAppear": {
                from: {
                  opacity: 0,
                  transform: "translateY(25px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },

              transition:
                "box-shadow 0.4s ease, transform 0.4s ease",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow:
                  "0 32px 68px rgba(15,118,110,0.12)",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "55%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent)",
                transform: "skewX(-18deg)",
                animation: "softShine 9s ease-in-out infinite",
                pointerEvents: "none",

                "@keyframes softShine": {
                  "0%, 55%": {
                    left: "-100%",
                  },
                  "72%, 82%": {
                    left: "145%",
                  },
                  "100%": {
                    left: "145%",
                  },
                },
              },
            }}
          >
            {/* Decorative Circle */}

            <Box
              sx={{
                position: "absolute",
                width: 210,
                height: 210,
                borderRadius: "50%",
                border:
                  "1px solid rgba(5,150,105,0.09)",
                right: -80,
                top: -70,
                animation: "circleBreath 8s ease-in-out infinite",

                "@keyframes circleBreath": {
                  "0%, 100%": {
                    opacity: 0.45,
                  },
                  "50%": {
                    opacity: 0.9,
                  },
                },
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <Chip
                icon={<WorkspacePremiumRoundedIcon />}
                label="LEARN DIFFERENTLY"
                sx={{
                  height: 30,
                  borderRadius: "50px",
                  background: "rgba(5,150,105,0.08)",
                  color: "#059669",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1,

                  "& .MuiChip-icon": {
                    color: "#059669",
                    fontSize: 15,
                    animation:
                      "premiumPulse 2.5s ease-in-out infinite",

                    "@keyframes premiumPulse": {
                      "0%, 100%": {
                        opacity: 0.7,
                        transform: "scale(1)",
                      },
                      "50%": {
                        opacity: 1,
                        transform: "scale(1.12)",
                      },
                    },
                  },
                }}
              />

              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 520,
                  fontSize: {
                    xs: 27,
                    sm: 34,
                    md: 40,
                  },
                  lineHeight: 1.12,
                  fontWeight: 850,
                  letterSpacing: "-1.5px",
                  color: "#12302B",
                }}
              >
                Turn Every Lesson
                <br />
                Into{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#059669",
                  }}
                >
                  Experience.
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 500,
                  fontSize: { xs: 12, md: 14 },
                  lineHeight: 1.8,
                  color: "#6B827C",
                }}
              >
                Instead of simply watching tutorials, you'll
                experiment, practice, solve problems and create
                projects that make your learning stick.
              </Typography>

              {/* Learning Progress */}

              <Box
                sx={{
                  mt: 4,
                  p: 2.2,
                  borderRadius: "18px",
                  background:
                    "rgba(255,255,255,0.62)",
                  border:
                    "1px solid rgba(5,150,105,0.08)",

                  transition:
                    "box-shadow 0.3s ease",

                  "&:hover": {
                    boxShadow:
                      "0 12px 25px rgba(5,150,105,0.07)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 750,
                      color: "#526C65",
                    }}
                  >
                    YOUR LEARNING JOURNEY
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 850,
                      color: "#059669",
                    }}
                  >
                    82%
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={82}
                  sx={{
                    height: 7,
                    borderRadius: "50px",
                    background: "rgba(5,150,105,0.08)",

                    "& .MuiLinearProgress-bar": {
                      borderRadius: "50px",
                      background:
                        "linear-gradient(90deg, #059669, #2563EB)",
                      animation:
                        "progressGlow 3s ease-in-out infinite",

                      "@keyframes progressGlow": {
                        "0%, 100%": {
                          opacity: 0.8,
                        },
                        "50%": {
                          opacity: 1,
                        },
                      },
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1.5,
                  }}
                >
                  {["Learn", "Practice", "Build", "Elevate"].map(
                    (step, index) => (
                      <Box
                        key={step}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 13,
                            color:
                              index < 3
                                ? "#059669"
                                : "#B7CCC5",

                            animation:
                              index < 3
                                ? "checkPulse 2.5s ease-in-out infinite"
                                : "none",

                            animationDelay: `${index * 0.25}s`,

                            "@keyframes checkPulse": {
                              "0%, 100%": {
                                opacity: 0.55,
                              },
                              "50%": {
                                opacity: 1,
                              },
                            },
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: 8,
                            fontWeight: 700,
                            color: "#718780",
                          }}
                        >
                          {step}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              </Box>

              {/* Technology Pills */}

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.7,
                  mt: 3,
                }}
              >
                {skills.map((skill, index) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      height: 25,
                      borderRadius: "8px",
                      background: "rgba(5,150,105,0.06)",
                      color: "#35776A",
                      fontSize: 8,
                      fontWeight: 700,
                      border:
                        "1px solid rgba(5,150,105,0.07)",

                      animation:
                        "skillFade 0.5s ease forwards",

                      animationDelay: `${0.7 + index * 0.08}s`,
                      opacity: 0,

                      "@keyframes skillFade": {
                        from: {
                          opacity: 0,
                        },
                        to: {
                          opacity: 1,
                        },
                      },

                      transition:
                        "background 0.25s ease",

                      "&:hover": {
                        background:
                          "rgba(5,150,105,0.12)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* =====================================================
              RIGHT REASONS
          ===================================================== */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 2,
            }}
          >
            {reasons.map((reason, index) => (
              <Box
                key={reason.number}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  p: { xs: 2.7, sm: 3 },
                  minHeight: { xs: 205, sm: 235 },
                  borderRadius: "24px",

                  background:
                    "rgba(255,255,255,0.58)",

                  border:
                    "1px solid rgba(5,150,105,0.08)",

                  backdropFilter: "blur(15px)",

                  boxShadow:
                    "0 18px 40px rgba(15,118,110,0.06)",

                  opacity: 0,

                  animation:
                    "reasonAppear 0.7s cubic-bezier(.2,.7,.2,1) forwards",

                  animationDelay:
                    `${0.35 + index * 0.12}s`,

                  "@keyframes reasonAppear": {
                    from: {
                      opacity: 0,
                      transform: "translateY(20px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },

                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 25px 50px rgba(15,118,110,0.11)",
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    background: `linear-gradient(
                      90deg,
                      ${reason.accent},
                      transparent
                    )`,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition:
                      "transform 0.4s ease",
                  },

                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-110%",
                    width: "70%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
                    transform: "skewX(-18deg)",
                    transition: "left 0.65s ease",
                    pointerEvents: "none",
                  },

                  "&:hover::after": {
                    left: "145%",
                  },
                }}
              >
                {/* Number */}

                <Typography
                  sx={{
                    position: "absolute",
                    top: 18,
                    right: 20,
                    fontSize: 10,
                    fontWeight: 850,
                    color: "rgba(18,48,43,0.18)",
                    transition:
                      "color 0.3s ease",

                    ".MuiBox-root:hover &": {
                      color: `${reason.accent}55`,
                    },
                  }}
                >
                  {reason.number}
                </Typography>

                {/* Icon */}

                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "14px",
                    display: "grid",
                    placeItems: "center",

                    background: `${reason.accent}12`,
                    color: reason.accent,

                    transition:
                      "box-shadow 0.3s ease",

                    "& svg": {
                      fontSize: 22,
                    },

                    animation:
                      "iconBreath 3s ease-in-out infinite",

                    animationDelay:
                      `${index * 0.35}s`,

                    "@keyframes iconBreath": {
                      "0%, 100%": {
                        opacity: 0.82,
                      },
                      "50%": {
                        opacity: 1,
                      },
                    },

                    ".MuiBox-root:hover &": {
                      boxShadow:
                        `0 10px 22px ${reason.accent}22`,
                    },
                  }}
                >
                  {reason.icon}
                </Box>

                <Typography
                  sx={{
                    mt: 2.5,
                    fontSize: 17,
                    fontWeight: 800,
                    color: "#12302B",
                    transition:
                      "color 0.3s ease",

                    ".MuiBox-root:hover &": {
                      color: reason.accent,
                    },
                  }}
                >
                  {reason.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 11,
                    lineHeight: 1.7,
                    color: "#718780",
                  }}
                >
                  {reason.text}
                </Typography>

                <ArrowForwardRoundedIcon
                  sx={{
                    position: "absolute",
                    bottom: 19,
                    right: 20,
                    fontSize: 17,
                    color: reason.accent,
                    opacity: 0.45,

                    transition:
                      "transform 0.3s ease, opacity 0.3s ease",

                    ".MuiBox-root:hover &": {
                      transform: "translateX(5px)",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* =====================================================
            BOTTOM STATS
        ===================================================== */}

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "repeat(4, 1fr)",
            },
            gap: 1.5,
          }}
        >
          {[
            ["01", "Project", "Based Learning"],
            ["02", "Industry", "Focused Skills"],
            ["03", "Hands-On", "Practice"],
            ["04", "Career", "Confidence"],
          ].map(([number, title, subtitle], index) => (
            <Box
              key={number}
              sx={{
                position: "relative",
                overflow: "hidden",
                py: { xs: 2, md: 2.4 },
                px: 1.5,
                textAlign: "center",
                borderRadius: "18px",

                background:
                  "rgba(255,255,255,0.42)",

                border:
                  "1px solid rgba(5,150,105,0.07)",

                opacity: 0,

                animation:
                  "statAppear 0.65s ease forwards",

                animationDelay:
                  `${0.9 + index * 0.1}s`,

                "@keyframes statAppear": {
                  from: {
                    opacity: 0,
                    transform: "translateY(15px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },

                transition:
                  "box-shadow 0.3s ease",

                "&:hover": {
                  boxShadow:
                    "0 16px 30px rgba(15,118,110,0.08)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 9,
                  fontWeight: 850,
                  color: "#059669",
                }}
              >
                {number}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: { xs: 11, md: 13 },
                  fontWeight: 800,
                  color: "#12302B",
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.2,
                  fontSize: 8,
                  fontWeight: 600,
                  color: "#81958F",
                }}
              >
                {subtitle}
              </Typography>

              {/* Animated Bottom Line */}

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, #059669, #2563EB, transparent)",
                  backgroundSize: "200% 100%",
                  animation:
                    "lineMove 5s linear infinite",

                  "@keyframes lineMove": {
                    from: {
                      backgroundPosition: "0% center",
                    },
                    to: {
                      backgroundPosition: "200% center",
                    },
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;
