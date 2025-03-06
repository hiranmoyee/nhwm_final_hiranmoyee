import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        mt: { xs: 6, sm: 10 }, // Reduced margin for smaller screens
      }}
    >
      <Box
        sx={{
          p: { xs: 3, sm: 5 }, // Adjust padding for mobile
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontSize: { xs: "1.8rem", sm: "2.125rem" } }} // Adjust font size
        >
          🎉 Thank You!
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, fontSize: { xs: "1rem", sm: "1.25rem" } }} // Adjust font size
        >
          Your exam has been successfully submitted.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            width: { xs: "100%", sm: "auto" }, // Full-width button on mobile
            py: 1.2, // Increase padding for better tap area
          }}
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ThankYou;
