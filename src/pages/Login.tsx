import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../redux/authSlice"; // Import action
import loginStyles from "../styles/loginStyles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleStartExam = () => {
    if (validateForm()) {
      console.log("Dispatching user email:", email);
      dispatch(setUserEmail(email)); // Save email in Redux
      navigate("/exam");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ ...loginStyles.container, px: { xs: 2, sm: 4 } }}>
      <Box sx={{ ...loginStyles.loginBox, p: { xs: 3, sm: 4 }, width: "100%" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, pb: 3, textAlign: "center" }}>
          Customer Login
        </Typography>

        <TextField
          fullWidth
          label="Email address"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        />

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
          sx={{ fontSize: { xs: "14px", sm: "16px" }, pb: 2 }}
        />

        <Button fullWidth variant="contained" sx={{ ...loginStyles.startExamButton, py: 1.5, fontSize: { xs: "14px", sm: "16px" } }} onClick={handleStartExam}>
          Start Exam
        </Button>
      </Box>

      <Typography variant="body2" color="textSecondary" sx={{ ...loginStyles.footerText, textAlign: "center", mt: 2, fontSize: { xs: "12px", sm: "14px" } }}>
        Privacy policy / Terms and conditions
      </Typography>
    </Container>
  );
};

export default Login;
