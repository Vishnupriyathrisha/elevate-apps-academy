import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
} from "@mui/material";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

// Course images
import courseFullstack from "../assets/course-fullstack.jpg";
import courseFrontend from "../assets/course-frontend.jpg";
import courseBackend from "../assets/course-backend.png";
import courseUiux from "../assets/course-uiux.webp";

const Courses = () => {
  const courses = [
    {
      number: "01",
      title: "Full Stack Development",
      description:
        "Build complete modern web applications from frontend interfaces to powerful backend systems.",
      level: "Advanced",
      duration: "6 Months",
      color: "#059669",
      icon: <CodeRoundedIcon />,
      image: courseFullstack,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Create responsive, interactive and user-friendly web experiences using modern frontend technologies.",
      level: "Intermediate",
      duration: "4 Months",
      color: "#2563EB",
      icon: <WebRoundedIcon />,
      image: courseFrontend,
      technologies: ["HTML", "CSS", "React"],
    },
    {
      number: "03",
      title: "Backend Development",
      description:
        "Learn to design APIs, manage databases and build secure scalable server-side applications.",
      level: "Intermediate",
      duration: "4 Months",
      color: "#0F766E",
      icon: <StorageRoundedIcon />,
      image: courseBackend,
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      number: "04",
      title: "UI / UX Design",
      description:
        "Transform ideas into intuitive digital experiences through research, design systems and prototyping.",
      level: "Beginner",
      duration: "3 Months",
      color: "#7C3AED",
      icon: <DesignServicesRoundedIcon />,
      image: courseUiux,
      technologies: ["Figma", "UX", "Prototyping"],
    },
  ];

  return (
    <Box
      id="programs"
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
            rgba(16,185,129,0.14),
            transparent 28%
          ),
          radial-gradient(
            circle at 92% 20%,
            rgba(37,99,235,0.12),
            transparent 28%
          ),
          radial-gradient(
            circle at 70% 90%,
            rgba(20,184,166,0.10),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #effbf7 0%,
            #f5fffc 48%,
            #eef8ff 100%
          )
        `,
      }}
    >
      {/* Background Glow One */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 320 },
          height: { xs: 180, md: 320 },
          borderRadius: "50%",
          top: { xs: 100, md: 70 },
          left: { xs: -90, md: -130 },
          background:
            "radial-gradient(circle, rgba(5,150,105,0.16), transparent 70%)",
          filter: "blur(8px)",
          animation: "courseGlowOne 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Background Glow Two */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 200, md: 360 },
          height: { xs: 200, md: 360 },
          borderRadius: "50%",
          bottom: { xs: 80, md: 30 },
          right: { xs: -100, md: -140 },
          background:
            "radial-gradient(circle, rgba(37,99,235,0.14), transparent 70%)",
          filter: "blur(10px)",
          animation: "courseGlowTwo 9s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Decorative Dots */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "7%",
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#059669",
          opacity: 0.35,
          animation: "courseDotFloat 4s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "34%",
          left: "5%",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#2563EB",
          opacity: 0.3,
          animation: "courseDotFloat 5s ease-in-out infinite 1s",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "18%",
          right: "10%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#0F766E",
          opacity: 0.28,
          animation: "courseDotFloat 6s ease-in-out infinite 0.5s",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 7,
          },
        }}
      >
        {/* =========================
            SECTION HEADER
        ========================== */}
        <Box
          sx={{
            maxWidth: 850,
            mx: "auto",
            textAlign: "center",
            mb: {
              xs: 5,
              sm: 6,
              md: 7,
            },
          }}
        >
          <Chip
            icon={
              <TrendingUpRoundedIcon
                sx={{
                  fontSize: {
                    xs: 15,
                    sm: 17,
                  },
                }}
              />
            }
            label="EXPLORE YOUR PATH"
            sx={{
              height: {
                xs: 30,
                sm: 34,
              },
              px: 1,
              mb: 2,
              borderRadius: "50px",
              background:
                "rgba(5,150,105,0.08)",
              border:
                "1px solid rgba(5,150,105,0.15)",
              color: "#047857",
              fontSize: {
                xs: 9,
                sm: 10,
                md: 11,
              },
              fontWeight: 800,
              letterSpacing: 1.2,
              "& .MuiChip-icon": {
                color: "#059669",
              },
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: 30,
                sm: 38,
                md: 48,
                lg: 56,
              },
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-1.8px",
              color: "#12302B",
              mb: 2,
            }}
          >
            Learn Today.
            <Box
              component="span"
              sx={{
                display: "block",
                background:
                  "linear-gradient(90deg, #059669, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build Tomorrow.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 690,
              mx: "auto",
              fontSize: {
                xs: 13,
                sm: 14,
                md: 16,
              },
              lineHeight: 1.8,
              color: "#60756F",
            }}
          >
            Choose a learning path designed to help you understand
            technology, practice with confidence and build skills that
            move your career forward.
          </Typography>
        </Box>

        {/* =========================
            COURSE GRID
        ========================== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: {
              xs: 2.5,
              sm: 3,
              lg: 2.5,
            },
            alignItems: "stretch",
          }}
        >
          {courses.map((course, index) => (
            <Box
              key={course.title}
              sx={{
                position: "relative",
                minHeight: {
                  xs: 540,
                  sm: 545,
                  lg: 560,
                },
                borderRadius: {
                  xs: "24px",
                  md: "28px",
                },
                overflow: "hidden",
                background:
                  "rgba(255,255,255,0.78)",
                border:
                  "1px solid rgba(15,118,110,0.10)",
                boxShadow:
                  "0 18px 50px rgba(20,75,65,0.08)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.45s cubic-bezier(.2,.8,.2,1), box-shadow 0.45s ease, border-color 0.45s ease",
                animation: `courseCardReveal 0.7s ease both`,
                animationDelay: `${index * 0.1}s`,
                "&:hover": {
                  transform:
                    "translateY(-10px)",
                  boxShadow:
                    "0 28px 65px rgba(20,75,65,0.14)",
                  borderColor:
                    `${course.color}35`,
                },
                "&:hover .course-image": {
                  transform: "scale(1.08)",
                },
                "&:hover .course-image-overlay": {
                  opacity: 0.12,
                },
                "&:hover .course-number": {
                  transform:
                    "translateY(-3px)",
                  color: course.color,
                },
                "&:hover .course-icon": {
                  transform:
                    "translateY(-4px) rotate(-4deg)",
                  boxShadow:
                    `0 14px 28px ${course.color}25`,
                },
                "&:hover .course-arrow": {
                  transform:
                    "translateX(5px)",
                },
              }}
            >
              {/* =========================
                  COURSE IMAGE
              ========================== */}
              <Box
                sx={{
                  position: "relative",
                  height: {
                    xs: 145,
                    sm: 150,
                    lg: 145,
                  },
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <Box
                  className="course-image"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1)",
                    transition:
                      "transform 0.75s cubic-bezier(.2,.8,.2,1)",
                  }}
                />

                {/* Image Overlay */}
                <Box
                  className="course-image-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(4,78,66,0.50), rgba(37,99,235,0.42))",
                    opacity: 0,
                    transition:
                      "opacity 0.4s ease",
                  }}
                />

                {/* Number */}
                <Box
                  className="course-number"
                  sx={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    width: 40,
                    height: 40,
                    borderRadius: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "rgba(255,255,255,0.90)",
                    backdropFilter:
                      "blur(10px)",
                    color: course.color,
                    fontSize: 12,
                    fontWeight: 900,
                    transition:
                      "transform 0.3s ease, color 0.3s ease",
                    zIndex: 3,
                  }}
                >
                  {course.number}
                </Box>

                {/* Course Label */}
                <Box
                  sx={{
                    position: "absolute",
                    right: 14,
                    bottom: 14,
                    px: 1.3,
                    py: 0.65,
                    borderRadius: "50px",
                    background:
                      "rgba(255,255,255,0.92)",
                    backdropFilter:
                      "blur(10px)",
                    zIndex: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 9,
                      fontWeight: 850,
                      color: course.color,
                      letterSpacing: 0.7,
                    }}
                  >
                    {course.level.toUpperCase()}
                  </Typography>
                </Box>
              </Box>

              {/* =========================
                  COURSE CONTENT
              ========================== */}
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  p: {
                    xs: 2.4,
                    sm: 2.5,
                    md: 2.7,
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon */}
                <Box
                  className="course-icon"
                  sx={{
                    width: 52,
                    height: 52,
                    mt: -5.8,
                    mb: 2,
                    borderRadius: "17px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    background:
                      `linear-gradient(135deg, ${course.color}, ${course.color}CC)`,
                    boxShadow:
                      `0 10px 24px ${course.color}20`,
                    border:
                      "4px solid rgba(255,255,255,0.95)",
                    transition:
                      "transform 0.35s ease, box-shadow 0.35s ease",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  {course.icon}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: 19,
                      sm: 20,
                      lg: 19,
                    },
                    lineHeight: 1.25,
                    fontWeight: 850,
                    color: "#12302B",
                    mb: 1.3,
                    minHeight: {
                      xs: "auto",
                      lg: 48,
                    },
                  }}
                >
                  {course.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: 12.5,
                      sm: 13,
                    },
                    lineHeight: 1.75,
                    color: "#6B7E79",
                    mb: 2.2,
                  }}
                >
                  {course.description}
                </Typography>

                {/* Level + Duration */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.8,
                    mb: 2.2,
                  }}
                >
                  <Chip
                    label={course.level}
                    size="small"
                    sx={{
                      height: 27,
                      borderRadius: "50px",
                      background:
                        `${course.color}10`,
                      color: course.color,
                      border:
                        `1px solid ${course.color}20`,
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  />

                  <Chip
                    icon={
                      <AccessTimeRoundedIcon
                        sx={{
                          fontSize: 14,
                        }}
                      />
                    }
                    label={course.duration}
                    size="small"
                    sx={{
                      height: 27,
                      borderRadius: "50px",
                      background:
                        "rgba(18,48,43,0.045)",
                      color: "#526C65",
                      fontSize: 10,
                      fontWeight: 750,
                      "& .MuiChip-icon": {
                        color: "#6B7E79",
                      },
                    }}
                  />
                </Box>

                {/* Technologies Label */}
                <Typography
                  sx={{
                    fontSize: 9,
                    fontWeight: 850,
                    letterSpacing: 1,
                    color: "#8A9A96",
                    mb: 1,
                  }}
                >
                  TECHNOLOGIES
                </Typography>

                {/* Technologies */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.7,
                    mb: 3,
                  }}
                >
                  {course.technologies.map(
                    (technology) => (
                      <Box
                        key={technology}
                        sx={{
                          px: 1,
                          py: 0.55,
                          borderRadius: "8px",
                          background:
                            "rgba(18,48,43,0.045)",
                          color: "#506761",
                          fontSize: 10,
                          fontWeight: 700,
                        }}
                      >
                        {technology}
                      </Box>
                    )
                  )}
                </Box>

                {/* Spacer */}
                <Box sx={{ flex: 1 }} />

                {/* View Course */}
                <Button
                  href="#contact"
                  fullWidth
                  variant="outlined"
                  endIcon={
                    <ArrowForwardRoundedIcon className="course-arrow" />
                  }
                  sx={{
                    py: 1.15,
                    borderRadius: "13px",
                    textTransform: "none",
                    fontSize: 12,
                    fontWeight: 800,
                    color: course.color,
                    borderColor:
                      `${course.color}28`,
                    background:
                      `${course.color}05`,
                    transition:
                      "all 0.3s ease",
                    "& .course-arrow": {
                      fontSize: 17,
                      transition:
                        "transform 0.3s ease",
                    },
                    "&:hover": {
                      color: "#ffffff",
                      borderColor:
                        course.color,
                      background:
                        course.color,
                      boxShadow:
                        `0 10px 22px ${course.color}22`,
                    },
                  }}
                >
                  View Course
                </Button>
              </Box>

              {/* Decorative Dot */}
              <Box
                sx={{
                  position: "absolute",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  right: 18,
                  top: 185,
                  background: course.color,
                  opacity: 0.35,
                  animation:
                    "courseTinyFloat 3.5s ease-in-out infinite",
                  animationDelay:
                    `${index * 0.4}s`,
                }}
              />
            </Box>
          ))}
        </Box>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <Box
          sx={{
            mt: {
              xs: 5,
              md: 7,
            },
            p: {
              xs: 2.5,
              sm: 3,
              md: 3.5,
            },
            borderRadius: {
              xs: "22px",
              md: "28px",
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2.5,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.86), rgba(236,251,246,0.78))",
            border:
              "1px solid rgba(5,150,105,0.10)",
            boxShadow:
              "0 18px 45px rgba(20,75,65,0.06)",
            backdropFilter: "blur(16px)",
          }}
        >
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 16,
                  sm: 18,
                  md: 20,
                },
                fontWeight: 850,
                color: "#12302B",
                mb: 0.5,
              }}
            >
              Not sure where to start?
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 12,
                  sm: 13,
                },
                color: "#6B7E79",
              }}
            >
              Talk to our learning team and find the right path for you.
            </Typography>
          </Box>

          <Button
            href="#contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              flexShrink: 0,
              px: {
                xs: 2.2,
                sm: 2.8,
              },
              py: 1.2,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: 12,
              fontWeight: 850,
              background:
                "linear-gradient(135deg, #059669, #0F766E)",
              boxShadow:
                "0 12px 25px rgba(5,150,105,0.16)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #047857, #2563EB)",
                transform:
                  "translateY(-2px)",
                boxShadow:
                  "0 15px 30px rgba(5,150,105,0.22)",
              },
            }}
          >
            Talk to Us
          </Button>
        </Box>
      </Container>

      {/* =========================
          ANIMATIONS
      ========================== */}
      <style>
        {`
          @keyframes courseGlowOne {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translate(30px, 20px) scale(1.08);
              opacity: 1;
            }
          }

          @keyframes courseGlowTwo {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.65;
            }
            50% {
              transform: translate(-25px, -25px) scale(1.1);
              opacity: 1;
            }
          }

          @keyframes courseDotFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          @keyframes courseTinyFloat {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.25;
            }
            50% {
              transform: translateY(-8px);
              opacity: 0.55;
            }
          }

          @keyframes courseCardReveal {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Courses;