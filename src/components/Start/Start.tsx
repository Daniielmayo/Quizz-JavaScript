import { Button } from "@mui/material";
import { useQuestionStore } from "../../store/questions";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <Button onClick={handleClick} variant="contained" sx={{ marginTop: 10 }}>
      ¡Empezar!
    </Button>
  );
};
