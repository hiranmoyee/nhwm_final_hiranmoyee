import { Box, Grid, Container, Typography, Button, CardContent } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import heroImg1 from "../assets/exam_hero.svg";
import heroImg2 from "../assets/student_study.svg";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import StarIcon from "@mui/icons-material/Star";
import { FaChartBar, FaBrain, FaCheckCircle } from "react-icons/fa";

const iconStyle = {
  width: 40,
  height: 40,
  backgroundColor: "#F0F0F0",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "12px",
};

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 2), // Adjusted padding for mobile
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const Image = styled("img")({
  width: "100%",
  maxWidth: "450px",
  height: "auto",
  objectFit: "contain",
});

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Responsive check

  return (
    <Container maxWidth="lg">
      {/* Section 1: Content Left, Image Right */}
      <Section>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant={isMobile ? "h5" : "h3"} 
              fontWeight="bold" 
              marginBottom="10px"
              textAlign={isMobile ? "center" : "left"}
            >
              Your Ultimate Online Exam Hub
            </Typography>
            <Box color="textSecondary">
              <p>1. Master expert-designed questions.</p>
              <p>2. Elevate knowledge with premium content.</p>
              <p>3. Sharpen skills with targeted practice.</p>
            </Box>


            <Box display="flex" gap={2} mt={2} justifyContent={isMobile ? "center" : "left"}>
              {[
                {
                  label: "Download on the",
                  store: "App Store",
                  imgSrc: "/apple-store.png",
                  link: "https://www.apple.com/app-store/",
                  bgColor: "black",
                  hoverColor: "#333",
                },
                {
                  label: "Get it on",
                  store: "Google Play",
                  imgSrc: "/google-play.png",
                  link: "https://play.google.com/store",
                  bgColor: "#4A90E2", // Google Play blue
                  hoverColor: "#357AE8",
                },
              ].map(({ label, store, imgSrc, link, bgColor, hoverColor }, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    backgroundColor: bgColor,
                    color: "white",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "180px", // Ensures same width
                    minHeight: "60px", // Ensures same height
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": { backgroundColor: hoverColor },
                  }}
                  startIcon={
                    <img src={imgSrc} alt={store} style={{ width: 20, height: 20 }} />
                  }
                  onClick={() => window.open(link, "_blank")}
                >
                  {label} <br /> {store}
                </Button>
              ))}
            </Box>


            <Box sx={{ mt: 4 }}>
              <Grid
                container
                spacing={2}
                justifyContent={isMobile ? "center" : "left"}
              >
                {[
                  {
                    icon: <CloudDownloadIcon sx={{ fontSize: 24, color: "green" }} />,
                    value: "5 Million",
                    label: "Downloads",
                  },
                  {
                    icon: (
                      <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
                        <StarIcon sx={{ fontSize: 20, color: "orange" }} />
                        <StarIcon sx={{ fontSize: 20, color: "orange" }} />
                        <StarIcon sx={{ fontSize: 20, color: "orange" }} />
                      </Box>
                    ),
                    value: "4.8 (965k)",
                    label: "Client Reviews",
                  },
                ].map(({ icon, value, label }, index) => (
                  <Grid item xs={6} sm="auto" key={index}>
                    <CardContent
                      sx={{
                        textAlign: "center",
                        width: "140px", // Ensures equal width
                        minHeight: "100px", // Ensures equal height
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                      }}
                    >
                      {icon}
                      <Typography fontWeight="light" fontSize="12px">
                        {value}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {label}
                      </Typography>
                    </CardContent>
                  </Grid>
                ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Image src={heroImg1} alt="Online Exam" />
            </ImageContainer>
          </Grid>
        </Grid>
      </Section>

      {/* Section 2: Image Left, Content Right */}
      <Section>
        <Grid container spacing={4} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{ display: "flex", justifyContent: "center" }} 
            order={{ xs: 2, md: 1 }}
          >
            <Image src={heroImg2} alt="Analyze Results" />
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography 
              fontWeight="bold" 
              fontSize={isMobile ? "10px" : "12px"} 
              marginBottom="10px"
              textAlign={isMobile ? "center" : "left"}
            >
              Unlock Actionable Insights
            </Typography>

            <Typography 
              variant={isMobile ? "h5" : "h3"} 
              fontWeight="bold"
              textAlign={isMobile ? "center" : "left"}
            >
              Get Detailed Analysis
            </Typography>

            <Typography 
              variant="body1" 
              color="textSecondary" 
              component="div"
              textAlign={isMobile ? "left" : "left"}
            >
              <Box display="flex" alignItems="center" justifyContent={isMobile ? "center" : "left"}>
                <Box sx={iconStyle}>
                  <FaChartBar size={20} color="#673AB7" />
                </Box>
                Access comprehensive performance analytics.
              </Box>
              <Box display="flex" alignItems="center" justifyContent={isMobile ? "center" : "left"} mt={2}>
                <Box sx={iconStyle}>
                  <FaBrain size={20} color="#FF5722" />
                </Box>
                Receive AI-driven improvement recommendations.
              </Box>
              <Box display="flex" alignItems="center" justifyContent={isMobile ? "center" : "left"} mt={2}>
                <Box sx={iconStyle}>
                  <FaCheckCircle size={20} color="#4CAF50" />
                </Box>
                Track progress with actionable insights.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Hero;
