import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserAnswersType = Record<number, string>;

interface ExamState {
  answers: UserAnswersType;
}

const initialState: ExamState = {
  answers: {},
};

const examSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
        saveAnswer: (state, action: PayloadAction<{ questionId: number; answer: string }>) => {
            state.answers[action.payload.questionId] = action.payload.answer;
            console.log("Redux Store Updated:", JSON.stringify(state.answers, null, 2));
          },
          resetExam: () => initialState,
    },
  });
  

export const { saveAnswer,resetExam } = examSlice.actions;
export default examSlice.reducer;
