
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";

const API_URL = "http://localhost:5000/api/admin";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed.");
      }

      sessionStorage.setItem("adminToken", data.token);
      sessionStorage.setItem("adminName", data.admin.name);

      navigate("/admin/enquiries", { replace: true });
    } catch (err) {
      setError(
        err.message || "Unable to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #101827 0%, #182b45 55%, #243d59 100%)",
        px: 2,
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#b8860b",
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            ELEVATE APP ACADEMY
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 800, mt: 1, color: "#14243a" }}
          >
            Admin Login
          </Typography>

          <Typography sx={{ color: "text.secondary", mt: 1, mb: 3 }}>
            Sign in to manage student enquiries.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Admin Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              margin="normal"
              autoComplete="username"
              required
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
              autoComplete="current-password"
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 700,
                textTransform: "none",
                backgroundColor: "#b8860b",
                "&:hover": { backgroundColor: "#946b08" },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login to Dashboard"
              )}
            </Button>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 3,
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Authorized administrators only
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}