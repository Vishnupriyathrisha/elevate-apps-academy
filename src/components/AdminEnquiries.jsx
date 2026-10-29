import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Stack,
  Chip,
  CircularProgress,
  Alert,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const API_URL = "http://localhost:5000/api/contact";

const courseNames = {
  "full-stack": "Full Stack Development",
  frontend: "Frontend Development",
  backend: "Backend Development",
  uiux: "UI / UX Design",
  other: "Other",
};

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [notice, setNotice] = useState("");

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminName");
    setEnquiries([]);
    window.location.replace("/admin/login");
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    setError("");

    try {
      const token = sessionStorage.getItem("adminToken");

      if (!token) {
        window.location.replace("/admin/login");
        return;
      }

      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        sessionStorage.removeItem("adminToken");
        sessionStorage.removeItem("adminName");
        window.location.replace("/admin/login");
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to load enquiries.");
      }

      setEnquiries(result.data || []);
    } catch (err) {
      setError(err.message || "Could not load enquiries. Please check whether the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const filteredEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return enquiries.filter((item) => {
      const matchesSearch = [
        item.name,
        item.email,
        item.phone,
        item.message,
      ].some((value) => value?.toLowerCase().includes(query));

      const matchesCourse =
        courseFilter === "all" || item.course === courseFilter;

      return matchesSearch && matchesCourse;
    });
  }, [enquiries, search, courseFilter]);

  const deleteEnquiry = async () => {
    if (!deleteTarget) return;

    setDeleting(true);
    setError("");
    setNotice("");

    try {
      const token = sessionStorage.getItem("adminToken");

      if (!token) {
        window.location.replace("/admin/login");
        return;
      }

      const response = await fetch(`${API_URL}/${deleteTarget._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        sessionStorage.removeItem("adminToken");
        sessionStorage.removeItem("adminName");
        window.location.replace("/admin/login");
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to delete enquiry.");
      }

      setEnquiries((previous) =>
        previous.filter((item) => item._id !== deleteTarget._id)
      );

      if (selectedEnquiry?._id === deleteTarget._id) {
        setSelectedEnquiry(null);
      }

      setNotice("Enquiry deleted successfully.");
      setDeleteTarget(null);
    } catch (err) {
      setError(err.message || "Failed to delete enquiry.");
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const statCards = [
    {
      label: "Total Enquiries",
      value: enquiries.length,
      icon: <PeopleAltRoundedIcon />,
      color: "#0F766E",
      bg: "#CCFBF1",
    },
    {
      label: "Full Stack Enquiries",
      value: enquiries.filter((item) => item.course === "full-stack").length,
      icon: <SchoolRoundedIcon />,
      color: "#2563EB",
      bg: "#DBEAFE",
    },
    {
      label: "Filtered Results",
      value: filteredEnquiries.length,
      icon: <SearchRoundedIcon />,
      color: "#7C3AED",
      bg: "#EDE9FE",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 3, md: 6 },
        background:
          "radial-gradient(circle at 0% 0%, #DDF8EF 0%, transparent 32%), linear-gradient(135deg, #F5FAF9, #F1F5FF)",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography
              sx={{
                color: "#0F766E",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 2,
                mb: 1,
              }}
            >
              ELEVATE APPS ACADEMY
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 28, md: 38 },
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "#12302B",
              }}
            >
              Enquiry Dashboard
            </Typography>

            <Typography sx={{ color: "#647A75", mt: 1 }}>
              Manage student enquiries in one place.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              variant="contained"
              startIcon={<RefreshRoundedIcon />}
              onClick={fetchEnquiries}
              disabled={loading}
              sx={{
                borderRadius: 3,
                px: 2.5,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
                background: "linear-gradient(135deg, #059669, #2563EB)",
              }}
            >
              Refresh Enquiries
            </Button>

            <Button
            variant="contained"
            startIcon={<SchoolRoundedIcon />}
            onClick={() => window.location.assign("/admin/courses")}
            sx={{
            borderRadius: 3,
            px: 2.5,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,
            background: "linear-gradient(135deg, #059669, #2563EB)",
            }}
           >
             Courses
             </Button>

            <Button
              variant="outlined"
              color="error"
              startIcon={<LogoutRoundedIcon />}
              onClick={handleLogout}
              sx={{
                borderRadius: 3,
                px: 2.5,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              Logout
            </Button>
          </Stack>
        </Stack>

        {notice && (
          <Alert
            severity="success"
            onClose={() => setNotice("")}
            sx={{ mb: 3, borderRadius: 3 }}
          >
            {notice}
          </Alert>
        )}

        {error && (
          <Alert
            severity="error"
            onClose={() => setError("")}
            sx={{ mb: 3, borderRadius: 3 }}
          >
            {error}
          </Alert>
        )}

        {/* Statistics */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },
            gap: 2.5,
            mb: 4,
          }}
        >
          {statCards.map((card) => (
            <Paper
              key={card.label}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid rgba(15,118,110,0.09)",
                background: "rgba(255,255,255,0.88)",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography sx={{ color: "#6B817B", fontSize: 13 }}>
                    {card.label}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#12302B",
                    }}
                  >
                    {card.value}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 3,
                    color: card.color,
                    background: card.bg,
                    "& svg": { fontSize: 27 },
                  }}
                >
                  {card.icon}
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>

        {/* Search and Filter */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 3 },
            mb: 3,
            borderRadius: 4,
            border: "1px solid rgba(15,118,110,0.09)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Search name, email, phone or message..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ color: "#0F766E" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              select
              fullWidth
              size="small"
              label="Filter by course"
              value={courseFilter}
              onChange={(event) => setCourseFilter(event.target.value)}
            >
              <MenuItem value="all">All Courses</MenuItem>
              {Object.entries(courseNames).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Paper>

        {/* Enquiries List */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(15,118,110,0.09)",
          }}
        >
          <Box sx={{ p: 3, borderBottom: "1px solid #E7EFEC" }}>
            <Typography sx={{ fontWeight: 800, fontSize: 19, color: "#12302B" }}>
              Student Enquiries
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#70847F", mt: 0.5 }}>
              {filteredEnquiries.length} enquiry/enquiries found
            </Typography>
          </Box>

          {loading ? (
            <Stack alignItems="center" spacing={2} sx={{ py: 8 }}>
              <CircularProgress sx={{ color: "#0F766E" }} />
              <Typography color="text.secondary">
                Loading enquiries...
              </Typography>
            </Stack>
          ) : filteredEnquiries.length === 0 ? (
            <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
              <PeopleAltRoundedIcon
                sx={{ fontSize: 45, color: "#A4B8B1", mb: 1 }}
              />
              <Typography sx={{ fontWeight: 700, color: "#12302B" }}>
                No enquiries found
              </Typography>
              <Typography sx={{ mt: 1, color: "#70847F", fontSize: 14 }}>
                Try changing your search or course filter.
              </Typography>
            </Box>
          ) : (
            <Box sx={{ overflowX: "auto" }}>
              <Box sx={{ minWidth: 760 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1.15fr 1.5fr 1.25fr 1.1fr 100px",
                    gap: 2,
                    px: 3,
                    py: 1.8,
                    background: "#F7FAF9",
                  }}
                >
                  {["STUDENT", "CONTACT", "COURSE", "DATE", "ACTIONS"].map(
                    (heading) => (
                      <Typography
                        key={heading}
                        sx={{
                          fontSize: 10,
                          letterSpacing: 1,
                          fontWeight: 800,
                          color: "#7A8F89",
                        }}
                      >
                        {heading}
                      </Typography>
                    )
                  )}
                </Box>

                {filteredEnquiries.map((item) => (
                  <Box
                    key={item._id}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1.15fr 1.5fr 1.25fr 1.1fr 100px",
                      gap: 2,
                      alignItems: "center",
                      px: 3,
                      py: 2.3,
                      borderTop: "1px solid #EDF2F0",
                      transition: "background 0.2s ease",
                      "&:hover": { background: "#FAFDFC" },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 800,
                          color: "#183A33",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontSize: 11, color: "#91A19C", mt: 0.5 }}>
                        ID: {item._id.slice(-6)}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "#526D65",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {item.email}
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: "#7A8F89", mt: 0.5 }}>
                        {item.phone}
                      </Typography>
                    </Box>

                    <Box>
                      <Chip
                        size="small"
                        label={courseNames[item.course] || item.course}
                        sx={{
                          maxWidth: "100%",
                          height: "auto",
                          background: "#E0F2FE",
                          color: "#075985",
                          fontWeight: 700,
                          "& .MuiChip-label": {
                            whiteSpace: "normal",
                            py: 0.6,
                          },
                        }}
                      />
                    </Box>

                    <Typography sx={{ fontSize: 12, color: "#647A75" }}>
                      {formatDate(item.createdAt)}
                    </Typography>

                    <Stack direction="row" spacing={0.5}>
                      <Tooltip title="View details">
                        <IconButton
                          size="small"
                          onClick={() => setSelectedEnquiry(item)}
                          sx={{ color: "#0F766E" }}
                          aria-label="View enquiry details"
                        >
                          <VisibilityRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete enquiry">
                        <IconButton
                          size="small"
                          onClick={() => setDeleteTarget(item)}
                          sx={{ color: "#DC2626" }}
                          aria-label="Delete enquiry"
                        >
                          <DeleteOutlineRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Paper>

        {/* Enquiry Details Dialog */}
        <Dialog
          open={Boolean(selectedEnquiry)}
          onClose={() => setSelectedEnquiry(null)}
          fullWidth
          maxWidth="sm"
        >
          {selectedEnquiry && (
            <>
              <DialogTitle sx={{ fontWeight: 800, color: "#12302B", pr: 6 }}>
                Enquiry Details
                <IconButton
                  onClick={() => setSelectedEnquiry(null)}
                  sx={{ position: "absolute", right: 12, top: 12 }}
                  aria-label="Close details"
                >
                  <CloseRoundedIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent dividers>
                <Stack spacing={2.5} sx={{ py: 1 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      STUDENT NAME
                    </Typography>
                    <Typography fontWeight={700}>
                      {selectedEnquiry.name}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <EmailOutlinedIcon sx={{ color: "#0F766E", mt: 0.2 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        EMAIL ADDRESS
                      </Typography>
                      <Typography sx={{ overflowWrap: "anywhere" }}>
                        {selectedEnquiry.email}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <PhoneOutlinedIcon sx={{ color: "#0F766E", mt: 0.2 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        PHONE NUMBER
                      </Typography>
                      <Typography>{selectedEnquiry.phone}</Typography>
                    </Box>
                  </Stack>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      INTERESTED COURSE
                    </Typography>
                    <Typography fontWeight={600}>
                      {courseNames[selectedEnquiry.course] ||
                        selectedEnquiry.course}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      MESSAGE
                    </Typography>
                    <Typography sx={{ whiteSpace: "pre-wrap", mt: 0.5 }}>
                      {selectedEnquiry.message}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CalendarMonthOutlinedIcon sx={{ color: "#0F766E" }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        SUBMITTED ON
                      </Typography>
                      <Typography sx={{ fontSize: 13 }}>
                        {formatDate(selectedEnquiry.createdAt)}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </DialogContent>

              <DialogActions sx={{ p: 2 }}>
                <Button
                  onClick={() => setSelectedEnquiry(null)}
                  sx={{ textTransform: "none" }}
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Delete Confirmation */}
        <Dialog
          open={Boolean(deleteTarget)}
          onClose={() => !deleting && setDeleteTarget(null)}
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle sx={{ fontWeight: 800 }}>
            Delete this enquiry?
          </DialogTitle>

          <DialogContent>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              This will permanently delete the enquiry from the database.
              This action cannot be undone.
            </Typography>
          </DialogContent>

          <DialogActions sx={{ p: 2 }}>
            <Button
              onClick={() => setDeleteTarget(null)}
              disabled={deleting}
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={deleteEnquiry}
              disabled={deleting}
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AdminEnquiries;