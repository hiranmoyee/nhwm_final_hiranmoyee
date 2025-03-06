// import { alignProperty } from "@mui/material/styles/cssUtils";

const examStyles = {
    container: {
      mt: 5,
      p: 3,
      // border: "1px solid #ddd",
      // borderRadius: 2,
      // backgroundColor: "#fff",
      // boxShadow: 3,
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 3,
    },
    questionNumber: {
    //   fontWeight: "bold",
    fontSize:"12px",
    },
    timerText: {
      color: "",
      fontSize:"12px",
      fontWeight: "light",
    },
    questionBox: {
      p: 2,
    //   borderRadius: 2,
    //   boxShadow: 1,
    //   backgroundColor: "#f9f9f9",
    },
    questionText: {
      fontWeight: "light",
      fontSize: "15px",
      mb: 2,
    },
    buttonBox: {
      fontSize: "8px",
      mt: 2,
      display: "flex",
      gap: 2,
      justifyContent: "flex-end",
      
    },
    footerButtons: {
      display: "flex",
      justifyContent: "space-between",
      mt: 2,
    },
    nextButton: {
    //   backgroundColor: "#6A0DAD",
      "&:hover": {
        backgroundColor: "#f3e5f5",
      },
       fontSize: "12px",
    },
    finishButton: {
    //   color: "white",
    //   backgroundColor: "red",
      "&:hover": {
        backgroundColor: "#f3e5f5",
      },
      fontSize: "12px",
    },
    noQuestionsText: {
      fontWeight: "bold",
      color: "gray",
    },
    additionalInfo: {
      color: "gray",
      fontSize: "14px",
    },
  };
  
  export default examStyles;
  