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

import whyLearning from "../assets/why-learning.jpg";
import whyCareer from "../assets/why-career.jpg";

const reasons = [
  {
    number: "01",
    title: "Learn by Building",
    text: "Move beyond theory with practical exercises, real projects and hands-on learning experiences.",
    icon: <CodeRoundedIcon />,
    accent: "#059669",
  },
  {
    number: "02",
    title: "Practical Guidance",
    text: "Learn with structured guidance, mentor support and a learning approach designed for real-world challenges.",
    icon: <GroupsRoundedIcon />,
    accent: "#0F766E",
  },
  {
    number: "03",
    title: "Real-World Skills",
    text: "Build relevant technical and professional skills that help you become confident in today's digital world.",
    icon: <RocketLaunchRoundedIcon />,
    accent: "#2563EB",
  },
  {
    number: "04",
    title: "Career Growth",
    text: "Turn your learning journey into meaningful progress with project experience and future-ready skills.",
    icon: <TrendingUpRoundedIcon />,
    accent: "#7C3AED",
  },
];

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "UI / UX",
];

const WhyUs = () => {
  return (
    <Box
      id="why-us"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, sm: 10, md: 13 },
        background:
          "linear-gradient(145deg, #F0FDF9 0%, #ECFDF5 35%, #EFF6FF 72%, #F8FAFC 100%)",
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
          background: "rgba(16,185,129,0.12)",
          filter: "blur(70px)",
          top: "-120px",
          left: "-120px",
          animation: "whyGlowOne 8s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 240, md: 460 },
          height: { xs: 240, md: 460 },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.10)",
          filter: "blur(80px)",
          bottom: "-180px",
          right: "-150px",
          animation: "whyGlowTwo 10s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px solid rgba(5,150,105,0.10)",
          top: "28%",
          right: "4%",
          animation: "whyRotate 18s linear infinite",
        }}
      />

      {/* =========================
          FLOATING DOTS
      ========================== */}

      {[1, 2, 3, 4, 5, 6].map((dot) => (
        <Box
          key={dot}
          sx={{
            position: "absolute",
            width: dot % 2 === 0 ? 5 : 4,
            height: dot % 2 === 0 ? 5 : 4,
            borderRadius: "50%",
            background:
              dot % 2 === 0
                ? "rgba(5,150,105,0.28)"
                : "rgba(37,99,235,0.24)",
            top: `${12 + dot * 11}%`,
            left: `${5 + dot * 14}%`,
            animation: `whyFloat ${4 + dot}s ease-in-out infinite`,
            animationDelay: `${dot * 0.3}s`,
          }}
        />
      ))}

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 5, lg: 7 },
        }}
      >
        {/* =========================
            SECTION HEADER
        ========================== */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 850,
            mx: "auto",
            mb: { xs: 5, md: 8 },
            animation: "whyFadeUp 0.8s ease both",
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
            label="WHY ELEVATE"
            sx={{
              mb: 2,
              height: 34,
              px: 1,
              borderRadius: "50px",
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(5,150,105,0.14)",
              color: "#047857",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.4,
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 25px rgba(5,150,105,0.06)",
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: 32,
                sm: 42,
                md: 52,
                lg: 62,
              },
              lineHeight: 1.04,
              fontWeight: 900,
              letterSpacing: "-1.8px",
              color: "#12302B",
              mb: 2,
            }}
          >
            More Than Learning.
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
              It's Your Next Step.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              mx: "auto",
              fontSize: { xs: 13, sm: 14, md: 16 },
              lineHeight: 1.85,
              color: "#5B716B",
            }}
          >
            At Elevate App Academy, learning is designed around action.
            Discover concepts, practice them, build real things and
            develop the confidence to take your next step.
          </Typography>
        </Box>

        {/* =========================
            MAIN SHOWCASE
        ========================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "0.95fr 1.05fr",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* =========================
              LEFT FEATURE CARD
          ========================== */}

          <Box
            sx={{
              position: "relative",
              borderRadius: { xs: 4, md: 5 },
              overflow: "hidden",
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 25px 70px rgba(15,118,110,0.10)",
              backdropFilter: "blur(18px)",
              animation: "whyFadeUp 0.9s ease both",
              transition:
                "transform 0.45s ease, box-shadow 0.45s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 35px 90px rgba(15,118,110,0.16)",
              },
              "&:hover .why-learning-image": {
                transform: "scale(1.06)",
              },
            }}
          >
            {/* IMAGE */}

            <Box
              sx={{
                position: "relative",
                height: { xs: 190, sm: 220, md: 250 },
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                className="why-learning-image"
                src={whyLearning}
                alt="Students learning through practical training"
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
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(4,78,66,0.04) 15%, rgba(4,78,66,0.82) 100%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 18,
                  left: 18,
                  width: 46,
                  height: 46,
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(10px)",
                  color: "#059669",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.10)",
                }}
              >
                <WorkspacePremiumRoundedIcon />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 18, md: 25 },
                  bottom: { xs: 18, md: 22 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: 1.7,
                    color: "#A7F3D0",
                    mb: 0.5,
                  }}
                >
                  LEARN DIFFERENTLY
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: 23, sm: 27, md: 31 },
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}
                >
                  Turn Every Lesson
                  <br />
                  Into Experience.
                </Typography>
              </Box>
            </Box>

            {/* FEATURE CONTENT */}

            <Box
              sx={{
                p: { xs: 2.5, sm: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  color: "#5B716B",
                  fontSize: { xs: 12.5, sm: 13.5 },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Every learning experience is structured to help
                you understand concepts, apply them and gradually
                become confident enough to build on your own.
              </Typography>

              {/* PROGRESS */}

              <Box sx={{ mb: 3.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#12302B",
                      letterSpacing: 0.5,
                    }}
                  >
                    LEARNING PROGRESS
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 900,
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
                    height: 8,
                    borderRadius: "50px",
                    background: "rgba(5,150,105,0.10)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: "50px",
                      background:
                        "linear-gradient(90deg, #059669, #2563EB)",
                    },
                  }}
                />
              </Box>

              {/* LEARNING STEPS */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 1,
                  mb: 3.5,
                }}
              >
                {["Learn", "Practice", "Build", "Elevate"].map(
                  (step, index) => (
                    <Box
                      key={step}
                      sx={{
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          mx: "auto",
                          mb: 0.8,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            index < 3
                              ? "rgba(5,150,105,0.10)"
                              : "rgba(37,99,235,0.10)",
                          color:
                            index < 3 ? "#059669" : "#2563EB",
                          fontSize: 11,
                          fontWeight: 900,
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: 9, sm: 10 },
                          fontWeight: 700,
                          color: "#5B716B",
                        }}
                      >
                        {step}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>

              {/* TECHNOLOGY PILLS */}

              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1.2,
                  color: "#7A8D88",
                  mb: 1.2,
                }}
              >
                SKILLS YOU CAN BUILD
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.8,
                }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      height: 29,
                      borderRadius: "50px",
                      background: "#F0FDF9",
                      border: "1px solid rgba(5,150,105,0.10)",
                      color: "#047857",
                      fontSize: 10,
                      fontWeight: 750,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* =========================
              RIGHT REASONS
          ========================== */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {reasons.map((reason, index) => (
              <Box
                key={reason.number}
                sx={{
                  position: "relative",
                  minHeight: { xs: 205, sm: 230 },
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: { xs: 3.5, md: 4 },
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  boxShadow: "0 18px 50px rgba(15,118,110,0.07)",
                  backdropFilter: "blur(16px)",
                  animation: `whyFadeUp 0.7s ease ${
                    0.15 + index * 0.1
                  }s both`,
                  transition:
                    "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow:
                      "0 28px 60px rgba(15,118,110,0.13)",
                  },
                  "&:hover .reason-icon": {
                    transform: "rotate(-6deg) scale(1.08)",
                  },
                  "&:hover .reason-arrow": {
                    transform: "translateX(4px)",
                  },
                  "&:hover .reason-shine": {
                    left: "120%",
                  },
                }}
              >
                {/* SHINE */}

                <Box
                  className="reason-shine"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "55%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                    transform: "skewX(-18deg)",
                    transition: "left 0.7s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* NUMBER */}

                <Typography
                  sx={{
                    position: "absolute",
                    top: 14,
                    right: 18,
                    fontSize: 40,
                    lineHeight: 1,
                    fontWeight: 900,
                    color: `${reason.accent}10`,
                    letterSpacing: -2,
                  }}
                >
                  {reason.number}
                </Typography>

                {/* ICON */}

                <Box
                  className="reason-icon"
                  sx={{
                    position: "relative",
                    width: 50,
                    height: 50,
                    borderRadius: "17px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${reason.accent}12`,
                    color: reason.accent,
                    mb: 2.2,
                    transition:
                      "transform 0.4s cubic-bezier(.2,.8,.2,1)",
                  }}
                >
                  {reason.icon}
                </Box>

                <Typography
                  sx={{
                    position: "relative",
                    fontSize: { xs: 17, sm: 18 },
                    fontWeight: 850,
                    color: "#12302B",
                    mb: 1,
                  }}
                >
                  {reason.title}
                </Typography>

                <Typography
                  sx={{
                    position: "relative",
                    fontSize: { xs: 11.5, sm: 12 },
                    lineHeight: 1.75,
                    color: "#657A75",
                  }}
                >
                  {reason.text}
                </Typography>

                {/* ARROW */}

                <Box
                  className="reason-arrow"
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${reason.accent}0D`,
                    color: reason.accent,
                    transition: "transform 0.3s ease",
                  }}
                >
                  <ArrowForwardRoundedIcon
                    sx={{ fontSize: 16 }}
                  />
                </Box>

                {/* ACCENT LINE */}

                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "38%",
                    height: 3,
                    borderRadius: "0 20px 0 0",
                    background: reason.accent,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* =========================
            CAREER IMAGE SECTION
        ========================== */}

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            position: "relative",
            borderRadius: { xs: 4, md: 5 },
            overflow: "hidden",
            minHeight: { xs: 260, sm: 290, md: 330 },
            boxShadow: "0 25px 70px rgba(15,118,110,0.13)",
            animation: "whyFadeUp 0.9s ease 0.35s both",
            "&:hover .why-career-image": {
              transform: "scale(1.04)",
            },
          }}
        >
          <Box
            component="img"
            className="why-career-image"
            src={whyCareer}
            alt="Students building career-ready skills"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition:
                "transform 0.9s cubic-bezier(.2,.8,.2,1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(4,78,66,0.94) 0%, rgba(4,78,66,0.72) 40%, rgba(4,78,66,0.20) 100%)",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              minHeight: { xs: 260, sm: 290, md: 330 },
              display: "flex",
              alignItems: "center",
              px: { xs: 3, sm: 5, md: 7 },
              py: 4,
            }}
          >
            <Box sx={{ maxWidth: 620 }}>
              <Typography
                sx={{
                  fontSize: { xs: 10, md: 11 },
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  color: "#A7F3D0",
                  mb: 1.2,
                }}
              >
                BUILD YOUR FUTURE
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 26,
                    sm: 34,
                    md: 43,
                  },
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: "-1px",
                  color: "#fff",
                  mb: 1.5,
                }}
              >
                Skills That Move
                <br />
                Your Career Forward.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 13, md: 14 },
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.84)",
                  maxWidth: 550,
                }}
              >
                Learn with purpose, practice with confidence
                and build real-world skills that prepare you
                for the next opportunity.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mt: 2.5,
                }}
              >
                {[
                  "Practical Skills",
                  "Project Experience",
                  "Career Confidence",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                      px: 1.2,
                      py: 0.7,
                      borderRadius: "50px",
                      background: "rgba(255,255,255,0.11)",
                      border:
                        "1px solid rgba(255,255,255,0.16)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        fontSize: 15,
                        color: "#A7F3D0",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 9.5,
                        fontWeight: 750,
                        color: "#fff",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* =========================
            STATS SECTION
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
            {
              icon: <CodeRoundedIcon />,
              value: "100%",
              label: "Project Based Learning",
              accent: "#059669",
            },
            {
              icon: <WorkspacePremiumRoundedIcon />,
              value: "Industry",
              label: "Focused Skills",
              accent: "#0F766E",
            },
            {
              icon: <GroupsRoundedIcon />,
              value: "Hands-On",
              label: "Practice",
              accent: "#2563EB",
            },
            {
              icon: <TrendingUpRoundedIcon />,
              value: "Future",
              label: "Career Confidence",
              accent: "#7C3AED",
            },
          ].map((stat, index) => (
            <Box
              key={stat.label}
              sx={{
                position: "relative",
                p: { xs: 2, sm: 2.5, md: 3 },
                minHeight: { xs: 125, md: 145 },
                borderRadius: { xs: 3, md: 3.5 },
                background: "rgba(255,255,255,0.68)",
                border: "1px solid rgba(255,255,255,0.92)",
                boxShadow:
                  "0 15px 40px rgba(15,118,110,0.055)",
                backdropFilter: "blur(14px)",
                animation: `whyFadeUp 0.7s ease ${
                  0.45 + index * 0.1
                }s both`,
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 22px 50px rgba(15,118,110,0.10)",
                },
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${stat.accent}10`,
                  color: stat.accent,
                  mb: 1.5,
                }}
              >
                {stat.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: 14,
                    sm: 16,
                    md: 18,
                  },
                  fontWeight: 900,
                  color: "#12302B",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: { xs: 9.5, sm: 10.5 },
                  fontWeight: 650,
                  color: "#70827E",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            textAlign: "center",
            animation: "whyFadeUp 0.8s ease 0.8s both",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 0.8,
              borderRadius: "50px",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(5,150,105,0.10)",
              boxShadow: "0 8px 25px rgba(5,150,105,0.05)",
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 15,
                color: "#059669",
              }}
            />

            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 750,
                color: "#526C65",
              }}
            >
              Learn. Practice. Build. Elevate.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================
          ANIMATIONS
      ========================== */}

      <style>
        {`
          @keyframes whyFadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes whyFloat {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.55;
            }

            50% {
              transform: translateY(-18px);
              opacity: 1;
            }
          }

          @keyframes whyGlowOne {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(40px, 30px);
            }
          }

          @keyframes whyGlowTwo {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(-35px, -25px);
            }
          }

          @keyframes whyRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default WhyUs;