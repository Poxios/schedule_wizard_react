import styled from "@emotion/styled";
import { Box, Checkbox, FormControlLabel, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add, Delete, Create, Clear, Check } from "@mui/icons-material";
import { ICandidateSubjectGroup } from "./ScheduleTypes";
import { produce } from "immer";
import { SetterOrUpdater } from "recoil";

const EditSubjectTitleInput = styled(TextField)`
  padding: 0;
  & input {
    padding: 8px;
  }
`;

const IncludeExcludeFormCheckbox = styled(FormControlLabel)`
  & span {
    font-size: x-small;
    padding: 0;
  }
`;

interface ISubjectGroupBoxProps {
  subjectGroupElement: ICandidateSubjectGroup;
  subjectGroupIdx: number;
  setSubjectGroupWithImmer: (callback: (draft: ICandidateSubjectGroup[]) => void) => void;
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
          border: "1px solid black",
        }}>
        <Box sx={{ width: 16 }} />
        {isGroupTitleEditMode ? (
          <>
            <EditSubjectTitleInput
              value={props.subjectGroupElement.name}
              onChange={(e) =>
                props.setSubjectGroupWithImmer((draft) => {
                  draft[props.subjectGroupIdx].name = e.target.value;
                })
              }
              onBlur={() => setIsGroupTitleEditMode(false)}
            />
            <IconButton onClick={() => setIsGroupTitleEditMode(false)} aria-label="edit group title done">
              <Check />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="subtitle1">{props.subjectGroupElement.name}</Typography>
            <IconButton onClick={() => setIsGroupTitleEditMode(true)} aria-label="edit group title">
              <Create fontSize="small" />
            </IconButton>
          </>
        )}
        {/* // $ 학점 넣는 칸 */}
        <EditSubjectTitleInput
          value={props.subjectGroupElement.gradeTime}
          sx={{ marginLeft: "auto", width: "24px" }}
          onChange={(e) =>
            props.setSubjectGroupWithImmer((draft) => {
              const value = parseInt(e.target.value);
              if (value > 5) return;
              draft[props.subjectGroupIdx].gradeTime = value || 0;
            })
          }
        />
        <Typography variant="subtitle1">학점</Typography>
        <Box sx={{ width: 8 }} />
        {/* // $ 그룹 추가 원할 때 IconButton */}
        <IconButton
          aria-label="add subject"
          onClick={() => {
            props.setSubjectGroupWithImmer((draft) => {
              draft[props.subjectGroupIdx].subjects.push({
                name: "새로운 과목",
                time: [
                  {
                    day: "MON",
                    start: "00:00",
                    end: "00:30",
                  },
                ],
              });
            });
          }}>
          <Add fontSize="small" />
        </IconButton>
        {/* // $ 그룹 삭제 원할 때 IconButton */}
        <IconButton aria-label="delete subject">
          <Delete fontSize="small" />
        </IconButton>
      </Box>
      {/* // ? 과목들 */}
      {props.subjectGroupElement.subjects.map((item, subjectIdx) => (
        <Grid
          key={`subjectwrapperkey${subjectIdx}`}
          container
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "blue",
            border: "1px solid black",
          }}>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            {/* // $ 과목 필수 체크박스 */}
            <Checkbox size="small" />
            {/* // $ 과목 제외 체크박스 */}
            <Checkbox size="small" />
          </Grid>
          {/* // $ 과목 이름 */}
          <Grid item xs={4}>
            <Typography fontSize={"small"}>{item.name}</Typography>
          </Grid>
          {/* // $ 과목 강의시간 */}
          <Grid item xs={4}>
            <Typography fontSize={"small"}>
              {item.time.map((e, timeIdx) => (
                <React.Fragment key={`${subjectIdx}${timeIdx}timekeyIndex`}>
                  {`${e.day} ${e.start} ~ ${e.end}`}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {/* // $ 과목 삭제 버튼 */}
            <IconButton
              onClick={() => {
                props.setSubjectGroupWithImmer((draft) => {
                  draft.splice(subjectIdx, 1);
                });
              }}>
              <Clear fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};

export default SubjectGroupBox;
