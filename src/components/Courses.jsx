import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// Course images
import courseFullstack from "../assets/course-fullstack.jpg";
import courseFrontend from "../assets/course-frontend.jpg";
import courseBackend from "../assets/course-backend.png";
import courseUiux from "../assets/course-uiux.webp";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [coursesError, setCoursesError] = useState("");

  // Keep the existing local images so the cards and details dialog display correctly.
  const courseImages = {
    "Full Stack Development": courseFullstack,
    "Frontend Development": courseFrontend,
    "Backend Development": courseBackend,
    "UI / UX Design": courseUiux,
  };

  const courseIcons = {
    "Full Stack Development": <CodeRoundedIcon />,
    "Frontend Development": <WebRoundedIcon />,
    "Backend Development": <StorageRoundedIcon />,
    "UI / UX Design": <DesignServicesRoundedIcon />,
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoadingCourses(true);
        setCoursesError("");

        const response = await fetch("http://localhost:5000/api/courses");
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to load courses.");
        }

        const formattedCourses = (Array.isArray(result.data) ? result.data : []).map(
          (course) => ({
            ...course,
            // Database image paths are not imported by Vite; use the existing assets.
            image: courseImages[course.title] || courseFullstack,
            icon: courseIcons[course.title] || <CodeRoundedIcon />,
            technologies: Array.isArray(course.technologies) ? course.technologies : [],
            syllabus: Array.isArray(course.syllabus) ? course.syllabus : [],
            outcomes: Array.isArray(course.outcomes) ? course.outcomes : [],
            project: course.project || "",
            prerequisites: course.prerequisites || "",
          })
        );

        setCourses(formattedCourses);
      } catch (error) {
        console.error("Courses fetch error:", error);
        setCoursesError(
          "Unable to load courses. Please check that the backend server is running and try again."
        );
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

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
          {loadingCourses ? (
            <Typography
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                py: 5,
                color: "#60756F",
                fontWeight: 600,
              }}
            >
              Loading courses...
            </Typography>
          ) : coursesError ? (
            <Typography
              role="alert"
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                py: 5,
                px: 2,
                color: "#B91C1C",
                fontWeight: 600,
              }}
            >
              {coursesError}
            </Typography>
          ) : courses.length === 0 ? (
            <Typography
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                py: 5,
                color: "#60756F",
                fontWeight: 600,
              }}
            >
              No courses are available right now.
            </Typography>
          ) : (
            courses.map((course, index) => (
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
                  onClick={() => setSelectedCourse(course)}
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
            ))
          )}
        </Box>

        {/* =========================
            COURSE DETAILS DIALOG
        ========================== */}
        <Dialog
          open={Boolean(selectedCourse)}
          onClose={() => setSelectedCourse(null)}
          fullWidth
          maxWidth="md"
          scroll="paper"
          PaperProps={{
            sx: {
              borderRadius: { xs: 3, sm: 4 },
              overflow: "hidden",
              background: "#FBFFFD",
            },
          }}
        >
          {selectedCourse && (
            <>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 165, sm: 220 },
                  display: "flex",
                  alignItems: "flex-end",
                  p: { xs: 2.5, sm: 4 },
                  color: "#fff",
                  backgroundImage: `linear-gradient(115deg, ${selectedCourse.color}E8, rgba(18,48,43,0.72)), url(${selectedCourse.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <IconButton
                  onClick={() => setSelectedCourse(null)}
                  aria-label="Close course details"
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: 12,
                    color: "#12302B",
                    background: "rgba(255,255,255,0.92)",
                    "&:hover": { background: "#fff" },
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>
                <Box sx={{ pr: 4 }}>
                  <Chip
                    label={selectedCourse.level}
                    size="small"
                    sx={{
                      mb: 1.2,
                      color: selectedCourse.color,
                      background: "#fff",
                      fontWeight: 800,
                    }}
                  />
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: 24, sm: 34 },
                      lineHeight: 1.15,
                      fontWeight: 900,
                    }}
                  >
                    {selectedCourse.title}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <AccessTimeRoundedIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                      {selectedCourse.duration}
                    </Typography>
                  </Stack>
                </Box>
              </Box>

              <DialogTitle sx={{ px: { xs: 2.5, sm: 4 }, pt: 3, pb: 1, fontWeight: 850, color: "#12302B" }}>
                About this course
              </DialogTitle>
              <DialogContent sx={{ px: { xs: 2.5, sm: 4 }, pb: 2 }}>
                <Typography sx={{ color: "#60756F", lineHeight: 1.8, mb: 3 }}>
                  {selectedCourse.description}
                </Typography>

                <Divider sx={{ mb: 2.5 }} />
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                  <MenuBookRoundedIcon sx={{ color: selectedCourse.color }} />
                  <Typography sx={{ fontSize: 18, fontWeight: 850, color: "#12302B" }}>
                    What you’ll learn
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                    gap: 1.3,
                    mb: 3,
                  }}
                >
                  {selectedCourse.outcomes.map((item) => (
                    <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                      <CheckCircleRoundedIcon sx={{ color: selectedCourse.color, fontSize: 19, mt: 0.2 }} />
                      <Typography sx={{ color: "#526C65", fontSize: 13, lineHeight: 1.65 }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Box>

                <Divider sx={{ mb: 2.5 }} />
                <Typography sx={{ fontSize: 18, fontWeight: 850, color: "#12302B", mb: 1.5 }}>
                  Course syllabus
                </Typography>
                <Stack spacing={1.2} sx={{ mb: 3 }}>
                  {selectedCourse.syllabus.map((item, index) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        p: 1.4,
                        borderRadius: 2,
                        background: `${selectedCourse.color}08`,
                        border: `1px solid ${selectedCourse.color}18`,
                      }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 27,
                          height: 27,
                          borderRadius: "9px",
                          display: "grid",
                          placeItems: "center",
                          background: `${selectedCourse.color}18`,
                          color: selectedCourse.color,
                          fontSize: 11,
                          fontWeight: 900,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Box>
                      <Typography sx={{ color: "#526C65", fontSize: 13, lineHeight: 1.7, pt: 0.3 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Typography sx={{ fontSize: 16, fontWeight: 850, color: "#12302B", mb: 1 }}>
                  Technologies covered
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                  {selectedCourse.technologies.map((technology) => (
                    <Chip
                      key={technology}
                      label={technology}
                      size="small"
                      sx={{ background: `${selectedCourse.color}12`, color: selectedCourse.color, fontWeight: 750 }}
                    />
                  ))}
                </Box>

                <Box sx={{ p: 2, borderRadius: 2.5, background: "#F0F8F5", mb: 1.5 }}>
                  <Typography sx={{ fontWeight: 800, color: "#12302B", mb: 0.5 }}>
                    Practical project
                  </Typography>
                  <Typography sx={{ color: "#60756F", fontSize: 13, lineHeight: 1.7 }}>
                    {selectedCourse.project}
                  </Typography>
                </Box>
                <Typography sx={{ color: "#71847E", fontSize: 12, lineHeight: 1.7 }}>
                  <strong>Prerequisites:</strong> {selectedCourse.prerequisites}
                </Typography>
              </DialogContent>
              <DialogActions sx={{ px: { xs: 2.5, sm: 4 }, pb: 3, pt: 1 }}>
                <Button
                  onClick={() => setSelectedCourse(null)}
                  sx={{ color: "#526C65", textTransform: "none", fontWeight: 750 }}
                >
                  Close
                </Button>
                <Button
  href="#contact"
  onClick={() => {
    const courseSlug = {
      "Full Stack Development": "full-stack",
      "Frontend Development": "frontend",
      "Backend Development": "backend",
      "UI / UX Design": "uiux",
    }[selectedCourse.title] || "other";

    window.dispatchEvent(
      new CustomEvent("select-course-for-enquiry", {
        detail: courseSlug,
      })
    );

    setSelectedCourse(null);

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  variant="contained"
  endIcon={<ArrowForwardRoundedIcon />}
  sx={{
    px: 2.5,
    py: 1.1,
    borderRadius: 2.5,
    textTransform: "none",
    fontWeight: 800,
    background: `linear-gradient(135deg, ${selectedCourse.color}, #2563EB)`,
  }}
>
  Enquire About Course
</Button>
              </DialogActions>
            </>
          )}
        </Dialog>

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