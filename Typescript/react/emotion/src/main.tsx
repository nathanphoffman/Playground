import styled from "@emotion/styled";
import { createRoot } from "react-dom/client";

const Box = styled.div<{ big?: boolean }>`
  padding: 1rem;
  background: hotpink;
  font-size: ${(p) => (p.big ? "2rem" : "1rem")};
`;

createRoot(document.getElementById("root")!).render(
  <>
    <Box>Hello, Emotion (styled)</Box>
    <Box big>Same component, a prop changes the CSS</Box>
  </>,
);
