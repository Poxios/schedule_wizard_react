import React, { useEffect, useMemo, useState } from "react";
import DUMMY_DATA_RAW from "./assets/a.json";

// ! 후보 리스트 (그룹 설정 페이지)
// ! 각 과목 선택
// ! 제외할 과목 리스트 (체크박스로)
// ! 포함할 과목 리스트 (체크박스로)
// ! 현재 학점 표시
// ! 이 요일이 공강이었으면 좋겠다
// ! 이 시간이 비어있으면 좋겠다.
// ! 이 시간표 즐겨찾기 (하트할수있는 기능)

interface ISubject {
  name: string;
  gradeTime: number;
  originalName: string;
  time: {
    day: "MON" | "TUE" | "WED" | "THU" | "FRI";
    start: string;
    end: string;
  }[];
}
const DUMMY_DATA = DUMMY_DATA_RAW as {
  freeDays: ("MON" | "TUE" | "WED" | "THU" | "FRI")[];
  schedule: ISubject[];
  freeTimeBetweenClasses: {
    MON: number;
    TUE: number;
    WED: number;
    THU: number;
    FRI: number;
  };
}[];
function stringToColor(str: string): { r: number; g: number; b: number } {
  // Simple hash function to convert string to a hash number
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash number to RGB values within a dark range
  const r = (hash >> 16) & 0x7f; // 0 to 127
  const g = (hash >> 8) & 0x7f; // 0 to 127
  const b = hash & 0x7f; // 0 to 127

  // Add 50 to each component to make sure the color is not too dark
  return { r: r + 50, g: g + 50, b: b + 50 };
}
function padSingleDigit(num: number): string {
  if (num < 10) {
    return "0" + num;
  } else {
    return num.toString();
  }
}
const CELL_HEIGHT = 30;
const TABLE_WIDTH = 600;
const START_HOUR_PREFIX = 8;
const TOP_PREFIX = CELL_HEIGHT; // 요일 row의 세로 PREFIX
const MIN_GRADE_TIME = 15;
const ScheduleResultPage = () => {
  const [currSelectedIdx, setCurrSelectedIdx] = useState<number>(0);
  const [removedList, setRemovedList] = useState<string[]>(JSON.parse(localStorage.getItem("removedList") || "[]"));
  const [mandatoryList, setMandatoryList] = useState<string[]>(JSON.parse(localStorage.getItem("mandatoryList") || "[]"));
  const [gotList, setGotList] = useState<string[]>(JSON.parse(localStorage.getItem("gotList") || "[]"));
  interface ISubjectCompetition {
    [x: string]: { maxPeople: number; reservedPeople: number };
  }
  const [subjectCompetitionList, setSubjectCompetitionList] = useState<ISubjectCompetition>(
    JSON.parse(localStorage.getItem("subjectCompetitionList") || "{}")
  );

  // ! state 변경될 때마다 localStorage에 저장합니다.
  useEffect(() => {
    localStorage.setItem("removedList", JSON.stringify(removedList));
    setCurrSelectedIdx(0);
  }, [removedList]);

  useEffect(() => {
    localStorage.setItem("mandatoryList", JSON.stringify(mandatoryList));
    setCurrSelectedIdx(0);
  }, [mandatoryList]);

  useEffect(() => {
    localStorage.setItem("gotList", JSON.stringify(gotList));
    setCurrSelectedIdx(0);
  }, [gotList]);

  useEffect(() => {
    localStorage.setItem("subjectCompetitionList", JSON.stringify(subjectCompetitionList));
  }, [subjectCompetitionList]);

  const DAYS = ["MON", "TUE", "WED", "THU", "FRI"];
  // ! 리스트 정의
  const FINAL_LIST = useMemo(() => {
    // DUMMY_DATA의 schedule에서, removedList에 있는 과목들 중 하나라도 있으면 제외
    return DUMMY_DATA.filter(
      // ? 필수 과목
      (e) =>
        mandatoryList.length === 0 ||
        mandatoryList.every((mandatory) => {
          return e.schedule.some((subject) => {
            return subject.originalName === mandatory;
          });
        })
    )
      .filter(
        // gradeTime 합이 minGradeTime 넘는 schedule만 필터링
        (e) => e.schedule.reduce((acc, curr) => acc + curr.gradeTime, 0) >= MIN_GRADE_TIME
      )
      .filter(
        // ? 세부 잡은 과목
        (e) =>
          gotList.length === 0 ||
          e.schedule.some((subject) => {
            return gotList.includes(subject.name);
          })
      )
      .filter(
        // ? 제외 과목
        (e) =>
          removedList.length === 0 ||
          e.schedule.every((subject) => {
            return !removedList.includes(subject.name);
          })
      );
  }, [gotList, mandatoryList, removedList]);
  return (
    <>
      {/* // ! 최종 리스트 curr cursor에서 absolute로 화면 우측에 세로로나열 */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 200,
          width: 400,
          height: "100%",
          overflow: "auto",
          fontSize: 12,
        }}>
        {FINAL_LIST[currSelectedIdx]?.schedule
          .sort(
            (a, b) =>
              subjectCompetitionList[b.name]?.reservedPeople / subjectCompetitionList[b.name]?.maxPeople -
              subjectCompetitionList[a.name]?.reservedPeople / subjectCompetitionList[a.name]?.maxPeople
          )
          .map((e, idx) => (
            <div
              key={idx}
              onContextMenu={() => {
                const maxPeople = prompt("정원입력") || "0";
                const reservedPeople = prompt("예약인원입력") || "0";
                setSubjectCompetitionList((prev) => ({
                  ...prev,
                  [e.name]: { maxPeople: parseInt(maxPeople), reservedPeople: parseInt(reservedPeople) },
                }));
              }}
              style={{
                border: "1px solid black",
                padding: 4,
                margin: 4,
                backgroundColor: gotList.includes(e.name) ? "skyblue" : "white",
              }}>
              <div key={e.name}>
                {e.name}{" "}
                <span style={{ color: "red" }}>
                  {(() => {
                    const competition = subjectCompetitionList[e.name];
                    if (competition) {
                      return `${(competition.reservedPeople / competition.maxPeople).toFixed(2)}`;
                    }
                    return "";
                  })()}
                </span>
              </div>
            </div>
          ))}
      </div>

      <button onClick={() => setCurrSelectedIdx((prev) => prev - 1)}>이전</button>
      <button onClick={() => setCurrSelectedIdx((prev) => prev + 1)}>다음</button>
      <br />
      {/* // ! 필수, 제외 버튼 */}
      <div>
        얘는 전공필수다.
        <br />
        {mandatoryList.map((e) => (
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setMandatoryList((prev) => prev.filter((v) => v !== e));
            }}>
            {e}
          </button>
        ))}
      </div>
      <br />
      <div>
        이 세부 과목은 못잡았다.
        <br />
        {removedList.map((e) => (
          <button
            style={{ backgroundColor: "black", color: "white", marginRight: 4 }}
            onClick={() => {
              setRemovedList((prev) => prev.filter((v) => v !== e));
            }}>
            {e}
          </button>
        ))}
      </div>
      <br />
      <div>
        이 세부 과목은 확정이다.
        <br />
        {gotList.map((e) => (
          <button
            style={{ backgroundColor: "skyblue" }}
            onClick={() => {
              setGotList((prev) => prev.filter((v) => v !== e));
            }}>
            {e}
          </button>
        ))}
      </div>
      <div>{currSelectedIdx}</div>
      <div className="table-wrapper">
        {DAYS.map((day) => (
          <div className="cell" key={day}>
            {day}
          </div>
        ))}
        {(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const cells = [] as any;
          for (let i = 8; i < 24; i++) {
            DAYS.forEach((day) => {
              cells.push(
                <div className="cell" key={`${day} ${i}:00`}>
                  {`${day} ${i}:00`}
                </div>
              );
            });
          }
          return cells;
        })()}
        {/* // ! 시간표 렌더링 */}
        {FINAL_LIST[currSelectedIdx]?.schedule.map((subject, idx) =>
          subject.time.map((time) => {
            const startHour = parseInt(time.start.split(":")[0]);
            const startMin = parseInt(time.start.split(":")[1]);
            const endHour = parseInt(time.end.split(":")[0]);
            const endMin = parseInt(time.end.split(":")[1]);

            const dayIdx = DAYS.indexOf(time.day);
            const width = TABLE_WIDTH / DAYS.length;

            const topValue = (startHour - START_HOUR_PREFIX + startMin / 60) * CELL_HEIGHT + TOP_PREFIX;
            const leftValue = dayIdx * width;

            return (
              <div
                className="subject"
                onDoubleClick={() => setRemovedList((prev) => [...prev, subject.name])}
                onContextMenu={() => {
                  if (mandatoryList.includes(subject.originalName)) {
                    setGotList((prev) => [...prev, subject.name]);
                  }
                  setMandatoryList((prev) => [...prev, subject.originalName]);
                }}
                key={topValue + leftValue}
                style={{
                  top: topValue,
                  left: leftValue,
                  width: width,
                  fontSize: 10,
                  color: "white",
                  height: ((endHour * 60 + endMin - (startHour * 60 + startMin)) / 60) * CELL_HEIGHT,
                  backgroundColor: `rgb(${stringToColor(subject.originalName).r},${stringToColor(subject.originalName).g},${
                    stringToColor(subject.originalName).b
                  })`,
                }}>
                <span style={{ fontSize: 8 }}>{subject.name}</span>
                <br />
                {padSingleDigit(startHour)}:{padSingleDigit(startMin)} - {padSingleDigit(endHour)}:{padSingleDigit(endMin)}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ScheduleResultPage;
