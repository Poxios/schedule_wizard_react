import styled from "@emotion/styled";
import { Box, Checkbox, Grid, IconButton, Input, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "pink",
        }}>
        {isGroupTitleEditMode ? (
          <>
            <EditSubjectTitleInput />
            <IconButton onClick={() => setIsGroupTitleEditMode(false)} aria-label="edit group title">
              <Check />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="subtitle1">{props.groupName}</Typography>
            {/* // $ 그룹 이름 수정 원할때 IconButton */}
            <IconButton onClick={() => setIsGroupTitleEditMode(true)} aria-label="edit group title">
              <Create />
            </IconButton>
          </>
        )}

        {/* // $ 그룹 추가 원할 때 IconButton */}
        <IconButton aria-label="add subject" sx={{ marginLeft: "auto" }}>
          <Add />
        </IconButton>
        {/* // $ 그룹 삭제 원할 때 IconButton */}
        <IconButton aria-label="delete subject">
          <Delete />
        </IconButton>
      </Box>
      {/* // ? 과목들 */}
      {Array.from({ length: 3 }).map((e, idx) => (
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
          <Grid xs={1}>
            <Checkbox />
          </Grid>
          {/* // $ 과목 제외 체크박스 */}
          <Grid xs={1}>
            <Checkbox />
          </Grid>
          {/* // $ 과목 이름 */}
          <Grid xs={4}>
            <Typography>SUBJECT_NAME_HERE {idx}</Typography>
          </Grid>
          {/* // $ 과목 강의시간 */}
          <Grid xs={5}>
            <Typography>SUBJECT_TIME_HERE</Typography>
          </Grid>
          <Grid xs={1}>
            <IconButton>
              <Clear />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};

export default SubjectGroupBox;
