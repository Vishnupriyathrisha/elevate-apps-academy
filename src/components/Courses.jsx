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

const Courses = () => {
  const courses = [
    {
      number: "01",
      title: "Full Stack Development",
      description:
        "Build complete modern web applications from frontend to backend with real-world development practices.",
      icon: <CodeRoundedIcon />,
      level: "Advanced",
      duration: "6 Months",
      color: "#059669",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Learn to create responsive, interactive and modern user interfaces using industry-ready technologies.",
      icon: <WebRoundedIcon />,
      level: "Intermediate",
      duration: "4 Months",
      color: "#2563EB",
      technologies: ["HTML", "CSS", "React"],
    },
    {
      number: "03",
      title: "Backend Development",
      description:
        "Master APIs, databases, authentication and server-side development through practical projects.",
      icon: <StorageRoundedIcon />,
      level: "Intermediate",
      duration: "4 Months",
      color: "#0F766E",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      number: "04",
      title: "UI / UX Design",
      description:
        "Design meaningful digital experiences with user-focused thinking, wireframes and modern design systems.",
      icon: <DesignServicesRoundedIcon />,
      level: "Beginner",
      duration: "3 Months",
      color: "#7C3AED",
      technologies: ["Figma", "UX", "Prototyping"],
    },
  ];

  return (
    <Box
      id="courses"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 15 },
        background: `
          radial-gradient(
            circle at 8% 15%,
            rgba(16,185,129,0.13),
            transparent 26%
          ),
          radial-gradient(
            circle at 92% 25%,
            rgba(37,99,235,0.11),
            transparent 28%
          ),
          radial-gradient(
            circle at 75% 90%,
            rgba(20,184,166,0.10),
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
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(5,150,105,0.08)",
          filter: "blur(80px)",
          top: 80,
          left: -140,
          animation: "courseGlow 7s ease-in-out infinite",
          "@keyframes courseGlow": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(70px, 40px)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.07)",
          filter: "blur(75px)",
          right: -100,
          bottom: 60,
          animation: "courseGlow2 8s ease-in-out infinite",
          "@keyframes courseGlow2": {
            "0%, 100%": {
              transform: "translate(0, 0)",
            },
            "50%": {
              transform: "translate(-50px, -30px)",
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
        {/* Heading */}
        <Box
          sx={{
            maxWidth: 720,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 6, md: 9 },
          }}
        >
          <Chip
            label="EXPLORE YOUR PATH"
            sx={{
              mb: 2.5,
              px: 1,
              height: 30,
              borderRadius: "50px",
              background: "rgba(5,150,105,0.08)",
              color: "#059669",
              border: "1px solid rgba(5,150,105,0.12)",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: 34,
                sm: 42,
                md: 52,
              },
              lineHeight: 1.08,
              fontWeight: 850,
              letterSpacing: "-1.8px",
              color: "#12302B",
            }}
          >
            Learn Today.
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
              Build Tomorrow.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              maxWidth: 590,
              mx: "auto",
              color: "#708780",
              fontSize: { xs: 13, md: 15 },
              lineHeight: 1.8,
            }}
          >
            Choose a learning path designed to turn your curiosity into
            practical skills, real projects and career-ready confidence.
          </Typography>
        </Box>

        {/* Course Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {courses.map((course, index) => (
            <Box
              key={course.number}
              sx={{
                position: "relative",
                minHeight: { xs: 390, md: 420 },
                p: { xs: 2.8, md: 3.2 },
                borderRadius: "26px",
                overflow: "hidden",

                background: "rgba(255,255,255,0.48)",
                border: "1px solid rgba(5,150,105,0.10)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",

                opacity: 0,

                animation: `courseReveal 0.7s ease ${
                  index * 0.12
                }s forwards`,

                transition:
                  "transform 0.45s cubic-bezier(.2,.8,.2,1), box-shadow 0.45s ease, border-color 0.45s ease",

                "@keyframes courseReveal": {
                  from: {
                    opacity: 0,
                    transform: "translateY(35px) scale(0.96)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                  },
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: 2,
                  background: `linear-gradient(
                    90deg,
                    transparent,
                    ${course.color},
                    #2563EB,
                    transparent
                  )`,
                  transition: "left 0.7s ease",
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: `${course.color}10`,
                  top: -75,
                  right: -75,
                  filter: "blur(4px)",
                  transition: "transform 0.5s ease",
                  pointerEvents: "none",
                },

                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: `0 25px 55px ${course.color}20`,
                  borderColor: `${course.color}35`,

                  "&::before": {
                    left: "100%",
                  },

                  "&::after": {
                    transform: "scale(1.8)",
                  },

                  "& .course-icon": {
                    transform: "rotate(-7deg) scale(1.12)",
                    boxShadow: `0 10px 28px ${course.color}25`,
                  },

                  "& .course-arrow": {
                    transform: "translateX(5px)",
                    color: course.color,
                  },

                  "& .course-title": {
                    color: course.color,
                  },
                },
              }}
            >
              {/* Number */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 22,
                  fontSize: 34,
                  fontWeight: 850,
                  color: `${course.color}12`,
                  lineHeight: 1,
                }}
              >
                {course.number}
              </Typography>

              {/* Icon */}
              <Box
                className="course-icon"
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "17px",
                  display: "grid",
                  placeItems: "center",
                  color: course.color,
                  background: `linear-gradient(
                    135deg,
                    ${course.color}18,
                    ${course.color}06
                  )`,
                  border: `1px solid ${course.color}12`,
                  transition:
                    "all 0.45s cubic-bezier(.2,.8,.2,1)",
                }}
              >
                {course.icon}
              </Box>

              {/* Title */}
              <Typography
                className="course-title"
                sx={{
                  mt: 3.2,
                  fontSize: { xs: 19, md: 20 },
                  fontWeight: 800,
                  color: "#12302B",
                  transition: "color 0.3s ease",
                }}
              >
                {course.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  mt: 1.3,
                  color: "#708780",
                  fontSize: 12.5,
                  lineHeight: 1.75,
                }}
              >
                {course.description}
              </Typography>

              {/* Meta */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  mt: 2.4,
                  flexWrap: "wrap",
                }}
              >
                <Chip
                  icon={
                    <TrendingUpRoundedIcon
                      sx={{ fontSize: 15 }}
                    />
                  }
                  label={course.level}
                  size="small"
                  sx={{
                    height: 28,
                    borderRadius: "8px",
                    background: `${course.color}0D`,
                    color: course.color,
                    fontSize: 10,
                    fontWeight: 700,

                    "& .MuiChip-icon": {
                      color: course.color,
                    },
                  }}
                />

                <Chip
                  icon={
                    <AccessTimeRoundedIcon
                      sx={{ fontSize: 15 }}
                    />
                  }
                  label={course.duration}
                  size="small"
                  sx={{
                    height: 28,
                    borderRadius: "8px",
                    background: "rgba(18,48,43,0.045)",
                    color: "#617A73",
                    fontSize: 10,
                    fontWeight: 600,
                  }}
                />
              </Box>

              {/* Technologies */}
              <Box
                sx={{
                  display: "flex",
                  gap: 0.7,
                  flexWrap: "wrap",
                  mt: 2,
                }}
              >
                {course.technologies.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1,
                      py: 0.45,
                      borderRadius: "7px",
                      background: "rgba(18,48,43,0.035)",
                      color: "#617A73",
                      fontSize: 9.5,
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>

              {/* Bottom CTA */}
              <Box
                sx={{
                  position: "absolute",
                  left: 26,
                  right: 26,
                  bottom: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  className="course-view-btn"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    minHeight: 38,
                    px: 1.8,
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: 10.5,
                    fontWeight: 750,
                    letterSpacing: 0.3,

                    color: course.color,

                    background: `${course.color}0D`,
                    border: `1px solid ${course.color}18`,

                    transition:
                      "all 0.35s cubic-bezier(.2,.8,.2,1)",

                    "& .MuiButton-endIcon": {
                      marginLeft: 0.5,
                      transition: "transform 0.35s ease",
                    },

                    "&:hover": {
                      color: "#ffffff",
                      background: course.color,
                      borderColor: course.color,
                      boxShadow: `0 8px 20px ${course.color}25`,
                      transform: "translateY(-2px)",

                      "& .MuiButton-endIcon": {
                        transform: "translateX(4px)",
                      },
                    },
                  }}
                >
                  View Course
                </Button>

                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: course.color,
                    opacity: 0.35,
                    animation: "courseDot 2s ease-in-out infinite",

                    "@keyframes courseDot": {
                      "0%, 100%": {
                        transform: "scale(1)",
                        opacity: 0.3,
                      },
                      "50%": {
                        transform: "scale(1.5)",
                        opacity: 0.7,
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom Message */}
        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#78908A",
              fontSize: 12,
            }}
          >
            Not sure where to start?
          </Typography>

          <Button
            href="#contact"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: 1,
              textTransform: "none",
              color: "#059669",
              fontWeight: 750,
              fontSize: 13,

              "&:hover": {
                background: "rgba(5,150,105,0.05)",
              },
            }}
          >
            Talk to our learning team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Courses;