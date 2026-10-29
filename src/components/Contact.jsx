import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  // Receive the selected course from the Courses section.
  useEffect(() => {
    const handleCourseSelection = (event) => {
      const course = event.detail;
      if (!course) return;

      const courseLabels = {
        "full-stack": "Full Stack Development",
        frontend: "Frontend Development",
        backend: "Backend Development",
        uiux: "UI / UX Design",
        other: "Other",
      };

      setFormData((previous) => ({
        ...previous,
        course,
        message: previous.message || `I would like to know more about the ${courseLabels[course] || "course"} course.`,
      }));
      setFeedback({ type: "", message: "" });
    };

    window.addEventListener("select-course-for-enquiry", handleCourseSelection);
    return () => {
      window.removeEventListener("select-course-for-enquiry", handleCourseSelection);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }

      setFeedback({
        type: "success",
        message: result.message || "Your enquiry has been submitted successfully!",
      });
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.message === "Failed to fetch"
            ? "Cannot connect to the server. Please check that the backend is running and try again."
            : error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const infoCards = [
    {
      icon: <LocationOnOutlinedIcon />,
      title: "Learn Anywhere",
      text: "Access practical learning from wherever you are.",
    },
    {
      icon: <BoltOutlinedIcon />,
      title: "Quick Response",
      text: "Get guidance and support when you need it.",
    },
    {
      icon: <SchoolOutlinedIcon />,
      title: "Career Focused",
      text: "Build skills around real-world opportunities.",
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 9, sm: 11, md: 14 },
        background: `
          radial-gradient(
            circle at 8% 18%,
            rgba(16, 185, 129, 0.16),
            transparent 27%
          ),
          radial-gradient(
            circle at 90% 20%,
            rgba(37, 99, 235, 0.12),
            transparent 28%
          ),
          radial-gradient(
            circle at 78% 88%,
            rgba(20, 184, 166, 0.13),
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
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 320 },
          height: { xs: 180, md: 320 },
          borderRadius: "50%",
          border: "1px solid rgba(5,150,105,0.08)",
          top: { xs: 30, md: 60 },
          left: { xs: -90, md: -120 },
          animation: "contactOrbit 18s linear infinite",
          "@keyframes contactOrbit": {
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
          width: { xs: 260, md: 430 },
          height: { xs: 260, md: 430 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(5,150,105,0.07), transparent 68%)",
          right: { xs: -100, md: -150 },
          bottom: { xs: 20, md: -100 },
          filter: "blur(3px)",
          animation: "contactFloat 7s ease-in-out infinite",
          "@keyframes contactFloat": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-18px)",
            },
          },
        }}
      />

      {/* Floating dots */}

      {[
        { top: "13%", left: "7%", delay: "0s" },
        { top: "25%", left: "92%", delay: "1.5s" },
        { top: "72%", left: "5%", delay: "3s" },
        { top: "82%", left: "94%", delay: "2s" },
      ].map((dot, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: dot.top,
            left: dot.left,
            width: { xs: 5, md: 7 },
            height: { xs: 5, md: 7 },
            borderRadius: "50%",
            background:
              index % 2 === 0
                ? "rgba(5,150,105,0.35)"
                : "rgba(37,99,235,0.3)",
            animation: `contactDot 4s ease-in-out ${dot.delay} infinite`,
            "@keyframes contactDot": {
              "0%, 100%": {
                transform: "translateY(0)",
                opacity: 0.45,
              },
              "50%": {
                transform: "translateY(-12px)",
                opacity: 1,
              },
            },
          }}
        />
      ))}

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            animation: "contactHeading 0.9s ease both",
            "@keyframes contactHeading": {
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
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 11, md: 12 },
              fontWeight: 800,
              letterSpacing: { xs: 2.5, md: 3.5 },
              color: "#059669",
              mb: 1.5,
            }}
          >
            LET'S CONNECT
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "30px",
                sm: "40px",
                md: "52px",
                lg: "58px",
              },
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-1.8px",
              color: "#12302B",
              maxWidth: 760,
              mx: "auto",
            }}
          >
            Ready to{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #059669, #0F766E, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Elevate
            </Box>{" "}
            Your Skills?
          </Typography>

          <Typography
            sx={{
              mt: 2.2,
              maxWidth: 650,
              mx: "auto",
              color: "#58716B",
              fontSize: { xs: 13, sm: 14, md: 15 },
              lineHeight: 1.8,
            }}
          >
            Have a question about our courses or want to start your learning
            journey? Reach out to Elevate Apps Academy and let's build your
            next chapter together.
          </Typography>
        </Box>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.85fr 1.15fr",
            },
            gap: { xs: 5, md: 7 },
            alignItems: "center",
          }}
        >
          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <Box>
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 27, md: 32 },
                fontWeight: 800,
                color: "#12302B",
                lineHeight: 1.2,
                mb: 1.5,
              }}
            >
              Your next step
              <br />
              starts with a conversation.
            </Typography>

            <Typography
              sx={{
                color: "#617872",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.8,
                maxWidth: 470,
                mb: 4,
              }}
            >
              Whether you're starting from zero, improving your development
              skills, or preparing for your next career move, we're here to
              help you move forward.
            </Typography>

            {/* Info cards */}

            <Stack spacing={1.7}>
              {infoCards.map((item, index) => (
                <Box
                  key={item.title}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: { xs: 1.8, sm: 2 },
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.42)",
                    border: "1px solid rgba(5,150,105,0.08)",
                    backdropFilter: "blur(10px)",
                    transition:
                      "transform 0.35s ease, background 0.35s ease, box-shadow 0.35s ease",
                    animation: `contactInfo 0.7s ease ${
                      index * 0.12
                    }s both`,
                    "@keyframes contactInfo": {
                      from: {
                        opacity: 0,
                        transform: "translateX(-25px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                    "&:hover": {
                      transform: "translateX(7px)",
                      background: "rgba(255,255,255,0.72)",
                      boxShadow: "0 14px 35px rgba(5,150,105,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 43, sm: 48 },
                      height: { xs: 43, sm: 48 },
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "14px",
                      color: "#059669",
                      background:
                        "linear-gradient(135deg, rgba(5,150,105,0.13), rgba(37,99,235,0.08))",
                      "& svg": {
                        fontSize: { xs: 21, sm: 23 },
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 800,
                        color: "#12302B",
                        mb: 0.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: 11, sm: 12 },
                        color: "#6A817B",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Bottom mini statement */}

            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  fontSize: 18,
                  color: "#059669",
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: 11, sm: 12 },
                  fontWeight: 600,
                  color: "#52706A",
                }}
              >
                Learn today. Build tomorrow.
              </Typography>
            </Box>
          </Box>

          {/* =====================================
              RIGHT SIDE FORM
          ===================================== */}

          <Box
            sx={{
              position: "relative",
              p: { xs: 2.2, sm: 3, md: 4.2 },
              borderRadius: { xs: "24px", md: "30px" },
              background: "rgba(255,255,255,0.58)",
              border: "1px solid rgba(255,255,255,0.72)",
              backdropFilter: "blur(22px)",
              boxShadow:
                "0 30px 80px rgba(15,118,110,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
              animation: "contactForm 0.9s ease 0.2s both",
              "@keyframes contactForm": {
                from: {
                  opacity: 0,
                  transform: "translateY(35px) scale(0.97)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0) scale(1)",
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: -1,
                left: "12%",
                right: "12%",
                height: "2px",
                borderRadius: "20px",
                background:
                  "linear-gradient(90deg, transparent, #059669, #2563EB, transparent)",
              },
            }}
          >
            {/* Form heading */}

            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  fontSize: { xs: 21, sm: 24, md: 27 },
                  fontWeight: 800,
                  color: "#12302B",
                }}
              >
                Start Your Journey
              </Typography>

              <Typography
                sx={{
                  mt: 0.7,
                  color: "#69807A",
                  fontSize: { xs: 12, sm: 13 },
                }}
              >
                Tell us what you want to learn.
              </Typography>
            </Box>

            <Stack component="form" spacing={2} onSubmit={handleSubmit}>
              {/* Name + Email */}

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
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "13px",
                      background: "rgba(255,255,255,0.5)",
                      "& fieldset": {
                        borderColor: "rgba(5,150,105,0.13)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(5,150,105,0.35)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#059669",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#059669",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "13px",
                      background: "rgba(255,255,255,0.5)",
                      "& fieldset": {
                        borderColor: "rgba(5,150,105,0.13)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(5,150,105,0.35)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#059669",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#059669",
                    },
                  }}
                />
              </Box>

              {/* Phone */}

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "13px",
                    background: "rgba(255,255,255,0.5)",
                    "& fieldset": {
                      borderColor: "rgba(5,150,105,0.13)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(5,150,105,0.35)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#059669",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#059669",
                  },
                }}
              />

              {/* Course */}

              <TextField
                select
                fullWidth
                label="Interested Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "13px",
                    background: "rgba(255,255,255,0.5)",
                    "& fieldset": {
                      borderColor: "rgba(5,150,105,0.13)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(5,150,105,0.35)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#059669",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#059669",
                  },
                }}
              >
                <MenuItem value="">Select a course</MenuItem>
                <MenuItem value="full-stack">Full Stack Development</MenuItem>
                <MenuItem value="frontend">Frontend Development</MenuItem>
                <MenuItem value="backend">Backend Development</MenuItem>
                <MenuItem value="uiux">UI / UX Design</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>

              {/* Message */}

              <TextField
                fullWidth
                multiline
                minRows={4}
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help..."
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                    background: "rgba(255,255,255,0.5)",
                    "& fieldset": {
                      borderColor: "rgba(5,150,105,0.13)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(5,150,105,0.35)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#059669",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#059669",
                  },
                }}
              />

              {/* Submission feedback */}
              {feedback.message && (
                <Typography
                  role="status"
                  aria-live="polite"
                  sx={{
                    color: feedback.type === "success" ? "#047857" : "#B91C1C",
                    background:
                      feedback.type === "success"
                        ? "rgba(5,150,105,0.08)"
                        : "rgba(220,38,38,0.07)",
                    borderRadius: "12px",
                    p: 1.5,
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  {feedback.message}
                </Typography>
              )}

              {/* Button */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={submitting}
                endIcon={!submitting ? <ArrowOutwardOutlinedIcon /> : null}
                sx={{
                  mt: 0.5,
                  py: { xs: 1.3, sm: 1.5 },
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: { xs: 13, sm: 14 },
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #059669 0%, #0F766E 48%, #2563EB 100%)",
                  boxShadow: "0 14px 30px rgba(5,150,105,0.18)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #047857 0%, #0F766E 48%, #1D4ED8 100%)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 18px 35px rgba(5,150,105,0.25)",
                  },
                }}
              >
                {submitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <Box
          sx={{
            mt: { xs: 8, md: 11 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "75%", sm: 280, md: 380 },
              height: "1px",
              mx: "auto",
              mb: 3,
              background:
                "linear-gradient(90deg, transparent, rgba(5,150,105,0.35), rgba(37,99,235,0.35), transparent)",
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: 10, sm: 11 },
              letterSpacing: { xs: 2, md: 3 },
              fontWeight: 800,
              color: "#648079",
            }}
          >
            LEARN • BUILD • ELEVATE
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;