import { Button } from "@mui/material";
import { useQuestionData } from "../../Hooks/useQuestionData";
import { useQuestionStore } from "../../store/questions";

export const Footer = () => {
  const { correct, incorrect, unAnswered } = useQuestionData();
  const reset = useQuestionStore((state) => state.reset);
  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅${correct} Correctas - ❌ ${incorrect} Incorrectas - ❓ ${unAnswered} Sin responder`}</strong>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => reset()}>Resetear Juego</Button>
      </div>
    </footer>
  );
};
