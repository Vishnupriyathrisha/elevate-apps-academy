import {
  Box,
  Container,
  Typography,
  Chip,
} from "@mui/material";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import learningCoding from "../assets/learning-coding.jpg";
import learningClassroom from "../assets/learning-classroom.jpg";
import learningProject from "../assets/learning-project.jpg";
import learningTeam from "../assets/learning-team.jpg";
import learningMentor from "../assets/learning-mentor.jpg";

const learningCards = [
  {
    image: learningCoding,
    label: "CODING LAB",
    title: "Practice With Purpose",
    description:
      "Turn concepts into working code through practical coding sessions.",
    icon: <CodeRoundedIcon />,
  },
  {
    image: learningClassroom,
    label: "CLASSROOM",
    title: "Learn Together",
    description:
      "Build strong fundamentals through structured and engaging learning.",
    icon: <SchoolRoundedIcon />,
  },
  {
    image: learningProject,
    label: "PROJECT LEARNING",
    title: "Build Real Projects",
    description:
      "Apply your knowledge by creating meaningful real-world projects.",
    icon: <RocketLaunchRoundedIcon />,
  },
  {
    image: learningTeam,
    label: "TEAM COLLABORATION",
    title: "Create Together",
    description:
      "Develop collaboration and communication skills while working with others.",
    icon: <GroupsRoundedIcon />,
  },
  {
    image: learningMentor,
    label: "MENTOR SESSION",
    title: "Learn From Guidance",
    description:
      "Get direction, feedback and support throughout your learning journey.",
    icon: <AutoAwesomeRoundedIcon />,
  },
];

