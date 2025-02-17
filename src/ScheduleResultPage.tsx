import React, { useEffect, useMemo, useState } from "react";
import DUMMY_DATA_RAW from "./assets/a.json";
import SUBJECTS_RAW from "./assets/subjects.json";

interface ISubjectSelect {
  groups: {
    name: string;
    gradeTime: number;
    isMandatory: boolean;
    subjects: {
      name: string;
      time: unknown;
    }[];
  }[];
}

interface ISubjectCompetition {
  [x: string]: { maxPeople: number; reservedPeople: number };
}

const SUBJECTS = SUBJECTS_RAW as unknown as ISubjectSelect;
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

interface ISchedule {
  freeDays: ("MON" | "TUE" | "WED" | "THU" | "FRI")[];
  schedule: ICourse[];
  freeTimeBetweenClasses: {
    MON: number;
    TUE: number;
    WED: number;
    THU: number;
    FRI: number;
  };
}

interface ICourse {
  name: string;
  gradeTime: number;
  originalName: string;
  time: {
    day: "MON" | "TUE" | "WED" | "THU" | "FRI";
    start: string;
    end: string;
  }[];
}

const availableSchedules = DUMMY_DATA_RAW as ISchedule[];

function stringToColor(str: string | undefined): { r: number; g: number; b: number } {
  // 입력값이 없는 경우 기본 색상 반환
  if (!str) {
    return { r: 128, g: 128, b: 128 }; // 회색 반환
  }

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

// 시간표 렌더링 관련 상수
const TIME_SLOT_HEIGHT = 30; // 시간대 한 칸의 높이 (px)
const TIMETABLE_WIDTH = 600; // 시간표 전체 너비 (px)
const START_HOUR = 8; // 시작 시간 (24시간제)
const HEADER_HEIGHT = TIME_SLOT_HEIGHT; // 요일 헤더의 높이
const MIN_GRADE_TIME = 9; // 최소 이수 학점

// 시간 문자열을 분 단위로 변환하는 함수 추가
const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// 공강 시간 계산 함수 추가
const calculateFreeTimeBetweenClasses = (schedule: ICourse[]): { [key: string]: number } => {
  const result: { [key: string]: number } = {
    MON: 0,
    TUE: 0,
    WED: 0,
    THU: 0,
    FRI: 0,
  };

  // 각 요일별로 시간 정렬
  const daySchedules: { [key: string]: { start: number; end: number }[] } = {
    MON: [],
    TUE: [],
    WED: [],
    THU: [],
    FRI: [],
  };

  // 각 과목의 시간을 요일별로 분류
  schedule.forEach((course) => {
    course.time.forEach((time) => {
      daySchedules[time.day].push({
        start: timeToMinutes(time.start),
        end: timeToMinutes(time.end),
      });
    });
  });

  // 각 요일별로 공강 시간 계산
  Object.entries(daySchedules).forEach(([day, times]) => {
    if (times.length <= 1) {
      result[day] = 0; // 수업이 1개 이하면 공강 시간 없음
      return;
    }

    // 시작 시간 기준으로 정렬
    times.sort((a, b) => a.start - b.start);

    // 연속된 수업 시간 사이의 공백 계산
    let freeTime = 0;
    for (let i = 0; i < times.length - 1; i++) {
      const gap = times[i + 1].start - times[i].end;
      if (gap > 0) {
        freeTime += gap;
      }
    }

    // 분을 시간으로 변환 (반올림)
    result[day] = Math.round((freeTime / 60) * 10) / 10;
  });

  return result;
};

const ScheduleResultPage = () => {
  const [currSelectedIdx, setCurrSelectedIdx] = useState<number>(0);
  const [minGradeTime, setMinGradeTime] = useState<number>(MIN_GRADE_TIME);
  const [maxGradeTime, setMaxGradeTime] = useState<number>(21);
  const [selectedDays, setSelectedDays] = useState<{ [key: string]: boolean }>({
    MON: false,
    TUE: false,
    WED: false,
    THU: false,
    FRI: false,
  });
  // 과목 그룹 필터 상태 추가
  const [selectedGroups, setSelectedGroups] = useState<{ [key: string]: boolean }>({});

  // 과목 상태 관리
  const [subjectStatus, setSubjectStatus] = useState<{
    [key: string]: "success" | "fail" | null;
  }>({});

  const [subjectCompetitionList, setSubjectCompetitionList] = useState<ISubjectCompetition>(
    JSON.parse(localStorage.getItem("subjectCompetitionList") || "{}")
  );

  // 공강 요일 필터 상태 추가
  const [freeDays, setFreeDays] = useState<{ [key: string]: boolean }>({
    MON: false,
    TUE: false,
    WED: false,
    THU: false,
    FRI: false,
  });

  useEffect(() => {
    localStorage.setItem("subjectCompetitionList", JSON.stringify(subjectCompetitionList));
  }, [subjectCompetitionList]);

  const DAYS = ["MON", "TUE", "WED", "THU", "FRI"];

  // 필수과목 목록 생성 (각 과목의 모든 분반 이름 포함)
  const mandatorySubjectNames = useMemo(() => {
    const mandatoryGroups = SUBJECTS.groups.filter((group) => group.isMandatory);
    console.log(
      "필수과목 그룹:",
      mandatoryGroups.map((g) => g.name)
    );

    return mandatoryGroups.map((group) => ({
      groupName: group.name,
      sectionNames: group.subjects.map((subject) => subject.name),
    }));
  }, []);

  // 과목별 학점 정보 생성
  const subjectGradeMap = useMemo(() => {
    const gradeMap: { [key: string]: number } = {};
    SUBJECTS.groups.forEach((group) => {
      group.subjects.forEach((subject) => {
        gradeMap[subject.name] = group.gradeTime;
      });
    });
    return gradeMap;
  }, []);

  // 시간표의 총 학점 계산 함수
  const calculateTotalGradeTime = (schedule: ICourse[]) => {
    return schedule.reduce((sum, course) => sum + (subjectGradeMap[course.name] || 0), 0);
  };

  const filteredSchedules = useMemo(() => {
    console.log("전체 시간표 개수:", availableSchedules.length);

    // 필수과목이 포함된 시간표만 필터링
    const result = availableSchedules
      .map((schedule) => ({
        ...schedule,
        freeTimeBetweenClasses: calculateFreeTimeBetweenClasses(schedule.schedule),
      }))
      .filter((schedule) => {
        // 필수과목 체크
        const hasMandatorySubjects = mandatorySubjectNames.every((mandatoryGroup) => {
          return mandatoryGroup.sectionNames.some((sectionName) => schedule.schedule.some((course) => course.name === sectionName));
        });

        if (!hasMandatorySubjects) return false;

        // 학점 체크
        const totalGradeTime = calculateTotalGradeTime(schedule.schedule);
        console.log("시간표 총 학점:", totalGradeTime, "최소 학점:", minGradeTime, "최대 학점:", maxGradeTime);
        if (totalGradeTime < minGradeTime || totalGradeTime > maxGradeTime) return false;

        // "못잡았어요" 체크된 과목이 포함된 시간표 제외
        const hasFailedSubject = schedule.schedule.some((course) => subjectStatus[course.name] === "fail");
        if (hasFailedSubject) return false;

        // "잡았어요" 체크된 과목이 포함된 시간표만 포함
        const successSubjects = Object.entries(subjectStatus)
          .filter(([_, status]) => status === "success")
          .map(([name]) => name);

        if (successSubjects.length > 0) {
          const hasAllSuccessSubjects = successSubjects.every(subjectName =>
            schedule.schedule.some(course => course.name === subjectName)
          );
          if (!hasAllSuccessSubjects) return false;
        }

        // 선택된 요일 체크
        const hasSelectedDayClasses = Object.entries(selectedDays).every(([day, isSelected]) => {
          if (!isSelected) return true;
          return schedule.schedule.some((course) => course.time.some((time) => time.day === day));
        });

        if (!hasSelectedDayClasses) return false;

        // 공강 요일 체크
        const hasSelectedFreeDays = Object.entries(freeDays).every(([day, isSelected]) => {
          if (!isSelected) return true;
          return schedule.freeDays.includes(day as "MON" | "TUE" | "WED" | "THU" | "FRI");
        });

        if (!hasSelectedFreeDays) return false;

        // 선택된 과목 그룹 체크
        const selectedGroupNames = Object.entries(selectedGroups)
          .filter(([_, isSelected]) => isSelected)
          .map(([groupName]) => groupName);

        if (selectedGroupNames.length > 0) {
          const hasSelectedGroups = schedule.schedule.some((course) => {
            return selectedGroupNames.some((groupName) => {
              const group = SUBJECTS.groups.find((g) => g.name === groupName);
              return group?.subjects.some((subject) => subject.name === course.name);
            });
          });
          if (!hasSelectedGroups) return false;
        }

        return true;
      });

    console.log("필터링 후 시간표 개수:", result.length);

    // 정렬 로직 추가
    result.sort((a, b) => {
      // 1. 공강 요일 수 비교 (내림차순)
      const freeDaysCountDiff = b.freeDays.length - a.freeDays.length;
      if (freeDaysCountDiff !== 0) return freeDaysCountDiff;

      // 2. 공강 시간 총합 비교 (오름차순)
      const getTotalFreeTime = (schedule: typeof a) => Object.values(schedule.freeTimeBetweenClasses).reduce((sum, time) => sum + time, 0);

      return getTotalFreeTime(a) - getTotalFreeTime(b);
    });

    if (result.length > 0) {
      const firstSchedule = result[0];
      console.log("첫 번째 시간표 상세 정보:", {
        공강일: firstSchedule.freeDays,
        공강일수: firstSchedule.freeDays.length,
        과목수: firstSchedule.schedule.length,
        총학점: calculateTotalGradeTime(firstSchedule.schedule),
        요일별공강시간: firstSchedule.freeTimeBetweenClasses,
        공강시간총합: Object.values(firstSchedule.freeTimeBetweenClasses).reduce((sum, time) => sum + time, 0),
        과목목록: firstSchedule.schedule.map((course) => ({
          이름: course.name,
          학점: subjectGradeMap[course.name] || 0,
          시간: course.time.map((t) => `${t.day} ${t.start}-${t.end}`),
        })),
      });
    }

    return result;
  }, [
    mandatorySubjectNames,
    calculateTotalGradeTime,
    minGradeTime,
    maxGradeTime,
    selectedDays,
    freeDays,
    selectedGroups,
    subjectStatus,
    subjectGradeMap,
  ]);

  // 필터링 결과가 변경될 때마다 currSelectedIdx 초기화
  useEffect(() => {
    setCurrSelectedIdx(0);
  }, [filteredSchedules.length]);

  // 현재 시간표의 과목들을 그룹별로 정리
  const currentScheduleSubjects = useMemo(() => {
    if (!filteredSchedules[currSelectedIdx]) return [];

    const currentSchedule = filteredSchedules[currSelectedIdx].schedule;
    return currentSchedule.map((course) => ({
      name: course.name,
      gradeTime: subjectGradeMap[course.name] || 0,
      isMandatory: SUBJECTS.groups.some((group) => group.isMandatory && group.subjects.some((subject) => subject.name === course.name)),
    }));
  }, [filteredSchedules, currSelectedIdx, subjectGradeMap]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        padding: "20px",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}>
      {/* 좌측 과목 목록 패널 */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          height: "fit-content",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          position: "sticky",
          top: "20px",
          width: "100%",
          minWidth: 0,
        }}>
        <h3 style={{ marginTop: 0, marginBottom: "20px", fontSize: "18px", color: "#333" }}>현재 시간표 과목</h3>
        <div style={{ maxHeight: "250px", overflowY: "auto", marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "20px" }}>
          {currentScheduleSubjects.map((subject, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                borderBottom: "1px solid #eee",
                gap: "10px",
              }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  {subject.name}
                  <span style={{ fontSize: "12px", color: "#666" }}>({subject.gradeTime}학점)</span>
                  {subject.isMandatory && (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "white",
                        backgroundColor: "#dc3545",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}>
                      필수
                    </span>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    cursor: "pointer",
                    color: "#198754",
                  }}>
                  <input
                    type="checkbox"
                    checked={subjectStatus[subject.name] === "success"}
                    onChange={() =>
                      setSubjectStatus((prev) => ({
                        ...prev,
                        [subject.name]: prev[subject.name] === "success" ? null : "success",
                      }))
                    }
                  />
                  잡았어요
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    cursor: "pointer",
                    color: "#dc3545",
                  }}>
                  <input
                    type="checkbox"
                    checked={subjectStatus[subject.name] === "fail"}
                    onChange={() =>
                      setSubjectStatus((prev) => ({
                        ...prev,
                        [subject.name]: prev[subject.name] === "fail" ? null : "fail",
                      }))
                    }
                  />
                  못잡았어요
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* 못잡은 과목 목록 영역 */}
        {Object.entries(subjectStatus).some(([_, status]) => status === "fail") && (
          <div style={{ marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", color: "#dc3545", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 12C7.4 12 7 11.6 7 11C7 10.4 7.4 10 8 10C8.6 10 9 10.4 9 11C9 11.6 8.6 12 8 12ZM9 9H7V4H9V9Z"
                  fill="#dc3545"
                />
              </svg>
              못잡은 과목 목록
            </h4>
            <div style={{ maxHeight: "150px", overflowY: "auto" }}>
              {Object.entries(subjectStatus)
                .filter(([_, status]) => status === "fail")
                .map(([subjectName], idx) => {
                  const group = SUBJECTS.groups.find((g) => g.subjects.some((s) => s.name === subjectName));
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px",
                        borderBottom: "1px solid #eee",
                        gap: "10px",
                      }}>
                      <div style={{ flex: 1, fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                        {subjectName}
                        <span style={{ fontSize: "12px", color: "#666" }}>({subjectGradeMap[subjectName] || 0}학점)</span>
                        {group?.isMandatory && (
                          <span
                            style={{
                              fontSize: "11px",
                              color: "white",
                              backgroundColor: "#dc3545",
                              padding: "2px 6px",
                              borderRadius: "4px",
                            }}>
                            필수
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          setSubjectStatus((prev) => ({
                            ...prev,
                            [subjectName]: null,
                          }))
                        }
                        style={{
                          padding: "4px 8px",
                          fontSize: "12px",
                          color: "#dc3545",
                          border: "1px solid #dc3545",
                          borderRadius: "4px",
                          background: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.7 1.3C14.3 0.9 13.7 0.9 13.3 1.3L8 6.6L2.7 1.3C2.3 0.9 1.7 0.9 1.3 1.3C0.9 1.7 0.9 2.3 1.3 2.7L6.6 8L1.3 13.3C0.9 13.7 0.9 14.3 1.3 14.7C1.5 14.9 1.7 15 2 15C2.3 15 2.5 14.9 2.7 14.7L8 9.4L13.3 14.7C13.5 14.9 13.8 15 14 15C14.2 15 14.5 14.9 14.7 14.7C15.1 14.3 15.1 13.7 14.7 13.3L9.4 8L14.7 2.7C15.1 2.3 15.1 1.7 14.7 1.3Z"
                            fill="#dc3545"
                          />
                        </svg>
                        해제
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* 과목 그룹 필터 영역 추가 */}
        <div>
          <h4 style={{ fontSize: "16px", color: "#333", marginBottom: "12px" }}>과목 그룹 필터</h4>
          <div style={{ maxHeight: "250px", overflowY: "auto" }}>
            {SUBJECTS.groups.map((group, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                  borderBottom: "1px solid #eee",
                  gap: "10px",
                }}>
                <div style={{ flex: 1, fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  {group.name}
                  <span style={{ fontSize: "12px", color: "#666" }}>({group.gradeTime}학점)</span>
                  {group.isMandatory && (
                    <span style={{ fontSize: "11px", color: "white", backgroundColor: "#dc3545", padding: "2px 6px", borderRadius: "4px" }}>
                      필수
                    </span>
                  )}
                </div>
                <label style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", cursor: "pointer", color: "#0d6efd" }}>
                  <input
                    type="checkbox"
                    checked={selectedGroups[group.name] || false}
                    onChange={(e) =>
                      setSelectedGroups((prev) => ({
                        ...prev,
                        [group.name]: e.target.checked,
                      }))
                    }
                  />
                  포함
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 중앙 시간표 영역 */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: "100%",
          minWidth: 0,
          overflow: "hidden",
        }}>
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => setCurrSelectedIdx((prev) => Math.max(0, prev - 1))}
            disabled={currSelectedIdx <= 0}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              cursor: "pointer",
            }}>
            이전
          </button>
          <button
            onClick={() => setCurrSelectedIdx((prev) => Math.min(filteredSchedules.length - 1, prev + 1))}
            disabled={currSelectedIdx >= filteredSchedules.length - 1}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              cursor: "pointer",
            }}>
            다음
          </button>
          <span style={{ marginLeft: "10px", alignSelf: "center" }}>
            {filteredSchedules.length > 0 ? `${currSelectedIdx + 1} / ${filteredSchedules.length}` : "가능한 시간표 없음"}
          </span>
        </div>

        <div
          className="table-wrapper"
          style={{
            position: "relative",
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "#f8f9fa",
          }}>
          {/* 요일 헤더 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              borderBottom: "1px solid #dee2e6",
              backgroundColor: "white",
            }}>
            {DAYS.map((day) => (
              <div
                key={day}
                style={{
                  padding: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                  borderRight: day !== "FRI" ? "1px solid #dee2e6" : "none",
                }}>
                {day}
              </div>
            ))}
          </div>
          {/* 시간표 그리드 */}
          <div
            style={{
              position: "relative",
              minHeight: "800px",
              backgroundColor: "white",
            }}>
            {/* 시간 그리드 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}>
              {DAYS.map((day, index) => (
                <div
                  key={day}
                  style={{
                    borderRight: index < 4 ? "1px solid #dee2e6" : "none",
                    height: "100%",
                  }}
                />
              ))}
            </div>
            {/* 시간 표시 */}
            {(() => {
              const cells: React.ReactNode[] = [];
              for (let i = START_HOUR; i < 24; i++) {
                DAYS.forEach((day) => {
                  cells.push(
                    <div
                      key={`${day} ${i}:00`}
                      style={{
                        position: "absolute",
                        left: `${(DAYS.indexOf(day) * 100) / 5}%`,
                        top: (i - START_HOUR) * TIME_SLOT_HEIGHT,
                        width: `${100 / 5}%`,
                        height: TIME_SLOT_HEIGHT,
                        borderBottom: "1px solid #dee2e6",
                        fontSize: "12px",
                        color: "#666",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {`${padSingleDigit(i)}:00`}
                    </div>
                  );
                });
              }
              return cells;
            })()}
            {filteredSchedules[currSelectedIdx]?.schedule.map((subject, idx) =>
              subject.time.map((time, timeIdx) => {
                if (!subject.name || !time || !time.day || !time.start || !time.end) {
                  console.warn("Invalid subject data:", subject);
                  return null;
                }

                const startHour = parseInt(time.start.split(":")[0]);
                const startMin = parseInt(time.start.split(":")[1]);
                const endHour = parseInt(time.end.split(":")[0]);
                const endMin = parseInt(time.end.split(":")[1]);

                const dayIdx = DAYS.indexOf(time.day);
                const left = `${(dayIdx * 100) / 5}%`;
                const width = `${100 / 5}%`;
                const top = (startHour - START_HOUR + startMin / 60) * TIME_SLOT_HEIGHT + HEADER_HEIGHT;
                const duration = (endHour * 60 + endMin - (startHour * 60 + startMin)) / 60;
                const height = duration * TIME_SLOT_HEIGHT - 2;

                if (idx === 0 && timeIdx === 0) {
                  console.log("과목 시간 계산:", {
                    과목명: subject.name,
                    시간: time,
                    시작: `${startHour}:${startMin}`,
                    종료: `${endHour}:${endMin}`,
                    요일인덱스: dayIdx,
                    너비: width,
                    상단위치: top,
                    좌측위치: left,
                    높이: height,
                    원본이름: subject.originalName,
                  });
                }

                // 필수 과목 여부 확인
                const isMandatory =
                  SUBJECTS.groups.find((group) => group.isMandatory && group.subjects.some((s) => s.name === subject.name)) !== undefined;

                return (
                  <div
                    className="subject"
                    key={`${subject.name}-${time.day}-${time.start}`}
                    style={{
                      position: "absolute",
                      top,
                      left,
                      width: `calc(${width} - 2px)`,
                      height,
                      margin: "1px",
                      padding: "4px",
                      fontSize: "10px",
                      color: "white",
                      backgroundColor: isMandatory ? "#dc3545" : "#495057",
                      borderRadius: "4px",
                      zIndex: 1,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      opacity: 0.9,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                      e.currentTarget.style.transform = "scale(1)";
                    }}>
                    <span style={{ fontSize: 8, fontWeight: "bold" }}>{subject.name}</span>
                    <br />
                    {padSingleDigit(startHour)}:{padSingleDigit(startMin)} - {padSingleDigit(endHour)}:{padSingleDigit(endMin)}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* 우측 Control Panel */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          height: "fit-content",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          position: "sticky",
          top: "20px",
          width: "100%",
          minWidth: 0,
        }}>
        <h3 style={{ marginTop: 0, marginBottom: "20px", fontSize: "18px", color: "#333" }}>필터 설정</h3>

        {/* 현재 시간표 정보 */}
        <div style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
          <div style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>현재 시간표 정보</div>
          <div style={{ fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>
              총 학점:{" "}
              {filteredSchedules[currSelectedIdx]?.schedule ? calculateTotalGradeTime(filteredSchedules[currSelectedIdx].schedule) : 0}
              학점
            </div>

            {/* 공강 요일 */}
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "4px", color: "#198754" }}>공강 요일</div>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                {filteredSchedules[currSelectedIdx]?.freeDays.length ? (
                  filteredSchedules[currSelectedIdx].freeDays.map((day) => (
                    <span
                      key={day}
                      style={{
                        padding: "2px 6px",
                        backgroundColor: "#198754",
                        color: "white",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}>
                      {day}
                    </span>
                  ))
                ) : (
                  <span style={{ color: "#666", fontSize: "12px" }}>없음</span>
                )}
              </div>
            </div>

            {/* 요일별 공강 시간 */}
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "4px", color: "#0d6efd" }}>요일별 공강 시간</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {filteredSchedules[currSelectedIdx]?.freeTimeBetweenClasses ? (
                  <>
                    {Object.entries(filteredSchedules[currSelectedIdx].freeTimeBetweenClasses).map(([day, time]) => (
                      <div key={day} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                        <span>{day}</span>
                        <span style={{ color: time > 0 ? "#0d6efd" : "#666" }}>{time > 0 ? `${time}시간` : "없음"}</span>
                      </div>
                    ))}
                    <div style={{ 
                      marginTop: "4px", 
                      paddingTop: "4px", 
                      borderTop: "1px solid #dee2e6", 
                      display: "flex", 
                      justifyContent: "space-between", 
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      <span>총합</span>
                      <span style={{ color: "#0d6efd" }}>
                        {Object.values(filteredSchedules[currSelectedIdx].freeTimeBetweenClasses).reduce((sum, time) => sum + time, 0)}시간
                      </span>
                    </div>
                  </>
                ) : (
                  <span style={{ color: "#666", fontSize: "12px" }}>정보 없음</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 학점 범위 입력 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>학점 범위</label>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input
              type="number"
              value={minGradeTime}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 0) {
                  setMinGradeTime(value);
                }
              }}
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                outline: "none",
              }}
              placeholder="최소 학점"
            />
            <span style={{ fontSize: "14px", color: "#666" }}>~</span>
            <input
              type="number"
              value={maxGradeTime}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 0) {
                  setMaxGradeTime(value);
                }
              }}
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "14px",
                outline: "none",
              }}
              placeholder="최대 학점"
            />
          </div>
        </div>

        {/* 수업 필수 요일 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "12px", fontWeight: "bold", fontSize: "14px" }}>수업 필수 요일</label>
          {DAYS.map((day) => (
            <div key={day} style={{ marginBottom: "10px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px" }}>
                <input
                  type="checkbox"
                  checked={selectedDays[day]}
                  onChange={(e) =>
                    setSelectedDays((prev) => ({
                      ...prev,
                      [day]: e.target.checked,
                    }))
                  }
                  style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                {day}
              </label>
            </div>
          ))}
        </div>

        {/* 공강 요일 */}
        <div>
          <label style={{ display: "block", marginBottom: "12px", fontWeight: "bold", fontSize: "14px", color: "#198754" }}>
            공강 요일
          </label>
          {DAYS.map((day) => (
            <div key={day} style={{ marginBottom: "10px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: freeDays[day] ? "#198754" : "inherit",
                }}>
                <input
                  type="checkbox"
                  checked={freeDays[day]}
                  onChange={(e) =>
                    setFreeDays((prev) => ({
                      ...prev,
                      [day]: e.target.checked,
                    }))
                  }
                  style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                {day}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleResultPage;
