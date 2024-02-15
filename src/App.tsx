import { Button, Container } from "@mui/material";
import "./App.css";
import ScheduleResultPage from "./ScheduleResultPage";
import SubjectGroupBox from "./SubjectGroupBox";

// ! 각 Subject Group별로 Color을 설정할 수 있어야 함.
// ! 과목 박스 color 선택 가능하게 (최초 color은 랜덤으로 (이것도 선택지 중에 하나))
function App() {
  return (
    <Container maxWidth="sm">
      <ScheduleResultPage />
      {/* TODO: Redux 연계 필요 */}
      {Array.from({ length: 3 }).map((e, idx) => (
        <SubjectGroupBox key={idx} groupName="프로그래밍" />
      ))}
    </Container>
  );
}

export default App;
