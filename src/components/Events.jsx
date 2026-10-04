import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
} from "@mui/material";

import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const events = [
  {
    date: "01",
    month: "LEARN",
    title: "Tech Workshop",
    description:
      "Explore practical concepts, new technologies and hands-on learning with fellow learners.",
    category: "WORKSHOP",
    icon: <CodeRoundedIcon />,
    accent: "#059669",
  },
  {
    date: "02",
    month: "BUILD",
    title: "Project Showcase",
    description:
      "Turn ideas into meaningful projects and showcase what you have built through practical learning.",
    category: "PROJECTS",
    icon: <EmojiEventsRoundedIcon />,
    accent: "#2563EB",
  },
  {
    date: "03",
    month: "CONNECT",
    title: "Community Meetup",
    description:
      "Meet learners, mentors and creators while sharing ideas, experiences and opportunities.",
    category: "COMMUNITY",
    icon: <GroupsRoundedIcon />,
    accent: "#0F766E",
  },
];

const Events = () => {
  return (
    <Box
      id="events"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, sm: 10, md: 13 },
        background:
          "linear-gradient(145deg, #FFFFFF 0%, #F0FDF9 48%, #EFF6FF 100%)",
      }}
    >
      {/* BACKGROUND GLOWS */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 240, md: 430 },
          height: { xs: 240, md: 430 },
          borderRadius: "50%",
          background: "rgba(5,150,105,0.08)",
          filter: "blur(90px)",
          top: "-160px",
          right: "-120px",
          animation: "eventGlowOne 9s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: "50%",
          background: "rgba(37,99,235,0.07)",
          filter: "blur(85px)",
          bottom: "-130px",
          left: "-110px",
          animation: "eventGlowTwo 10s ease-in-out infinite",
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
        {/* HEADER */}

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            justifyContent: "space-between",
            gap: 3,
            mb: { xs: 5, md: 7 },
            animation: "eventFadeUp 0.8s ease both",
          }}
        >
          <Box sx={{ maxWidth: 720 }}>
            <Chip
              icon={
                <EventAvailableRoundedIcon
                  sx={{
                    fontSize: "15px !important",
                    color: "#059669 !important",
                  }}
                />
              }
              label="EVENTS & EXPERIENCES"
              sx={{
                mb: 2,
                height: 34,
                px: 1,
                borderRadius: "50px",
                background:
                  "rgba(255,255,255,0.78)",
                border:
                  "1px solid rgba(5,150,105,0.13)",
                color: "#047857",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: 1.3,
                backdropFilter: "blur(12px)",
              }}
            />

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: 32,
                  sm: 42,
                  md: 52,
                  lg: 58,
                },
                lineHeight: 1.06,
                fontWeight: 900,
                letterSpacing: "-1.7px",
                color: "#12302B",
              }}
            >
              Learn Beyond
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
                The Classroom.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 650,
                fontSize: { xs: 13, sm: 14, md: 16 },
                lineHeight: 1.8,
                color: "#62756F",
              }}
            >
              Workshops, project showcases and community experiences
              designed to keep learners curious, connected and ready
              for what comes next.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 1,
              borderRadius: "50px",
              background:
                "rgba(255,255,255,0.72)",
              border:
                "1px solid rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 18,
                color: "#059669",
              }}
            />

            <Typography
              sx={{
                fontSize: 9,
                fontWeight: 800,
                color: "#526C65",
                letterSpacing: 0.6,
              }}
            >
              EXPERIENCES THAT INSPIRE
            </Typography>
          </Box>
        </Box>

        {/* EVENT CARDS */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.2, md: 2.8 },
          }}
        >
          {events.map((event, index) => (
            <Box
              key={event.title}
              sx={{
                position: "relative",
                overflow: "hidden",
                minHeight: {
                  xs: 350,
                  sm: 370,
                  md: 390,
                },
                borderRadius: {
                  xs: 4,
                  md: 5,
                },
                background:
                  "rgba(255,255,255,0.78)",
                border:
                  "1px solid rgba(255,255,255,0.95)",
                boxShadow:
                  "0 20px 55px rgba(15,118,110,0.075)",
                backdropFilter: "blur(16px)",
                animation: `eventCardReveal 0.8s ease ${
                  index * 0.15
                }s both`,
                transition:
                  "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow:
                    "0 28px 65px rgba(15,118,110,0.13)",
                },
              }}
            >
              {/* TOP COLOR STRIP */}

              <Box
                sx={{
                  height: 5,
                  background: `linear-gradient(90deg, ${event.accent}, #2563EB)`,
                }}
              />

              <Box
                sx={{
                  p: { xs: 2.5, sm: 3, md: 3.2 },
                  height: "calc(100% - 5px)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* DATE + ICON */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: 42,
                          md: 48,
                        },
                        lineHeight: 0.9,
                        fontWeight: 900,
                        color: event.accent,
                        letterSpacing: "-2px",
                      }}
                    >
                      {event.date}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.8,
                        fontSize: 8,
                        fontWeight: 900,
                        color: "#758681",
                        letterSpacing: 1.2,
                      }}
                    >
                      {event.month}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${event.accent}10`,
                      color: event.accent,
                      transition:
                        "transform 0.35s ease",
                      ".MuiBox-root:hover &": {
                        transform: "rotate(6deg) scale(1.08)",
                      },
                    }}
                  >
                    {event.icon}
                  </Box>
                </Box>

                {/* CATEGORY */}

                <Chip
                  label={event.category}
                  size="small"
                  sx={{
                    alignSelf: "flex-start",
                    height: 24,
                    borderRadius: "50px",
                    background: `${event.accent}0D`,
                    color: event.accent,
                    fontSize: 8,
                    fontWeight: 850,
                    letterSpacing: 0.7,
                    mb: 1.8,
                  }}
                />

                {/* TITLE */}

                <Typography
                  sx={{
                    fontSize: {
                      xs: 22,
                      md: 24,
                    },
                    fontWeight: 900,
                    color: "#12302B",
                    mb: 1.2,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {event.title}
                </Typography>

                {/* DESCRIPTION */}

                <Typography
                  sx={{
                    fontSize: 11,
                    lineHeight: 1.75,
                    color: "#687A75",
                    maxWidth: 360,
                  }}
                >
                  {event.description}
                </Typography>

                {/* BOTTOM */}

                <Box
                  sx={{
                    mt: "auto",
                    pt: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop:
                      "1px solid rgba(15,118,110,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                    }}
                  >
                    <CalendarMonthRoundedIcon
                      sx={{
                        fontSize: 16,
                        color: event.accent,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 9,
                        fontWeight: 750,
                        color: "#71817D",
                      }}
                    >
                      FUTURE EXPERIENCE
                    </Typography>
                  </Box>

                  <ArrowForwardRoundedIcon
                    sx={{
                      fontSize: 19,
                      color: event.accent,
                      transition:
                        "transform 0.3s ease",
                      ".MuiBox-root:hover &": {
                        transform:
                          "translateX(4px)",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* DECORATIVE CIRCLE */}

              <Box
                sx={{
                  position: "absolute",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  right: -65,
                  bottom: -65,
                  border:
                    `1px solid ${event.accent}18`,
                }}
              />
            </Box>
          ))}
        </Box>

        {/* FEATURE BANNER */}

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            position: "relative",
            overflow: "hidden",
            p: {
              xs: 2.5,
              sm: 3,
              md: 4,
            },
            borderRadius: {
              xs: 4,
              md: 5,
            },
            background:
              "linear-gradient(135deg, #064E42 0%, #0F766E 55%, #1D4ED8 100%)",
            boxShadow:
              "0 25px 65px rgba(4,78,66,0.14)",
            color: "#fff",
            animation:
              "eventFadeUp 0.9s ease 0.45s both",
          }}
        >
          {/* DECORATIVE ORBITS */}

          <Box
            sx={{
              position: "absolute",
              width: 230,
              height: 230,
              borderRadius: "50%",
              border:
                "1px solid rgba(255,255,255,0.10)",
              right: -80,
              top: -105,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 150,
              height: 150,
              borderRadius: "50%",
              border:
                "1px solid rgba(255,255,255,0.08)",
              right: 5,
              top: -65,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
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
            }}
          >
            <Box sx={{ maxWidth: 720 }}>
              <Typography
                sx={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1.3,
                  color: "#A7F3D0",
                  mb: 1,
                }}
              >
                KEEP EXPLORING
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 21,
                    sm: 25,
                    md: 29,
                  },
                  fontWeight: 900,
                  letterSpacing: "-0.7px",
                  mb: 0.8,
                }}
              >
                Every experience can become a
                new learning opportunity.
              </Typography>

              <Typography
                sx={{
                  fontSize: 10.5,
                  lineHeight: 1.7,
                  color:
                    "rgba(255,255,255,0.70)",
                }}
              >
                From workshops to project showcases,
                every experience is designed to help
                learners discover what they can build.
              </Typography>
            </Box>

            <Button
              href="#contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                flexShrink: 0,
                px: 2.3,
                py: 1.2,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: 11,
                fontWeight: 800,
                color: "#064E42",
                background: "#FFFFFF",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.12)",
                "&:hover": {
                  background: "#ECFDF5",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Explore More
            </Button>
          </Box>
        </Box>
      </Container>

      {/* ANIMATIONS */}

      <style>
        {`
          @keyframes eventFadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes eventCardReveal {
            from {
              opacity: 0;
              transform: translateY(35px) scale(0.98);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes eventGlowOne {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(-30px, 30px);
            }
          }

          @keyframes eventGlowTwo {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(35px, -25px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Events;