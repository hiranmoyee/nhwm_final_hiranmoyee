import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnswerPayload {
  questionId: number;
  id: number;
  answer: string;
}

interface ExamState {
  answers: { [key: number]: { id: number; answer: string } };
}

const initialState: ExamState = {
  answers: {},
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<AnswerPayload>) => {
      const { questionId, id, answer } = action.payload;
      state.answers[questionId] = { id, answer };
    },
    resetExam: (state) => {
      state.answers = {};
    },
  },
});

export const { saveAnswer, resetExam } = examSlice.actions;
export default examSlice.reducer;
