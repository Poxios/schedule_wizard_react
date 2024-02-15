import styled from "@emotion/styled";
import { Checkbox, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Add, Delete, Create, Clear, Check } from "@mui/icons-material";

const EditSubjectTitleInput = styled(TextField)`
  padding: 0;
  & input {
    padding: 8px;
  }
`;

interface ISubjectGroupBoxProps {
  groupName: string; // Unique, 이거로 Redux DB에서 조회함.
}

const SubjectGroupBox = (props: ISubjectGroupBoxProps) => {
  const [isGroupTitleEditMode, setIsGroupTitleEditMode] = useState<boolean>(false);
  return (
    <Stack>
      {/* // ? Nav */}
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "pink",
          border: "1px solid black",
        }}>
        {isGroupTitleEditMode ? (
          <>
            <Grid xs={3}>
              <EditSubjectTitleInput />
            </Grid>
            <Grid xs={1}>
              <IconButton onClick={() => setIsGroupTitleEditMode(false)} aria-label="edit group title done">
                <Check />
              </IconButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid xs={3}>
              <Typography variant="subtitle1">{props.groupName}</Typography>
            </Grid>
            <Grid xs={1}>
              <IconButton onClick={() => setIsGroupTitleEditMode(true)} aria-label="edit group title">
                <Create fontSize="small" />
              </IconButton>
            </Grid>
          </>
        )}
        {/* // $ 그룹 추가 원할 때 IconButton */}
        <IconButton aria-label="add subject" sx={{ marginLeft: "auto" }}>
          <Add fontSize="small" />
        </IconButton>
        {/* // $ 그룹 삭제 원할 때 IconButton */}
        <IconButton aria-label="delete subject">
          <Delete fontSize="small" />
        </IconButton>
      </Grid>
      {/* // ? 과목들 */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <Grid
          key={`subjectwrapperkey${idx}`}
          container
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "blue",
            border: "1px solid black",
          }}>
          {/* // $ 과목 필수 체크박스 */}
          <Grid xs={1} display={"flex"}>
            <Checkbox size="small" />
          </Grid>
          {/* // $ 과목 제외 체크박스 */}
          <Grid xs={1}>
            <Checkbox size="small" />
          </Grid>
          {/* // $ 과목 이름 */}
          <Grid xs={4}>
            <Typography fontSize={"small"}>SUBJECT_NAME_HERE {idx}</Typography>
          </Grid>
          {/* // $ 과목 강의시간 */}
          <Grid xs={5}>
            <Typography fontSize={"small"}>SUBJECT_TIME_HERE</Typography>
          </Grid>
          <Grid xs={1}>
            <IconButton>
              <Clear fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};

export default SubjectGroupBox;
