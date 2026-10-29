import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const API_URL = "http://localhost:5000/api/courses";

const emptyForm = {
  number: "",
  title: "",
  description: "",
  level: "Beginner",
  duration: "",
  color: "#059669",
  image: "",
  technologies: "",
  syllabus: "",
  outcomes: "",
  project: "",
  prerequisites: "",
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2.5,
    backgroundColor: "#FFFFFF",
  },
};

const arrayToText = (value) =>
  Array.isArray(value) ? value.join("\n") : "";

const textToArray = (value) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const handleAuthError = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminName");
    window.location.replace("/admin/login");
  };

  const fetchCourses = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to load courses.");
      }

      setCourses(result.data || []);
    } catch (err) {
      setError(
        err.message ||
          "Unable to load courses. Please check the backend server."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const openAddDialog = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      number: String(courses.length + 1).padStart(2, "0"),
    });
    setError("");
    setNotice("");
    setDialogOpen(true);
  };

  const openEditDialog = (course) => {
    setEditingId(course._id);

    setForm({
      number: course.number || "",
      title: course.title || "",
      description: course.description || "",
      level: course.level || "Beginner",
      duration: course.duration || "",
      color: course.color || "#059669",
      image: course.image || "",
      technologies: arrayToText(course.technologies),
      syllabus: arrayToText(course.syllabus),
      outcomes: arrayToText(course.outcomes),
      project: course.project || "",
      prerequisites: course.prerequisites || "",
    });

    setError("");
    setNotice("");
    setDialogOpen(true);
  };

  const closeDialog = () => {
    if (saving) return;
    setDialogOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const submitCourse = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      handleAuthError();
      return;
    }

    const payload = {
      number: form.number.trim(),
      title: form.title.trim(),
      description: form.description.trim(),
      level: form.level.trim(),
      duration: form.duration.trim(),
      color: form.color.trim() || "#059669",
      image: form.image.trim(),
      technologies: textToArray(form.technologies),
      syllabus: textToArray(form.syllabus),
      outcomes: textToArray(form.outcomes),
      project: form.project.trim(),
      prerequisites: form.prerequisites.trim(),
    };

    if (
      !payload.number ||
      !payload.title ||
      !payload.description ||
      !payload.level ||
      !payload.duration
    ) {
      setError(
        "Please fill in number, title, description, level and duration."
      );
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(
        editingId ? `${API_URL}/${editingId}` : API_URL,
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 401 || response.status === 403) {
        handleAuthError();
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to save course.");
      }

      setDialogOpen(false);
      setEditingId(null);
      setForm(emptyForm);

      setNotice(
        editingId
          ? "Course updated successfully."
          : "Course added successfully."
      );

      await fetchCourses();
    } catch (err) {
      setError(err.message || "Failed to save course.");
    } finally {
      setSaving(false);
    }
  };

  const deleteCourse = async (course) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${course.title}"?`
    );

    if (!confirmed) return;

    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      handleAuthError();
      return;
    }

    setDeletingId(course._id);
    setError("");
    setNotice("");

    try {
      const response = await fetch(`${API_URL}/${course._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        handleAuthError();
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to delete course.");
      }

      setCourses((previous) =>
        previous.filter((item) => item._id !== course._id)
      );

      setNotice("Course deleted successfully.");
    } catch (err) {
      setError(err.message || "Failed to delete course.");
    } finally {
      setDeletingId("");
    }
  };

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
       <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  sx={{
    mb: 4,
    justifyContent: "space-between",
    alignItems: {
      xs: "flex-start",
      sm: "center",
    },
  }}
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
              Course Management
            </Typography>

            <Typography sx={{ color: "#647A75", mt: 1 }}>
              Add, update and manage your academy courses.
            </Typography>
          </Box>

          <Stack
  direction="row"
  spacing={1.5}
  sx={{
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 1.5,
  }}
>
            <Button
              variant="outlined"
              startIcon={<RefreshRoundedIcon />}
              onClick={fetchCourses}
              disabled={loading}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "#FFFFFF",
              }}
            >
              Refresh
            </Button>

            <Button
              variant="contained"
              startIcon={<AddRoundedIcon />}
              onClick={openAddDialog}
              sx={{
                borderRadius: 3,
                px: 2.5,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
                background: "linear-gradient(135deg, #059669, #2563EB)",
              }}
            >
              Add New Course
            </Button>

            <Button
              variant="outlined"
              color="error"
              startIcon={<LogoutRoundedIcon />}
              onClick={handleAuthError}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "#FFFFFF",
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

        {error && !dialogOpen && (
          <Alert
            severity="error"
            onClose={() => setError("")}
            sx={{ mb: 3, borderRadius: 3 }}
          >
            {error}
          </Alert>
        )}

        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 4,
            border: "1px solid rgba(15,118,110,0.09)",
          }}
        >
          <Stack
  direction="row"
  spacing={2}
  sx={{
    alignItems: "center",
  }}
>
            <Box
              sx={{
                width: 54,
                height: 54,
                display: "grid",
                placeItems: "center",
                borderRadius: 3,
                background: "#CCFBF1",
                color: "#0F766E",
              }}
            >
              <SchoolRoundedIcon sx={{ fontSize: 29 }} />
            </Box>

            <Box>
              <Typography sx={{ color: "#647A75", fontSize: 13 }}>
                Total Courses
              </Typography>
              <Typography
                sx={{ fontSize: 30, fontWeight: 800, color: "#12302B" }}
              >
                {courses.length}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: 2.5,
          }}
        >
          {loading ? (
            <Box
              sx={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "center",
                py: 8,
              }}
            >
              <CircularProgress sx={{ color: "#0F766E" }} />
            </Box>
          ) : courses.length === 0 ? (
            <Paper
              elevation={0}
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                p: 6,
                borderRadius: 4,
              }}
            >
              <SchoolRoundedIcon
                sx={{ fontSize: 46, color: "#A4B8B1", mb: 1 }}
              />
              <Typography fontWeight={800} color="#12302B">
                No courses available
              </Typography>
              <Typography sx={{ color: "#70847F", mt: 1 }}>
                Select Add New Course to create your first course.
              </Typography>
            </Paper>
          ) : (
            courses.map((course) => (
              <Paper
                key={course._id}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid rgba(15,118,110,0.12)",
                  backgroundColor: "#FFFFFF",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 35px rgba(18,48,43,0.08)",
                  },
                }}
              >
                <Stack
  direction="row"
  spacing={1}
  sx={{
    alignItems: "flex-start",
    justifyContent: "space-between",
  }}
>
                  <Chip
                    label={`COURSE ${course.number}`}
                    size="small"
                    sx={{
                      backgroundColor: `${course.color || "#059669"}18`,
                      color: course.color || "#059669",
                      fontWeight: 800,
                    }}
                  />

                  <Stack direction="row" spacing={0.5}>
                    <IconButton
                      aria-label={`Edit ${course.title}`}
                      title="Edit course"
                      size="small"
                      onClick={() => openEditDialog(course)}
                      sx={{ color: "#2563EB" }}
                    >
                      <EditRoundedIcon />
                    </IconButton>

                    <IconButton
                      aria-label={`Delete ${course.title}`}
                      title="Delete course"
                      size="small"
                      disabled={deletingId === course._id}
                      onClick={() => deleteCourse(course)}
                      sx={{ color: "#DC2626" }}
                    >
                      {deletingId === course._id ? (
                        <CircularProgress size={20} />
                      ) : (
                        <DeleteOutlineRoundedIcon />
                      )}
                    </IconButton>
                  </Stack>
                </Stack>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#12302B",
                    overflowWrap: "anywhere",
                  }}
                >
                  {course.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    minHeight: 58,
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "#647A75",
                    overflowWrap: "anywhere",
                  }}
                >
                  {course.description}
                </Typography>

                <Stack
  direction="row"
  spacing={1}
  useFlexGap
  sx={{
    mt: 2,
    flexWrap: "wrap",
  }}
>
                  <Chip
                    size="small"
                    label={course.level}
                    variant="outlined"
                  />
                  <Chip
                    size="small"
                    label={course.duration}
                    variant="outlined"
                  />
                </Stack>

                <Typography
                  sx={{
                    mt: 2,
                    mb: 1,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#647A75",
                  }}
                >
                  TECHNOLOGIES
                </Typography>

                <Stack
  direction="row"
  spacing={0.7}
  useFlexGap
  sx={{
    flexWrap: "wrap",
  }}
>
                  {(course.technologies || []).map((technology, index) => (
                    <Chip
                      key={`${technology}-${index}`}
                      size="small"
                      label={technology}
                      sx={{
                        mb: 0.5,
                        backgroundColor: "#F0FDF4",
                        color: "#166534",
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            ))
          )}
        </Box>

        <Dialog
          open={dialogOpen}
          onClose={closeDialog}
          fullWidth
          maxWidth="md"
        >
          <Box component="form" onSubmit={submitCourse}>
            <DialogTitle
              sx={{
                fontWeight: 800,
                color: "#12302B",
                pr: 7,
              }}
            >
              {editingId ? "Edit Course" : "Add New Course"}

              <IconButton
                onClick={closeDialog}
                disabled={saving}
                aria-label="Close course form"
                sx={{ position: "absolute", right: 12, top: 12 }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5} sx={{ py: 1 }}>
                {error && (
                  <Alert severity="error" onClose={() => setError("")}>
                    {error}
                  </Alert>
                )}

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 2fr",
                    },
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Course Number"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    placeholder="05"
                    required
                    fullWidth
                    sx={fieldSx}
                  />

                  <TextField
                    label="Course Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Full Stack Development"
                    required
                    fullWidth
                    sx={fieldSx}
                  />
                </Box>

                <TextField
                  label="Description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  minRows={2}
                  sx={fieldSx}
                />

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
                    select
                    label="Level"
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    fullWidth
                    sx={fieldSx}
                  >
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                    <MenuItem value="All Levels">All Levels</MenuItem>
                  </TextField>

                  <TextField
                    label="Duration"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="4 Months"
                    required
                    fullWidth
                    sx={fieldSx}
                  />
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 2fr",
                    },
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Theme Color"
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    placeholder="#059669"
                    fullWidth
                    sx={fieldSx}
                  />

                  <TextField
                    label="Image Path"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="/images/course-example.jpg"
                    fullWidth
                    helperText="Enter a valid image path or URL used by your frontend."
                    sx={fieldSx}
                  />
                </Box>

                <TextField
                  label="Technologies"
                  name="technologies"
                  value={form.technologies}
                  onChange={handleChange}
                  placeholder={"React\nNode.js\nMongoDB"}
                  multiline
                  minRows={2}
                  fullWidth
                  helperText="Enter one technology per line."
                  sx={fieldSx}
                />

                <TextField
                  label="Syllabus"
                  name="syllabus"
                  value={form.syllabus}
                  onChange={handleChange}
                  placeholder={"HTML basics\nCSS layouts\nReact components"}
                  multiline
                  minRows={4}
                  fullWidth
                  helperText="Enter one syllabus topic per line."
                  sx={fieldSx}
                />

                <TextField
                  label="Learning Outcomes"
                  name="outcomes"
                  value={form.outcomes}
                  onChange={handleChange}
                  placeholder={"Build responsive websites\nCreate reusable components"}
                  multiline
                  minRows={3}
                  fullWidth
                  helperText="Enter one learning outcome per line."
                  sx={fieldSx}
                />

                <TextField
                  label="Project"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  multiline
                  minRows={2}
                  fullWidth
                  sx={fieldSx}
                />

                <TextField
                  label="Prerequisites"
                  name="prerequisites"
                  value={form.prerequisites}
                  onChange={handleChange}
                  multiline
                  minRows={2}
                  fullWidth
                  sx={fieldSx}
                />
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2.5, gap: 1 }}>
              <Button
                onClick={closeDialog}
                disabled={saving}
                sx={{
                  textTransform: "none",
                  color: "#647A75",
                }}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                disabled={saving}
                startIcon={
                  saving ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : editingId ? (
                    <EditRoundedIcon />
                  ) : (
                    <AddRoundedIcon />
                  )
                }
                sx={{
                  px: 3,
                  borderRadius: 2.5,
                  textTransform: "none",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #059669, #2563EB)",
                }}
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Course"
                    : "Save Course"}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AdminCourses;
