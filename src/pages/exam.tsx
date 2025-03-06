import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { resetExam, saveAnswer } from "../store/examSlice";
import { RootState } from "../redux/store";
import mockQuestions from "../data/mockQuestions";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import examStyles from "../styles/examStyles"; 

const getRandomQuestions = (allQuestions: typeof mockQuestions, count: number) => {
  return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, count);
};

const Exam = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userAnswers = useAppSelector((state: RootState) => state.exam.answers);
  const [questions] = useState(getRandomQuestions(mockQuestions, 10)); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const [localAnswer, setLocalAnswer] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLocalAnswer(userAnswers[currentQuestionIndex + 1]?.answer || "");
  }, [currentQuestionIndex, userAnswers]);

  const handleAnswerChange = (value: string) => {
    setLocalAnswer(value);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const fileName = event.target.files[0].name;
      setLocalAnswer((prev) => (prev ? `${prev}, ${fileName}` : fileName));
    }
  };

  const saveCurrentAnswer = () => {
    if (localAnswer.trim() !== "") {
      const currentQuestion = questions[currentQuestionIndex];
      dispatch(
        saveAnswer({
          questionId: currentQuestionIndex + 1,
          id: currentQuestion.id, // Include the actual question ID
          answer: localAnswer,
        })
      );
      console.log(
        `Saved answer for Question ${currentQuestionIndex + 1} (ID: ${currentQuestion.id}):`,
        localAnswer
      );
    }
  };

  const handleNextQuestion = () => {
    saveCurrentAnswer();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      console.log(`Moved to next question: ${currentQuestionIndex + 2}`);
    }
  };

  const handleFinishExam = () => {
    saveCurrentAnswer();
    console.log("Exam finished. Final user answers:", userAnswers);
    dispatch(resetExam());
    setShowFinishDialog(true);
  };

  const confirmFinishExam = () => {
    console.log("Exam submitted. Navigating to Thank You page.");
    navigate("/thank-you");
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container maxWidth="md" sx={examStyles.container}>
      {/* Header with Question Number (Left) and Timer (Right) */}
      <Box sx={examStyles.headerContainer}>
        <Typography variant="h5" sx={examStyles.questionNumber}>
          Question {currentQuestionIndex + 1}
        </Typography>
        <Typography variant="h6" sx={examStyles.timerText}>
          Time Left: {formatTime()}
        </Typography>
      </Box>

      {/* Question Box */}
      <Box sx={examStyles.questionBox}>
        <Typography variant="h6" sx={examStyles.questionText}>
          {currentQuestion?.questions}
        </Typography>

        {/* MCQ Questions */}
        {currentQuestion?.question_type === "mcq" && (
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <RadioGroup
              value={userAnswers[currentQuestionIndex + 1]?.answer || ""}
              onChange={(e) => {
                dispatch(
                  saveAnswer({
                    questionId: currentQuestionIndex + 1,
                    id: currentQuestion.id,
                    answer: e.target.value,
                  })
                );
              }}
              sx={{ pl: 6 }}
            >
              {(Object.keys(currentQuestion) as Array<keyof typeof currentQuestion>)
                .filter((key) => key.startsWith("choice_"))
                .map((key, index) =>
                  currentQuestion[key] ? (
                    <FormControlLabel
                      key={index}
                      value={currentQuestion[key] as string}
                      control={<Radio sx={{ transform: "scale(0.8)" }} />}
                      label={currentQuestion[key] as string}
                      sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                    />
                  ) : null
                )}
            </RadioGroup>
          </FormControl>
        )}

        {/* Descriptive Questions */}
        {currentQuestion?.question_type === "descriptive" && (
          <>
            <TextField
              fullWidth
              multiline
              rows={4}
              sx={{ mt: 2 }}
              placeholder="Type your answer here"
              value={localAnswer}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
            <Box sx={examStyles.buttonBox}>
              <Button variant="outlined" sx={{ mr: 2, fontSize: "12px" }} onClick={saveCurrentAnswer}>
                Save
              </Button>
              <Button variant="outlined" component="label" sx={{ fontSize: "12px" }}>
                Upload Answer
                <input type="file" hidden onChange={handleFileUpload} />
              </Button>
            </Box>
          </>
        )}
      </Box>

      {/* Navigation Buttons */}
      <Box sx={examStyles.footerButtons}>
        <Button variant="outlined" onClick={handleFinishExam} sx={examStyles.finishButton}>
          Finish Exam
        </Button>
        <Button
          variant="outlined"
          sx={examStyles.nextButton}
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </Button>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={showFinishDialog} onClose={() => setShowFinishDialog(false)}>
        <DialogTitle>Finish Exam?</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to submit the exam?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowFinishDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmFinishExam} color="error">
            Submit Exam
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Exam;
