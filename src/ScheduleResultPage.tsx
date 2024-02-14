import React, { useState } from 'react'
import { DUMMY_DATA } from './DUMMY_DATA';

// ! 후보 리스트 (그룹 설정 페이지)
// ! 각 과목 선택
// ! 제외할 과목 리스트 (체크박스로)
// ! 포함할 과목 리스트 (체크박스로)
// ! 현재 학점 표시
// ! 이 요일이 공강이었으면 좋겠다
// ! 이 시간표 즐겨찾기 (하트할수있는 기능)

const CELL_HEIGHT = 30;
const TABLE_WIDTH = 600;
const START_HOUR_PREFIX = 8;
const TOP_PREFIX = CELL_HEIGHT; // 요일 row의 세로 PREFIX
const ScheduleResultPage = () => {
  const [currSelectedIdx, setCurrSelectedIdx] = useState<number>(0)
  const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI',]
  return (
    <>
      <button onClick={() => setCurrSelectedIdx((prev) => prev - 1)}>이전</button>
      <button onClick={() => setCurrSelectedIdx((prev) => prev + 1)}>다음</button>
      <div className='table-wrapper'>
        {DAYS.map((day) => <div className='cell' key={day}>
          {day}
        </div>)}
        {(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const cells = [] as any;
          for (let i = 8; i < 24; i++) {
            DAYS.forEach((day) => {
              cells.push(<div className='cell' key={`${day} ${i}:00`}>
                {`${day} ${i}:00`}
              </div>)
            })
          }
          return cells;
        })()}
        {/* // ! 시간표 렌더링 */}
        {
          DUMMY_DATA[currSelectedIdx].schedule.map((subject, idx) => subject.time.map((time) => {
            const startHour = parseInt(time.start.split(':')[0]);
            const startMin = parseInt(time.start.split(':')[1]);
            const endHour = parseInt(time.end.split(':')[0]);
            const endMin = parseInt(time.end.split(':')[1]);

            const dayIdx = DAYS.indexOf(time.day);
            const width = TABLE_WIDTH / DAYS.length;

            const topValue = (startHour - START_HOUR_PREFIX + startMin / 60) * CELL_HEIGHT + TOP_PREFIX;
            const leftValue = dayIdx * width;

            return <div
              className='subject'
              key={topValue + leftValue}
              style={{
                top: topValue,
                left: leftValue,
                width: width,
                height: ((endHour * 60 + endMin) - (startHour * 60 + startMin)) / 60 * CELL_HEIGHT,
              }}
            >
              {subject.name}
              {startHour}:{startMin} - {endHour}:{endMin}
            </div>
          }))
        }
      </div></>
  )
}

export default ScheduleResultPage