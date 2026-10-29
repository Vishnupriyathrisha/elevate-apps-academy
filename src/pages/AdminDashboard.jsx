
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminName");
    navigate("/admin/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F3F7F6",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 5 }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "#059669", fontWeight: 800 }}
            >
              ELEVATE APPS ACADEMY
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#12302B" }}
            >
              Admin Dashboard
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Manage courses and student enquiries.
            </Typography>
          </Box>

          <Button
            variant="outlined"
            color="error"
            startIcon={<LogoutRoundedIcon />}
            onClick={logout}
          >
            Logout
          </Button>
        </Stack>

        <Stack spacing={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: "1px solid #DDEAE5",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={2}
            >
              <SchoolRoundedIcon
                sx={{ fontSize: 42, color: "#059669" }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={800}>
                  Course Management
                </Typography>
                <Typography color="text.secondary">
                  Add, edit and delete academy courses.
                </Typography>
              </Box>

              <Button
              variant="contained"
              onClick={() => navigate("/admin/courses")}
              sx={{
              bgcolor: "#059669",
              textTransform: "none",
              borderRadius: 2,
              }}
             >
               Courses
               </Button>
            </Stack>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: "1px solid #DDEAE5",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={2}
            >
              <PeopleAltRoundedIcon
                sx={{ fontSize: 42, color: "#2563EB" }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={800}>
                  Student Enquiries
                </Typography>
                <Typography color="text.secondary">
                  View and manage student enquiry submissions.
                </Typography>
              </Box>

              <Button
              variant="contained"
              onClick={() => navigate("/admin/enquiries")}
              sx={{
              bgcolor: "#2563EB",
              textTransform: "none",
              borderRadius: 2,
             }}
              >
              Student Enquiries
               </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