const Learning = () => {
  const scrollingCards = [...learningCards, ...learningCards];

  return (
    <Box
      id="learning"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, sm: 10, md: 13 },
        background:
          "linear-gradient(145deg, #F8FFFC 0%, #ECFDF5 38%, #EFF6FF 100%)",
      }}
    >
      {/* =========================
          BACKGROUND GLOWS
      ========================== */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 420 },
          height: { xs: 220, md: 420 },
          borderRadius: "50%",
          background: "rgba(5,150,105,0.10)",
          filter: "blur(80px)",
          top: "-130px",
          right: "-120px",
          animation: "learningGlowOne 9s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 200, md: 380 },
          height: { xs: 200, md: 380 },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.08)",
          filter: "blur(75px)",
          bottom: "-120px",
          left: "-120px",
          animation: "learningGlowTwo 11s ease-in-out infinite",
        }}
      />

      {/* =========================
          DECORATIVE CIRCLES
      ========================== */}

      <Box
        sx={{
          position: "absolute",
          width: 150,
          height: 150,
          borderRadius: "50%",
          border: "1px solid rgba(5,150,105,0.10)",
          top: "20%",
          left: "-65px",
          animation: "learningRotate 20s linear infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "1px dashed rgba(37,99,235,0.13)",
          bottom: "18%",
          right: "-35px",
          animation: "learningRotateReverse 16s linear infinite",
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
            maxWidth: 850,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 5, md: 7 },
            animation: "learningFadeUp 0.8s ease both",
          }}
        >
          <Chip
            icon={
              <AutoAwesomeRoundedIcon
                sx={{
                  fontSize: "15px !important",
                  color: "#059669 !important",
                }}
              />
            }
            label="THE LEARNING EXPERIENCE"
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
              letterSpacing: 1.3,
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 8px 25px rgba(5,150,105,0.06)",
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
            Learning That Feels
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
              Real &amp; Rewarding.
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
            Experience a learning environment where students
            explore, practice, collaborate and build. Every step
            is designed to make technology learning more practical,
            engaging and meaningful.
          </Typography>
        </Box>

        {/* =========================
            FEATURE PILLS
        ========================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            mb: { xs: 4, md: 5 },
          }}
        >
          {[
            {
              icon: <CodeRoundedIcon />,
              label: "Hands-On Coding",
            },
            {
              icon: <GroupsRoundedIcon />,
              label: "Collaborative Learning",
            },
            {
              icon: <RocketLaunchRoundedIcon />,
              label: "Project Based",
            },
            {
              icon: <SchoolRoundedIcon />,
              label: "Mentor Support",
            },
          ].map((item) => (
            <Box
              key={item.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.7,
                px: 1.4,
                py: 0.8,
                borderRadius: "50px",
                background: "rgba(255,255,255,0.72)",
                border:
                  "1px solid rgba(5,150,105,0.10)",
                boxShadow:
                  "0 8px 22px rgba(15,118,110,0.045)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#059669",
                  "& svg": {
                    fontSize: 16,
                  },
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 750,
                  color: "#526C65",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* =========================
            HORIZONTAL SCROLL GALLERY
        ========================== */}

        <Box
          sx={{
            position: "relative",
            width: "100vw",
            ml: "calc(50% - 50vw)",
            overflow: "hidden",
            py: { xs: 2, md: 3 },
            "&:hover .learning-track": {
              animationPlayState: "paused",
            },
          }}
        >
          {/* LEFT FADE */}

          <Box
            sx={{
              position: "absolute",
              zIndex: 5,
              left: 0,
              top: 0,
              bottom: 0,
              width: { xs: 35, sm: 70, md: 130 },
              background:
                "linear-gradient(90deg, #F8FFFC, transparent)",
              pointerEvents: "none",
            }}
          />

          {/* RIGHT FADE */}

          <Box
            sx={{
              position: "absolute",
              zIndex: 5,
              right: 0,
              top: 0,
              bottom: 0,
              width: { xs: 35, sm: 70, md: 130 },
              background:
                "linear-gradient(270deg, #EFF6FF, transparent)",
              pointerEvents: "none",
            }}
          />

          <Box
            className="learning-track"
            sx={{
              display: "flex",
              width: "max-content",
              gap: { xs: 1.5, sm: 2, md: 2.5 },
              animation:
                "learningMarquee 32s linear infinite",
              willChange: "transform",
              px: { xs: 2, md: 4 },
              touchAction: "pan-x",
            }}
          >
            {scrollingCards.map((card, index) => (
              <Box
                key={`${card.label}-${index}`}
                sx={{
                  position: "relative",
                  width: {
                    xs: 245,
                    sm: 300,
                    md: 350,
                    lg: 380,
                  },
                  height: {
                    xs: 300,
                    sm: 350,
                    md: 385,
                  },
                  flexShrink: 0,
                  borderRadius: {
                    xs: 3.5,
                    md: 4.5,
                  },
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow:
                    "0 20px 55px rgba(15,118,110,0.12)",
                  border:
                    "1px solid rgba(255,255,255,0.95)",
                  transition:
                    "transform 0.45s ease, box-shadow 0.45s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 30px 70px rgba(15,118,110,0.20)",
                  },
                  "&:hover .learning-card-image": {
                    transform: "scale(1.07)",
                  },
                  "&:hover .learning-card-overlay": {
                    opacity: 0.35,
                  },
                  "&:hover .learning-card-arrow": {
                    transform:
                      "translateX(4px) rotate(-3deg)",
                  },
                }}
              >
                {/* IMAGE */}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    className="learning-card-image"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition:
                        "transform 0.8s cubic-bezier(.2,.8,.2,1)",
                    }}
                  />

                  <Box
                    className="learning-card-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.2,
                      background:
                        "linear-gradient(180deg, rgba(4,78,66,0.05) 20%, rgba(4,78,66,0.94) 100%)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </Box>

                {/* TOP LABEL */}

                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: 15,
                    left: 15,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.6,
                    px: 1.2,
                    py: 0.65,
                    borderRadius: "50px",
                    background:
                      "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 8px 22px rgba(0,0,0,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#059669",
                      boxShadow:
                        "0 0 0 4px rgba(5,150,105,0.12)",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 8.5,
                      fontWeight: 850,
                      color: "#047857",
                      letterSpacing: 0.9,
                    }}
                  >
                    {card.label}
                  </Typography>
                </Box>

                {/* PLAY ICON */}

                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "rgba(255,255,255,0.88)",
                    color: "#059669",
                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.14)",
                    backdropFilter: "blur(12px)",
                    animation:
                      "learningPulse 2.5s ease-in-out infinite",
                  }}
                >
                  <PlayArrowRoundedIcon
                    sx={{
                      fontSize: 25,
                      ml: 0.4,
                    }}
                  />
                </Box>

                {/* CONTENT */}

                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 3,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: { xs: 2.2, sm: 2.6, md: 3 },
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(4,78,66,0.96) 38%, rgba(4,78,66,0.98) 100%)",
                    pt: 8,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "rgba(255,255,255,0.12)",
                      border:
                        "1px solid rgba(255,255,255,0.16)",
                      color: "#A7F3D0",
                      mb: 1.2,
                    }}
                  >
                    {card.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        xs: 18,
                        sm: 20,
                        md: 22,
                      },
                      fontWeight: 900,
                      lineHeight: 1.15,
                      mb: 0.8,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.74)",
                      fontSize: {
                        xs: 10.5,
                        sm: 11,
                        md: 11.5,
                      },
                      lineHeight: 1.65,
                      maxWidth: 300,
                    }}
                  >
                    {card.description}
                  </Typography>

                  <Box
                    className="learning-card-arrow"
                    sx={{
                      position: "absolute",
                      right: {
                        xs: 18,
                        md: 24,
                      },
                      bottom: {
                        xs: 20,
                        md: 25,
                      },
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "rgba(255,255,255,0.10)",
                      border:
                        "1px solid rgba(255,255,255,0.16)",
                      color: "#fff",
                      transition:
                        "transform 0.3s ease",
                    }}
                  >
                    <ArrowForwardRoundedIcon
                      sx={{ fontSize: 17 }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* =========================
            BOTTOM INFO
        ========================== */}

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            justifyContent: "space-between",
            gap: 3,
            p: { xs: 2.5, sm: 3, md: 4 },
            borderRadius: { xs: 3.5, md: 4 },
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.82), rgba(240,253,249,0.72))",
            border:
              "1px solid rgba(255,255,255,0.95)",
            boxShadow:
              "0 18px 50px rgba(15,118,110,0.07)",
            backdropFilter: "blur(15px)",
            animation:
              "learningFadeUp 0.8s ease 0.5s both",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 21, md: 24 },
                fontWeight: 900,
                color: "#12302B",
                mb: 0.6,
              }}
            >
              Your learning journey is bigger than a classroom.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 11.5, sm: 12.5 },
                color: "#657A75",
                lineHeight: 1.7,
                maxWidth: 650,
              }}
            >
              Explore. Experiment. Collaborate. Create.
              Keep moving forward with a learning experience
              built around your growth.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
              px: 2,
              py: 1.2,
              borderRadius: "50px",
              background:
                "linear-gradient(135deg, #059669, #0F766E)",
              color: "#fff",
              boxShadow:
                "0 10px 25px rgba(5,150,105,0.18)",
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{ fontSize: 17 }}
            />

            <Typography
              sx={{
                fontSize: 10.5,
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              KEEP LEARNING
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================
          ANIMATIONS
      ========================== */}

      <style>
        {`
          @keyframes learningFadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes learningMarquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes learningPulse {
            0%,
            100% {
              transform: scale(1);
              box-shadow:
                0 12px 35px rgba(0,0,0,0.14);
            }

            50% {
              transform: scale(1.06);
              box-shadow:
                0 15px 45px rgba(5,150,105,0.25);
            }
          }

          @keyframes learningGlowOne {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(-35px, 30px);
            }
          }

          @keyframes learningGlowTwo {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(35px, -25px);
            }
          }

          @keyframes learningRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes learningRotateReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .learning-track {
              animation: none !important;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Learning;