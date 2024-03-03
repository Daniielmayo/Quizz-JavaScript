import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { JavaScriptLogo } from "./components/SVG/JavaScriptLogo";
import { Start } from "./components/Start/Start";
import { useQuestionStore } from "./store/questions";
import { Game } from "./components/Game/Game";

function App() {
  const question = useQuestionStore((state) => state.questions);
  console.log(question);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
        {question.length === 0 && <Start />}
        {question.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
