const loginStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    
    },
    loginBox: {
      width: "100%",
      maxWidth: "500px",
      maxHeight: "700px",
      padding: "30px",
      borderRadius: "10px",
      backgroundColor: "white",
    //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontSize : "10px",
      marginTop : "0px",
      position: "relative",
      top: "-40px", // Moves it 20px above
    
    },
    startExamButton: {
      mt: 2,
      backgroundColor: "#4A90E2", 
      color: "white",
      "&:hover": { backgroundColor: "#4A90E2" },
      
    },
    footerText: {
        position: "absolute",
        bottom: "0",  // Stick to the bottom
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: "100%",
        backgroundColor: "white", // Light gray background
        padding: "50px 0", // Add padding for better spacing
        height:"100px",
      }
      
      
  };
  
  export default loginStyles;
  