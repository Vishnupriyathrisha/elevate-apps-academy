import {
  Box,
  Typography,
  Chip,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import studentLab from "../assets/student-lab.jpg";

import learnImage from "../assets/learn.jpg";
import practiceImage from "../assets/practice.jpg";
import buildImage from "../assets/build.jpg";
import elevateImage from "../assets/elevate.jpg";

const About = () => {
  const journey = [
    {
      number: "01",
      title: "Learn",
      text: "Understand concepts through structured and practical learning.",
      icon: <SchoolRoundedIcon />,
      image: learnImage,
    },
    {
      number: "02",
      title: "Practice",
      text: "Strengthen your skills by solving real development challenges.",
      icon: <LightbulbRoundedIcon />,
      image: practiceImage,
    },
    {
      number: "03",
      title: "Build",
      text: "Turn your knowledge into meaningful real-world projects.",
      icon: <GroupsRoundedIcon />,
      image: buildImage,
    },
    {
      number: "04",
      title: "Elevate",
      text: "Grow your confidence and prepare for your next career step.",
      icon: <WorkspacePremiumRoundedIcon />,
      image: elevateImage,
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "UI / UX",
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: {
          xs: 9,
          sm: 11,
          md: 14,
        },

        background: `
          radial-gradient(
            circle at 8% 15%,
            rgba(16,185,129,0.16),
            transparent 27%
          ),
          radial-gradient(
            circle at 88% 20%,
            rgba(37,99,235,0.11),
            transparent 28%
          ),
          radial-gradient(
            circle at 75% 85%,
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
      {/* ==================================================
          ANIMATED BACKGROUND BLOBS
      ================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          borderRadius: "50%",
          background: "rgba(5,150,105,0.055)",
          filter: "blur(3px)",
          top: 40,
          left: -120,
          animation: "aboutBlobOne 10s ease-in-out infinite",

          "@keyframes aboutBlobOne": {
            "0%, 100%": {
              transform: "translate(0, 0) scale(1)",
            },
            "50%": {
              transform: "translate(45px, 25px) scale(1.08)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 260, md: 420 },
          height: { xs: 260, md: 420 },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.045)",
          filter: "blur(4px)",
          right: -160,
          bottom: 40,
          animation: "aboutBlobTwo 12s ease-in-out infinite",

          "@keyframes aboutBlobTwo": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(-35px, -30px)",
            },
          },
        }}
      />

      {/* ==================================================
          FLOATING DOTS
      ================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#059669",
          opacity: 0.25,
          top: "18%",
          left: "8%",
          boxShadow: "0 0 20px rgba(5,150,105,0.3)",
          animation: "aboutDotOne 5s ease-in-out infinite",

          "@keyframes aboutDotOne": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-18px)",
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
          background: "#2563EB",
          opacity: 0.25,
          top: "35%",
          right: "9%",
          animation: "aboutDotTwo 6s ease-in-out infinite",

          "@keyframes aboutDotTwo": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(-12px, 18px)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#0F766E",
          opacity: 0.25,
          bottom: "20%",
          left: "46%",
          animation: "aboutDotThree 7s ease-in-out infinite",

          "@keyframes aboutDotThree": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(18px, -15px)",
            },
          },
        }}
      />

      {/* ==================================================
          DECORATIVE CIRCLE
      ================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px solid rgba(5,150,105,0.08)",
          top: "42%",
          right: "-90px",
          animation: "aboutCircle 16s linear infinite",

          "@keyframes aboutCircle": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        }}
      />

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <Box
        sx={{
          width: "min(1200px, 92%)",
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: {
              xs: 6,
              md: 8,
            },

            animation: "aboutHeading 0.9s ease forwards",

            "@keyframes aboutHeading": {
              from: {
                opacity: 0,
                transform: "translateY(25px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Chip
            label="ABOUT ELEVATE"
            size="small"
            sx={{
              height: 30,
              px: 1,
              borderRadius: "50px",
              background: "rgba(5,150,105,0.08)",
              color: "#047857",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.8,
              border: "1px solid rgba(5,150,105,0.10)",
            }}
          />

          <Typography
            component="h2"
            sx={{
              mt: 2,
              fontSize: {
                xs: 34,
                sm: 43,
                md: 52,
              },
              lineHeight: 1.08,
              fontWeight: 850,
              letterSpacing: "-2px",
              color: "#12302B",
            }}
          >
            Your Journey

            <Box
              component="span"
              sx={{
                display: "block",
                background:
                  "linear-gradient(90deg, #059669, #0F766E, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Starts Here.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.2,
              color: "#617B74",
              fontSize: {
                xs: 14,
                sm: 15,
                md: 16,
              },
              lineHeight: 1.8,
            }}
          >
            Elevate Apps Academy is a learning space designed
            to transform curiosity into practical technology
            skills. Learn, experiment, build and take your
            next step with confidence.
          </Typography>
        </Box>

        {/* ==================================================
            STORY + CONTENT
        ================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.9fr 1.1fr",
            },
            gap: {
              xs: 4,
              md: 7,
            },
            alignItems: "center",
          }}
        >
          {/* ==================================================
              LEARN WITH PURPOSE CARD
          ================================================== */}

          <Box
            sx={{
              position: "relative",
              minHeight: {
                xs: 360,
                sm: 400,
                md: 450,
              },
              borderRadius: {
                xs: "28px",
                md: "36px",
              },
              overflow: "hidden",

              boxShadow:
                "0 25px 65px rgba(15,118,110,0.20)",

              animation:
                "storyFloat 6s ease-in-out infinite",

              "@keyframes storyFloat": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-7px)",
                },
              },

              transition:
                "box-shadow 0.5s ease, transform 0.5s ease",

              "&:hover": {
                boxShadow:
                  "0 32px 80px rgba(15,118,110,0.30)",

                "& .student-lab-image": {
                  transform: "scale(1.07)",
                },

                "& .lab-overlay": {
                  background:
                    "linear-gradient(145deg, rgba(4,78,66,0.84), rgba(5,118,91,0.76), rgba(29,78,216,0.72))",
                },

                "& .purpose-icon": {
                  transform:
                    "scale(1.08) rotate(-5deg)",
                },
              },
            }}
          >
            {/* STUDENT LAB IMAGE */}

            <Box
              className="student-lab-image"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",

                backgroundImage: `url(${studentLab})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                transform: "scale(1)",
                transition:
                  "transform 1s cubic-bezier(.2,.8,.2,1)",
              }}
            />

            {/* DARK TEAL OVERLAY */}

            <Box
              className="lab-overlay"
              sx={{
                position: "absolute",
                inset: 0,

                background:
                  "linear-gradient(145deg, rgba(4,78,66,0.88), rgba(5,118,91,0.78), rgba(37,99,235,0.70))",

                transition:
                  "background 0.6s ease",
              }}
            />

            {/* IMAGE DARK GRADIENT */}

            <Box
              sx={{
                position: "absolute",
                inset: 0,

                background:
                  "linear-gradient(to top, rgba(4,30,27,0.78) 0%, rgba(4,30,27,0.18) 48%, rgba(4,30,27,0.28) 100%)",

                pointerEvents: "none",
              }}
            />

            {/* GLOW CIRCLE */}

            <Box
              sx={{
                position: "absolute",
                width: 280,
                height: 280,
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.10)",
                top: -100,
                right: -90,
                filter: "blur(5px)",
                animation:
                  "storyGlow 7s ease-in-out infinite",

                "@keyframes storyGlow": {
                  "0%, 100%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.15)",
                  },
                },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: "50%",
                background:
                  "rgba(255,255,255,0.07)",
                bottom: -80,
                left: -60,
              }}
            />

            {/* DECORATIVE CORNER */}

            <Box
              sx={{
                position: "absolute",
                top: 35,
                right: 35,
                width: 75,
                height: 75,
                borderTop:
                  "1px solid rgba(255,255,255,0.30)",
                borderRight:
                  "1px solid rgba(255,255,255,0.30)",
                borderRadius: "0 20px 0 0",
              }}
            />

            {/* CONTENT */}

            <Box
              sx={{
                position: "relative",
                zIndex: 3,
                height: "100%",
                minHeight: {
                  xs: 360,
                  sm: 400,
                  md: 450,
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },
              }}
            >
              <Box>
                {/* Icon */}

                <Box
                  className="purpose-icon"
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: "17px",
                    display: "grid",
                    placeItems: "center",
                    background:
                      "rgba(255,255,255,0.15)",
                    border:
                      "1px solid rgba(255,255,255,0.22)",
                    backdropFilter: "blur(12px)",
                    mb: 4,

                    animation:
                      "iconPulse 3s ease-in-out infinite",

                    transition:
                      "transform 0.4s ease",

                    "@keyframes iconPulse": {
                      "0%, 100%": {
                        transform: "scale(1)",
                      },
                      "50%": {
                        transform: "scale(1.08)",
                      },
                    },
                  }}
                >
                  <SchoolRoundedIcon
                    sx={{
                      color: "#fff",
                      fontSize: 29,
                    }}
                  />
                </Box>

                {/* Label */}

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.78)",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: 2,
                  }}
                >
                  LEARN WITH PURPOSE
                </Typography>

                {/* Heading */}

                <Typography
                  sx={{
                    mt: 1.5,
                    color: "#fff",
                    fontSize: {
                      xs: 29,
                      sm: 34,
                      md: 38,
                    },
                    lineHeight: 1.12,
                    fontWeight: 800,
                    letterSpacing: "-1px",
                    maxWidth: 360,
                    textShadow:
                      "0 3px 20px rgba(0,0,0,0.20)",
                  }}
                >
                  Knowledge becomes powerful when you build with it.
                </Typography>
              </Box>

              {/* Bottom content */}

              <Box
                sx={{
                  mt: 5,
                  pt: 3,
                  borderTop:
                    "1px solid rgba(255,255,255,0.20)",
                }}
              >
                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.84)",
                    fontSize: 13,
                    lineHeight: 1.7,
                    maxWidth: 370,
                  }}
                >
                  Learn today's technology. Build tomorrow's
                  possibilities.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}

          <Box
            sx={{
              animation:
                "contentReveal 1s ease 0.2s both",

              "@keyframes contentReveal": {
                from: {
                  opacity: 0,
                  transform: "translateX(25px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
            <Typography
              sx={{
                color: "#059669",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 2.2,
                mb: 1.5,
              }}
            >
              MORE THAN JUST TRAINING
            </Typography>

            <Typography
              component="h3"
              sx={{
                color: "#12302B",
                fontSize: {
                  xs: 29,
                  sm: 35,
                  md: 42,
                },
                lineHeight: 1.15,
                fontWeight: 820,
                letterSpacing: "-1.5px",
                maxWidth: 600,
              }}
            >
              Learn the skill.
              <br />
              Build the experience.
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                color: "#617B74",
                fontSize: 15,
                lineHeight: 1.85,
                maxWidth: 610,
              }}
            >
              At Elevate Apps Academy, learning goes beyond
              watching tutorials. We focus on understanding
              concepts, practising them and applying them to
              practical projects that help learners become
              confident creators.
            </Typography>

            {/* Highlights */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: 1.5,
                mt: 3.5,
              }}
            >
              {[
                "Practical learning",
                "Real-world projects",
                "Modern technologies",
                "Career-focused skills",
              ].map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,

                    animation:
                      `highlightReveal 0.6s ease ${0.15 * index}s both`,

                    "@keyframes highlightReveal": {
                      from: {
                        opacity: 0,
                        transform: "translateX(-12px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      fontSize: 19,
                      color: "#059669",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 650,
                      color: "#46635C",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Technologies */}

            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1.7,
                  color: "#78928B",
                  mb: 1.5,
                }}
              >
                TECHNOLOGIES YOU CAN EXPLORE
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {technologies.map((tech, index) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      height: 31,
                      borderRadius: "9px",
                      px: 0.4,
                      fontSize: 10,
                      fontWeight: 700,
                      color:
                        index % 2 === 0
                          ? "#047857"
                          : "#1D4ED8",
                      background:
                        index % 2 === 0
                          ? "#DDF5EC"
                          : "#E6F0FF",
                      border:
                        "1px solid rgba(5,150,105,0.05)",
                      transition:
                        "all 0.3s ease",

                      "&:hover": {
                        transform:
                          "translateY(-4px) scale(1.03)",
                        boxShadow:
                          "0 8px 18px rgba(5,150,105,0.12)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ==================================================
            LEARNING JOURNEY
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: 9,
              md: 12,
            },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
            }}
          >
            <Typography
              sx={{
                color: "#059669",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              THE ELEVATE METHOD
            </Typography>

            <Typography
              component="h3"
              sx={{
                mt: 1,
                color: "#12302B",
                fontSize: {
                  xs: 27,
                  sm: 34,
                  md: 39,
                },
                fontWeight: 820,
                letterSpacing: "-1px",
              }}
            >
              From Learning to Launching
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {journey.map((item, index) => (
              <Box
                key={item.number}
                sx={{
                  position: "relative",
                  minHeight: 335,
                  borderRadius: "22px",
                  background: "rgba(255,255,255,0.58)",
                  border:
                    "1px solid rgba(5,150,105,0.09)",
                  backdropFilter: "blur(12px)",
                  overflow: "hidden",

                  opacity: 0,

                  animation: `
                    journeyReveal 0.7s ease ${0.15 * index}s forwards,
                    journeyFloat ${4 + index * 0.5}s ease-in-out ${
                    0.8 + index * 0.15
                  }s infinite
                  `,

                  transition:
                    "transform 0.4s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease, border-color 0.4s ease",

                  "@keyframes journeyReveal": {
                    from: {
                      opacity: 0,
                      transform:
                        "translateY(35px) scale(0.96)",
                    },
                    to: {
                      opacity: 1,
                      transform:
                        "translateY(0) scale(1)",
                    },
                  },

                  "@keyframes journeyFloat": {
                    "0%, 100%": {
                      marginTop: "0px",
                    },
                    "50%": {
                      marginTop: "-4px",
                    },
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, #059669, #2563EB, transparent)",
                    transition:
                      "left 0.6s ease",
                    zIndex: 5,
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background:
                      index === 3
                        ? "rgba(37,99,235,0.07)"
                        : "rgba(5,150,105,0.07)",
                    top: -65,
                    right: -65,
                    filter: "blur(5px)",
                    transition:
                      "transform 0.5s ease",
                    pointerEvents: "none",
                    zIndex: 1,
                  },

                  "&:hover": {
                    transform:
                      "translateY(-12px) scale(1.025)",

                    boxShadow:
                      "0 24px 55px rgba(15,118,110,0.16)",

                    borderColor:
                      "rgba(5,150,105,0.22)",

                    "&::before": {
                      left: "100%",
                    },

                    "&::after": {
                      transform: "scale(1.7)",
                    },

                    "& .journey-icon": {
                      transform:
                        "rotate(-8deg) scale(1.12)",
                      boxShadow:
                        "0 8px 22px rgba(5,150,105,0.18)",
                    },

                    "& .journey-number": {
                      transform:
                        "translateY(-5px) scale(1.08)",
                      color:
                        "rgba(5,150,105,0.16)",
                    },

                    "& .journey-title": {
                      color: "#059669",
                    },

                    "& .journey-image": {
                      transform: "scale(1.08)",
                    },

                    "& .journey-image-overlay": {
                      opacity: 0.15,
                    },
                  },
                }}
              >
                {/* ==================================================
                    JOURNEY IMAGE
                ================================================== */}

                <Box
                  sx={{
                    position: "relative",
                    height: {
                      xs: 115,
                      sm: 105,
                      lg: 110,
                    },
                    overflow: "hidden",
                    zIndex: 2,
                  }}
                >
                  <Box
                    className="journey-image"
                    sx={{
                      position: "absolute",
                      inset: 0,

                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",

                      transform: "scale(1)",
                      transition:
                        "transform 0.7s cubic-bezier(.2,.8,.2,1)",
                    }}
                  />

                  {/* Image Overlay */}

                  <Box
                    className="journey-image-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(4,78,66,0.42), rgba(37,99,235,0.35))",
                      opacity: 0,
                      transition:
                        "opacity 0.4s ease",
                    }}
                  />

                  {/* Image Label */}

                  <Box
                    sx={{
                      position: "absolute",
                      left: 15,
                      bottom: 12,
                      px: 1.2,
                      py: 0.5,
                      borderRadius: "50px",
                      background:
                        "rgba(255,255,255,0.88)",
                      backdropFilter: "blur(8px)",
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 9,
                        fontWeight: 800,
                        color:
                          index === 3
                            ? "#1D4ED8"
                            : "#047857",
                        letterSpacing: 0.8,
                      }}
                    >
                      {item.title.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <Box
                  sx={{
                    p: {
                      xs: 2.5,
                      md: 3,
                    },
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Card Header */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Icon */}

                    <Box
                      className="journey-icon"
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: "13px",
                        display: "grid",
                        placeItems: "center",

                        background:
                          index === 3
                            ? "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.05))"
                            : "linear-gradient(135deg, rgba(5,150,105,0.12), rgba(5,150,105,0.05))",

                        color:
                          index === 3
                            ? "#2563EB"
                            : "#059669",

                        transition:
                          "all 0.4s cubic-bezier(.2,.8,.2,1)",

                        animation:
                          `iconBreath 3s ease-in-out ${
                            index * 0.3
                          }s infinite`,

                        "@keyframes iconBreath": {
                          "0%, 100%": {
                            boxShadow:
                              "0 0 0 rgba(5,150,105,0)",
                          },
                          "50%": {
                            boxShadow:
                              "0 0 18px rgba(5,150,105,0.10)",
                          },
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Number */}

                    <Typography
                      className="journey-number"
                      sx={{
                        fontSize: 30,
                        fontWeight: 850,
                        color:
                          "rgba(15,118,110,0.09)",
                        transition:
                          "all 0.4s ease",
                      }}
                    >
                      {item.number}
                    </Typography>
                  </Box>

                  {/* Title */}

                  <Typography
                    className="journey-title"
                    sx={{
                      mt: 2.2,
                      fontSize: 19,
                      fontWeight: 800,
                      color: "#12302B",
                      transition:
                        "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: 12,
                      lineHeight: 1.7,
                      color: "#708780",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>

                {/* Bottom Indicator */}

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 18,
                    left: 24,
                    width: 25,
                    height: 3,
                    borderRadius: 10,
                    background:
                      index === 3
                        ? "#2563EB"
                        : "#059669",
                    opacity: 0.18,
                    transition:
                      "all 0.4s ease",
                  }}
                />

                {/* Arrow */}

                {index !== journey.length - 1 && (
                  <ArrowForwardRoundedIcon
                    sx={{
                      display: {
                        xs: "none",
                        lg: "block",
                      },
                      position: "absolute",
                      right: -19,
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      zIndex: 5,
                      fontSize: 25,
                      color: "#8CBDB0",

                      animation:
                        "arrowPulse 2s ease-in-out infinite",

                      "@keyframes arrowPulse": {
                        "0%, 100%": {
                          opacity: 0.35,
                          transform:
                            "translateY(-50%) translateX(0)",
                        },
                        "50%": {
                          opacity: 1,
                          transform:
                            "translateY(-50%) translateX(5px)",
                        },
                      },
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
