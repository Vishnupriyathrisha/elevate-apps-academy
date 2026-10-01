import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import elogo from "../assets/elogo.png";

const WelcomeScreen = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  if (!showWelcome) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",

        width: "100%",
        height: "100dvh",
        minHeight: "100vh",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        background:
          "radial-gradient(circle at 20% 20%, rgba(5,150,105,0.14), transparent 28%), radial-gradient(circle at 80% 75%, rgba(37,99,235,0.12), transparent 30%), #EFFAF6",

        animation:
          "welcomeDisappear 0.9s ease 4.3s forwards",

        "@keyframes welcomeDisappear": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none",
          },
        },
      }}
    >
      {/* =================================
          BACKGROUND GRID
      ================================= */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          backgroundImage:
            "linear-gradient(rgba(5,150,105,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(5,150,105,0.035) 1px, transparent 1px)",

          backgroundSize: {
            xs: "38px 38px",
            sm: "65px 65px",
          },

          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",

          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",

          animation:
            "gridMove 15s linear infinite",

          "@keyframes gridMove": {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "65px 65px",
            },
          },
        }}
      />

      {/* =================================
          AMBIENT GLOW
      ================================= */}

      <Box
        sx={{
          position: "absolute",

          width: {
            xs: 240,
            sm: 450,
            md: 600,
          },

          height: {
            xs: 240,
            sm: 450,
            md: 600,
          },

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(5,150,105,0.13), rgba(37,99,235,0.05), transparent 70%)",

          filter: {
            xs: "blur(35px)",
            sm: "blur(50px)",
          },

          animation:
            "mainGlow 7s ease-in-out infinite alternate",

          "@keyframes mainGlow": {
            from: {
              transform: "scale(0.9)",
              opacity: 0.7,
            },
            to: {
              transform: "scale(1.15)",
              opacity: 1,
            },
          },
        }}
      />

      {/* =================================
          SMALL FLOATING DOTS
      ================================= */}

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box
          key={item}
          sx={{
            position: "absolute",

            width: {
              xs: 3,
              sm: 5,
            },

            height: {
              xs: 3,
              sm: 5,
            },

            borderRadius: "50%",

            background:
              item % 2 === 0
                ? "#2563EB"
                : "#059669",

            boxShadow:
              item % 2 === 0
                ? "0 0 15px rgba(37,99,235,0.6)"
                : "0 0 15px rgba(5,150,105,0.6)",

            left: {
              xs: `${10 + item * 13}%`,
              sm: `${12 + item * 13}%`,
            },

            top: `${18 + (item % 3) * 25}%`,

            animation: `floatingDot ${
              3 + item * 0.4
            }s ease-in-out infinite alternate`,

            "@keyframes floatingDot": {
              from: {
                transform: "translateY(0)",
                opacity: 0.35,
              },
              to: {
                transform: "translateY(-22px)",
                opacity: 1,
              },
            },
          }}
        />
      ))}

      {/* =================================
          BOOK STAGE
      ================================= */}

      <Box
        sx={{
          position: "relative",

          /*
            MOBILE
            -------
            Width and height are based on viewport
            so the entire book stays inside screen.
          */

          width: {
            xs: "92vw",
            sm: 500,
            md: 650,
          },

          height: {
            xs: "58vw",
            sm: 430,
            md: 500,
          },

          maxWidth: {
            xs: "92vw",
            sm: 500,
            md: 650,
          },

          maxHeight: {
            xs: "58vw",
            sm: 430,
            md: 500,
          },

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          perspective: {
            xs: "1000px",
            sm: "1400px",
          },

          animation:
            "bookStageZoom 1s ease 3.2s forwards",

          "@keyframes bookStageZoom": {
            "0%": {
              transform: "scale(1)",
            },

            "100%": {
              transform: "scale(2.8)",
            },
          },

          /*
            MOBILE ZOOM
            -----------
            Slightly reduced from desktop
            so the transition does not crop badly.
          */

          "@media (max-width: 600px)": {
            animation:
              "bookStageZoomMobile 1s ease 3.2s forwards",

            "@keyframes bookStageZoomMobile": {
              "0%": {
                transform: "scale(1)",
              },

              "100%": {
                transform: "scale(2.45)",
              },
            },
          },
        }}
      >
        {/* =================================
            BOOK SHADOW
        ================================= */}

        <Box
          sx={{
            position: "absolute",

            width: {
              xs: "72vw",
              sm: 380,
              md: 470,
            },

            height: {
              xs: "10vw",
              sm: 60,
            },

            bottom: {
              xs: "-2vw",
              sm: 80,
            },

            borderRadius: "50%",

            background:
              "rgba(5,150,105,0.16)",

            filter: {
              xs: "blur(15px)",
              sm: "blur(22px)",
            },

            animation:
              "shadowPulse 3s ease-in-out infinite alternate",

            "@keyframes shadowPulse": {
              from: {
                transform: "scale(0.85)",
                opacity: 0.45,
              },

              to: {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            },
          }}
        />

        {/* =================================
            BOOK
        ================================= */}

        <Box
          sx={{
            position: "relative",

            width: {
              xs: "82vw",
              sm: 420,
              md: 520,
            },

            height: {
              xs: "50vw",
              sm: 275,
              md: 330,
            },

            maxWidth: {
              xs: "82vw",
              sm: 420,
              md: 520,
            },

            maxHeight: {
              xs: "50vw",
              sm: 275,
              md: 330,
            },

            display: "flex",

            transformStyle: "preserve-3d",

            animation:
              "bookOpen 1.5s cubic-bezier(0.65,0,0.35,1) forwards",

            "@keyframes bookOpen": {
              "0%": {
                transform:
                  "rotateX(8deg) rotateY(0deg) scale(0.65)",
              },

              "45%": {
                transform:
                  "rotateX(5deg) rotateY(0deg) scale(0.85)",
              },

              "100%": {
                transform:
                  "rotateX(0deg) rotateY(0deg) scale(1)",
              },
            },

            "@media (max-width: 600px)": {
              animation:
                "bookOpenMobile 1.5s cubic-bezier(0.65,0,0.35,1) forwards",

              "@keyframes bookOpenMobile": {
                "0%": {
                  transform:
                    "rotateX(7deg) rotateY(0deg) scale(0.72)",
                },

                "45%": {
                  transform:
                    "rotateX(3deg) rotateY(0deg) scale(0.9)",
                },

                "100%": {
                  transform:
                    "rotateX(0deg) rotateY(0deg) scale(1)",
                },
              },
            },
          }}
        >
          {/* =================================
              LEFT PAGE
          ================================= */}

          <Box
            sx={{
              position: "relative",

              width: "50%",

              height: "100%",

              transformOrigin: "right center",

              borderRadius: {
                xs: "11px 3px 3px 11px",
                sm: "18px 5px 5px 18px",
              },

              background:
                "linear-gradient(135deg, #e0cbc0, #c2dcd2)",

              border:
                "1px solid rgba(5,150,105,0.18)",

              boxShadow:
                "-8px 15px 30px rgba(18,48,43,0.10)",

              transformStyle: "preserve-3d",

              animation:
                "leftPageOpen 1.5s cubic-bezier(0.65,0,0.35,1) forwards",

              zIndex: 3,

              "@keyframes leftPageOpen": {
                "0%": {
                  transform:
                    "rotateY(88deg)",
                },

                "55%": {
                  transform:
                    "rotateY(35deg)",
                },

                "100%": {
                  transform:
                    "rotateY(0deg)",
                },
              },
            }}
          >

            <Box
               sx={{
               position: "absolute",
               inset: "18px 16px",
               opacity: 0.45,
               backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 15px, rgba(5,150,105,0.14) 16px)",
              pointerEvents: "none",
              }}
          />

            {/* LEFT PAGE CONTENT */}

            <Box
              sx={{
                position: "absolute",

                inset: 0,

                display: "flex",

                flexDirection: "column",

                alignItems: "center",

                justifyContent: "center",

                textAlign: "center",

                px: {
                  xs: 1,
                  sm: 2,
                },

                overflow: "hidden",

                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#059669",

                  fontSize: {
                    xs: 7,
                    sm: 11,
                  },

                  fontWeight: 800,

                  letterSpacing: {
                    xs: 1.3,
                    sm: 3,
                  },

                  opacity: 0,

                  animation:
                    "pageText 0.8s ease 1.5s forwards",

                  "@keyframes pageText": {
                    from: {
                      opacity: 0,
                      transform:
                        "translateY(10px)",
                    },

                    to: {
                      opacity: 1,
                      transform:
                        "translateY(0)",
                    },
                  },
                }}
              >
                LEARN
              </Typography>

              <Box
                sx={{
                  mt: {
                    xs: 0.7,
                    sm: 1.5,
                  },

                  width: {
                    xs: 24,
                    sm: 50,
                  },

                  height: "1px",

                  background:
                    "linear-gradient(90deg, transparent, #059669, transparent)",
                }}
              />

              <Typography
                sx={{
                  mt: {
                    xs: 0.7,
                    sm: 1.5,
                  },

                  color: "#58756D",

                  fontSize: {
                    xs: 6,
                    sm: 9,
                  },

                  letterSpacing: {
                    xs: 0.8,
                    sm: 1.5,
                  },

                  opacity: 0,

                  animation:
                    "pageText 0.8s ease 1.7s forwards",
                }}
              >
                KNOWLEDGE
              </Typography>
            </Box>
          </Box>

          {/* =================================
              BOOK CENTER
          ================================= */}

          <Box
            sx={{
              position: "absolute",

              left: "50%",

              top: 0,

              width: {
                xs: "2px",
                sm: "2px",
              },

              height: "100%",

              transform:
                "translateX(-50%)",

              background:
                "linear-gradient(to bottom, transparent, rgba(5,150,105,0.25), transparent)",

              zIndex: 2,

              pointerEvents: "none",
            }}
          />

          {/* =================================
              RIGHT PAGE
          ================================= */}

          <Box
            sx={{
              position: "relative",

              width: "50%",

              height: "100%",

              transformOrigin: "left center",

              borderRadius: {
                xs: "3px 11px 11px 3px",
                sm: "5px 18px 18px 5px",
              },

              background:
                "linear-gradient(225deg, #dccec6, #9abaad)",

              border:
                "1px solid rgba(5,150,105,0.18)",

              boxShadow:
                "8px 15px 30px rgba(18,48,43,0.10)",

              animation:
                "rightPageOpen 1.5s cubic-bezier(0.65,0,0.35,1) forwards",

              zIndex: 3,

              "@keyframes rightPageOpen": {
                "0%": {
                  transform:
                    "rotateY(-88deg)",
                },

                "55%": {
                  transform:
                    "rotateY(-35deg)",
                },

                "100%": {
                  transform:
                    "rotateY(0deg)",
                },
              },
            }}
          >

            <Box
              sx={{
              position: "absolute",
              inset: "18px 16px",
              opacity: 0.45,
              backgroundImage:
                 "repeating-linear-gradient(to bottom, transparent 0px, transparent 15px, rgba(37,99,235,0.12) 16px)",
              pointerEvents: "none",
              }}
           />
            {/* RIGHT PAGE CONTENT */}

            <Box
              sx={{
                position: "absolute",

                inset: 0,

                display: "flex",

                flexDirection: "column",

                alignItems: "center",

                justifyContent: "center",

                textAlign: "center",

                px: {
                  xs: 1,
                  sm: 2,
                },

                overflow: "hidden",

                zIndex: 5,
              }}
            >
              <Typography
                sx={{
                  color: "#2563EB",

                  fontSize: {
                    xs: 7,
                    sm: 11,
                  },

                  fontWeight: 800,

                  letterSpacing: {
                    xs: 1.3,
                    sm: 3,
                  },

                  opacity: 0,

                  animation:
                    "pageText 0.8s ease 1.8s forwards",
                }}
              >
                BUILD
              </Typography>

              <Box
                sx={{
                  mt: {
                    xs: 0.7,
                    sm: 1.5,
                  },

                  width: {
                    xs: 24,
                    sm: 50,
                  },

                  height: "1px",

                  background:
                    "linear-gradient(90deg, transparent, #2563EB, transparent)",
                }}
              />

              <Typography
                sx={{
                  mt: {
                    xs: 0.7,
                    sm: 1.5,
                  },

                  color: "#58756D",

                  fontSize: {
                    xs: 6,
                    sm: 9,
                  },

                  letterSpacing: {
                    xs: 0.8,
                    sm: 1.5,
                  },

                  opacity: 0,

                  animation:
                    "pageText 0.8s ease 2s forwards",
                }}
              >
                EXPERIENCE
              </Typography>
            </Box>
          </Box>

          {/* =================================
              LOGO
          ================================= */}

          <Box
            sx={{
              position: "absolute",

              left: "50%",

              top: "50%",

              transform:
                "translate(-50%, -50%)",

              zIndex: 20,

              width: {
                xs: 47,
                sm: 72,
                md: 82,
              },

              height: {
                xs: 47,
                sm: 72,
                md: 82,
              },

              borderRadius: {
                xs: "12px",
                sm: "18px",
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              background:
                "rgba(239,250,246,0.94)",

              border:
                "1px solid rgba(5,150,105,0.16)",

              boxShadow:
                "0 12px 35px rgba(5,150,105,0.14)",

              opacity: 0,

              animation:
                "logoReveal 0.8s ease 1.9s forwards",

              "@keyframes logoReveal": {
                from: {
                  opacity: 0,

                  transform:
                    "translate(-50%, -50%) scale(0.5) rotate(-8deg)",
                },

                to: {
                  opacity: 1,

                  transform:
                    "translate(-50%, -50%) scale(1) rotate(0deg)",
                },
              },
            }}
          >
            <Box
              component="img"
              src={elogo}
              alt="Elevate Apps Academy"
              sx={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        {/* =================================
            WELCOME TEXT
        ================================= */}

        <Box
          sx={{
            position: "absolute",

            /*
              MOBILE:
              Keep heading slightly higher so
              it doesn't overlap the book.
            */

            top: {
              xs: "7%",
              sm: "5%",
            },

            left: 0,
            right: 0,

            px: {
              xs: 1.5,
              sm: 0,
            },

            textAlign: "center",

            opacity: 0,

            animation:
              "welcomeText 0.9s ease 2.25s forwards",

            "@keyframes welcomeText": {
              from: {
                opacity: 0,

                transform:
                  "translateY(25px)",
              },

              to: {
                opacity: 1,

                transform:
                  "translateY(0)",
              },
            },
          }}
        >
          <Typography
            sx={{
              color: "#059669",

              fontSize: {
                xs: 7,
                sm: 10,
              },

              fontWeight: 800,

              letterSpacing: {
                xs: 2.2,
                sm: 5,
              },
            }}
          >
            WELCOME TO
          </Typography>

          <Typography
            sx={{
              mt: {
                xs: 0.6,
                sm: 1,
              },

              color: "#12302B",

              fontSize: {
                xs: 16,
                sm: 28,
                md: 34,
              },

              fontWeight: 700,

              letterSpacing: {
                xs: -0.3,
                sm: -1,
              },

              whiteSpace: "nowrap",
            }}
          >
            Elevate Apps Academy
          </Typography>

          <Typography
            sx={{
              mt: {
                xs: 0.5,
                sm: 0.8,
              },

              color: "#66827A",

              fontSize: {
                xs: 7,
                sm: 10,
              },

              letterSpacing: {
                xs: 1.1,
                sm: 2.5,
              },
            }}
          >
            Learn • Create • Grow
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;